import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        // await mongoose.connect(process.env.MONGO_URI);
        const conn = await mongoose.connect("mongodb+srv://rodrigolca:Tg0NO4QPAjmyppRv@bidcluster.goqxp.mongodb.net/?retryWrites=true&w=majority&appName=bidcluster");

        console.log(`MongoDB conectado e operante: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Erro na conexão com o banco de dados: ${error.message}`);
        process.exit(1); // finalização com erro; (0 seria sucesso)
    }
}