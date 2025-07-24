"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { useEffect, useState } from "react";
import { IconStarFilled } from "@tabler/icons-react";
import confetti from "canvas-confetti";
const MotionImage = motion.create(Image)

export default function Slide() {
    const [value, setValue] = useState(0);


    const startConfetti = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.8 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.8 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };


    useEffect(() => {
        setValue(100);
        startConfetti();
    }, []);

    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-10">
            <MotionImage src="/solutions/06.png" alt="components" width={280} height={370} className="animate-jump animate-duration-[700ms] invert dark:invert-0" />
            <div className="flex  items-center gap-4 text-8xl font-bold gradient-text animate-jump animate-duration-[900ms] uppercase">

                <IconStarFilled className="size-16 text-yellow-500 animate-jump delay-[2500ms]" />
                <AnimatedNumber
                    className='inline-flex items-center'
                    springOptions={{
                        bounce: 0,
                        duration: 3000,

                    }}
                    value={value}
                />

            </div>
        </div>

    );
}