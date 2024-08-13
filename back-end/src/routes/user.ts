import express from 'express'
import { authUser } from '../controllers/user-controller'

const router = express.Router()

router.post('/', async (request, response) => {
    const { username, senha } = request.body

    const user = await authUser(username, senha)

    if (!user) {
        return response.status(401).json({ message: 'Usuário não encontrado'})
    }

    return response.status(200).json({ message: 'Usuário autenticado'})
})

export default router