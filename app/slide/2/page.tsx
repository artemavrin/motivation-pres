"use client"

import Image from "next/image";

export default function Home() {

    return (
        <>
            <div className="flex flex-col h-full w-full items-center justify-center gap-10">
                <h1 className="text-8xl font-bold gradient-text animate-fade-down animate-duration-[1200ms] uppercase">проблемы</h1>

                <div className="flex items-center gap-4">
                    <Image src="/cards/01.png" alt="components" width={380} height={100} className="animate-fade-down animate-duration-[500ms] invert dark:invert-0" />
                    <Image src="/cards/02.png" alt="components" width={380} height={100} className="animate-fade-down animate-duration-[1000ms] invert dark:invert-0" />
                    <Image src="/cards/03.png" alt="components" width={380} height={100} className="animate-fade-down animate-duration-[1500ms] invert dark:invert-0" />
                    <Image src="/cards/04.png" alt="components" width={380} height={100} className="animate-fade-down animate-duration-[2000ms] invert dark:invert-0" />
                </div>

            </div>
        </>
    );
}