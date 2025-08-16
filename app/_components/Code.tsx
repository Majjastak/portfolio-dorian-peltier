import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 bg-accent/50 hover:bg-accent/70 transition-colors border-accent border font-mono px-1 py-0.5 rounded-sm",
        className
      )}
      {...props}
    />
  );
};
