export default function AuthOptions() {
    return (
        <div className="text-xs flex flex-col gap-2">
            <a href="/" className="text-gray-400 hover:text-primary-light">
                Esqueceu sua senha?
            </a>
            <article className="flex justify-between">
                <section className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="accent-primary"/>
                    <label htmlFor="remember" className="text-primary">
                        Lembrar-me
                    </label>
                </section>
                <a href="/" className="text-primary">
                    Cadastre-se
                </a>
            </article>
        </div>
    )
    
}