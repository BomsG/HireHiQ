"use client";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaCheck } from "react-icons/fa6";

// const Page = () => {
//   const [role, setRole] = useState(null);

//   return (
//     <div className="flex justify-center my-20 mx-20">
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7F00FF]/10 filter blur-[100px]"></div>
//         <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-[#00FFF7]/10 filter blur-[80px]"></div>
//       </div>
//       <div className="relative z-10 w-full max-w-lg">
//         <div className="relative">
//           <div className="absolute -inset-1 bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] rounded-xl blur opacity-20"></div>
//           <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-8">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold">Create Your Account</h2>
//               <p className="text-gray-400 mt-2">
//                 Join HireHiQ and elevate your interview skills
//               </p>
//             </div>

//             <form>
//               {/* First + Last Name */}
//               <div className="grid grid-cols-2 gap-2 mb-5 w-full">
//                 <div>
//                   <label className=" text-md ">First Name</label>
//                   <input
//                     type="text"
//                     placeholder="John"
//                     className="border border-white/10 px-5 py-4 rounded-[8px] mt-2 focus:b-["
//                   />
//                 </div>
//                 <div>
//                   <label className=" text-md ">Last Name</label>
//                   <input
//                     type="text"
//                     placeholder="Doe"
//                     className="border border-white/10 px-5 py-4 rounded-[8px] mt-2 focus:border-[#7F00FF]"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="w-full">
//                 <label className="block">Email</label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full border border-white/10 px-5 py-4 rounded-[8px] my-2 font-medium"
//                 />
//               </div>

//               {/* Password */}
//               <div className="w-full">
//                 <label className="block">Password</label>
//                 <input
//                   type="password"
//                   placeholder="*******"
//                   className="w-full border border-white/10 focus:outline-none px-5 py-4 rounded-[8px] mt-2 font-medium"
//                 />
//                 <p className="text-xs text-gray-400 mt-1">
//                   Password must be at least 8 characters long
//                 </p>
//               </div>

//               {/* Role selection */}
//               <div className="mt-5">
//                 <label className="block text-lg font-medium text-gray-300 mb-3">
//                   I am a:
//                 </label>
//                 <div className="grid grid-cols-2 gap-4">
//                   <button
//                     type="button"
//                     onClick={() => setRole("candidate")}
//                     className={`px-4 py-3 rounded-lg border ${
//                       role === "candidate"
//                         ? "border-[#7F00FF] bg-[#7F00FF]/10"
//                         : "border-white/10 bg-[#101010] hover:bg-white/5"
//                     } transition-colors flex items-center justify-center`}
//                   >
//                     <div className="flex items-center">
//                       {role === "candidate" && (
//                         <FaCheck size={16} className="text-[#7F00FF] mr-2" />
//                       )}
//                       <span>Job Seeker</span>
//                     </div>
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setRole("recruiter")}
//                     className={`px-4 py-3 rounded-lg border ${
//                       role === "recruiter"
//                         ? "border-[#7F00FF] bg-[#7F00FF]/10"
//                         : "border-white/10 bg-[#101010] hover:bg-white/5"
//                     } transition-colors flex items-center justify-center`}
//                   >
//                     <div className="flex items-center">
//                       {role === "recruiter" && (
//                         <FaCheck size={16} className="text-[#7F00FF] mr-2" />
//                       )}
//                       <span>Recruiter</span>
//                     </div>
//                   </button>
//                 </div>
//               </div>

//               {/* Terms */}
//               <div className="flex items-center mt-4">
//                 <input
//                   id="terms"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-white/20 bg-white/5 text-[#7F00FF] focus:ring-[#7F00FF]"
//                 />
//                 <label
//                   htmlFor="terms"
//                   className="ml-2 block text-sm text-gray-300"
//                 >
//                   I agree to the{" "}
//                   <span className="text-[#00FFF7] hover:underline">
//                     Terms of Service
//                   </span>{" "}
//                   and{" "}
//                   <span className="text-[#00FFF7] hover:underline">
//                     Privacy Policy
//                   </span>
//                 </label>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="mt-6 w-full bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] text-white font-medium py-3 rounded-lg transition-all duration-300"
//               >
//                 Create Account
//               </button>
//             </form>

//             {/* Divider */}
//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-white/10"></div>
//               </div>
//               <div className="relative flex justify-center">
//                 <span className="bg-[#0A0A0A] px-4 text-sm text-gray-400">
//                   Or sign up with
//                 </span>
//               </div>
//             </div>

//             <p className="mt-6 text-center text-sm text-gray-400">
//               Already have an account?
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
import React, { useState } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
const Signup = () => {
  const [role, setRole] = useState("candidate");
  return (
    <div className="bg-[#101010] text-white min-h-screen pt-20 pb-16 flex items-center justify-center relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7F00FF]/10 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-[#00FFF7]/10 filter blur-[80px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-lg">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] rounded-xl blur opacity-20"></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Create Your Account</h2>
              <p className="text-gray-400 mt-2">
                Join HireHiQ and elevate your interview skills
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-[#101010] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00FF] text-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-[#101010] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00FF] text-white"
                    placeholder="Doe"
                  />
                </div>
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
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-[#101010] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00FF] text-white"
                  placeholder="••••••••"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Password must be at least 8 characters long
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  I am a:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setRole("candidate")}
                    className={`px-4 py-3 rounded-lg border ${
                      role === "candidate"
                        ? "border-[#7F00FF] bg-[#7F00FF]/10"
                        : "border-white/10 bg-[#101010] hover:bg-white/5"
                    } transition-colors flex items-center justify-center`}
                  >
                    <div className="flex items-center">
                      {role === "candidate" && (
                        <FaCheck size={16} className="text-[#7F00FF] mr-2" />
                      )}
                      <span>Job Seeker</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("recruiter")}
                    className={`px-4 py-3 rounded-lg border ${
                      role === "recruiter"
                        ? "border-[#7F00FF] bg-[#7F00FF]/10"
                        : "border-white/10 bg-[#101010] hover:bg-white/5"
                    } transition-colors flex items-center justify-center`}
                  >
                    <div className="flex items-center">
                      {role === "recruiter" && (
                        <FaCheck size={16} className="text-[#7F00FF] mr-2" />
                      )}
                      <span>Recruiter</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-[#7F00FF] focus:ring-[#7F00FF]"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-300"
                >
                  I agree to the{" "}
                  <span className="text-[#00FFF7] hover:underline">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-[#00FFF7] hover:underline">
                    Privacy Policy
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] text-white font-medium py-3 rounded-lg transition-all duration-300"
              >
                Create Account
              </button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#0A0A0A] px-4 text-sm text-gray-400">
                  Or sign up with
                </span>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center py-3 px-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                <GithubIcon size={20} className="mr-2" />
                <span>GitHub</span>
              </button>
              <button className="flex items-center justify-center py-3 px-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                <LinkedinIcon size={20} className="mr-2" />
                <span>LinkedIn</span>
              </button>
            </div> */}
            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#00FFF7] hover:text-[#00FFF7]/80"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
