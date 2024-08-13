import { Vegan } from "lucide-react";

export default function FormTittle() {
    return (
        <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-xl font-medium text-primary">
                Cachaça Gestor
            </h1>
            <Vegan className="text-secondary-light" />
        </div>
    )
}