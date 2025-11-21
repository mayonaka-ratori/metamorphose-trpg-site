// ファイルパス: components/visual/LiquidBackground.tsx
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --- シェーダー定義 (GLSL) ---
// 頂点シェーダー: 3D空間の座標を画面上の位置に変換するだけの基本的なもの
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// フラグメントシェーダー: ピクセルごとの色を決定する（ここが映像の本体）
// ノイズ関数を使って、有機的でドロドロした動き（Domain Warping）を作り出します
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // 擬似乱数生成
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  // ノイズ関数
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // FBM (Fractal Brownian Motion): 複雑な雲模様を作る
  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 3; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 st = vUv;
    st.x *= uResolution.x / uResolution.y;

    // 動きの計算 (Domain Warping)
    // 座標を歪ませて、液体のような流れを作ります
    vec2 q = vec2(0.);
    q.x = fbm(st + 0.1 * uTime);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
    r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);

    float f = fbm(st + r);

    // 色の合成
    // ベースは黒(0,0,0)、アクセントに暗いティール(0.0, 0.2, 0.2)
    // fの値によって、細胞の核のようなハイライトを入れる
    vec3 color = mix(vec3(0.05, 0.05, 0.05), vec3(0.0, 0.25, 0.25), clamp((f*f)*4.0, 0.0, 1.0));
    color = mix(color, vec3(0.0, 0.1, 0.1), clamp(length(q), 0.0, 1.0));
    color = mix(color, vec3(0.9, 1.0, 1.0), clamp(length(r.x), 0.0, 1.0) * 0.1); // わずかな光沢

    // 四隅を暗くする（ビネット効果）
    float dist = distance(vUv, vec2(0.5));
    color *= smoothstep(0.8, 0.2, dist);

    gl_FragColor = vec4(color, 1.0);
  }
`;

const Fluid = () => {
  // シェーダーマテリアルへの参照
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // ユニフォーム変数（シェーダーに渡すパラメータ）
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) }, // 初期値
    }),
    []
  );

  // 毎フレーム実行されるループ
  useFrame((state) => {
    if (materialRef.current) {
      // 時間を経過させる
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      // 画面サイズを渡す（リサイズ対応）
      materialRef.current.uniforms.uResolution.value.set(state.size.width, state.size.height);
    }
  });

  return (
    <mesh>
      {/* 画面いっぱいの平面を作成 */}
      <planeGeometry args={[20, 10]} /> {/* カメラ距離に応じて調整 */}
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Fluid />
      </Canvas>
      {/* シェーダーの上に薄い黒を被せて、文字の可読性を確保 */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
    </div>
  );
};