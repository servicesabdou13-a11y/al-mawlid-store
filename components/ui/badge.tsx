import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary-500 text-cream-200",
        honey: "border-transparent bg-honey-500 text-white",
        premium: "border-transparent bg-gradient-to-r from-honey-600 to-honey-400 text-white",
        bestseller: "border-transparent bg-primary-600 text-cream-200",
        new: "border-transparent bg-blue-500 text-white",
        organic: "border-transparent bg-green-600 text-white",
        outline: "border-primary-300 text-primary-600 bg-transparent",
        "outline-honey": "border-honey-400 text-honey-600 bg-transparent",
        secondary: "border-transparent bg-cream-300 text-earth-700",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
