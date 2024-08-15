interface InfoSectionProps {
    title: string
    value: string
}

export default function InfoSection(data: InfoSectionProps) {
    return (
        <section className="flex flex-col items-center text-xs md:text-lg gap-2 md:gap-4 p-3 rounded hover:scale-105 shadow-md bg-secondary-light transition-all">
            <h1 className="text-primary font-medium">
                { data.title }
            </h1>
            <p className="text-red font-bold text-gray-600">
                { data.value }
            </p>
        </section>
    )
}