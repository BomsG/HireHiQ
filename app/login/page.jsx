import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-[#101010] text-white min-h-screen pt-20 pb-16 flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7F00FF]/10 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#00FFF7]/10 filter blur-[80px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-md">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#7F00FF] to-[#00FFF7] rounded-xl blur opacity-20"></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Welcome Back</h2>
              <p className="text-gray-400 mt-2">
                Log in to your HireHiQ account
              </p>
            </div>
            <form className="space-y-6">
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
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-sm text-[#00FFF7] hover:text-[#00FFF7]/80"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-[#101010] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F00FF] text-white"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7F00FF] to-[#7F00FF] hover:to-[#00FFF7] text-white font-medium py-3 rounded-lg transition-all duration-300"
              >
                Sign in
              </button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#0A0A0A] px-4 text-sm text-gray-400">
                  Or continue with
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
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#00FFF7] hover:text-[#00FFF7]/80"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
