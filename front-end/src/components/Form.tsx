import Input from "./Input";

import { User, KeyRound } from "lucide-react";

export const Form = () => { 
    const elements = [
        { 
            icon: <User className="text-gray-600"/>,
            type: "text",
            label: "Usuário",
            placeholder: "Digite seu usuário"
        },
        { 
            icon: <KeyRound className="text-gray-600"/>,
            type: "password",
            label: "Senha",
            placeholder: "Digite sua senha"
        }
    ];

    return (
        <form action="">
            {
                elements.map((element, index) => (
                    <Input key={index} data={element} />
                ))
            }
        
            <button type="submit" className="w-full shadow-sm rounded px-2 py-1 text-white bg-secondary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-1 ring-secondary transition-all text-bold">Entrar</button>
        </form>
    )
}

export default Form;