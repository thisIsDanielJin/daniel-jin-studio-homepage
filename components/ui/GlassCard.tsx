import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const intensityStyles = {
  light: "bg-white/50 border-white/30",
  medium: "bg-white/70 border-white/50",
  strong: "bg-white/90 border-white/60",
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, glow = false, intensity = "medium", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl p-7",
          "backdrop-blur-xl",
          "shadow-lg shadow-black/5",
          "transition-all duration-300 ease-out",
          intensityStyles[intensity],
          hover && "hover:-translate-y-1 hover:shadow-xl",
          glow && "hover:shadow-bright/20",
          // Glass shine effect
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-300",
          hover && "hover:before:opacity-100",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
