import { useEffect }   from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth(route: string, isAuth: boolean) {
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate(route)
        }
    }, [isAuth, navigate, route])
}