interface InputProps {
    data: {
        icon: React.ReactNode;
        type: string;
        label: string;
        placeholder: string;
    }
}

export const Input: React.FC<InputProps> = ({ data }) => { 
    return (
        <div className="mb-4">
            <label className="text-sm block">{ data.label }</label>
            <a className="flex items-center gap-2 border p-1">
                { data.icon }
                <input type={ data.type } 
                    className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    required
                    placeholder={ data.placeholder }
                />
            </a>
        </div>
    )
}

export default Input;

{/* <input type="password" id="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required></input> */}