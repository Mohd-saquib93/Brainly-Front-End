import { CrossIcon } from "./icons/CrossIcon";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../Config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
    isDark?: boolean;
}

export function CreateContentModal({ open, onClose, isDark = true }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if (!title || !link) return;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        onClose();
    }

    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className={`w-full max-w-md rounded-2xl p-6 transition-all duration-300 ${isDark
                    ? "bg-[#111827] border border-white/10 shadow-2xl shadow-teal-900/20"
                    : "bg-white border border-gray-200 shadow-2xl"
                    }`}>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                            Add Content
                        </h2>
                        <button
                            onClick={onClose}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${isDark ? "hover:bg-white/10 text-gray-400" : "hover:bg-gray-100 text-gray-500"
                                }`}
                        >
                            <CrossIcon />
                        </button>
                    </div>

                    {/* Fields */}
                    <div className="space-y-4">
                        <div>
                            <label className={`block text-sm mb-2 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                Title
                            </label>
                            <input
                                ref={titleRef}
                                placeholder="Enter a title"
                                className={`w-full py-2.5 px-4 rounded-xl outline-none border transition-all ${isDark
                                    ? "bg-white/[0.05] border-white/10 text-white placeholder-gray-500 focus:border-teal-500/50"
                                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-teal-400"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className={`block text-sm mb-2 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                Link
                            </label>
                            <input
                                ref={linkRef}
                                placeholder="Paste YouTube or Twitter link"
                                className={`w-full py-2.5 px-4 rounded-xl outline-none border transition-all ${isDark
                                    ? "bg-white/[0.05] border-white/10 text-white placeholder-gray-500 focus:border-teal-500/50"
                                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-teal-400"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Type selector */}
                    <div className="mt-5">
                        <label className={`block text-sm mb-2 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            Type
                        </label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setType(ContentType.Youtube)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${type === ContentType.Youtube
                                    ? "bg-teal-600 text-white"
                                    : isDark
                                        ? "bg-white/[0.05] text-gray-400 hover:bg-white/10"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                Youtube
                            </button>
                            <button
                                onClick={() => setType(ContentType.Twitter)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${type === ContentType.Twitter
                                    ? "bg-teal-600 text-white"
                                    : isDark
                                        ? "bg-white/[0.05] text-gray-400 hover:bg-white/10"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                Twitter
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        onClick={addContent}
                        className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-600/25 transition-all duration-300 cursor-pointer"
                    >
                        Add Content
                    </button>
                </div>
            </div>
        </>
    );
}
