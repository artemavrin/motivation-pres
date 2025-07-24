"use client"

import { Button } from "./ui/button";
import { useVote } from "@/hooks/useVote";
import { useRouter } from "next/navigation";

export const StartVoteButton = () => {
    const { startVoting, status, reset } = useVote()
    const router = useRouter()

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
        </div>
    )
}