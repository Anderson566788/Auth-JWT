import express from 'express'
import env from 'dotenv'
import auth from './routes/auth.js'

env.config()

const app = express()
app.use(express.json())
app.use('/auth', auth)

app.get('/', (req, res) => res.send('API de autenticação'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Rodando na porta ${process.env.PORT}`))