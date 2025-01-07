import express from "express";
import dotenv from "dotenv";
import starRouter from "./routes/star.route.js";
import userRouter from "./routes/user.route.js";

/* database config */
import { connectDB } from "./config/database.js";

/* invocação do dotenv */
dotenv.config();

/* express e definição simples de porta */
const app = express();
const port = process.env.PORT;

/* Middleware para JSON */
app.use(express.json());

/* Importaremos as rotas backend de astros */
app.use('/astro', starRouter);

/* Importaremos rotas de usuarios */
app.use('/user', userRouter);

/* Rota Toc Toc (apenas para verificacoes) */
app.get("/toctoc", (req, res) => {
    res.send("Everything is OK.");
})

/* Ouvir o servidor na porta especificada. */
app.listen(port, () => {

    // Conexõa do DB
    connectDB();
    
    // OK.
    console.log("App Rodando na porta " + port);
});