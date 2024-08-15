import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017'

export async function connectionMongoDB() {
  const client = await new MongoClient(uri).connect()
  const database = client.db('db-cachaça-gestor')

  return database
}