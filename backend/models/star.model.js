import mongoose from "mongoose";

/**
 * Abaixo teremos o schema dos astros. Cada astro possui suas particularidades, e inclusive
 * A informação de até qual quantidade pode ser vendida.     
 */

const starSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true,
        description: "Figurinha que será utilizada para representar este astro."
    },

    star_type: {
        type: Number, // funcionará como um identificador, do tipo do astro.
        required: true,
        description: "O tipo de astro (código número) que esse objeto representa."
        // Tipo 1: pode ser a Lua; Tipo 2: uma estrela pequena, etc.
        // Esses tipos serão usados futuramente para valorização de cada astro.
    },

    price:{
        type: Number,
        required: true,
        description: "O valor que custa para compra."
    },

    name:{
        type: String,
        required: true,
        description: "O nome que será exibido no frontend."
    },

    description: String, // optional, será colocado no frontend, como descritivo detalhado sobre esse astro.
    
    max_sales: Number, // optional, caso precisarmos restringir um astro que seria raro, por exemplo. Se 0=indisponível sempre.
}, {
    timestamps: true,
});

/** Abaixo atribuiremos o modelo ao Schema, e lançaremos ele como objeto Star. */
const Star = mongoose.model('Star', starSchema);

export default Star;