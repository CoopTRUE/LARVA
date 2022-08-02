import express from 'express'
const app = express()
import { join, resolve } from 'path'
import cors from 'cors'
import compression from 'compression'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

// modules don't have __dirname
const __dirname = resolve()
app.use(cors())
app.use(express.json());
app.use(compression())
app.use(express.static(join(__dirname, 'dist')))


app.get('*', (request, response) => {
  response.sendFile(resolve(__dirname, 'dist', 'index.html'))
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});