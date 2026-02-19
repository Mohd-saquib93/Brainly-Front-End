import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../Config";
import axios from "axios";
import { useRef, useState } from "react";
import { Brain, Eye, EyeOff, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function signin() {
    const username = usernameRef.current?.value?.trim();
    const password = passwordRef.current?.value;

    if (!username || !password) {
      setError("Username and password are required!");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await axios.post(BACKEND_URL + "/api/v1/signin", { username, password });
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 relative overflow-hidden ${isDark
      ? "bg-gradient-to-br from-[#030014] via-[#0a0f2c] to-[#1a1040]"
      : "bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50"
      }`}>
      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl animate-pulse ${isDark ? "bg-teal-600/20" : "bg-teal-200/40"
          }`} />
        <div className={`absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-3xl animate-pulse ${isDark ? "bg-emerald-600/15" : "bg-emerald-200/30"
          }`} style={{ animationDelay: "2s" }} />
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className={`absolute top-6 right-6 z-20 p-2.5 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer ${isDark ? "bg-white/10 hover:bg-white/20 text-yellow-300" : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className={`relative z-10 w-[420px] rounded-3xl p-10 transition-all duration-500 ${isDark
        ? "bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-teal-900/20"
        : "bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl shadow-gray-200/50"
        }`}>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className={`p-3 rounded-2xl ${isDark ? "bg-teal-500/20" : "bg-teal-100"}`}>
            <Brain className="text-teal-400" size={32} />
          </div>
        </div>

        <h1 className={`text-3xl font-bold text-center mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
          Welcome Back
        </h1>
        <p className={`text-center mb-8 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Sign in to access your content dashboard
        </p>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <div className="space-y-5">
          <div>
            <label className={`block text-sm mb-2 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Username <span className="text-red-400">*</span>
            </label>
            <input
              ref={usernameRef}
              placeholder="Enter your username"
              type="text"
              className={`w-full py-3 px-4 rounded-xl outline-none transition-all duration-300 border focus:ring-2 focus:ring-teal-500/50 ${isDark
                ? "bg-white/[0.05] border-white/10 text-white placeholder-gray-500 focus:border-teal-500/50"
                : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-teal-400"
                }`}
            />
          </div>

          <div>
            <label className={`block text-sm mb-2 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Password <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                ref={passwordRef}
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                className={`w-full py-3 px-4 pr-12 rounded-xl outline-none transition-all duration-300 border focus:ring-2 focus:ring-teal-500/50 ${isDark
                  ? "bg-white/[0.05] border-white/10 text-white placeholder-gray-500 focus:border-teal-500/50"
                  : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-teal-400"
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-colors ${isDark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={signin}
          disabled={loading}
          className="w-full mt-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold text-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-600/25 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Signing In...
            </span>
          ) : (
            "Sign In"
          )}
        </button>

        <p className={`text-center mt-6 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-teal-400 hover:text-teal-300 font-semibold cursor-pointer transition-colors hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
