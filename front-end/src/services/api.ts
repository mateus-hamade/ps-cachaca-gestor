export async function postUser(email: string, password: string) {
    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: email,
            password
        })
    })

    return response.json()
}