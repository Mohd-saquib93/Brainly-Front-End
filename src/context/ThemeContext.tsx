import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    isDark: true,
    toggleTheme: () => { },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("brainly-theme");
        return saved ? saved === "dark" : true;
    });

    useEffect(() => {
        localStorage.setItem("brainly-theme", isDark ? "dark" : "light");
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
