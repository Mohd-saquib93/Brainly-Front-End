import { Trash2, Youtube, Twitter } from "lucide-react";
import { BACKEND_URL } from "../Config";
import axios from "axios";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
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

  return (
    <div className={`p-5 rounded-2xl border min-h-48 w-full transition-all duration-300 hover:scale-[1.02] group ${isDark
      ? "bg-white/[0.04] border-white/[0.08] hover:border-teal-500/30 backdrop-blur-sm"
      : "bg-white border-gray-200 hover:border-teal-300 hover:shadow-lg"
      }`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className={`flex items-center gap-2 text-sm font-medium truncate max-w-[80%] ${isDark ? "text-gray-300" : "text-gray-700"
          }`}>
          <div className={`shrink-0 ${type === "youtube" ? "text-red-500" : "text-sky-500"}`}>
            {type === "youtube" ? <Youtube size={18} /> : <Twitter size={18} />}
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
      </div>
    </div>
  );
}
