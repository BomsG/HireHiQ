"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React, { useState } from "react";
import { FaDownload, FaRegStopCircle } from "react-icons/fa";
import { FaBook, FaMicrophoneLines, FaPause } from "react-icons/fa6";
import { IoIosHelpCircle, IoIosSettings, IoMdSend } from "react-icons/io";
const InterviewPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };
  return (
    <>
      <Nav />
      <div className="bg-[#101010] text-white min-h-screen">
        {/* Background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#06e84e]/10 filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#00FFF7]/10 filter blur-[80px]"></div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(#06e84e 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 pt-20 mt-20 pb-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left panel - AI Interviewer */}
            <div className="lg:w-2/3">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden h-full">
                {/* Video area */}
                <div className="relative aspect-video w-full bg-[#101010]">
                  {/* AI Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-4 border-[#06e84e] flex items-center justify-center relative">
                      <div
                        className="absolute inset-0 rounded-full border-t-4 border-[#00FFF7] animate-spin"
                        style={{
                          animationDuration: "3s",
                        }}
                      ></div>
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#06e84e]/30 to-[#00FFF7]/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#06e84e] to-[#00FFF7]">
                            HireHiQ AI
                          </div>
                          <div className="text-xs text-[#00FFF7] mt-2 animate-pulse">
                            {isRecording ? "Listening..." : "Ready"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Audio visualizer */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center gap-1 px-8">
                    {Array.from({
                      length: 50,
                    }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-[#06e84e] to-[#00FFF7]"
                        style={{
                          height: isRecording
                            ? `${Math.random() * 100}%`
                            : "10%",
                          transition: "height 0.1s ease-in-out",
                          opacity: isRecording ? 0.8 : 0.3,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                {/* Interview content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h1 className="text-2xl font-bold">
                        Frontend Developer Interview
                      </h1>
                      <p className="text-gray-400">
                        Technical + Behavioral Assessment
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">
                        Question {currentQuestion} of 10
                      </span>
                      <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#06e84e] to-[#00FFF7]"
                          style={{
                            width: `${currentQuestion * 10}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#06e84e]/20 flex items-center justify-center mr-4 mt-1">
                        <span className="text-[#06e84e]">Q</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">
                          Can you explain how React's virtual DOM works and why
                          it's beneficial?
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          Take your time to provide a comprehensive answer.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Response area */}
                  <div className="border border-white/10 rounded-lg p-4 mb-6">
                    <textarea
                      className="w-full bg-transparent resize-none outline-none min-h-[100px]"
                      placeholder="Type your answer here, or use the microphone to respond verbally..."
                    ></textarea>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                      <div className="flex gap-3">
                        <button
                          onClick={toggleRecording}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isRecording
                              ? "bg-red-500/20 text-red-500"
                              : "bg-[#06e84e]/20 text-[#06e84e] hover:bg-[#06e84e]/30"
                          } transition-colors`}
                        >
                          {isRecording ? (
                            <FaPause size={20} />
                          ) : (
                            <FaMicrophoneLines size={20} />
                          )}
                        </button>
                        {isRecording && (
                          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors">
                            <FaRegStopCircle size={20} />
                          </button>
                        )}
                      </div>
                      <button className="bg-gradient-to-r from-[#06e84e] to-[#00FFF7] text-white px-4 py-2 rounded-md flex items-center">
                        <IoMdSend size={16} className="mr-2" />
                        Submit Answer
                      </button>
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-2">
                      <button className="bg-white/5 hover:bg-white/10 text-white px-3 py-1 rounded flex items-center text-sm">
                        <FaBook size={14} className="mr-2" />
                        View Notes
                      </button>
                      <button className="bg-white/5 hover:bg-white/10 text-white px-3 py-1 rounded flex items-center text-sm">
                        <IoIosHelpCircle size={14} className="mr-2" />
                        Help
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-white/5 hover:bg-white/10 text-white px-3 py-1 rounded text-sm">
                        Previous
                      </button>
                      <button className="bg-[#06e84e] hover:bg-[#06e84e]/80 text-white px-4 py-1 rounded text-sm">
                        Next Question
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right panel - Interview settings & info */}
            <div className="lg:w-1/3">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Interview Details</h2>
                  <button
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                    onClick={() => setShowSettings(!showSettings)}
                  >
                    <IoIosSettings size={16} />
                  </button>
                </div>
                {showSettings ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Interview Difficulty
                      </label>
                      <div className="flex items-center gap-4">
                        {["Easy", "Medium", "Hard", "Expert"].map(
                          (level, index) => (
                            <button
                              key={index}
                              className={`px-3 py-1 rounded text-sm ${
                                index === 1
                                  ? "bg-[#06e84e] text-white"
                                  : "bg-white/5 text-gray-400 hover:bg-white/10"
                              }`}
                            >
                              {level}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Focus Areas
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "React Fundamentals",
                          "State Management",
                          "Performance",
                          "Hooks",
                          "Testing",
                          "Architecture",
                        ].map((area, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`area-${index}`}
                              className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#06e84e] focus:ring-[#06e84e]"
                              defaultChecked={[0, 1, 3].includes(index)}
                            />
                            <label
                              htmlFor={`area-${index}`}
                              className="ml-2 text-sm text-gray-300"
                            >
                              {area}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        AI Feedback Level
                      </label>
                      <select className="w-full bg-[#101010] border border-white/10 rounded py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-[#06e84e] focus:border-[#06e84e]">
                        <option>Detailed (Technical + Communication)</option>
                        <option>Technical Focus</option>
                        <option>Communication Focus</option>
                        <option>Minimal</option>
                      </select>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <button className="w-full bg-gradient-to-r from-[#06e84e] to-[#00FFF7] text-white py-2 rounded-md">
                        Apply Settings
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">
                        Your Performance
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#101010] border border-white/10 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#06e84e] to-[#00FFF7]">
                            82%
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            Overall Score
                          </p>
                        </div>
                        <div className="bg-[#101010] border border-white/10 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-[#00FFF7]">
                            4/10
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            Questions Completed
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">
                        Skills Assessment
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            skill: "Technical Knowledge",
                            score: 78,
                          },
                          {
                            skill: "Problem Solving",
                            score: 85,
                          },
                          {
                            skill: "Communication",
                            score: 82,
                          },
                        ].map((skill, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">{skill.skill}</span>
                              <span className="text-sm font-medium">
                                {skill.score}%
                              </span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#06e84e] to-[#00FFF7]"
                                style={{
                                  width: `${skill.score}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">
                        Interview Summary
                      </h3>
                      <div className="bg-[#101010] border border-white/10 rounded-lg p-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00FFF7] mt-1.5 mr-2"></div>
                            <span className="text-gray-300">
                              Strong understanding of React fundamentals
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00FFF7] mt-1.5 mr-2"></div>
                            <span className="text-gray-300">
                              Clear explanation of component lifecycle
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#06e84e] mt-1.5 mr-2"></div>
                            <span className="text-gray-300">
                              Consider adding more examples when explaining
                              concepts
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <button className="w-full bg-white/5 hover:bg-white/10 text-white py-2 rounded-md flex items-center justify-center">
                        <FaDownload size={16} className="mr-2" />
                        Download Interview Report
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default InterviewPage;
