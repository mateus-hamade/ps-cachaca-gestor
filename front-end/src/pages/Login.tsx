import Form from "../components/Form";
import Division from "../components/Division";
import AuthOptions from "../components/AuthOptions";
import FormTittle from "../components/FormTittle";
import AccountOptions from "../components/AccountOptions";

export default function Login() {
    return (
        <main className="min-h-screen flex items-center justify-center w-full bg-gray-200">
            <section className="shadow-lg rounded-lg px-12 py-5 max-w-md bg-white z-10">
                <FormTittle />
                <Form />
                <AuthOptions />
                <Division />
                <AccountOptions />
            </section>
        </main>
    )
}