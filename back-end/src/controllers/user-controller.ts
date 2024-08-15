import { connectionMongoDB } from '../db/connection'

export async function authUser(email: string, password: string) {
    const database = await connectionMongoDB()
    const collection = database.collection('User')

    const user = await collection.findOne({ 
        username: email,
    })

    return user
}