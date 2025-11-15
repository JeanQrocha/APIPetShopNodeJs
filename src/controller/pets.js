import ServicePet from '../service/pets.js'
import models from '../model/models.js'



class ControllerPets {
    async FindAll(_, res) { //se o parametro nao for usado, colocar _ no lugar
        try {
            const pets = await ServicePet.FindAll({
                include: [{
                    model: models.Clientes,
                    as: 'owner', // Usando o alias definido no Pet.belongsTo(Clientes)
                    attributes: ['id', 'nome', 'telefone']
                }]
            })
            res.status(200).send(
                { pets: pets }
            )
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id
            const petData = {
                include: [{
                    model: models.Clientes,
                    as: 'owner', // Usando o alias definido no Pet.belongsTo(Clientes)
                    attributes: ['id', 'nome', 'telefone']
                }]
            }
            const pets = await ServicePet.FindOne(id, petData)
            res.status(200).send(
                { data: pets }
            )
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Create(req, res) {
        try {
            const { clienteId, nome, raca } = req.body
            await ServicePet.Create(clienteId, nome, raca)
            res.status(200).send(
                { msg: 'criado' }
            )
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id

            const clienteId = req.body?.clienteId
            const nome = req.body?.nome
            const raca = req.body?.raca

            await ServicePet.Update(id, nome, clienteId, raca)

            res.status(200).send(
                { msg: 'alterado com sucesso' }
            )
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            const pets = await ServicePet.Delete(id)
            res.status(204).send(
                { data: pets }
            )
            res.status(200).send(
                { msg: 'deletado com sucesso' }
            )
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

export default new ControllerPets()