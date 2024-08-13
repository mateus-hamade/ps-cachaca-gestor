import Input from "./Input";

import { elements } from "../utils/FormElements";
import { defaultButton } from "../utils/ButtonData";

import Button from "./Button";

export default function Form() { 
    return (
        <form action="">
            {
                elements.map((element, index) => (
                    <Input key={ index } data={ element } />
                ))
            }
        
            <Button data={ defaultButton } />
        </form>
    )
}