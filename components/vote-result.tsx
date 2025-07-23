
"use client"

import { motion } from "motion/react";
import { useVote } from "../hooks/useVote";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
export const VoteResult = () => {
    const { dark, light } = useVote()
    const { setTheme } = useTheme()
    const router = useRouter()
    const total = dark + light;
    const darkWidth = total === 0 ? 50 : (dark / total) * 100;
    const lightWidth = total === 0 ? 50 : (light / total) * 100;

    return (
        <div className="flex h-full w-full">

            <motion.div
                className="group flex flex-col items-center justify-center bg-black text-white h-full"
                animate={{ width: `${darkWidth}%` }}
                initial={{ width: "50%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <h1 className="text-9xl font-bold !cursor-pointer"
                    onClick={() => { 
                        setTheme('dark')
                        router.push('/slide/1')
                     }}
                >
                    {dark}</h1>
            </motion.div>
            <motion.div
                className="group flex flex-col items-center justify-center bg-white text-black h-full"
                animate={{ width: `${lightWidth}%` }}
                initial={{ width: "50%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <h1 className="text-9xl font-bold !cursor-pointer" onClick={() => { 
                    setTheme('light')
                    router.push('/slide/1')
                 }}>{light}</h1>
            </motion.div>
        </div>
    );
}
