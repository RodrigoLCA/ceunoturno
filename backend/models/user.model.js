import mongoose from "mongoose";

/**
 * Abaixo teremos o schema dos usuarios.     
 */

const userSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        description: "Nome do usuário. Ex.: José Carlos"
    },

    email: {
        type: String, // funcionará como um identificador, do tipo do astro.
        required: true,
        description: "E-mail do usuário."
    },

    ativo:{
        type: Boolean,
        required: true,
        description: "Foi bloqueado ou inativado? Esta opção restringirá o acesso. Usado em caso de descuprimento de regras."
    },
}, {
    timestamps: true,
});

/** Abaixo atribuiremos o modelo ao Schema, e lançaremos ele como objeto Star. */
const User = mongoose.model('User', userSchema);

export default User;