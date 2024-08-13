import { User, KeyRound } from 'lucide-react';

export const elements = [
    { 
        icon: <User className="text-gray-400" />,
        type: "text",
        label: "Usuário",
        placeholder: "Digite seu usuário"
    },
    { 
        icon: <KeyRound className="text-gray-400" />,
        type: "password",
        label: "Senha",
        placeholder: "Digite sua senha"
    }
];
