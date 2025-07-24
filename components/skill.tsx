import { Progress } from "./ui/progress"
import { AnimatedNumber } from "./ui/animated-number"
import { Badge } from "./ui/badge"
import { Ref } from "react"

export const Skill = ({ ref, name, value, level }: { ref?: Ref<HTMLDivElement>, name: string, value: number, level: number }) => {
    return (
        <div className="flex gap-2 items-start w-full">
            <div ref={ref} className="bg-border rounded-md p-1 size-9 flex items-center justify-center border border-foreground/10">
                <AnimatedNumber
                    className='inline-flex items-center font-bold'
                    springOptions={{
                        bounce: 0,
                        duration: 700,

                    }}
                    value={level}
                />
            </div>
            <div className="flex flex-col gap-1 w-full pb-2">
                <div className="font-mono text-muted-foreground flex items-center gap-2">
                    <Badge variant="secondary">{value}%</Badge>
                    {name}
                </div>
                <Progress value={value} />
            </div>
        </div>

    )
}