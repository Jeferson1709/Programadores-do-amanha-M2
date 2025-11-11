import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const password_admin = process.env.PASSWORD_ADMIN;
const chave_api_gemini = process.env.CHAVE_API_GEMINI;

app.listen(PORT, () => {
    console.log(`Sevidor rodando na porta ${PORT}`);
    console.log(`Sevidor rodando na porta ${password_admin}`);
    console.log(`Sevidor rodando na porta ${chave_api_gemini}`);

})