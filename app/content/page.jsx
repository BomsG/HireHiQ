"use client";
import React, { useState } from "react";
import { IoMdSearch, IoMdBook, IoIosVideocam } from "react-icons/io";
import {
  FaFileAlt,
  FaTag,
  FaChevronRight,
  FaClock,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const ContentHub = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    {
      id: "all",
      name: "All Content",
    },
    {
      id: "technical",
      name: "Technical Interviews",
    },
    {
      id: "behavioral",
      name: "Behavioral Interviews",
    },
    {
      id: "system-design",
      name: "System Design",
    },
    {
      id: "career",
      name: "Career Growth",
    },
    {
      id: "trends",
      name: "Industry Trends",
    },
  ];
  const articles = [
    {
      id: 1,
      title: "Mastering React Interview Questions",
      excerpt:
        "A comprehensive guide to the most common React questions and how to answer them effectively.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "technical",
      type: "article",
      readingTime: "8 min read",
      date: "May 12, 2023",
      featured: true,
    },
    {
      id: 2,
      title: "Behavioral Interview Strategies That Work",
      excerpt:
        "Learn how to structure your responses using the STAR method to impress recruiters.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "behavioral",
      type: "article",
      readingTime: "6 min read",
      date: "May 8, 2023",
    },
    {
      id: 3,
      title: "System Design Interview Walkthrough",
      excerpt:
        "Step-by-step approach to tackling complex system design questions with real examples.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "system-design",
      type: "video",
      readingTime: "15 min watch",
      date: "Apr 29, 2023",
    },
    {
      id: 4,
      title: "Negotiating Your Tech Salary",
      excerpt:
        "Proven techniques to negotiate a better compensation package in the tech industry.",
      image:
        "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "career",
      type: "article",
      readingTime: "10 min read",
      date: "Apr 22, 2023",
    },
    {
      id: 5,
      title: "The Rise of AI in Technical Interviews",
      excerpt:
        "How artificial intelligence is changing the interview landscape and what it means for candidates.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "trends",
      type: "article",
      readingTime: "7 min read",
      date: "Apr 18, 2023",
    },
    {
      id: 6,
      title: "Debugging Under Pressure",
      excerpt:
        "Techniques to stay calm and methodical when solving coding problems during interviews.",
      image:
        "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "technical",
      type: "guide",
      readingTime: "12 min read",
      date: "Apr 10, 2023",
    },
    {
      id: 7,
      title: "Leadership Questions in Senior Role Interviews",
      excerpt:
        "How to demonstrate leadership qualities and experience in your interview responses.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "behavioral",
      type: "webinar",
      readingTime: "45 min watch",
      date: "Mar 28, 2023",
    },
    {
      id: 8,
      title: "Frontend Performance Optimization",
      excerpt:
        "Essential knowledge about performance optimization techniques for frontend developers.",
      image:
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
      category: "technical",
      type: "guide",
      readingTime: "14 min read",
      date: "Mar 15, 2023",
    },
  ];
  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory);
  const featuredArticle = articles.find((article) => article.featured);
  return (
    <div className="bg-[#101010] text-white min-h-screen pt-20 pb-16">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#7F00FF]/10 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#00FFF7]/10 filter blur-[80px]"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(#7F00FF 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Knowledge Hub</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Explore articles, guides, and videos to enhance your interview
            skills and advance your tech career.
          </p>
        </div>
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoMdSearch size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles, guides, and videos..."
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#7F00FF] focus:border-[#7F00FF]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeCategory === category.id
                    ? "bg-[#7F00FF] text-white"
                    : "bg-[#0A0A0A] border border-white/10 text-gray-300 hover:bg-white/5"
                } transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* Featured Article */}
        {featuredArticle && activeCategory === "all" && (
          <div className="mb-12">
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#000] via-transparent to-transparent z-10"></div>
              <div className="md:flex">
                <div className="md:w-1/2 p-8 relative z-20">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#7F00FF]/20 text-[#7F00FF] text-xs px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <FaClock size={12} className="mr-1" />
                      {featuredArticle.readingTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#00FFF7] hover:underline"
                  >
                    Read Article <FaChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles
            .filter((article) => !article.featured || activeCategory !== "all")
            .map((article) => (
              <div
                key={article.id}
                className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-[#7F00FF]/50 transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`
                    px-3 py-1 rounded-full text-xs
                    ${
                      article.type === "article" &&
                      "bg-[#7F00FF]/20 text-[#7F00FF]"
                    }
                    ${article.type === "video" && "bg-red-500/20 text-red-400"}
                    ${
                      article.type === "guide" && "bg-blue-500/20 text-blue-400"
                    }
                    ${
                      article.type === "webinar" &&
                      "bg-green-500/20 text-green-400"
                    }
                  `}
                    >
                      {article.type.charAt(0).toUpperCase() +
                        article.type.slice(1)}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400">
                      {article.date}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <FaClock size={12} className="mr-1" />
                      {article.readingTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#00FFF7] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="#"
                      className="text-[#00FFF7] text-sm flex items-center group-hover:underline"
                    >
                      Read More <IoArrowForward size={16} className="ml-1" />
                    </Link>
                    <div className="flex items-center text-xs text-gray-400">
                      <FaUser size={12} className="mr-1" />
                      1.2k reads
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Content Types */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: <IoMdBook size={24} />,
              title: "Articles",
              count: 124,
              color: "#7F00FF",
            },
            {
              icon: <IoIosVideocam size={24} />,
              title: "Videos",
              count: 56,
              color: "#00FFF7",
            },
            {
              icon: <FaFileAlt size={24} />,
              title: "Guides",
              count: 38,
              color: "#FF5733",
            },
            {
              icon: <FaTag size={24} />,
              title: "Resources",
              count: 85,
              color: "#FFC300",
            },
          ].map((type, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${type.color}20`,
                  color: type.color,
                }}
              >
                {type.icon}
              </div>
              <h3 className="text-xl font-bold">{type.title}</h3>
              <p className="text-gray-400 mt-1">{type.count} items</p>
              <Link
                href="#"
                className="text-sm flex items-center mt-4 hover:underline"
                style={{
                  color: type.color,
                }}
              >
                Browse All <FaChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-[#7F00FF]/20 to-[#00FFF7]/20 rounded-xl p-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                Stay updated with the latest content
              </h2>
              <p className="text-gray-300">
                Get weekly insights, interview tips, and career advice delivered
                to your inbox.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-[#101010] border border-white/10 rounded-l-md py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#7F00FF] focus:border-[#7F00FF]"
                />
                <button className="bg-[#7F00FF] hover:bg-[#7F00FF]/80 text-white px-4 py-3 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentHub;
