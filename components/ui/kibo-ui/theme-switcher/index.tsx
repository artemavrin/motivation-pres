'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { IconMaximize, IconMinimize } from '@tabler/icons-react';
import { Button } from '../../button';

const themes = [
  {
    key: 'light',
    icon: Sun,
    label: 'Light theme',
  },
  {
    key: 'dark',
    icon: Moon,
    label: 'Dark theme',
  },
];

export type ThemeSwitcherProps = {
  value?: 'light' | 'dark' | 'system';
  onChange?: (theme: 'light' | 'dark' | 'system') => void;
  defaultValue?: 'light' | 'dark' | 'system';
  className?: string;
};

export const ThemeSwitcher = ({
  value,
  onChange,
  defaultValue = 'system',
  className,
}: ThemeSwitcherProps) => {
  const [theme, setTheme] = useControllableState({
    defaultProp: defaultValue,
    prop: value,
    onChange,
  });
  const [mounted, setMounted] = useState(false);

  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(document.fullscreenElement !== null);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [])

  const handleThemeClick = useCallback(
    (themeKey: 'light' | 'dark' | 'system') => {
      setTheme(themeKey);
    },
    [setTheme]
  );

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        onClick={() => {
          if (fullscreen) {
            document.exitFullscreen()
            setFullscreen(false)
          } else {
            document.documentElement.requestFullscreen()
            setFullscreen(true)
          }
        }}>
        {fullscreen ? <IconMinimize /> : <IconMaximize />}
      </Button>
      <div
        className={cn(
          'relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border',
          className
        )}
      >
        {themes.map(({ key, icon: Icon, label }) => {
          const isActive = theme === key;

          return (
            <button
              aria-label={label}
              className="relative h-6 w-6 rounded-full"
              key={key}
              onClick={() => handleThemeClick(key as 'light' | 'dark' | 'system')}
              type="button"
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-secondary"
                  layoutId="activeTheme"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <Icon
                className={cn(
                  'relative z-10 m-auto h-4 w-4',
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                )}
              />
            </button>
          );
        })}
      </div>

    </div>
  );
};
