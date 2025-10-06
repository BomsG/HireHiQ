import React from "react";
import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Dashboard", to: "/dashboard" },
        { name: "AI Interviews", to: "/interview" },
        { name: "Pricing", to: "/pricing" },
        { name: "Knowledge Base", to: "/content" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Careers", to: "/about" },
        { name: "Blog", to: "/about" },
        { name: "Press", to: "/about" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", to: "#" },
        { name: "Privacy Policy", to: "#" },
        { name: "Cookie Policy", to: "#" },
        { name: "Data Processing", to: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaXTwitter size={20} />, href: "#" },
    { icon: <FaLinkedinIn size={20} />, href: "#" },
    { icon: <FaGithub size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#7F00FF]/20 text-white py-20 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Socials */}
          <div>
            <Link href="/" className="flex items-center">
              <div className="text-[#00FFF7] font-bold text-xl tracking-wider">
                Hire<span className="text-[#7F00FF]">HiQ</span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              AI-powered mock interviews and recruiter insights for global tech
              talent.
            </p>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-[#00FFF7] transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Sections */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.to}
                      className="text-gray-400 hover:text-[#00FFF7] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#7F00FF]/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 HireHiQ AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Democratizing opportunities for global tech talent
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
