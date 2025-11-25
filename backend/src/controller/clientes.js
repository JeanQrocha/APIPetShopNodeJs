import ServiceCliente from '../service/clientes.js'



class ControllerCliente {
    async FindAll(req, res) {
        try {

            const cliente = await ServiceCliente.FindAll()
            res.status(200).send({ cliente })
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceCliente.FindOne(id)
            res.status(200).send(
                { data: cliente }
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
    async Create(req, res) {
        try {
            const { nome, telefone, email, senha } = req.body
            await ServiceCliente.Create(nome, telefone, email, senha)
            res.status(200).send(
                { msg: 'criado' }
            )
        } catch (error) {

            // verifica se o erro é de violação de unicidade
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(409).send({
                    msg: "Telefone ou email já está cadastrado!"
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
            const email = req.body?.email
            const senha = req.body?.senha

            await ServiceCliente.Update(id, nome, telefone, email, senha)

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