import * as React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "text-white",
    outline:
      "border border-white/20 text-white bg-transparent hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
