"use client"

import { useEffect, useRef, useState } from "react"


export const useVote = (join?:boolean, onReset?: () => void) => {

    const ref = useRef<WebSocket | null>(null)
    const [status, setStatus] = useState('waiting')
    const [clients, setClients] = useState(0)
    const [dark, setDark] = useState(0)
    const [light, setLight] = useState(0)


    const startVoting = () => {
        ref.current?.send(JSON.stringify(["startVote", {}]))
    }

    const stopVoting = () => {
        ref.current?.send(JSON.stringify(["endVote", {}]))
    }

    const reset = () => {
        ref.current?.send(JSON.stringify(["reset", {}]))
    }

    const vote = (vote: 'dark' | 'light', value: number) => {
        ref.current?.send(JSON.stringify([vote, value]))
    }

    useEffect(() => {
        ref.current = new WebSocket("wss://ws.mavrinsoft.com")
        ref.current.onopen = () => {
            if (join) {
                ref.current?.send(JSON.stringify(["join", {}]));
            }
        }
        ref.current.onmessage = (event) => {
            const parsed = JSON.parse(event.data)
            console.log(parsed)
            const [type, data] = parsed;
            switch (type) {
                case "state":
                    setStatus(data.status)
                    setClients(data.clients)
                    setDark(data.dark)
                    setLight(data.light)
                    break;
                case "reset":
                    setStatus(data.status)
                    setClients(data.clients)
                    setDark(data.dark)
                    setLight(data.light)    
                    onReset?.()
                    break;
                case "clients":
                    setClients(data.clients)
                    break;
                case "dark":
                    setDark(data.dark)
                    break;
                case "light":
                    setLight(data.light)
                    break;
                case "status":
                    setStatus(data.status)
                    break;
                default:
                    break;
            }
        }

        return () => {
            ref.current?.close()
        }
    }, [])

    return {
        status,
        clients,
        dark,
        light,
        startVoting,
        stopVoting,
        reset,
        vote,
    }

}