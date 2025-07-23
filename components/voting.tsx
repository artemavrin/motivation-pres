"use client";

import { Loader } from "lucide-react";
import { TextShimmer } from "./ui/text-shimmer";
import { SlidingNumber } from "./ui/sliding-number";
import { useVote } from "@/hooks/useVote";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Voting = ({ join }: { join?: boolean }) => {

    const { status, clients, vote } = useVote(join, () => {
        setCurrentVote('')
    })
    const [currentVote, setCurrentVote] = useState<'dark' | 'light' | "">("")

    useEffect(() => {
        setCurrentVote(localStorage.getItem('currentVote') as 'dark' | 'light' | "")
    }, [])

    useEffect(() => {
        localStorage.setItem('currentVote', currentVote)
        console.log(currentVote)
    }, [currentVote])

    if (!status) {
        return <Loader className="animate-spin" />
    }

 
    const darkVote = () => {
        if (currentVote === 'light') {
            vote('light', -1)
        } else if (currentVote === 'dark') {
            return
        }
        setCurrentVote('dark')
        vote('dark', 1)
    }

    const lightVote = () => {
        if (currentVote === 'dark') {
            vote('dark', -1)
        } else if (currentVote === 'light') {
            return
        }
        setCurrentVote('light')
        vote('light', 1)
    }


    if (status === 'waiting') {
        return (
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex flex-col items-center gap-1">
                    <SlidingNumber value={clients} className="text-7xl font-bold" />
                    <div className="text-sm">подключено</div>
                </div>
                <TextShimmer className='font-bold' duration={1.5}>
                    Ждем остальных...
                </TextShimmer>
            </div>
        )
    }

    const dark = currentVote === 'dark' ? 1 : 0;
    const light = currentVote === 'light' ? 1 : 0;

    const total = dark + light;
    const darkWidth = total === 0 ? 50 : (dark / total) * 100;
    const lightWidth = total === 0 ? 50 : (light / total) * 100;

    return (
        <div className="flex h-full w-full">

            <motion.div
                className="flex items-center justify-center bg-black text-white h-full"
                animate={{ width: `${darkWidth}%` }}
                initial={{ width: "50%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={darkVote}
            >
                {(total == 0 || currentVote == 'dark') && (
                    <h1 className={cn("text-3xl font-bold text-center transition-all", total === 0 ? "[writing-mode:vertical-rl]" : "")}>Темная тема</h1>
                )}
            </motion.div>
            <motion.div
                className="flex items-center justify-center bg-white text-black h-full"
                animate={{ width: `${lightWidth}%` }}
                initial={{ width: "50%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={lightVote}
            >
                {(total == 0 || currentVote == 'light') && (
                    <h1 className={cn("text-3xl font-bold text-center transition-all", total === 0 ? "[writing-mode:vertical-rl]" : "")}>Светлая тема</h1>
                )}
            </motion.div>

        {
            currentVote && (
                <Button 
                onClick={() => {
                    if (currentVote === 'dark') {
                        lightVote()
                    } else {
                        darkVote()
                    }
                }}
                className={cn("absolute bottom-10 left-1/2 -translate-x-1/2", currentVote === 'light' ? 'bg-black hover:bg-black text-white' : 'bg-white hover:bg-white text-black')}>Голосовать за {currentVote === 'dark' ? 'светлую' : 'темную'}</Button>
            )
        }

        </div>
    )

}
