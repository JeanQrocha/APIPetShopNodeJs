import Clientes from '../model/clientes.js'
import Pets from "../model/pets.js"


class ServiceCliente {
    async FindAll() {

        const clientes = await Clientes.findAll({
                include: [{
                    model: Pets,
                    as: 'pets',
                    attributes: ['id', 'nome', 'raca']
                }]
            });

        return clientes

    }


    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar um ID");
        }
        const cliente = await Clientes.findByPk(id, {
                include: [{
                    model: Pets,
                    as: 'pets',
                    attributes: ['id', 'nome', 'raca']
                }]
            })

        if (!cliente) {
            throw new Error(`Usuário ${id} não encontrado`);

        }

        return cliente
    }


    async Create(nome, telefone, email, senha) {
        if (!nome || !telefone || !email || !senha) {
            throw new Error("Favor preencher todos os campos");
        }

        await Clientes.create({
            nome, telefone, email, senha
        })

    }


    async Update(id, nome, telefone , email, senha) {
        if (!id) {
            throw new Error('Favor preencher todas as informaçoes')
        }
        const clienteVelho = await Clientes.findByPk(id)

        if (!clienteVelho) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        clienteVelho.nome = nome || clienteVelho.nome // se nao receber nada ele vai salvar o antigo
        clienteVelho.telefone = telefone || clienteVelho.telefone
        clienteVelho.email = email || clienteVelho.email
        clienteVelho.senha = senha || clienteVelho.senha


        return clienteVelho.save()
    }


    async Delete(id) {
        if (!id) {
            throw new Error("Favor informar um ID");
        }
        const cliente = await Clientes.findByPk(id)

        if (!cliente) {
            throw new Error(`Usuário ${id} não encontrado`);

        }

        return cliente.destroy()
    }
}

export default new ServiceCliente()