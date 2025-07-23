"use client"

import { Button } from "./ui/button";
import { useVote } from "@/hooks/useVote";
import { IconMaximize, IconMinimize } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const StartVoteButton = () => {
    const { startVoting, status, reset } = useVote()
    const router = useRouter()
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

    return (
        <div className="flex gap-1">
            <Button onClick={() => {
                if (status === 'waiting') {
                    startVoting()
                    router.push('/vote-result')
                } else {
                    reset()
                }
            }}>
                {status === 'waiting' ? 'Начать голосование' : 'Сбросить'}
            </Button>
            {status === 'voting' && (
                <Button onClick={() => {
                    router.push('/vote-result')
                }}>
                    Продолжить
                </Button>
            )}
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
        </div>
    )
}