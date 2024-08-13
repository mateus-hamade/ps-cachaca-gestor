import Background from "./components/Background";
import Login from "./pages/Login";

export default function App() {
    return (
        <div className="flex flex-col justify-end">
            <Login />
            <Background />       
        </div>
    )
}