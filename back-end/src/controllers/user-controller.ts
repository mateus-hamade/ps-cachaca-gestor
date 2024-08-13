import { connectionMongoDB } from '../db/connection'

export async function authUser(username: string, password: string) {
    const database = await connectionMongoDB()
    const collection = database.collection('User')

    const user = await collection.findOne({ username, password })

    return user?._id
}