'use client';

import { Badge } from "@/components/ui/badge";
import { BorderTrail } from "@/components/ui/border-trail";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { IconArrowUp, IconCalendar, IconChevronDown, IconStack2Filled, IconWand } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

type Task = {
    text: string;
    concreteness: "success" | "secondary" | "destructive";
    measurability: "success" | "secondary" | "destructive";
    achievability: "success" | "secondary" | "destructive";
    significance: "success" | "secondary" | "destructive";
}

const tasks: Task[] = [
    {
        text: 'Все работает, просто делать нечего - пишу задачу',
        concreteness: "destructive",
        measurability: "destructive",
        achievability: "destructive",
        significance: "destructive"
    },
    {
        text: 'Доработать существующий механизм отправки писем, чтобы было хорошо!',
        concreteness: "destructive",
        measurability: "destructive",
        achievability: "destructive",
        significance: "success"
    },
    {
        text: 'Прошу срочно починить КАСКАД! не работает ничегошечки :(',
        concreteness: "destructive",
        measurability: "destructive",
        achievability: "destructive",
        significance: "success"
    },
    {
        text: 'Изменить наименование справчника Автомобили на "Машинки" для удобства работы с ним',
        concreteness: "success",
        measurability: "success",
        achievability: "success",
        significance: "success"
    },{
        text: 'Реализовать массовый перенос задач на новые даты для ускорения переноса зависших задач',
        concreteness: "success",
        measurability: "success",
        achievability: "success",
        significance: "success"
    }
    
]

export default function Slide() {
    const [trigger, setTrigger] = useState(false);
    const timeoutRef = useRef(0);
    const [taskIndex, setTaskIndex] = useState(0);

    useEffect(() => {
        // Функция переключения и планирования следующего таймаута
        const tick = () => {

            setTrigger(prev => {
                const next = !prev;

                if (next) {
                    setTaskIndex((prev) => {
                        const next = prev + 1;
                        if (next >= tasks.length) {
                            return 0;
                        }
                        return next;
                    });
                }

                const delay = next ? 3500 : 1500;
                clearTimeout(timeoutRef.current);
                timeoutRef.current = window.setTimeout(tick, delay);
                return next;
            });
        };

        // Запускаем первый цикл: через 1000 мс установится true
        timeoutRef.current = window.setTimeout(tick, 700);

        return () => {
            // Очищаем активный тайм-аут
            clearTimeout(timeoutRef.current);
        };
    }, []);
    const blurSlideVariants = {
        container: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.01 },
            },
            exit: {
                transition: { staggerChildren: 0.01, staggerDirection: 1 },
            },
        },
        item: {
            hidden: {
                opacity: 0,
                filter: 'blur(10px) brightness(0%)',
            },
            visible: {
                opacity: 1,
                filter: 'blur(0px) brightness(100%)',
                transition: {
                    duration: 0.4,
                },
            },
            exit: {
                opacity: 0,
                x: -30,
                filter: 'blur(10px) brightness(0%)',
                transition: {
                    duration: 0.4,
                },
            },
        },
    };

    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-10">
            <div className="flex flex-col gap-2 w-[780px] scale-125">
                <div className="flex items-center gap-2 px-2 animate-fade-down animate-duration-[500ms]">
                    <div className="p-1 rounded-md bg-primary text-primary-foreground">
                        <IconStack2Filled className="size-4" />
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-2xl font-bold">Новая задача</h1>
                        <Badge variant="secondary">КАСКАД <IconChevronDown /></Badge>
                    </div>
                </div>
                <div
                    className="border-2 border-input rounded-2xl h-48 px-3 py-2 relative animate-fade-down animate-duration-[700ms]">
                    <TextEffect
                        className='inline-flex'
                        per='char'
                        preset='slide'
                        variants={blurSlideVariants}
                        trigger={trigger}
                    >
                        {tasks[taskIndex].text}
                    </TextEffect>
                    <BorderTrail
                        style={{
                            boxShadow:
                                '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                        }}
                        size={100}
                    />
                    <div className="absolute bottom-0 left-0 flex items-center justify-between w-full px-3 py-2">
                        <div className="flex gap-2 items-center">
                            <Badge className="transition-colors duration-700" variant={trigger ? tasks[taskIndex].concreteness : "secondary"}>конкретность</Badge>
                            <Badge className="transition-colors duration-700" variant={trigger ? tasks[taskIndex].measurability : "secondary"}>измеримость</Badge>
                            <Badge className="transition-colors duration-700" variant={trigger ? tasks[taskIndex].achievability : "secondary"}>достижимость</Badge>
                            <Badge className="transition-colors duration-700" variant={trigger ? tasks[taskIndex].significance : "secondary"}>значимость</Badge>
                        </div>

                        <div className="flex gap-1">
                            <Button size={"sm"} variant="ghost">
                                <IconCalendar className="size-4" />
                                <span>29.07.2025</span>
                            </Button>
                            <Button size={"sm"} variant="ghost">
                                <IconWand /> Улучшить
                            </Button>
                            <Button size={"sm"}>
                                <IconArrowUp />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}