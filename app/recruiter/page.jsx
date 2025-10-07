"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import {
  FaArrowUp,
  FaBell,
  FaPlus,
  FaFilter,
  FaClock,
  FaUser,
  FaCalendar,
} from "react-icons/fa";
import Link from "next/link";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const RecruiterPortal = () => {
  const [activeTab, setActiveTab] = useState("candidates");
  return (
    <>
      <Nav />
      <div className="bg-[#101010] text-white min-h-screen pt-20 pb-16">
        {/* Background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#7F00FF]/10 filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-[#00FFF7]/10 filter blur-[80px]"></div>
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
              <h1 className="text-3xl font-bold">Recruiter Portal</h1>
              <p className="text-gray-400 mt-2">
                Manage candidates and interview processes
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBell size={18} className="text-gray-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#7F00FF] rounded-full flex items-center justify-center">
                  <span className="text-[10px]">3</span>
                </div>
                <button className="bg-[#0A0A0A] border border-white/10 rounded-md p-2 pl-10 pr-4">
                  Notifications
                </button>
              </div>
              <button className="bg-gradient-to-r from-[#7F00FF] to-[#7F00FF] hover:to-[#00FFF7] text-white font-medium px-6 py-2 rounded-md transition-all duration-300 flex items-center">
                <FaPlus size={16} className="mr-2" />
                New Job
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex overflow-x-auto mb-8 border-b border-white/10 pb-1">
            {[
              {
                id: "candidates",
                label: "Candidates",
                icon: <FaUser size={16} />,
              },
              {
                id: "interviews",
                label: "Interviews",
                icon: <FaCalendar size={16} />,
              },
              {
                id: "analytics",
                label: "Analytics",
                icon: <IoBarChart size={16} />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-[#00FFF7] border-b-2 border-[#00FFF7]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoMdSearch size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search candidates..."
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#7F00FF] focus:border-[#7F00FF]"
              />
            </div>
            <div className="flex space-x-3 w-full md:w-auto">
              <button className="flex items-center space-x-2 bg-[#0A0A0A] border border-white/10 rounded-md px-4 py-2">
                <FaFilter size={16} />
                <span>Filters</span>
                <FaChevronDown size={16} />
              </button>
              <button className="flex items-center space-x-2 bg-[#0A0A0A] border border-white/10 rounded-md px-4 py-2">
                <span>Sort by</span>
                <FaChevronDown size={16} />
              </button>
            </div>
          </div>
          {/* Candidates Table */}
          {activeTab === "candidates" && (
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-[#101010]">
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                        Candidate
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                        Position
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                        Status
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                        AI Score
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                        Last Activity
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Alex Johnson",
                        avatar:
                          "https://randomuser.me/api/portraits/men/32.jpg",
                        email: "alex.johnson@example.com",
                        position: "Senior Frontend Developer",
                        status: "Interview Scheduled",
                        score: 92,
                        activity: "2 hours ago",
                      },
                      {
                        name: "Sarah Williams",
                        avatar:
                          "https://randomuser.me/api/portraits/women/44.jpg",
                        email: "sarah.w@example.com",
                        position: "UX Designer",
                        status: "Assessment",
                        score: 88,
                        activity: "Yesterday",
                      },
                      {
                        name: "Michael Chen",
                        avatar:
                          "https://randomuser.me/api/portraits/men/62.jpg",
                        email: "michael.chen@example.com",
                        position: "Backend Engineer",
                        status: "New Application",
                        score: 76,
                        activity: "2 days ago",
                      },
                      {
                        name: "Priya Sharma",
                        avatar:
                          "https://randomuser.me/api/portraits/women/63.jpg",
                        email: "priya.s@example.com",
                        position: "DevOps Engineer",
                        status: "Technical Interview",
                        score: 94,
                        activity: "Just now",
                      },
                      {
                        name: "James Wilson",
                        avatar:
                          "https://randomuser.me/api/portraits/men/91.jpg",
                        email: "j.wilson@example.com",
                        position: "Product Manager",
                        status: "Offer Sent",
                        score: 89,
                        activity: "1 day ago",
                      },
                    ].map((candidate, index) => (
                      <tr
                        key={index}
                        className="border-t border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-[#7F00FF]/30">
                              <img
                                src={candidate.avatar}
                                alt={candidate.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{candidate.name}</p>
                              <p className="text-sm text-gray-400">
                                {candidate.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">{candidate.position}</td>
                        <td className="py-4 px-6">
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              candidate.status === "Interview Scheduled"
                                ? "bg-[#7F00FF]/20 text-[#7F00FF]"
                                : candidate.status === "Assessment"
                                ? "bg-blue-500/20 text-blue-400"
                                : candidate.status === "New Application"
                                ? "bg-gray-500/20 text-gray-400"
                                : candidate.status === "Technical Interview"
                                ? "bg-[#00FFF7]/20 text-[#00FFF7]"
                                : "bg-green-500/20 text-green-400"
                            }`}
                          >
                            {candidate.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] flex items-center justify-center text-xs font-medium">
                              {candidate.score}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-400">
                          <div className="flex items-center">
                            <FaClock size={14} className="mr-2" />
                            {candidate.activity}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex space-x-2">
                            <button className="p-1 hover:text-[#00FFF7]">
                              <FaUser size={16} />
                            </button>
                            <button className="p-1 hover:text-[#00FFF7]">
                              <FaCalendar size={16} />
                            </button>
                            <button className="p-1 hover:text-[#00FFF7]">
                              <FaCheck size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {/* Interviews Schedule */}
          {activeTab === "interviews" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-6">
                    Upcoming Interviews
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        candidate: "Alex Johnson",
                        avatar:
                          "https://randomuser.me/api/portraits/men/32.jpg",
                        position: "Senior Frontend Developer",
                        time: "Today, 2:00 PM",
                        duration: "45 min",
                        interviewers: ["You", "Lisa Chen"],
                      },
                      {
                        candidate: "Priya Sharma",
                        avatar:
                          "https://randomuser.me/api/portraits/women/63.jpg",
                        position: "DevOps Engineer",
                        time: "Today, 4:30 PM",
                        duration: "60 min",
                        interviewers: ["You"],
                      },
                      {
                        candidate: "Sarah Williams",
                        avatar:
                          "https://randomuser.me/api/portraits/women/44.jpg",
                        position: "UX Designer",
                        time: "Tomorrow, 11:00 AM",
                        duration: "45 min",
                        interviewers: ["You", "Mark Thompson", "Ava Rodriguez"],
                      },
                    ].map((interview, index) => (
                      <div
                        key={index}
                        className="border border-white/10 rounded-lg p-4 hover:border-[#7F00FF]/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-[#7F00FF]/30">
                              <img
                                src={interview.avatar}
                                alt={interview.candidate}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">
                                {interview.candidate}
                              </h3>
                              <p className="text-sm text-gray-400">
                                {interview.position}
                              </p>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <span className="text-sm text-gray-400">
                              {interview.time}
                            </span>
                            <span className="mx-2 text-gray-500">•</span>
                            <span className="text-sm text-gray-400">
                              {interview.duration}
                            </span>
                          </div>
                        </div>
                        <div className="md:hidden mt-2">
                          <span className="text-sm text-gray-400">
                            {interview.time}
                          </span>
                          <span className="mx-2 text-gray-500">•</span>
                          <span className="text-sm text-gray-400">
                            {interview.duration}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-xs text-gray-400 mr-2">
                              Interviewers:
                            </span>
                            <div className="flex -space-x-2">
                              {interview.interviewers.map((interviewer, i) => (
                                <div
                                  key={i}
                                  className="w-6 h-6 rounded-full bg-[#7F00FF] border border-[#0A0A0A] flex items-center justify-center text-[10px]"
                                >
                                  {interviewer === "You"
                                    ? "You"
                                    : interviewer
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-xs bg-[#7F00FF]/20 text-[#7F00FF] px-3 py-1 rounded-full hover:bg-[#7F00FF]/30 transition-colors">
                              Join
                            </button>
                            <button className="text-xs bg-white/5 text-white px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
                              Reschedule
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-6">Interview Types</h2>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Technical Assessment",
                        count: 12,
                        color: "#7F00FF",
                      },
                      {
                        name: "Behavioral Interview",
                        count: 8,
                        color: "#00FFF7",
                      },
                      {
                        name: "System Design",
                        count: 5,
                        color: "#FF5733",
                      },
                      {
                        name: "Take-home Assignment",
                        count: 3,
                        color: "#FFC300",
                      },
                    ].map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-white/10 rounded-lg"
                      >
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{
                              backgroundColor: type.color,
                            }}
                          ></div>
                          <span>{type.name}</span>
                        </div>
                        <div className="bg-white/5 px-2 py-1 rounded text-xs">
                          {type.count}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-3 border border-white/10 rounded-lg hover:border-[#7F00FF]/50 transition-all duration-300 group">
                        <span className="text-sm">Schedule New Interview</span>
                        <FaPlus
                          size={16}
                          className="text-[#00FFF7] opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 border border-white/10 rounded-lg hover:border-[#7F00FF]/50 transition-all duration-300 group">
                        <span className="text-sm">
                          Create Interview Template
                        </span>
                        <FaPlus
                          size={16}
                          className="text-[#00FFF7] opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 border border-white/10 rounded-lg hover:border-[#7F00FF]/50 transition-all duration-300 group">
                        <span className="text-sm">Set Up AI Assistant</span>
                        <FaPlus
                          size={16}
                          className="text-[#00FFF7] opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Analytics Dashboard */}
          {activeTab === "analytics" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Total Candidates",
                    value: "248",
                    change: "+12% from last month",
                  },
                  {
                    title: "Interviews Conducted",
                    value: "96",
                    change: "+8% from last month",
                  },
                  {
                    title: "Avg. Interview Score",
                    value: "82%",
                    change: "+3% from last month",
                  },
                  {
                    title: "Hiring Rate",
                    value: "18%",
                    change: "+5% from last month",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6"
                  >
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                    <p className="text-xs text-[#00FFF7] mt-2 flex items-center">
                      <FaArrowUp size={12} className="mr-1" />
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-6">Candidate Pipeline</h2>
                  <div className="relative h-64">
                    <div className="absolute inset-0 flex items-end">
                      {[
                        {
                          stage: "Applied",
                          count: 180,
                          percentage: 100,
                          color: "#7F00FF",
                        },
                        {
                          stage: "Screened",
                          count: 120,
                          percentage: 67,
                          color: "#9B5DE5",
                        },
                        {
                          stage: "Interview",
                          count: 75,
                          percentage: 42,
                          color: "#B8B5FF",
                        },
                        {
                          stage: "Assessment",
                          count: 45,
                          percentage: 25,
                          color: "#00FFF7",
                        },
                        {
                          stage: "Offer",
                          count: 28,
                          percentage: 16,
                          color: "#72EFDD",
                        },
                        {
                          stage: "Hired",
                          count: 18,
                          percentage: 10,
                          color: "#80FFDB",
                        },
                      ].map((stage, index) => (
                        <div
                          key={index}
                          className="flex-1 flex flex-col items-center"
                        >
                          <div className="text-xs mb-2">{stage.count}</div>
                          <div
                            className="w-full mx-1 rounded-t-sm transition-all duration-500"
                            style={{
                              height: `${stage.percentage}%`,
                              backgroundColor: stage.color,
                              maxHeight: "200px",
                            }}
                          ></div>
                          <div className="text-xs mt-2 whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                            {stage.stage}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-6">
                    Interview Performance
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        skill: "Technical Knowledge",
                        avg: 78,
                        benchmark: 75,
                      },
                      {
                        skill: "Problem Solving",
                        avg: 82,
                        benchmark: 80,
                      },
                      {
                        skill: "Communication",
                        avg: 85,
                        benchmark: 70,
                      },
                      {
                        skill: "Culture Fit",
                        avg: 88,
                        benchmark: 75,
                      },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">{skill.skill}</span>
                          <span className="text-sm font-medium">
                            {skill.avg}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
                          <div
                            className="h-full bg-gradient-to-r from-[#7F00FF] to-[#00FFF7]"
                            style={{
                              width: `${skill.avg}%`,
                            }}
                          ></div>
                          <div
                            className="absolute h-full w-px bg-yellow-400 top-0"
                            style={{
                              left: `${skill.benchmark}%`,
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-end">
                          <span className="text-xs text-gray-400">
                            Benchmark: {skill.benchmark}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default RecruiterPortal;
