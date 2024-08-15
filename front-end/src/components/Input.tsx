interface InputProps {
    data: {
        icon: React.ReactNode
        type: string
        label: string
        placeholder: string
    }
    error: {
        emailError?: string
        passwordError?: string
    }
    onChangeData: (value: string) => void
}

export default function Input({ data, onChangeData, error }: InputProps) {
    return (
        <div className="text-xs md:text-sm mb-4">
            <label className="text-sm block">{data.label}</label>
            <div className="flex items-center gap-2 border p-1 focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-primary-light rounded-md transition-all">
                {data.icon}
                <input
                    required
                    type={data.type}
                    placeholder={data.placeholder}
                    className="w-full focus:outline-none group-focus:bg-slate-800"
                    onChange={(e) => onChangeData(e.target.value)}
                />
            </div>
            <p id="error" className="text-red-500 text-xs italic transition-all">
                {error.emailError || error.passwordError}
            </p>
        </div>
    )
}