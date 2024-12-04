import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";


export default function TextAnim() {
  const baseText = "Stephen J. Lu" as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span className="">
      <motion.span>{displayText}</motion.span>      
    </span>
  );
}
