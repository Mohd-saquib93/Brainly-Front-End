import { Brain } from "lucide-react";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { Sidebaritem } from "./Sidebaritem";
import { LayoutGrid } from "lucide-react";

export type ContentFilter = "all" | "twitter" | "youtube" | "instagram" | "facebook";

interface SidebarProps {
    activeFilter: ContentFilter;
    onFilter: (filter: ContentFilter) => void;
    isDark?: boolean;
}

export function Sidebar({ activeFilter, onFilter, isDark = true }: SidebarProps) {
    return (
        <div className={`h-screen w-72 fixed left-0 top-0 flex flex-col transition-colors duration-300 ${isDark
            ? "bg-[#0a0e1a] border-r border-white/[0.06]"
            : "bg-white border-r border-gray-200"
            }`}>
            {/* Logo */}
            <div className={`flex items-center gap-3 text-2xl font-bold pt-7 px-6 mb-8 ${isDark ? "text-white" : "text-gray-900"
                }`}>
                <div className={`p-2 rounded-xl ${isDark ? "bg-teal-500/20" : "bg-teal-100"}`}>
                    <Brain className="text-teal-400" size={28} />
                </div>
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                    Brainly
                </span>
            </div>

            {/* Navigation */}
            <div className="px-4 space-y-1">
                <p className={`text-xs font-semibold uppercase tracking-wider px-4 mb-3 ${isDark ? "text-gray-600" : "text-gray-400"
                    }`}>
                    Content
                </p>
                <Sidebaritem
                    text="All Content"
                    icon={<LayoutGrid size={20} />}
                    onClick={() => onFilter("all")}
                    isActive={activeFilter === "all"}
                    isDark={isDark}
                />
                <Sidebaritem
                    text="Twitter"
                    icon={<TwitterIcon />}
                    onClick={() => onFilter("twitter")}
                    isActive={activeFilter === "twitter"}
                    isDark={isDark}
                />
                <Sidebaritem
                    text="Youtube"
                    icon={<YoutubeIcon />}
                    onClick={() => onFilter("youtube")}
                    isActive={activeFilter === "youtube"}
                    isDark={isDark}
                />
                <Sidebaritem
                    text="Instagram"
                    icon={<InstagramIcon />}
                    onClick={() => onFilter("instagram")}
                    isActive={activeFilter === "instagram"}
                    isDark={isDark}
                />
                <Sidebaritem
                    text="Facebook"
                    icon={<FacebookIcon />}
                    onClick={() => onFilter("facebook")}
                    isActive={activeFilter === "facebook"}
                    isDark={isDark}
                />
            </div>
        </div>
    );
}