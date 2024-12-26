import express, { text } from 'express';
import { PORT } from './config/serverConfig.js';
import { connectToMongoDB } from './config/dbConfig.js';
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.text())

app.listen(PORT ,async()=>{
    console.log(`server is running on port ${PORT}`)
    await connectToMongoDB()
})