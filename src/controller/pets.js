import ServicePet from '../service/pets.js'



class ControllerPets {
    async FindAll(_, res) { //se o parametro nao for usado, colocar _ no lugar
        try {
            const pets = await ServicePet.FindAll()
            res.status(200).send(
                { data: pets }
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id
            const pets = await ServicePet.FindOne(id)
            res.status(200).send(
                { data: pets }
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
    async Create(req, res) {
        try {
            const { nome, tutor, raca } = req.body
            await ServicePet.Create(nome, tutor, raca)
            res.status(200).send(
                { msg: 'criado' }
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id

            const nome = req.body?.nome
            const tutor = req.body?.tutor
            const raca = req.body?.raca

            await ServicePet.Update(id, nome, tutor, raca)

                res.status(200).send(
                    {msg:'alterado com sucesso'}
                )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
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
                {msg:'deletado com sucesso'}
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
}

export default new ControllerPets()