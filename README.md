# 🔐 API de Autenticação com JWT, Express e MySQL

Este projeto é uma API simples de autenticação, que permite registrar usuários, realizar login e acessar rotas protegidas usando **JWT (JSON Web Tokens)**. A API foi construída com **Node.js**, **Express** e **MySQL**.
---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MySQL**
- **jsonwebtoken**
- **dotenv**

---

## 📁 Estrutura do Projeto

📦 raiz/
├── db.js
├── index.js
├── .env
├── package.json
├── routes/
│ └── auth.js
├── middleware/
│ └── authMiddleware.js

---

## ⚙️ Instalação

## ⚙️ Configuração do arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
PORT=3000
JWT_SECRET=sua_chave_secreta
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
```

## Crie a tabela no seu banco MySQL
sql
```
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

## 🔑 Rotas da API

## ✅ Registro
POST /auth/register

Body JSON:

json
Copiar
Editar
{
  "username": "usuario123",
  "password": "senhaSegura"
}

## 🔓 Login
```
POST /auth/login

{
  "username": "usuario123",
  "password": "senhaSegura"
}


{
  "token": "SEU_TOKEN_JWT"
}
```

## 🔐 Rota Protegida
GET /auth/secret

Header:
```
Authorization: Bearer SEU_TOKEN_JWT
Resposta:
{
  "message": "Olá, usuario123! Você está protegido"
}
```

## 🧪 Testando com Postman

1. Registro:
```
Método: POST

URL: http://localhost:3000/auth/register

Body (JSON): username, password
```

2. Login:
```
Método: POST

URL: http://localhost:3000/auth/login

Body (JSON): username, password

Copie o token da resposta.
```

3. Acesso protegido:
Método: GET
```
URL: http://localhost:3000/auth/secret

Headers:

Key: Authorization

Value: Bearer SEU_TOKEN
```

---
Desenvolvido por Anderson Freire. 🚀
