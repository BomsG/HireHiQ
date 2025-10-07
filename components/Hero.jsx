"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import Image from "next/image";
import AI from "../public/ai.png";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      const elements = heroRef.current.querySelectorAll(".holographic-element");
      elements.forEach((el) => {
        el.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#101010]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7F00FF]/20 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#00FFF7]/20 filter blur-[80px]"></div>

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #7F00FF 1px, transparent 1px), linear-gradient(to bottom, #7F00FF 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Holographic elements */}
        <div className="holographic-element absolute top-1/4 left-1/5 w-24 h-24 border border-[#00FFF7]/30 rounded-lg transform rotate-12 transition-transform duration-300 ease-out"></div>
        <div className="holographic-element absolute bottom-1/3 right-1/4 w-32 h-32 border border-[#7F00FF]/30 rounded-lg transform -rotate-12 transition-transform duration-300 ease-out"></div>
        <div className="holographic-element absolute top-2/3 left-1/3 w-16 h-16 border border-[#00FFF7]/30 rounded-full transition-transform duration-300 ease-out"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Smarter Interviews.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F00FF] to-[#00FFF7]">
                Fairer Opportunities.
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              AI-powered mock interviews and recruiter insights for global tech
              talent. Prepare smarter, perform better, and showcase your true
              potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/interview"
                className="bg-gradient-to-r from-[#7F00FF] to-[#7F00FF] hover:from-[#7F00FF] hover:to-[#00FFF7] text-white font-medium px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center group"
              >
                Start Interview
                <FaCaretRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="border border-[#7F00FF]/50 text-white font-medium px-8 py-3 rounded-md hover:bg-[#7F00FF]/10 transition-colors flex items-center justify-center"
              >
                Book Demo
              </Link>
            </div>
          </div>
          <Image src={AI} alt="Ai-image" className="animate-pulse w-[70%]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
