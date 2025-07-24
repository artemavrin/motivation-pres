import { SlideCard } from "@/components/slide-card";
import Image from "next/image";

export default function Slide() {

    return (
        <SlideCard
            image="/solutions/08.png"
            title="Комплексное решение"
            description={["Полное решение для повышения мотивации и вовлеченности сотрудников"]}
        />
    );
}