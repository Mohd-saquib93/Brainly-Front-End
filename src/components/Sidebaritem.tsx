import type { ReactElement } from "react";

export function Sidebaritem({ text, icon, onClick, isActive, isDark = true }: {
    text: string;
    icon: ReactElement;
    onClick?: () => void;
    isActive?: boolean;
    isDark?: boolean;
}) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-3 py-2.5 px-4 cursor-pointer rounded-xl transition-all duration-200 ${isActive
                ? isDark
                    ? "bg-teal-500/20 text-teal-400 font-medium"
                    : "bg-teal-100 text-teal-700 font-medium"
                : isDark
                    ? "text-gray-400 hover:bg-white/[0.06] hover:text-gray-200"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
        >
            <div className="flex-shrink-0">{icon}</div>
            <div>{text}</div>
        </div>
    );
}