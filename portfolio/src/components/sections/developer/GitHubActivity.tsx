"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function GitHubActivity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the right end on load
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full sm:mt-24 mt-16 mb-20"
    >
      <div className="flex items-end gap-3 mb-8 px-2">
        <h2 className="font-serif italic text-3xl text-foreground">
          GitHub Contributions
        </h2>
        <span className="font-light text-2xl text-muted">#</span>
      </div>
      
      <div className="relative group rounded-3xl border border-zinc-800/60 bg-[#0a0a0a] p-4 sm:p-8 overflow-hidden hover:border-zinc-700/80 transition-all duration-500 shadow-2xl shadow-green-900/5 ring-1 ring-white/5">
        {/* Subtle background glow */}
        <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        <div className="absolute inset-y-0 -left-px w-px h-full bg-gradient-to-b from-transparent via-green-500/10 to-transparent" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 relative z-10 w-full px-2">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-green-500 group-hover:border-green-500/30 transition-all duration-500">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.955-.265 1.98-.398 2.995-.403 1.015.005 2.04.138 2.995.403 2.29-1.552 3.295-1.23 3.295-1.23.65 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
            </div>
            <div>
              <h3 className="text-zinc-200 font-medium tracking-wide text-lg">rajanpanth</h3>
              <p className="text-zinc-500 text-xs font-mono mt-0.5 uppercase tracking-widest">Real-time sync</p>
            </div>
          </div>
          <a href="https://github.com/rajanpanth" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-green-400 hover:border-green-500/30 hover:bg-zinc-800/50 transition-all font-mono tracking-widest uppercase shadow-sm">
            <span>View Profile</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div ref={scrollRef} className="relative z-10 w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent custom-scrollbar">
          <div className="min-w-[800px] w-full pr-4 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src="https://ghchart.rshah.org/rajanpanth"
              alt="Rajan's GitHub Contribution Graph"
              loading="lazy"
              decoding="async"
              className="w-full h-auto drop-shadow-[0_0_12px_rgba(34,197,94,0.1)]"
              style={{
                imageRendering: "pixelated",
                filter: "invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.1)"
              }}
            />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #27272a;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #3f3f46;
        }
      `}} />
    </motion.section>
  );
}
