import Pets from '../model/pets.js'


class ServicePets {
    async FindAll(options = {}) {
        const pets = await Pets.findAll(options);

        return pets
    }


    async FindOne(id, options = {}) {
        if (!id || !options) {
            throw new Error("Favor informar um ID");
        }
        const pets = await Pets.findByPk(id, options)

        if (!pets) {
            throw new Error(`Produto ${id} não encontrado`);
        }
        return pets
    }


    async Create(clienteId, nome, raca) {
        if (!clienteId || !nome || !raca) {
            throw new Error("Favor preencher todos os campos");
        }

        await Pets.create({
            clienteId, nome, raca
        })

    }


    async Update(id, clienteId, nome, raca) {
        if (!id) {
            throw new Error('Favor preencher todas as informaçoes')
        }

        const petsVelho = await Pets.findByPk(id)

        if (!petsVelho) {
            throw new Error(`Produto ${id} não encontrado`)
        }

        petsVelho.nome = nome || petsVelho.nome // se nao receber nada ele vai salvar o antigo
        petsVelho.clienteId = clienteId || petsVelho.clienteId
        petsVelho.raça = raca || petsVelho.raca


        return petsVelho.save()
    }


    async Delete(id) {
        if (!id) {
            throw new Error("Favor informar um ID");
        }
        const pets = await Pets.findByPk(id)

        if (!pets) {
            throw new Error(`Produto ${id} não encontrado`);

        }

        return pets.destroy()
    }
}

export default new ServicePets()