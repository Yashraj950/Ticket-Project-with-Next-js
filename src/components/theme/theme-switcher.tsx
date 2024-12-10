"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, SunMedium } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunMedium
        className="w-4 h-4
    rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon className="w-4 h-4 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitcher;
