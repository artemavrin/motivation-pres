
export const SlideTitle = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-10">
            <h1 className="text-8xl font-bold gradient-text animate-fade uppercase">{title}</h1>
        </div>
    );
};