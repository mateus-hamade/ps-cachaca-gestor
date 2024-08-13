import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.send('Processo Seletivo - Cachaça Gestor')
})

app.listen(3000, () => {
    console.log('Server is running!')
})