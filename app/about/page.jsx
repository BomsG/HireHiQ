import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";
import { FaCircle, FaMailBulk } from "react-icons/fa";
import { FaCode, FaShield, FaRegHeart } from "react-icons/fa6";
import { IoIosTrendingUp } from "react-icons/io";
import Link from "next/link";

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Former tech recruiter with 10+ years of experience at Google and Microsoft.",
    },
    {
      name: "Sarah Williams",
      role: "CTO & Co-Founder",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "AI researcher with a PhD in Machine Learning from Stanford University.",
    },
    {
      name: "Michael Johnson",
      role: "Head of Product",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "Product leader with experience building tools for developers and tech professionals.",
    },
    {
      name: "Priya Sharma",
      role: "Lead AI Engineer",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      bio: "Specialized in natural language processing and conversation AI systems.",
    },
    {
      name: "David Wilson",
      role: "Head of Partnerships",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
      bio: "Building relationships with tech companies and educational institutions globally.",
    },
    {
      name: "Ava Rodriguez",
      role: "UX Research Lead",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      bio: "Focused on creating intuitive and accessible interview experiences.",
    },
  ];
  const values = [
    {
      icon: <FaShield className="text-[#00FFF7]" />,
      title: "Trust & Transparency",
      description:
        "We believe in being completely transparent about how our AI works and how we use data.",
    },
    {
      icon: <FaCode className="text-[#00FFF7]" />,
      title: "Technical Excellence",
      description:
        "Our platform is built on rigorous technical standards and continuously improved based on industry trends.",
    },
    {
      icon: <FaRegHeart className="text-[#00FFF7]" />,
      title: "Human-Centered",
      description:
        "Technology should empower people. We design our AI to enhance human potential, not replace it.",
    },
    {
      icon: <IoIosTrendingUp className="text-[#00FFF7]" />,
      title: "Continuous Growth",
      description:
        "We're committed to helping both our users and our team continuously learn and improve.",
    },
  ];
  return (
    <>
      <Nav />
      <div className="bg-[#101010] text-white min-h-screen pt-20 pb-16">
        {/* Background elements */}
        <div className="fixed inset-0 z-0 ">
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
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About HireHiQ
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              We're on a mission to democratize access to quality interview
              preparation and create a more fair, skill-based hiring process for
              technical talent worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/interview"
                className="bg-gradient-to-r from-[#7F00FF] to-[#7F00FF] hover:to-[#00FFF7] text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Try HireHiQ
              </Link>
              <Link
                href="#contact"
                className="border border-[#7F00FF]/50 text-white font-medium px-6 py-3 rounded-md hover:bg-[#7F00FF]/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Our Story */}
          <div className="mb-20">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] rounded-xl blur opacity-30"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Team working together"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    HireHiQ was born from a simple observation: the tech
                    interview process is broken. Too many talented individuals
                    struggle to showcase their true potential during interviews,
                    while companies miss out on exceptional candidates due to
                    biased or ineffective assessment methods.
                  </p>
                  <p>
                    Founded in 2022 by Alex Chen and Sarah Williams, our company
                    combines decades of recruiting experience with cutting-edge
                    AI technology to create a platform that helps candidates
                    prepare effectively for technical interviews while providing
                    recruiters with objective assessment tools.
                  </p>
                  <p>
                    Today, HireHiQ is used by thousands of job seekers and
                    dozens of forward-thinking tech companies who share our
                    vision of a more fair, efficient, and skill-based hiring
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-[#7F00FF]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Our Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-[#7F00FF]/50 transition-all duration-300 group"
                >
                  <div className="relative h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101010] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-[#00FFF7] mb-2">{member.role}</p>
                    <p className="text-gray-400">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Trust & Security */}
          <div className="mb-20">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6">Trust & Security</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    At HireHiQ, we understand the sensitivity of interview data
                    and take our responsibility to protect your information
                    seriously. Our platform is built with privacy and security
                    at its core.
                  </p>
                  <p>
                    We use industry-leading encryption standards and follow
                    strict data protection protocols. Your interview responses
                    and feedback are never shared with third parties without
                    your explicit consent.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {[
                      "End-to-end encryption for all interview sessions",
                      "SOC 2 Type II certified infrastructure",
                      "GDPR and CCPA compliant data handling",
                      "Regular security audits and penetration testing",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCircle
                          size={18}
                          className="text-[#00FFF7] mt-0.5 mr-2 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8">
                  <div className="mb-6 text-center">
                    <FaShield size={48} className="text-[#00FFF7] mx-auto" />
                    <h3 className="text-xl font-bold mt-4">
                      Our Commitment to You
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We believe that AI should augment human potential, not
                      replace it. Our interview AI is designed to provide
                      objective feedback and help you improve, not to make final
                      hiring decisions.
                    </p>
                    <p>
                      We're transparent about how our AI works, what data we
                      collect, and how we use it. You always maintain control
                      over your information and can request its deletion at any
                      time.
                    </p>
                    <p>
                      Our goal is to create a more fair and equitable hiring
                      process by reducing bias and focusing on skills and
                      potential rather than background or credentials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Us */}
          <div
            id="contact"
            className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 mb-12"
          >
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-6">
                  Have questions about our platform or interested in partnering
                  with us? We'd love to hear from you. Reach out using the form
                  or contact us directly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaMailBulk size={20} className="text-[#00FFF7] mr-3" />
                    <span>contact@HireHiQ.ai</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Headquarters</h3>
                    <address className="text-gray-400 not-italic">
                      101 Tech Boulevard
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-[#101010] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00FF] text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-[#101010] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00FF] text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-[#101010] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00FF] text-white"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#101010] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00FF] text-white resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] text-white font-medium py-3 rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Partners */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-8">Trusted By</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/800px-Meta_Platforms_Inc._logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="w-24 h-12 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-h-8 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
