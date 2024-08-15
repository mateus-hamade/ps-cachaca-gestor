import Input  from "./Input"
import Button from "./Button"

import { elements }      from "../utils/FormElements"
import { defaultButton } from "../utils/ButtonData"

import { useFormHandlers } from "../hooks/useFormHandlers"

export default function Form() {
    const { setEmail, setPassword, HandleSubmit, emailError, passwordError } = useFormHandlers()

    return (
        <form onSubmit={ HandleSubmit } className="mt-4">
            {
                elements.map((element, index) => {
                    if (element.type === "email") {
                        return <Input 
                                    key={ index } 
                                    data={ element } 
                                    onChangeData={ setEmail } 
                                    error={{
                                        emailError
                                    }}
                                />
                    } 

                    return <Input 
                                key={ index } 
                                data={ element } 
                                onChangeData={ setPassword } 
                                error={{
                                    passwordError
                                }}
                            />
                })
            }
            <Button data={ defaultButton } />
        </form>
    )
}