import { cn } from "@/lib/utils"
import Image from "next/image"

export const ImageCard = ({ src, alt, className, imgClassName, label }: { src: string, alt: string, className?: string, imgClassName?: string, label?: string }) => {
    return (
        <div className={cn(`
            relative overflow-hidden rounded-xl w-[200px] h-[250px]
            bg-white/60                
            dark:bg-card               
            before:content-[''] before:absolute before:inset-0
            before:rounded-[12px]
            before:bg-[rgba(0,0,0,0.04)]
            before:backdrop-blur-[6px]
            before:shadow-[inset_0_0_8px_0_rgba(0,0,0,0.10)]
            dark:before:bg-[rgba(248,248,248,0.05)]
            dark:before:shadow-[inset_0_0_8px_0_rgba(248,248,248,0.25)]
        `, className)}>
            {label && <div className="text-center text-2xl absolute bottom-0 left-0 right-0 w-full z-30 p-2  overflow-hidden 
            bg-white/60                
            dark:bg-card               
            before:content-[''] before:absolute before:inset-0
            
            before:bg-[rgba(0,0,0,0.04)]
            
            before:shadow-[inset_0_0_8px_0_rgba(0,0,0,0.10)]
            dark:before:bg-[rgba(248,248,248,0.05)]
            dark:before:shadow-[inset_0_0_8px_0_rgba(248,248,248,0.25)]">{label}</div>}
            <Image src={src} alt={alt} fill className={cn("object-bottom object-contain", imgClassName)} />
        </div>
    )
}