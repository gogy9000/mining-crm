'use client'
import { Button, ButtonProps } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggler(props: ButtonProps) {
  const { setTheme, theme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true));

  const onSetTheme = () => {
    switch (theme) {
      case 'dark':
        return (setTheme('light'))
      case 'light':
        return (setTheme('dark'))
      default: setTheme('dark')
    }
  }

  // this line is the key to avoid the error.
  if (!hasMounted) return null;

  return (
    <Button
      onClick={onSetTheme}
      variant="outline"
      size="icon"
      {...props}
    >
      {{
        dark:
          <Sun className="h-[1.2rem] w-[1.2rem]" />,
        light:
          <Moon className="absolute h-[1.2rem] w-[1.2rem]" />,
        undefined:
          <Moon className="absolute h-[1.2rem] w-[1.2rem]" />
      }[theme as string]}
    </Button>
  );
}
