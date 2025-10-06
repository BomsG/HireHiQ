"use client";
import React, { Component } from "react";
// import {
//   BarChart3Icon,
//   CalendarIcon,
//   ClockIcon,
//   ArrowUpIcon,
//   BrainCircuitIcon,
//   BookOpenCheckIcon,
//   AwardIcon,
//   ChevronRightIcon,
// } from "lucide-react";
import {
  FaAngleRight,
  FaArrowUp,
  FaAward,
  FaBookOpenReader,
  FaBrain,
  FaChevronUp,
} from "react-icons/fa6";
import { AiOutlineBarChart } from "react-icons/ai";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="bg-[#101010] text-white min-h-screen pt-20 pb-16">
        {/* Background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#7F00FF]/10 filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#00FFF7]/10 filter blur-[80px]"></div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(#7F00FF 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Candidate Dashboard</h1>
              <p className="text-gray-400 mt-2">
                Track your progress and prepare for upcoming interviews
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-gradient-to-r from-[#7F00FF] to-[#7F00FF] hover:to-[#00FFF7] text-white font-medium px-6 py-2 rounded-md transition-all duration-300 flex items-center">
                New Interview
                {/* <ArrowUpIcon size={16} className="ml-2 rotate-45" /> */}
              </button>
            </div>
          </div>
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Completed Interviews",
                value: "12",
                //   icon: <BookOpenCheckIcon className="text-[#00FFF7]" />,
                change: "+3 this week",
              },
              {
                title: "Average Score",
                value: "82%",
                //   icon: <BarChart3Icon className="text-[#00FFF7]" />,
                change: "+5% improvement",
              },
              {
                title: "Practice Hours",
                value: "28",
                //   icon: <ClockIcon className="text-[#00FFF7]" />,
                change: "+2 this week",
              },
              {
                title: "Skill Ranking",
                value: "Top 15%",
                //   icon: <AwardIcon className="text-[#00FFF7]" />,
                change: "+7% this month",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-[#7F00FF]/50 transition-all duration-300 group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-xl opacity-20 blur-xl bg-gradient-to-br from-[#7F00FF]/20 to-[#00FFF7]/20"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-400 text-sm">{stat.title}</p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                      <p className="text-xs text-[#00FFF7] mt-2 flex items-center">
                        <FaChevronUp size={12} className="mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Interviews */}
            <div className="lg:col-span-2">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Upcoming Interviews</h2>
                  <Link
                    href="/"
                    className="text-[#00FFF7] text-sm hover:underline flex items-center"
                  >
                    View All <FaAngleRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Frontend Developer Interview",
                      company: "Tech Innovations Inc.",
                      date: "Tomorrow, 2:00 PM",
                      type: "Technical",
                      level: "Advanced",
                    },
                    {
                      title: "React Performance Interview",
                      company: "Digital Solutions",
                      date: "May 15, 10:00 AM",
                      type: "System Design",
                      level: "Intermediate",
                    },
                    {
                      title: "JavaScript Algorithms",
                      company: "Practice Session",
                      date: "May 18, 4:30 PM",
                      type: "Algorithms",
                      level: "Expert",
                    },
                  ].map((interview, index) => (
                    <div
                      key={index}
                      className="relative border border-white/10 rounded-lg p-4 hover:border-[#7F00FF]/50 transition-all duration-300 group"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 rounded-lg opacity-10 blur-lg bg-gradient-to-r from-[#7F00FF]/20 to-[#00FFF7]/20"></div>
                      </div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-white">
                              {interview.title}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">
                              {interview.company}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <span className="px-2 py-1 bg-[#7F00FF]/20 text-[#7F00FF] text-xs rounded-full">
                              {interview.type}
                            </span>
                            <span className="px-2 py-1 bg-[#00FFF7]/20 text-[#00FFF7] text-xs rounded-full">
                              {interview.level}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center mt-3 text-sm text-gray-400">
                          {/* <CalendarIcon size={14} className="mr-1" /> */}
                          {interview.date}
                        </div>
                        <div className="flex justify-end mt-2">
                          <Link
                            href="/interview"
                            className="text-[#00FFF7] text-sm hover:underline"
                          >
                            Prepare Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Skill Progress */}
            <div className="lg:col-span-1">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Skill Progress</h2>
                  <Link
                    href="#"
                    className="text-[#00FFF7] text-sm hover:underline flex items-center"
                  >
                    All Skills <FaAngleRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      skill: "System Design",
                      progress: 85,
                      icon: <FaBrain size={16} />,
                    },
                    {
                      skill: "Algorithms",
                      progress: 72,
                      icon: <FaBookOpenReader size={16} />,
                    },
                    {
                      skill: "Behavioral",
                      progress: 90,
                      icon: <AiOutlineBarChart size={16} />,
                    },
                    {
                      skill: "Frontend Dev",
                      progress: 78,
                      icon: <FaAward size={16} />,
                    },
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center mr-2">
                            {skill.icon}
                          </div>
                          <span className="text-sm">{skill.skill}</span>
                        </div>
                        <span className="text-sm font-medium">
                          {skill.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#7F00FF] to-[#00FFF7]"
                          style={{
                            width: `${skill.progress}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-medium mb-4">
                    Recommended Practice
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Database Optimization Interview",
                      "React Performance Deep Dive",
                      "Behavioral: Leadership Scenarios",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-white/10 rounded-lg hover:border-[#7F00FF]/50 transition-all duration-300 group"
                      >
                        <span className="text-sm">{item}</span>
                        <FaArrowUp
                          size={16}
                          className="rotate-45 text-[#00FFF7] opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Feedback */}
          <div className="mt-8">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Recent Feedback</h2>
                <Link
                  href="#"
                  className="text-[#00FFF7] text-sm hover:underline flex items-center"
                >
                  {/* View All <ChevronRightIcon size={16} className="ml-1" /> */}
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                        Interview Type
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                        Score
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                        Strengths
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                        Areas to Improve
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "System Design",
                        date: "May 5, 2023",
                        score: 85,
                        strengths:
                          "Scalability considerations, Database design",
                        improve: "Edge case handling",
                      },
                      {
                        type: "Frontend React",
                        date: "May 3, 2023",
                        score: 78,
                        strengths: "Component structure, State management",
                        improve: "Performance optimization",
                      },
                      {
                        type: "Behavioral",
                        date: "Apr 29, 2023",
                        score: 92,
                        strengths: "Leadership examples, Problem solving",
                        improve: "Conciseness",
                      },
                    ].map((feedback, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/10 hover:bg-white/5"
                      >
                        <td className="py-4 px-4">{feedback.type}</td>
                        <td className="py-4 px-4 text-sm text-gray-400">
                          {feedback.date}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] flex items-center justify-center text-xs font-medium">
                              {feedback.score}
                            </div>
                            <span className="ml-2 text-sm text-gray-400">
                              /100
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm">
                          {feedback.strengths}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-400">
                          {feedback.improve}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
