import DataBase from '../config/database.js';
import Pets, { Pets as PetsClass } from "./pets.js";
import Clientes, { Clientes as ClientesClass } from "./clientes.js";

// Este objeto guarda SOMENTE os models Sequelize
// Aqui que o include pega os models
const models = {
    Clientes,
    Pets
};

// Este objeto guarda as CLASSES que têm o método associate()
const modelClasses = {
    Clientes: ClientesClass,
    Pets: PetsClass
};

// Agora que TODOS os models já foram carregados,
// podemos montar TODAS as associações:
Object.keys(modelClasses).forEach(name => {

    // Se a classe tiver o método associate, executamos
    if (typeof modelClasses[name].associate === "function") {
        modelClasses[name].associate(models);
    }
});

// Exporta o objeto models já com as associações prontas
export default models;
