import ServiceCliente from '../service/clientes.js'


class ControllerCliente {
    async FindAll(req, res) {
        try {
            const cliente = await ServiceCliente.FindAll()
            res.status(200).send(
                { data: cliente }
            )
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
            const { nome, telefone } = req.body
            await ServiceCliente.Create(nome, telefone)
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
            const telefone = req.body?.telefone

            await ServiceCliente.Update(id, nome, telefone)

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
            const cliente = await ServiceCliente.Delete(id)
            res.status(204).send(
                { data: cliente }
            )
            res.status(200).send(
                {msg:'deletado com sucesso'}
            )
        } catch (error) {
            res.status(500).send({ msg: error.menssage })
        }
    }
}

export default new ControllerCliente()