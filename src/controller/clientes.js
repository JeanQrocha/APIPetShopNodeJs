import ServiceCliente from '../service/clientes.js'
import models from '../model/models.js'



class ControllerCliente {
    async FindAll(req, res) {
        try {
            
            const cliente = await ServiceCliente.FindAll({
                include: [{
                    model: models.Pets,
                    as: 'pets',
                    attributes: ['id', 'nome', 'raca']
                }]
            })
            res.status(200).send({ cliente })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceCliente.FindOne(id, {
                include: [{
                    model: models.Pets,
                    as: 'pets',
                    attributes: ['id', 'nome', 'raca']
                }]
            })
            res.status(200).send(
                { data: cliente }
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
    async Create(req, res) {
        try {
            const { nome, telefone } = req.body
            await ServiceCliente.Create(nome, telefone)
            res.status(200).send(
                { msg: 'criado' }
            )
        } catch (error) {

        // verifica se o erro é de violação de unicidade
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).send({
                msg: "Telefone já está cadastrado!"
            });
        }

            res.status(500).send({ msg: error.menssage })
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id

            const nome = req.body?.nome
            const telefone = req.body?.telefone

            await ServiceCliente.Update(id, nome, telefone)

            res.status(200).send(
                { msg: 'alterado com sucesso' }
            )
        } catch (error) {

        // verifica se o erro é de violação de unicidade
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).send({
                msg: "Telefone já está cadastrado!"
            });
        }

            res.status(500).send({ msg: error.menssage })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceCliente.Delete(id)
         
            res.status(204).send(
                { msg: 'deletado com sucesso' }
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
}

export default new ControllerCliente()