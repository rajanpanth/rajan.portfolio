"use client";

import { motion } from "framer-motion";

export default function ProfileAvatar() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative"
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl shadow-purple-500/20">
        <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
          <img
            src="/avatars/profile.jpg"
            alt="Rajan Pantha"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-[3px] border-[#0a0a0a]" />
    </motion.div>
  );
}
