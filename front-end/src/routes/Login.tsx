import Form           from "../components/Form"
import Division       from "../components/Division"
import AuthOptions    from "../components/AuthOptions"
import Tittle         from "../components/Tittle"
import AccountOptions from "../components/AccountOptions"

import { Vegan } from "lucide-react"

export default function Login() {
    return (
        <main className="min-h-screen flex items-center justify-center w-full bg-gray-200 bg-background bg-repeat-x bg-bottom">
            <section className="shadow-lg rounded-lg px-6 py-5 md:px-12 md:py-6 max-w-md bg-white z-10 transition-all">
                <Tittle 
                    name={"Cachaça Gestor"}
                    icon={
                        <Vegan className="text-secondary-light"/>
                    }    
                />
                
                <Form />
                <AuthOptions />
                <Division />
                <AccountOptions />
            </section>
        </main>
    )
}