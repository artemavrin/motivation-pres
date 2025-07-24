"use client"

import { TextLoop } from "@/components/ui/text-loop";
import Image from "next/image";
import { ImageCard } from "@/components/avatar-card";
import { motion } from "motion/react";

const MotionImage = motion.create(Image)

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full w-full items-center justify-center gap-4 page-animation">
        <h1 className="text-8xl font-bold gradient-text animate-fade-down uppercase">на этом все</h1>
        <div className="flex items-center gap-4">
          <ImageCard src="/avatars/01.gif" alt="person1" imgClassName="mt-3" className="animate-fade-down animate-duration-[500ms]" />
          <ImageCard src="/avatars/02.gif" alt="person2" imgClassName="mt-3" className="animate-fade-down animate-duration-[1000ms]" />
          <ImageCard src="/avatars/03.gif" alt="person3" imgClassName="mt-3" className="animate-fade-down animate-duration-[1500ms]" />
          <ImageCard src="/avatars/04.gif" alt="person4" imgClassName="mt-3" className="animate-fade-down animate-duration-[2000ms]" />
        </div>

        <div className="text-3xl text-muted-foreground animate-fade flex items-center gap-2">
          может есть <TextLoop interval={3} variants={{
            initial: { y: 10, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -10, opacity: 0 },
          }}>
            <span className="font-bold"> мысли</span>
            <span className="font-bold"> замечания</span>
            <span className="font-bold"> вопросы</span>
          </TextLoop>
          ?
        </div>

      </div>

    </>
  );
}
