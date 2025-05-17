import mysql from 'mysql2'
import env from 'dotenv'

env.config()

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

const db = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
})

try {
    db.query('SELECT 1')
    console.log('Conexão com o MySQL estabelecida com sucesso!')
} catch (error) {
    console.log('Erro ao se conectar ao MySQL: ', error)
}

export default db