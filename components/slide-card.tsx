import Image from "next/image";
import { BorderTrail } from "./ui/border-trail";

export const SlideCard = ({ image, title, description, extraImage }: { image: string, title: string, description: string[], extraImage?: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-10">
            <div className="relative size-[380px] animate-fade-down animate-duration-[500ms] rounded-2xl">
                <Image src={image} alt="components" width={380} height={100} className="invert dark:invert-0" />
                {extraImage}
                <BorderTrail
                    style={{
                        boxShadow:
                            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={100}
                />
            </div>
            <div className="flex flex-col gap-6 items-center">
                <h1 className="text-7xl font-bold gradient-text animate-fade-down animate-duration-[700ms] uppercase">{title}</h1>
                <div className="flex flex-col gap-2 items-center animate-fade-down animate-duration-[1000ms]">
                    {description.map((item, index) => (
                        <div key={index} className="text-3xl uppercase text-muted-foreground">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};