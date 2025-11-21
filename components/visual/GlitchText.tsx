// ファイルパス: components/visual/GlitchText.tsx
"use client";

import { motion, Variants } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const glitchVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    glitch: {
      x: [0, -2, 2, -1, 0], 
      // 修正点: 'skew' を 'skewX' に変更して型エラーを解消
      skewX: [0, 10, -10, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      textShadow: [
        "0px 0px 0px rgba(0,0,0,0)",
        "-2px 0px 0px rgba(45, 212, 191, 0.7)",
        "2px 0px 0px rgba(255, 0, 0, 0.7)", 
        "0px 0px 0px rgba(0,0,0,0)"
      ],
      transition: {
        duration: 0.2,
        times: [0, 0.2, 0.4, 0.6, 1],
        repeat: Infinity,
        repeatDelay: 5, 
      }
    }
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial="hidden"
      animate={["visible", "glitch"]}
      variants={glitchVariants}
    >
      {text}
    </motion.div>
  );
};