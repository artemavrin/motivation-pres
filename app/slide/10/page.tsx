"use client";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { useEffect, useState } from "react";
import { IconArrowBarToRight, IconArrowRampRight, IconCalendar, IconCheck, IconCircleCheck, IconCircleCheckFilled, IconStar, IconStarFilled } from "@tabler/icons-react";
import confetti from "canvas-confetti";
import { Progress } from "@/components/ui/progress";
import { ImageCard } from "@/components/avatar-card";
import { Skill } from "@/components/skill";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { div } from "motion/react-client";
const MotionImage = motion.create(Image)

export default function Slide() {

    const [level, setLevel] = useState(1);
    const [value, setValue] = useState(90);
    const [scope, animate] = useAnimate();

    const updateSkill = () => {
        if (level === 1) {
            setValue(100);
            setTimeout(() => {
                setLevel(2);
                animate(scope.current, { scale: [1.25, 1] }, { duration: .7 });
                setValue(0);
            }, 300);
        }
    };

    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-10">
            <div className="flex gap-10 items-center">
                <ImageCard src="/avatars/01.png" alt="person1" imgClassName="mt-3" className="animate-fade-down animate-duration-[700ms]" />
                <div className="flex flex-col gap-5 w-[540px]">
                    {/* <h1 className="text-5xl font-bold gradient-text animate-fade-down animate-duration-[700ms] uppercase">Игорь</h1> */}
                    <div className="flex flex-col w-full gap-3 animate-fade-down animate-duration-[800ms]">
                        <Skill ref={scope} name="Python" value={value} level={level} />
                        <Skill name="TypeScript" value={32} level={0} />
                        <Skill name="React" value={16} level={0} />
                        <Skill name="Vue" value={25} level={0} />
                        <Skill name="Проектирование" value={0} level={0} />
                    </div>
                </div>
            </div>
            <Card className="w-[720px] animate-fade-down animate-duration-[1000ms]">
                <CardHeader>
                    <CardTitle>Метод DELETE для user endpoint</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                        <Badge>Букля</Badge>
                        <Badge variant="secondary">#API</Badge>
                        <Badge variant="secondary">#user</Badge>
                    </CardDescription>
                    <CardAction>
                        <IconStarFilled className="text-yellow-500" />
                    </CardAction>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>- Добавить метод <Badge variant="destructive">DELETE</Badge> для удаления пользователя через user endpoint</p>
                    <p>- Перед удалением проверять, что пользователь не является владельцем организации</p>
                    <p>- При удалении пользователя удалять его распознанные документы</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                            <IconArrowBarToRight />
                            <span>30.07.2025</span>
                        </Badge>
                        <Badge variant="secondary" className="py-0 pr-0">
                            python
                            <span className="font-bold bg-border py-1 px-2 rounded-md ml-1">20</span>
                        </Badge>
                    </div>
                    {
                        level === 1 ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <Button size="sm" variant="ghost">
                                        На доработку
                                    </Button>
                                    <Button size="sm" onClick={updateSkill}>
                                        Выполнено
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-2 h-8 cursor-default">
                                <IconCircleCheckFilled className="text-green-600" />
                                <span>Выполнено</span>
                            </div>
                        )

                    }
                </CardFooter>
            </Card>
        </div>

    );
}