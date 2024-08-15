import express from 'express'

import { authUser } from '../controllers/user-controller'

const router = express.Router()

router.post('/', async (request, response) => {
    const { username, password } = request.body
    
    const user = await authUser(username)

    if (!user) {
        return response.status(404).json({
            message: "Usuário não encontrado",
        })
    } else if (user?.password !== password) {
        return response.status(401).json({
            message: "Senha inválida",
        })
    }
    
    return response.status(200).json({ user })
})

export default router