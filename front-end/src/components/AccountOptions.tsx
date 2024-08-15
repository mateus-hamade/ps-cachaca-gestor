import Button from "./Button"

import { googleButton, microsoftButton } from "../utils/ButtonData"

export default function AuthOptions() {
    return (
        <section className="flex flex-col gap-2">
            <Button data={googleButton} />
            <Button data={microsoftButton} /> 
        </section>
    )
}