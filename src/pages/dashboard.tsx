import { CreateContentModal } from "../components/CreateContentModal"
import { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { Card } from "../components/Card"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { Plus, LogOut, Sun, Moon } from "lucide-react"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();
  const [filter, setFilter] = useState<"all" | "twitter" | "youtube">("all");
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  const filteredContents = filter === "all"
    ? contents
    : contents.filter((c: any) => c.type === filter);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#060b18]" : "bg-gray-50"
      }`}>
      <Sidebar
        activeFilter={filter}
        onFilter={setFilter}
        isDark={isDark}
      />

      <div className="ml-72">
        {/* Top Bar */}
        <div className={`sticky top-0 z-30 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b ${isDark
          ? "bg-[#060b18]/80 border-white/[0.06]"
          : "bg-white/80 border-gray-200"
          }`}>
          <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            {filter === "all" ? "All Content" : filter === "twitter" ? "Twitter" : "Youtube"}
          </h1>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer ${isDark
                ? "bg-white/[0.06] hover:bg-white/10 text-yellow-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Add Content */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-medium hover:scale-105 hover:shadow-lg hover:shadow-teal-600/25 transition-all duration-300 cursor-pointer"
            >
              <Plus size={18} />
              Add Content
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${isDark
                ? "bg-white/[0.06] text-gray-300 hover:bg-red-500/20 hover:text-red-400"
                : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-500"
                }`}
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-6">
          <CreateContentModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            isDark={isDark}
          />

          {filteredContents.length === 0 ? (
            <div className={`flex flex-col items-center justify-center py-32 ${isDark ? "text-gray-500" : "text-gray-400"
              }`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ${isDark ? "bg-white/[0.04]" : "bg-gray-100"
                }`}>
                <Plus size={32} className="opacity-50" />
              </div>
              <p className="text-lg font-medium">No content yet</p>
              <p className="text-sm mt-1">Click "Add Content" to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredContents.map((item: any) => (
                <Card
                  key={item._id}
                  type={item.type}
                  link={item.link}
                  title={item.title}
                  _id={item._id}
                  onDelete={refresh}
                  isDark={isDark}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
