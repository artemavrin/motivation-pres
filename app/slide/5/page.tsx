
import { SlideCard } from "@/components/slide-card";

export default function Slide() {

    return (
        <SlideCard 
        image="/solutions/02.png"
        title="новый учет работ и людей"
        description={["работа с проектами и задачами", "повышение мотивации и вовлеченности", "оценка персонала"]}
        />
    );
}