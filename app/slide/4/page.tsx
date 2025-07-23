import Image from "next/image";
import { SlideCard } from "@/components/slide-card";

export default function Slide() {

    return (
        <SlideCard 
        image="/solutions/01.png"
        title="один на один"
        description={["раз в полгода проводить встречи один на один с каждым сотрудником", "обратная связь по работе и результатам"]}
        extraImage={<Image src="/avatars/bento-21-avatar.png" alt="components" width={150} height={100} className="absolute top-[49%] left-[50%] -translate-x-1/2 -translate-y-1/2" />}
        />
    );
}