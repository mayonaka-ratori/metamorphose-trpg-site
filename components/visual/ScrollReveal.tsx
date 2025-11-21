// ファイルパス: components/visual/ScrollReveal.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: "w-full" | "w-fit";
  className?: string; // ← 追加: 任意のクラス名を受け取れるように型定義を追加
}

export const ScrollReveal = ({ children, delay = 0, width = "w-full", className = "" }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      // ↓ 修正: width と className を結合して適用するように変更
      className={`${width} ${className}`}
    >
      {children}
    </motion.div>
  );
};