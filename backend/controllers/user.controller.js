// import Star from "../models/star.model";
import User from "../models/user.model.js";

// apenas para teste e criação da collection
export const NovoUsuario = async(req, res) => {
    try {

        const {nome, email, ativo} = req.body;

        if( !nome || !email || !ativo) {
            return res.status(400).json({
                success: false,
                message: "É necessário nome, email e atividade."
            });
        }

        const novoUsuario = new User({nome, email, ativo});

        await novoUsuario.save();

        res.status(200).json({
            success: true,
            message: "Novo usuário adicionado com sucesso!"
        });
    } catch (erro) {
        res.status(500).json({
            success: false,
            message: "Erro no servidor.",
            erro
        });
    }

}

// teremos /usuario:id
export const ObterUsuario = async(req, res) => {
    const { id } = req.params;

    console.log(`Comando de obtenção de um usuario: id ${id}`)

    try {
        const usuario = await User.findById(id)
console.log(usuario);
        if(!usuario) {
            return res.status(400).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Erro no servidor.",
            error
        });
    }
}

// teremos /usuario:id/stars/:astro_id
export const ObterAstro = async(req, res) => {
    const { id, astro_id } = req.params;

    try {
        // aqui teremos a interação com o modelo
        // de astros.
        res.status(400).json({
            success: false,
            message: "Funcionalidade em processo...",
            usuario_id: id,
        })
    } catch( error ) {
        res.status(500).json({
            success: false,
            message: "Erro no servidor."
        })
    }
}

// teremos /usuario:id/bloquear
export const Bloquear = async(req, res) => {

    const { id } = req.params;

    try {
        const bloq_usuario = await User.findByIdAndUpdate(
            id,
            { ativo: false },
            {new: true } // Retorna o documento atualizado
        );

        if(!bloq_usuario) {
            return res.status(404).json({
                success: false,
                message: 'Usuario não encontrado, admin.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Usuario bloqueado com sucesso.'
        });
    } catch (erro) {
        res.status(500).json({
            success: false,
            message: 'Erro no servidor.'
        });
    }
}

export const Novo = async(req, res) => {
    try {
        const { nome, email, ativo } = req.body;

        if(!nome || !email || !ativo) {
            return res.status(400).json({
                success: false,
                message: "Nome, email e atividade são obrigatórios."
            });
        }

        const newUser = new User({nome, email, ativo});

        await newUser.save();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro ao criar novo usuario."
        });
    }
}