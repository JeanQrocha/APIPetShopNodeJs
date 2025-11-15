import Clientes from '../model/clientes.js'


class ServiceCliente {
    async FindAll(options = {}) {

        const clientes = await Clientes.findAll(options);

        return clientes

    }


    async FindOne(id, options = {}) {
        if (!id) {
            throw new Error("Favor informar um ID");
        }
        const cliente = await Clientes.findByPk(id, options)

        if (!cliente) {
            throw new Error(`Produto ${id} não encontrado`);

        }

        return cliente
    }


    async Create(nome, telefone) {
        if (!nome || !telefone) {
            throw new Error("Favor preencher todos os campos");
        }

        await Clientes.create({
            nome, telefone
        })

    }


    async Update(id, nome, telefone) {
        if (!id) {
            throw new Error('Favor preencher todas as informaçoes')
        }

        const clienteVelho = await Clientes.findByPk(id)

        if (!clienteVelho) {
            throw new Error(`Produto ${id} não encontrado`)
        }

        clienteVelho.nome = nome || clienteVelho.nome // se nao receber nada ele vai salvar o antigo
        clienteVelho.telefone = telefone || clienteVelho.telefone


        return clienteVelho.save()
    }


    async Delete(id) {
        if (!id) {
            throw new Error("Favor informar um ID");
        }
        const cliente = await Clientes.findByPk(id)

        if (!cliente) {
            throw new Error(`Produto ${id} não encontrado`);

        }

        return cliente.destroy()
    }
}

export default new ServiceCliente()