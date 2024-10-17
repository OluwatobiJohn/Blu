import * as React from "react";

import { cn } from "@/lib/utils";

import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

const PasswordInput = React.forwardRef(({ className, type, ...props }, ref) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  console.log(isFocused);

  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center h-12 w-full rounded-md border border-gray-100 bg-[#F4F5F9] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      <input
        className="h-10 outline-none w-full bg-[#F4F5F9]"
        type={isVisible ? "text" : "password"}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
