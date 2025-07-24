import { SlideCard } from "@/components/slide-card";
import Image from "next/image";

export default function Slide() {

    return (
        <SlideCard
            image="/solutions/05.png"
            title="индивидуальное развитие"
            description={["создание индивидуальных планов развития", "анализ сотрудников на основании выполненных работ"]}
            extraImage={<Image src="/avatars/bento-14-avatar.png" alt="components" width={113} height={100} className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />}
        />
    );
}