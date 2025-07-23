"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { ThemeSwitcher } from "./ui/kibo-ui/theme-switcher";

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="fixed bottom-4 right-4 opacity-0 hover:opacity-100 transition-all">
      <ThemeSwitcher defaultValue="system" onChange={setTheme} value={theme as 'light' | 'dark' | 'system'} />
    </div>
  )
}
