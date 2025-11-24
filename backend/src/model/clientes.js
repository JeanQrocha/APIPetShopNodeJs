import DataBase from "../config/database.js";

class Clientes {
    constructor() {
        this.model = DataBase.db.define("Clientes", {

            id: {
                type: DataBase.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataBase.db.Sequelize.STRING
            },

            telefone: {
                type: DataBase.db.Sequelize.STRING,
                unique: true
            },
            email: {
                type: DataBase.db.Sequelize.STRING,
                unique: true
            },
            senha: {
                type: DataBase.db.Sequelize.STRING
            }
        });
    }

    // Método static significa que pertence à classe, não à instância
    // Aqui definimos a associação: Cliente tem MUITOS Pets
    static associate(models) {

        /*
            Aqui criamos a relação:
            1 cliente -> vários pets
            "as: pets" define o alias que será usado no include
        */
        models.Clientes.hasMany(models.Pets, {
            foreignKey: "clienteId", // coluna que relaciona
            as: "pets"               // nome da associação
        });
    }
}

export default new Clientes().model;
// Exporta a classe para permitir chamar o associate()
export { Clientes };
