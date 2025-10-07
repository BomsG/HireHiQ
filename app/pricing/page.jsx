"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { CheckIcon, XIcon, HelpCircleIcon } from "lucide-react";
import { FaCheck, FaX, FaCircle } from "react-icons/fa6";
import { IoHelpCircle } from "react-icons/io5";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const plans = [
    {
      name: "Free",
      price: {
        monthly: 0,
        yearly: 0,
      },
      description: "Basic interview preparation for individuals",
      features: [
        "5 AI mock interviews per month",
        "Basic feedback and analysis",
        "Standard question bank",
        "Email support",
      ],
      limitations: [
        "Limited question types",
        "No custom interviews",
        "No recruiter insights",
      ],
      buttonText: "Get Started",
      buttonLink: "/signup",
      highlight: false,
    },
    {
      name: "Professional",
      price: {
        monthly: 29,
        yearly: 19,
      },
      description: "Advanced preparation for serious job seekers",
      features: [
        "Unlimited AI mock interviews",
        "Detailed performance analytics",
        "Advanced question bank",
        "Custom interview scenarios",
        "Industry-specific feedback",
        "Resume analysis",
        "Priority email support",
      ],
      limitations: [],
      buttonText: "Start Free Trial",
      buttonLink: "/signup",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: {
        monthly: 99,
        yearly: 79,
      },
      description: "Complete solution for recruiting teams",
      features: [
        "Everything in Professional",
        "Team management dashboard",
        "Candidate comparison tools",
        "Custom interview templates",
        "Branded interview experience",
        "Interview recording & sharing",
        "API access",
        "Dedicated account manager",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonLink: "/about",
      highlight: false,
    },
  ];
  const faqs = [
    {
      question: "How does the AI interview process work?",
      answer:
        "Our AI conducts realistic interview simulations through video or text chat. It asks industry-standard questions, analyzes your responses for technical accuracy and communication skills, and provides detailed feedback to help you improve.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 7-day free trial of our Professional plan so you can experience the full capabilities of our platform before committing to a subscription.",
    },
    {
      question: "How accurate is the AI feedback?",
      answer:
        "Our AI has been trained on thousands of real interviews and calibrated with input from experienced recruiters across various industries. While no AI is perfect, our system provides highly accurate and valuable feedback that closely aligns with human recruiter assessments.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your plan features until the end of your current billing period.",
    },
  ];
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pricing Plans
            </h1>
            <p className="text-gray-400 text-lg">
              Choose the perfect plan for your interview preparation needs
            </p>
            {/* Billing toggle */}
            <div className="mt-8 inline-flex items-center bg-[#0A0A0A] p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-[#7F00FF] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-[#7F00FF] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Yearly <span className="text-xs text-[#00FFF7]">Save 35%</span>
              </button>
            </div>
          </div>
          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-[#0A0A0A] border ${
                  plan.highlight ? "border-[#7F00FF]" : "border-white/10"
                } rounded-xl overflow-hidden transition-all duration-300 hover:border-[#7F00FF]/70 group`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 py-1.5 bg-[#7F00FF] text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${plan.highlight ? "pt-12" : ""}`}>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="ml-2 text-gray-400">/month</span>
                  </div>
                  <p className="mt-2 text-gray-400">
                    {billingCycle === "yearly"
                      ? "billed annually"
                      : "billed monthly"}
                  </p>
                  <p className="mt-4 text-gray-300">{plan.description}</p>
                  <div className="mt-6">
                    <Link
                      href={plan.buttonLink}
                      className={`block w-full py-3 text-center rounded-md font-medium ${
                        plan.highlight
                          ? "bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      } transition-colors`}
                    >
                      {plan.buttonText}
                    </Link>
                  </div>
                  <div className="mt-8">
                    <p className="text-sm font-medium text-gray-300 mb-3">
                      Includes:
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <FaCheck
                            size={16}
                            className="text-[#00FFF7] mt-0.5 mr-2 shrink-0"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.limitations.length > 0 && (
                      <>
                        <p className="text-sm font-medium text-gray-300 mb-3 mt-4">
                          Limitations:
                        </p>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, i) => (
                            <li
                              key={i}
                              className="flex items-start text-sm text-gray-400"
                            >
                              <FaX
                                size={16}
                                className="text-gray-500 mt-0.5 mr-2 shrink-0"
                              />
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Feature comparison */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden mb-16">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">
                        Feature
                      </th>
                      <th className="text-center py-4 px-6 text-sm font-medium text-gray-400">
                        Free
                      </th>
                      <th className="text-center py-4 px-6 text-sm font-medium text-[#7F00FF]">
                        Professional
                      </th>
                      <th className="text-center py-4 px-6 text-sm font-medium text-gray-400">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Mock Interviews",
                        free: "5/month",
                        pro: "Unlimited",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "Question Bank",
                        free: "Standard",
                        pro: "Advanced",
                        enterprise: "Advanced + Custom",
                      },
                      {
                        feature: "Performance Analytics",
                        free: "Basic",
                        pro: "Detailed",
                        enterprise: "Comprehensive",
                      },
                      {
                        feature: "Custom Scenarios",
                        free: "✕",
                        pro: "✓",
                        enterprise: "✓",
                      },
                      {
                        feature: "Industry-specific Feedback",
                        free: "✕",
                        pro: "✓",
                        enterprise: "✓",
                      },
                      {
                        feature: "Resume Analysis",
                        free: "✕",
                        pro: "✓",
                        enterprise: "✓",
                      },
                      {
                        feature: "Team Management",
                        free: "✕",
                        pro: "✕",
                        enterprise: "✓",
                      },
                      {
                        feature: "API Access",
                        free: "✕",
                        pro: "✕",
                        enterprise: "✓",
                      },
                      {
                        feature: "Support",
                        free: "Email",
                        pro: "Priority Email",
                        enterprise: "Dedicated Manager",
                      },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="py-4 px-6">{row.feature}</td>
                        <td className="text-center py-4 px-6">
                          {row.free === "✓" ? (
                            <FaCheck
                              size={16}
                              className="text-[#00FFF7] mx-auto"
                            />
                          ) : row.free === "✕" ? (
                            <FaX size={16} className="text-gray-500 mx-auto" />
                          ) : (
                            <span className="text-sm">{row.free}</span>
                          )}
                        </td>
                        <td className="text-center py-4 px-6 bg-[#7F00FF]/5">
                          {row.pro === "✓" ? (
                            <FaCheck
                              size={16}
                              className="text-[#00FFF7] mx-auto"
                            />
                          ) : row.pro === "✕" ? (
                            <FaX size={16} className="text-gray-500 mx-auto" />
                          ) : (
                            <span className="text-sm">{row.pro}</span>
                          )}
                        </td>
                        <td className="text-center py-4 px-6">
                          {row.enterprise === "✓" ? (
                            <FaCheck
                              size={16}
                              className="text-[#00FFF7] mx-auto"
                            />
                          ) : row.enterprise === "✕" ? (
                            <FaX size={16} className="text-gray-500 mx-auto" />
                          ) : (
                            <span className="text-sm">{row.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer">
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <IoHelpCircle
                        size={20}
                        className="text-[#7F00FF] group-open:rotate-180 transition-transform"
                      />
                    </summary>
                    <div className="px-6 pb-4 text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-400 mb-6">
                Contact our team for more information about our plans and
                features.
              </p>
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] text-white font-medium px-8 py-3 rounded-md transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Pricing;
