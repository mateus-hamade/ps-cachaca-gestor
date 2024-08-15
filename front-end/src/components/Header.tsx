import Tittle from "./Tittle"
import Nav from "./Nav"

import { Vegan } from "lucide-react"
import { User } from "lucide-react" 

interface HeaderProps {
    userName: string
}

export default function Header(data: HeaderProps){ 
    return (
        <header className="flex justify-between p-4 bg-white border-b h-min w-full">
            <Tittle 
                name="Cachaça Gestor" 
                icon={ 
                    <Vegan className="text-secondary-light p-1 md:p-0"/>
                }
            />
            <Nav />
            <section className="flex justify-center items-center gap-2">
                <div className="flex items-center text-sm gap-1">
                    <p className="hidden md:flex text-gray-500">Seja bem-vindo, </p>
                    <span className="font-medium text-primary">
                        { data.userName }
                    </span>
                </div>
                <div className="p-1 md:p-2 border shadow-sm rounded-full bg-gray-200">
                    <User className="text-gray-500"/>
                </div>
            </section>
        </header>
    )
}