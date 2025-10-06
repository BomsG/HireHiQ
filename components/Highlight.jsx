"use client";
import React from "react";
import { FiActivity } from "react-icons/fi";
import {
  IoShieldCheckmarkOutline,
  IoBarChart,
  IoBriefcaseOutline,
} from "react-icons/io5";
const features = [
  {
    title: "Real-time AI Feedback",
    description:
      "Get instant feedback on your responses, helping you improve with each practice session.",
    icon: <FiActivity className="w-6 h-6 " />,
    glowColor: "#00FFF7",
  },
  {
    title: "Bias-Free Evaluation",
    description:
      "Our AI evaluates your skills objectively, focusing solely on your capabilities and potential.",
    icon: <IoShieldCheckmarkOutline className="w-6 h-6 " />,
    glowColor: "#7F00FF",
  },
  {
    title: "Skill Benchmarking",
    description:
      "Compare your performance against industry standards and track your improvement over time.",
    icon: <IoBarChart className="w-6 h-6 " />,
    glowColor: "#00FFF7",
  },
  {
    title: "Portfolio Builder",
    description:
      "Automatically generate a portfolio based on your interview performances and skills.",
    icon: <IoBriefcaseOutline className="w-6 h-6 " />,
    glowColor: "#7F00FF",
  },
];
const FeatureCard = ({ title, description, icon, glowColor, index }) => {
  return (
    <div
      className="relative bg-[#101010] border border-white/10 rounded-xl p-6 hover:border-[#7F00FF]/50 transition-all duration-300 group"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute inset-0 rounded-xl opacity-20 blur-xl"
          style={{
            background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
const FeatureHighlights = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(#7F00FF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Supercharge Your Interview Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Our AI-powered platform provides everything you need to excel in
            tech interviews.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeatureHighlights;
