export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#000000]">
      <div
        className="absolute w-[800px] h-[800px] -top-[30%] left-[20%] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "pulse-slow 8s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] top-[50%] right-[10%] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "pulse-slow 10s ease-in-out 2s infinite alternate",
        }}
      />
    </div>
  );
}
