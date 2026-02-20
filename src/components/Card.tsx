import { Trash2, Youtube, Twitter, Instagram, Facebook } from "lucide-react";
import { BACKEND_URL } from "../Config";
import axios from "axios";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "instagram" | "facebook";
  _id?: string;
  onDelete?: () => void;
  isDark?: boolean;
}

export function Card({ title, link, type, _id, onDelete, isDark = true }: CardProps) {

  async function handleDelete() {
    if (!_id) return;
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        data: { contentId: _id },
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      });
      if (onDelete) onDelete();
    } catch (err) {
      console.error("Failed to delete content", err);
    }
  }

  const typeConfig: Record<string, { icon: React.ReactNode; color: string }> = {
    youtube: { icon: <Youtube size={18} />, color: "text-red-500" },
    twitter: { icon: <Twitter size={18} />, color: "text-sky-500" },
    instagram: { icon: <Instagram size={18} />, color: "text-pink-500" },
    facebook: { icon: <Facebook size={18} />, color: "text-blue-500" },
  };

  const { icon, color } = typeConfig[type] || typeConfig.youtube;

  return (
    <div className={`p-5 rounded-2xl border min-h-48 w-full transition-all duration-300 hover:scale-[1.02] group ${isDark
      ? "bg-white/[0.04] border-white/[0.08] hover:border-teal-500/30 backdrop-blur-sm"
      : "bg-white border-gray-200 hover:border-teal-300 hover:shadow-lg"
      }`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className={`flex items-center gap-2 text-sm font-medium truncate max-w-[80%] ${isDark ? "text-gray-300" : "text-gray-700"
          }`}>
          <div className={`shrink-0 ${color}`}>
            {icon}
          </div>
          <span className="truncate">{title}</span>
        </div>

        <div className="flex items-center gap-2">
          {_id && (
            <button
              onClick={handleDelete}
              className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
              title="Delete content"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div>
        {type === "youtube" && (
          <iframe
            className="w-full rounded-xl aspect-video"
            src={link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}

        {(type === "instagram" || type === "facebook") && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full rounded-xl p-4 text-center transition-all duration-200 hover:scale-[1.01] ${isDark
              ? "bg-white/[0.05] hover:bg-white/[0.08] text-teal-400 border border-white/[0.08]"
              : "bg-gray-50 hover:bg-gray-100 text-teal-600 border border-gray-200"
              }`}
          >
            <div className={`mb-2 flex justify-center ${color}`}>
              {type === "instagram" ? <Instagram size={28} /> : <Facebook size={28} />}
            </div>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              View on {type === "instagram" ? "Instagram" : "Facebook"} ↗
            </p>
          </a>
        )}
      </div>
    </div>
  );
}
