"use client";

import AnimatedBackground from "./AnimatedBackground";
import DeveloperPortfolio from "./DeveloperPortfolio";
import ProfileAvatar from "./ProfileAvatar";
import ProfileOverview from "./ProfileOverview";
import HomeFooter from "@/components/layout/HomeFooter";

export default function HomePage() {
  return (
    <>
      <style jsx global>{`
        @keyframes pulse-slow {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(20px, -10px);
          }
        }
      `}</style>

      <AnimatedBackground />

      <main className="min-h-screen flex flex-col">
        <div className="relative w-full h-44 sm:h-52 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/covers/final.png')",
              backgroundSize: "cover",
              backgroundPosition: "25% 88%",
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-2xl w-full mx-auto px-6 -mt-16 relative z-10">
          <ProfileAvatar />
          <ProfileOverview />
          <DeveloperPortfolio />
        </div>

        <div className="flex-grow" />
        <HomeFooter />
      </main>
    </>
  );
}
