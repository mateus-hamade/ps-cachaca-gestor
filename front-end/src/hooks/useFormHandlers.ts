import { useState } from "react"
import { postUser } from "../services/api"
import { useNavigate } from "react-router-dom";

export function useFormHandlers() {
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");

    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const navigate = useNavigate();

    async function HandleSubmit(event: React.FormEvent) {
        event.preventDefault()

        await postUser(email, password).then((response) => {
            if (response.message === "Senha inválida") {
                setPasswordError(response.message)
            } else if (response.message === "Usuário não encontrado") {
                setEmailError(response.message)
            }


            return navigate("/dashboard", { 
                state: { 
                    email: response.user.username, 
                    isAuth: true 
                }
            })
        })
    }

    return { setEmail, setPassword, HandleSubmit, emailError, passwordError } 
}