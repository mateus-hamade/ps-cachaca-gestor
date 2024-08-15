import { User, KeyRound } from 'lucide-react'

export const elements = [
    { 
        icon: <User className="text-gray-400" />,
        type: "email",
        label: "Email",
        placeholder: "Digite seu email"
    },
    { 
        icon: <KeyRound className="text-gray-400" />,
        type: "password",
        label: "Senha",
        placeholder: "Digite sua senha"
    }
];
