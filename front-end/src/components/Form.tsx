import Input from "./Input"
import Button from "./Button"

import { inputs } from "../utils/FormElements"
import { defaultButton } from "../utils/ButtonData"

import { useFormHandlers } from "../hooks/useFormHandlers"

export default function Form() {
  const { setEmail, setPassword, HandleSubmit, emailError, passwordError } = useFormHandlers()

  return (
    <form onSubmit={HandleSubmit} className="mt-4">
      {
        inputs.map((input, index) => {
          if (input.type === "email") {
            return <Input
              key={index}
              data={input}
              onChangeData={setEmail}
              error={{ emailError }}
            />
          }

          return <Input
            key={index}
            data={input}
            onChangeData={setPassword}
            error={{ passwordError }}
          />
        })
      }
      <Button data={defaultButton} />
    </form>
  )
}