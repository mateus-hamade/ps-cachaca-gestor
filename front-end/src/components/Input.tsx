interface InputProps {
    data: {
        icon: React.ReactNode;
        type: string;
        label: string;
        placeholder: string;
    }
}

export default function Input({ data }: InputProps){ 
    return (
        <div className="text-xs md:text-sm mb-4">
            <label className="text-sm block">{ data.label }</label>
            <div className="flex items-center gap-2 border p-1 focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-primary-light rounded-md transition-all">
                { data.icon }
                <input 
                    type={ data.type } 
                    className="w-full focus:outline-none group-focus:bg-slate-800"
                    required
                    placeholder={ data.placeholder }
                />
            </div>
        </div>
    )
}