import { motion } from "framer-motion";
import { Brain, Sparkles, Zap, Shield, Palette, Wrench, Server, Sun, Moon, Youtube, Twitter, Link2, ArrowRight, CheckCircle2, Users, Bookmark, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const features = [
  { icon: Sparkles, title: "Unified Content Management", desc: "Save YouTube videos, tweets, and links all in one beautiful dashboard." },
  { icon: Zap, title: "Lightning Fast Performance", desc: "Built with Vite & React for blazing-fast load times and smooth interactions." },
  { icon: Shield, title: "Secure Authentication", desc: "Your content is protected with JWT-based authentication and encryption." },
  { icon: Palette, title: "Modern Gradient UI", desc: "Stunning dark-mode design with glassmorphism cards and smooth animations." },
  { icon: Wrench, title: "Creator Focused Tools", desc: "Organize, filter and manage your curated content effortlessly." },
  { icon: Server, title: "Scalable Architecture", desc: "Built on a robust backend that scales with your growing content library." },
];

const steps = [
  { num: "01", title: "Create Your Account", desc: "Sign up in seconds with a secure, hassle-free registration process.", icon: Users },
  { num: "02", title: "Save Your Content", desc: "Paste any YouTube or Twitter link and organize it with custom titles.", icon: Bookmark },
  { num: "03", title: "Access Anywhere", desc: "Your curated content library is always available from any device.", icon: Globe },
];



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function BrainlyLandingPage() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen w-full overflow-hidden transition-colors duration-500 ${isDark
      ? "bg-[#030014] text-white"
      : "bg-slate-50 text-gray-900"
      }`}>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse ${isDark ? "bg-teal-700/20" : "bg-teal-200/40"
          }`} />
        <div className={`absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse ${isDark ? "bg-emerald-600/15" : "bg-emerald-200/30"
          }`} style={{ animationDelay: "2s" }} />
        <div className={`absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse ${isDark ? "bg-sky-600/10" : "bg-sky-200/20"
          }`} style={{ animationDelay: "4s" }} />
        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 ${isDark ? "opacity-[0.03]" : "opacity-[0.04]"}`}
          style={{
            backgroundImage: `linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className={`relative z-50 flex justify-between items-center px-6 md:px-16 py-5 ${isDark
        ? "bg-[#030014]/60 backdrop-blur-xl border-b border-white/[0.04]"
        : "bg-white/60 backdrop-blur-xl border-b border-gray-200/50"
        }`}>
        <div className="flex items-center gap-3 text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          <div className={`p-2.5 rounded-2xl ${isDark
            ? "bg-gradient-to-br from-teal-500/20 to-emerald-500/20 ring-1 ring-teal-500/20"
            : "bg-gradient-to-br from-teal-100 to-emerald-100 ring-1 ring-teal-200"
            }`}>
            <Brain className="text-teal-500" size={26} />
          </div>
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-600 bg-clip-text text-transparent font-extrabold tracking-tight">
            Brainly
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer ${isDark
              ? "bg-white/[0.06] hover:bg-white/10 text-amber-300 ring-1 ring-white/10"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700 ring-1 ring-gray-200"
              }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => navigate("/signin")}
            className={`rounded-xl px-6 py-2.5 font-semibold text-sm transition-all duration-300 hover:scale-105 cursor-pointer ${isDark
              ? "border border-white/10 text-gray-300 hover:bg-white/[0.06] hover:text-white"
              : "border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="rounded-xl px-6 py-2.5 font-semibold text-sm bg-gradient-to-r from-teal-600 to-emerald-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`mb-8 px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 ${isDark
            ? "bg-teal-500/10 border border-teal-500/20 text-teal-300"
            : "bg-teal-50 border border-teal-200 text-teal-700"
            }`}
        >
          <Sparkles size={14} className="text-teal-400" />
          Your Second Brain, Beautifully Organized
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight"
        >
          Save, Organize
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
            & Share Content
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`mt-8 text-lg md:text-xl max-w-2xl leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"
            }`}
        >
          Brainly is the modern platform for creators to curate YouTube videos, tweets,
          and links — all in one beautifully designed, lightning-fast dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <button
            onClick={() => navigate("/signup")}
            className="group relative px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-500 text-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-teal-600/25 hover:shadow-teal-600/50 cursor-pointer flex items-center gap-2"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Get Started Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => navigate("/signin")}
            className={`px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${isDark
              ? "bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08] ring-1 ring-white/5"
              : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-md"
              }`}
          >
            I have an account
          </button>
        </motion.div>

        {/* Platform icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className={`mt-16 flex items-center gap-6 ${isDark ? "text-gray-600" : "text-gray-400"}`}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Works with</span>
          <div className="flex items-center gap-4">
            <div className={`p-2.5 rounded-xl ${isDark ? "bg-white/[0.04] ring-1 ring-white/[0.06]" : "bg-gray-100 ring-1 ring-gray-200"}`}>
              <Youtube size={20} className="text-red-500" />
            </div>
            <div className={`p-2.5 rounded-xl ${isDark ? "bg-white/[0.04] ring-1 ring-white/[0.06]" : "bg-gray-100 ring-1 ring-gray-200"}`}>
              <Twitter size={20} className="text-sky-500" />
            </div>
            <div className={`p-2.5 rounded-xl ${isDark ? "bg-white/[0.04] ring-1 ring-white/[0.06]" : "bg-gray-100 ring-1 ring-gray-200"}`}>
              <Link2 size={20} className={isDark ? "text-gray-400" : "text-gray-500"} />
            </div>
          </div>
        </motion.div>
      </section>



      {/* DASHBOARD PREVIEW SECTION */}
      <section className="relative z-10 px-6 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Content,{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Your Dashboard
              </span>
            </h2>
            <p className={`mt-4 text-lg max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              A sleek, organized interface designed to help you manage everything in one place.
            </p>
          </div>

          {/* Mock Dashboard Preview */}
          <div className={`relative rounded-3xl overflow-hidden border ${isDark
            ? "bg-gradient-to-br from-[#0a0e1a] to-[#060b18] border-white/[0.08] shadow-2xl shadow-teal-900/20"
            : "bg-gray-50 border-gray-200 shadow-2xl shadow-gray-300/30"
            }`}>
            {/* Mock Top Bar */}
            <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? "border-white/[0.06]" : "border-gray-200"}`}>
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className={`text-sm font-medium ${isDark ? "text-gray-500" : "text-gray-400"}`}>Brainly Dashboard</div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`h-8 px-4 rounded-lg flex items-center text-xs font-medium ${isDark ? "bg-teal-500/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}>
                  + Add Content
                </div>
              </div>
            </div>
            {/* Mock Content Grid */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { type: "youtube", title: "React Tutorial", color: "red" },
                { type: "twitter", title: "Tech Update", color: "sky" },
                { type: "youtube", title: "Node.js Guide", color: "red" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className={`rounded-2xl p-4 border ${isDark
                    ? "bg-white/[0.03] border-white/[0.06]"
                    : "bg-white border-gray-200"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {item.type === "youtube" ? (
                      <Youtube size={14} className="text-red-500" />
                    ) : (
                      <Twitter size={14} className="text-sky-500" />
                    )}
                    <span className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>{item.title}</span>
                  </div>
                  <div className={`rounded-xl aspect-video ${isDark ? "bg-white/[0.04]" : "bg-gray-100"}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="relative z-10 px-6 md:px-16 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            How It{" "}
            <span className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className={`mt-4 text-lg max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Get started in three simple steps.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="relative"
            >
              <div className={`relative rounded-3xl p-8 transition-all duration-300 h-full ${isDark
                ? "bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-teal-500/20"
                : "bg-white border border-gray-200 hover:border-teal-300 hover:shadow-lg"
                }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black ${isDark
                    ? "bg-gradient-to-br from-teal-500/20 to-emerald-500/20 text-teal-400 ring-1 ring-teal-500/20"
                    : "bg-gradient-to-br from-teal-100 to-emerald-100 text-teal-600 ring-1 ring-teal-200"
                    }`}>
                    <step.icon size={24} />
                  </div>
                  <span className={`text-5xl font-black ${isDark ? "text-white/[0.04]" : "text-gray-100"}`}>
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 px-6 md:px-16 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Brainly?
            </span>
          </h2>
          <p className={`mt-4 text-lg max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Everything you need to curate, organize, and share your digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
              className={`group relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 cursor-default ${isDark
                ? "bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/[0.06] hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/10"
                : "bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100"
                }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${isDark
                ? "bg-gradient-to-br from-teal-500/20 to-emerald-500/20 text-teal-400 ring-1 ring-teal-500/20"
                : "bg-gradient-to-br from-teal-100 to-emerald-100 text-teal-600 ring-1 ring-teal-200"
                }`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>



      {/* CTA SECTION */}
      <section className="relative z-10 px-6 md:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${isDark
            ? "bg-gradient-to-br from-teal-900/30 via-[#0a0e1a] to-emerald-900/20 border border-white/[0.08]"
            : "bg-gradient-to-br from-teal-50 via-white to-emerald-50 border border-teal-200/50 shadow-xl"
            }`}
        >
          {/* Background glow inside CTA */}
          <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] ${isDark ? "bg-teal-600/20" : "bg-teal-200/40"
            }`} />
          <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[60px] ${isDark ? "bg-emerald-600/15" : "bg-emerald-200/30"
            }`} />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Second Brain?
              </span>
            </h2>
            <p className={`text-lg mb-10 max-w-lg mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Join thousands of creators who organize their digital content with Brainly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/signup")}
                className="group relative px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-500 text-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-teal-600/30 hover:shadow-teal-600/50 cursor-pointer"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="relative flex items-center gap-2 justify-center">
                  Join Brainly Today 🚀
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            <div className={`mt-8 flex items-center justify-center gap-6 text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" /> Free to start</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" /> No credit card</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" /> Instant setup</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className={`relative z-10 px-6 md:px-16 py-12 ${isDark ? "border-t border-white/[0.04]" : "border-t border-gray-100"}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${isDark ? "bg-teal-500/20" : "bg-teal-100"}`}>
              <Brain className="text-teal-400" size={20} />
            </div>
            <span className="font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Brainly
            </span>
          </div>
          <p className={`text-sm ${isDark ? "text-gray-600" : "text-gray-400"}`}>
            © 2026 Brainly. Built with ❤️ for creators.
          </p>
        </div>
      </footer>
    </div>
  );
}
