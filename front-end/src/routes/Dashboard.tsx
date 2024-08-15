import Body    from "../components/Body"
import Header  from "../components/Header"
import useAuth from "../hooks/useAuth"

import { useLocation } from "react-router-dom"

export default function DashBoard(){
    const location = useLocation()
    const { state } = location

    const { email, isAuth } = state || { email: "", isAuth: false }

    useAuth("/", isAuth)

    const match = new RegExp("[a-zA-z0-9.]+").exec(email)
    const userName = match ? match[0] : ""

    return (
        <main className="flex flex-col h-screen">
            <Header userName={ userName }/>
            <Body />
        </main>
    )
}