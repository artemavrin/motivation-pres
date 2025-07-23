"use client"
import { TextLoop } from "@/components/ui/text-loop";
import Image from "next/image";
import { ImageCard } from "@/components/avatar-card";
import { motion } from "motion/react";

const MotionImage = motion.create(Image)

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full w-full items-center justify-center gap-4">
        <TextLoop className='text-8xl uppercase font-bold py-10 w-full animate-jump' interval={3}>
          <span className="gradient-text">Мотивация</span>
          <span className="gradient-text">Эффективность</span>
          <span className="gradient-text">Результат</span>
        </TextLoop>
        <MotionImage
          initial={{ opacity: 0, top: "50%", left: "50%", rotate: 0 }}
          animate={{ opacity: 1, top: "25%", left: "20%", rotate: -12 }}
          transition={{ duration: .3, ease: "circOut" }}
          src="/icons/gamepad.png" alt="person1" width={100} height={100} className="absolute z-10 -rotate-[12deg] animate-wiggle animate-infinite animate-ease-in-out animate-duration-[2000ms]" />

        <MotionImage
          initial={{ opacity: 0, top: "50%", right: "50%", rotate: 0 }}
          animate={{ opacity: 1, top: "20%", right: "20%", rotate: 22 }}
          transition={{ duration: .3, ease: "circOut", delay: .1 }}
          src="/icons/light.png" alt="person1" width={100} height={100} className="absolute z-10 rotate-[22deg] animate-wiggle animate-infinite animate-ease-in-out animate-duration-[3000ms]" />
        <MotionImage
          initial={{ opacity: 0, bottom: "50%", right: "50%", rotate: 0 }}
          animate={{ opacity: 1, bottom: "25%", right: "12%", rotate: 20 }}
          transition={{ duration: .3, ease: "circOut", delay: .2 }}
          src="/icons/lightning.png" alt="person1" width={100} height={100} className="absolute z-10 rotate-[20deg] animate-wiggle animate-infinite animate-duration-[5000ms] animate-delay-0 animate-ease-in-out animate-alternate-reverse animate-fill-both" />
        <MotionImage
          initial={{ opacity: 0, bottom: "50%", left: "50%", rotate: 0 }}
          animate={{ opacity: 1, bottom: "20%", left: "15%", rotate: -20 }}
          transition={{ duration: .3, ease: "circOut", delay: .3 }}
          src="/icons/chart.png" alt="person1" width={100} height={100} className="absolute z-10 -rotate-[20deg] animate-wiggle animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-in-out animate-alternate-reverse animate-fill-both" />


        <div className="flex items-center gap-4">
          <ImageCard src="/avatars/01.gif" alt="person1" imgClassName="mt-3" className="animate-fade-down animate-duration-[500ms]"/>
          <ImageCard src="/avatars/02.gif" alt="person2" imgClassName="mt-3" className="animate-fade-down animate-duration-[1000ms]" />
          <ImageCard src="/avatars/03.gif" alt="person3" imgClassName="mt-3" className="animate-fade-down animate-duration-[1500ms]" />
          <ImageCard src="/avatars/04.gif" alt="person4" imgClassName="mt-3" className="animate-fade-down animate-duration-[2000ms]" />
        </div>

        <div className="text-3xl text-muted-foreground animate-fade">
          Как повысить мотивацию и вовлеченность сотрудников
        </div>

      </div>

    </>
  );
}
