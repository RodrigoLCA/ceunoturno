// import Star from "../models/star.model";
import Star from "../models/star.model.js";
import User from "../models/user.model.js";

// // criação de um novo usuário.
// export const NovoUsuario = async(req, res) => {
//     try {

//         const {nome, email, ativo} = req.body;

//         if( !nome || !email || !ativo) {
//             return res.status(400).json({
//                 success: false,
//                 message: "É necessário nome, email e atividade."
//             });
//         }

//         const novoUsuario = new User({nome, email, ativo});

//         await novoUsuario.save();

//         res.status(200).json({
//             success: true,
//             message: "Novo usuário adicionado com sucesso!"
//         });
//     } catch (erro) {
//         res.status(500).json({
//             success: false,
//             message: "Erro no servidor.",
//             erro
//         });
//     }
// }

// teremos /usuario:id
export const ObterUsuario = async(req, res) => {
    const { id } = req.params;

    try {

        const usuario = await User.findById(id);

        // não encontrou? retorna erro 400.
        if(!usuario) {
            return res.status(400).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }

        // caso contrário, retorna o valor do db.
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
    /**
     * Esse bloco de código está em construção.
     * Motivo: precisaremos do SCHEMA de aquisições.
     * Pois não estaremos obtendo do schema de STAR,
     * Pois o Schema de STAR terá apenas as informações
     * GERAIS das figurinhas. Para informações detalhadas
     * Como a mensagem, a foto, etc. Será puxado do schema
     * de aquisição do usuário, que é onde vai ficar essas
     * informações, de acordo com os diagramas.
     */
    const { id, astro_id } = req.params;

    if(!id) {
        return res.status(400).json({
            success: false,
            message: "É necessário ID do usuario."
        });
    }

    try {

        /**
         * let criteria = {id_usuario: id};
         * 
         * if(astro_id)
         *  criteria.id_astro = astro_id;
         * 
         * const purchase = await Purchase.find(criteria);
         * 
         * res.status(200).json({
         *  success: true,
         *  user_id: id,
         *  purchase
         * });
         */


        res.status(200).json({
            success: true,
            message: "Implementação em andamento...",
            usuario_id: id,
            purchase: {},
        });

    } catch( error ) {
        res.status(500).json({
            success: false,
            message: "Erro no servidor."
        })
    }
}

/**
 * Este método trata as rotas de user/block e user/unblock
 * ADMIN APENAS
 * serve para definir se o usuário estará com o login
 * ativo ou não.
 * 
 * Isso poderá futuramente definir a visibilidade dos
 * astro que este usuário comprou, por questões de
 * termos de uso e legalidade.
 */
export const UserSetBlock = async(req, res) => {
    try {

        const user_id = req.params.id;

        if(!user_id) {
            res.status(400).json({
                success: false,
                message: "ID do usuário é necessário."
            });
        }

        /**
         * Ajustaremos o updatedUser e setUserActive
         * 
         * updatedUser: o valor retornado pelo Update();
         * 
         * setUserActive: valor definido como true, que
         *                mudará de acordo com a rota
         *                identificada.
         */
        let updatedUser = {};
        let setUserActive = true;

        // rota de block? então setUserActive = false.
        if(req.path.includes("/block"))
            setUserActive = false;

        // aqui definir o update genérico, e daremos o
        // status de ativo ou não com base no resultado anterior.
        updatedUser = await User.findByIdAndUpdate(
            user_id,
            { ativo: setUserActive },
            { new: true } // retorna o documento atualizado
        );

        // retornaremos sucesso e o objeto atualizado.
        res.status(200).json({
            success: true,
            updatedUser,
        });

    } catch ( error ) {

        // qualquer erro, retorna erro.
        res.status(500).json({
            success: false,
            message: "Erro no servidor.",
            error
        });
    }
}

/**
 * Criação de um novo User.
 */
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