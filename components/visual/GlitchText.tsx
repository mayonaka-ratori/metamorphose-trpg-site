// ファイルパス: components/visual/GlitchText.tsx
"use client";

import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  // アニメーションの定義
  const glitchVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    glitch: {
      x: [0, -2, 2, -1, 0], // 左右に激しく揺れる
      skew: [0, 10, -10, 0], // 斜めに歪む
      opacity: [1, 0.8, 1, 0.9, 1],
      textShadow: [
        "0px 0px 0px rgba(0,0,0,0)",
        "-2px 0px 0px rgba(45, 212, 191, 0.7)", // teal
        "2px 0px 0px rgba(255, 0, 0, 0.7)",   // red (warning)
        "0px 0px 0px rgba(0,0,0,0)"
      ],
      transition: {
        duration: 0.2,
        times: [0, 0.2, 0.4, 0.6, 1],
        repeat: Infinity,
        repeatDelay: 5 + Math.random() * 5, // 5〜10秒おきにランダム発動
      }
    }
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial="hidden"
      animate={["visible", "glitch"]} // 出現アニメーション + グリッチ待機
      variants={glitchVariants}
    >
      {text}
    </motion.div>
  );
};