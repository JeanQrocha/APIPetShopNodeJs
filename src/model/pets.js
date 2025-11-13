import DataBase from "../config/database.js";



class Pets {
    constructor() {
        this.model = DataBase.db.define('cachorros', {
            id: {
                type: DataBase.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataBase.db.Sequelize.STRING
            },
            tutor: { type: DataBase.db.Sequelize.STRING },

            raca: { type: DataBase.db.Sequelize.STRING }
        })
        
    }
}

export default new Pets().model