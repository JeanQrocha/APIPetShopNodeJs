import Pets from '../model/pets.js'


class ServicePets {
    async FindAll() {
        return Pets.findAll() // {include} pesquisar na lib do sequelize
    }


    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar um ID");
        }
        const pets = await Pets.findByPk(id)

        if (!pets) {
            throw new Error(`Produto ${id} não encontrado`);

        }

        return pets
    }


    async Create(nome, tutor, raca) {
        if (!nome || !tutor || !raca) {
            throw new Error("Favor preencher todos os campos");
        }

        await Pets.create({
            nome, tutor, raca
        })

    }


    async Update(id, nome, tutor, raca) {
          if (!id) {
            throw new Error('Favor preencher todas as informaçoes')
        }

        const petsVelho = await Pets.findByPk(id)

         if (!petsVelho) {
            throw new Error(`Produto ${id} não encontrado`)
        }

        petsVelho.nome = nome || petsVelho.nome // se nao receber nada ele vai salvar o antigo
        petsVelho.tutor = tutor || petsVelho.tutor
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