import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
import db from '../db.js'
import env from 'dotenv'
import { authenticateToken } from './authMiddleware.js'
import { SECRET } from './authMiddleware.js'

env.config()

const router = express.Router()

router.post('/register', (req, res) => {
    const { username, password } = req.body

    const query = `INSERT INTO users (username, password) VALUES (?, ?)`
    db.query(query, [username, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ message: 'Usuário já existe' })
            }
            return res.status(500).json({ message: err.message })
        }

        res.status(201).json({ message: 'Usuário registrado com sucesso!' })
    })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    const query = `SELECT * FROM users WHERE username = ?`
    db.query(query, [username], (err, results) => {
        if (err) return res.status(500).json({ error: err.message })

        if (results.length === 0) {
            return res.status(401).json({ message: 'Usuário não encontrado' })
        }
        const user = results[0]

        if (user.password !== password){
            return res.status(401).json({ message: 'Senha incorreta' })
        }

        const token = jsonwebtoken.sign({ id: user.id, username: user.username}, SECRET, { expiresIn: '1h', })

        res.json({ token })
    })
})

router.get('/secret', authenticateToken, (req,res) => {
    res.json({ message: `olá, ${req.user.username}! Você está protegido`})
})

export default router