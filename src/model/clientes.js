import DataBase from "../config/database.js";



class Clientes {
    constructor() {
        this.model = DataBase.db.define('clientes', {
            id: {
                type: DataBase.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataBase.db.Sequelize.STRING
            },
            telefone: { type: DataBase.db.Sequelize.STRING }
        })
    }
}

export default new Clientes().model