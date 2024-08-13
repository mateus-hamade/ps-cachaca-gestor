import Form from "./components/Form";

export default function App() {
    return (
        <main className="min-h-screen flex items-center justify-center w-full">
            <section className="shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className="text-xl font-bold text-center mb-4 text-primary">Entrar</h1>
                <Form />
            </section>
        </main>
    )
}