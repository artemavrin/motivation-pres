"use client"

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const countSlides = 14


export const SlideProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [slide, setSlide] = useState(
        pathname.includes(`slide`) ? parseInt(pathname.split("/").pop() || "1") : 1);
    const router = useRouter();
    

    const nextSlide = () => {
        if (slide === countSlides || !pathname.includes(`slide`)) {
            return;
        }
        setSlide((prevSlide) => prevSlide + 1);
        router.push(`/slide/${slide + 1}`);
    };

    const prevSlide = () => {
        if (slide === 1 || !pathname.includes(`slide`)) {
            return;
        }
        setSlide((prevSlide) => prevSlide - 1);
        router.push(`/slide/${slide - 1}`);
    };

    const handleKeydown = useCallback((e: KeyboardEvent) => {
        if (e.code === "ArrowRight" || e.code === "Space") {
            nextSlide();
        } else if (e.code === "ArrowLeft" || e.code === "Backspace") {
            prevSlide();
        }
    }, [pathname]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [pathname, handleKeydown]);

    return (
        <>
            {children}
        </>
    );
};