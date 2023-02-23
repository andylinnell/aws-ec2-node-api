import express from "express";
import cors from 'cors';
import 'dotenv/config'




const app = express()
app.use(cors())
app.use(express.json())

app.listen('5001', () => console.log('listening on port 5001'))

app.get('/', (req,res) => res.json('api working'))