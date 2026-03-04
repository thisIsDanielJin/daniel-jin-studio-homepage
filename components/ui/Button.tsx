import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  asChild?: boolean;
  children?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-bright to-bright-hover text-bg-primary font-bold hover:from-bright-hover hover:to-bright shadow-lg shadow-bright/20 hover:shadow-bright/30",
  secondary:
    "bg-bg-elevated text-text-primary hover:bg-bg-card border border-white/10",
  ghost:
    "bg-transparent text-text-primary hover:bg-white/5",
  outline:
    "bg-transparent border border-white/20 text-text-primary hover:bg-white/5 hover:border-white/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, asChild, children, disabled, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold",
      "transition-all duration-300 ease-out",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-bright focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "active:scale-[0.98]",
      "hover:scale-[1.02]",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (asChild) {
      return (
        <Slot ref={ref} className={classes}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
