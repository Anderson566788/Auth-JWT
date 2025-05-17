import jsonwebtoken from 'jsonwebtoken'
import env from 'dotenv'
env.config()

export const SECRET = process.env.JWT_SECRET

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({ messsage: 'Token não fornecido' })

    jsonwebtoken.verify(token, SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido' })

        req.user = user
        next()
    })
}

