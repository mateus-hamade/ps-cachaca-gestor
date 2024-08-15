import { useState, useEffect } from 'react';

export default function PopUp() {
    const [isAnimating, setAnimating] = useState(false);

    useEffect(() => {
        setAnimating(true);

        const timer = setTimeout(() => {
            setAnimating(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed inset-x-0 top-0 flex items-center justify-center z-50 transition-transform duration-300 ease-in-out ${isAnimating ? 'translate-y-6' : '-translate-y-full'}`}>
            <div className="bg-primary px-6 py-4 rounded shadow-lg">
                <h2 className="text-white text-sm font-semibold">Logado com sucesso!</h2>
            </div>
        </div>
    );
}
