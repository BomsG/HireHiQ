import Image from "next/image";
import React from "react";
import { IoMdPlay } from "react-icons/io";
import demo from "../public/demo.png";
const DemoPreview = () => {
  return (
    <section className="py-24 bg-[#101010] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      {/* Animated circuit lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-1/2 h-px bg-[#7F00FF]"
          style={{
            boxShadow: "0 0 10px #7F00FF",
            animation: "pulse 3s infinite",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-1/3 h-px bg-[#00FFF7]"
          style={{
            boxShadow: "0 0 10px #00FFF7",
            animation: "pulse 4s infinite",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See HireHiQ in Action
          </h2>
          <p className="text-gray-400 text-lg">
            Watch how our AI platform transforms the interview preparation
            experience.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] rounded-xl blur opacity-30"></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-[#101010] to-[#0A0A0A] flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-[#7F00FF]/80 hover:bg-[#7F00FF] transition-colors flex items-center justify-center group">
                  <IoMdPlay
                    size={36}
                    className="text-white ml-1 group-hover:scale-110 transition-transform"
                  />
                </button>
              </div>
            </div>
            {/* Video thumbnail overlay */}
            {/* <div className="absolute inset-0 opacity-30">
              <div className="h-full flex">
                <div className="w-1/3 bg-gradient-to-r from-transparent to-[#101010] border-r border-white/5"></div>
                <div className="w-2/3 flex flex-col">
                  <div className="h-1/2 border-b border-white/5 flex">
                    <div className="w-1/2 border-r border-white/5 p-4">
                      <div className="h-full rounded-lg bg-white/5"></div>
                    </div>
                    <div className="w-1/2 p-4">
                      <div className="h-full rounded-lg bg-white/5"></div>
                    </div>
                  </div>
                  <div className="h-1/2 flex">
                    <div className="w-1/2 border-r border-white/5 p-4">
                      <div className="h-full rounded-lg bg-white/5"></div>
                    </div>
                    <div className="w-1/2 p-4">
                      <div className="h-full rounded-lg bg-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="absolute inset-0 opacity-40">
              <Image src={demo} alt="demo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DemoPreview;
