import DataBase from "../config/database.js";
import Clientes from "./clientes.js";

class Pets {

    constructor() {
        this.model = DataBase.db.define("Pets", {

            id: {
                type: DataBase.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            clienteId: {
                type: DataBase.db.Sequelize.INTEGER
            },

            nome: {
                type: DataBase.db.Sequelize.STRING
            },

            raca: {
                type: DataBase.db.Sequelize.STRING
            }
        });

        this.model.belongsTo (Clientes, { foreignKey: 'clienteId', as: 'owner' });
        Clientes.hasMany (this.model, { foreignKey: 'clienteId', as: 'pets' });
    }

    // Cada pet pertence a um único cliente
    // static associate(models) {

    // //     /*
    // //         Aqui criamos a relação:
    // //         Pet -> pertence a -> Cliente
    // //         Alias usado: "owner"
    // //         Assim podemos dar include: [{ model: Clientes, as: 'owner' }]
    // //     */
    //     models.Pets.belongsTo(models.Clientes, {
    //         foreignKey: "clienteId",
    //         as: "owner"
    //     });
    // }
}
export default new Pets().model;

// Exporta a classe (associações)
// export { Pets };
