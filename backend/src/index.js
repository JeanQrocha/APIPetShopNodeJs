import express from 'express'
import database from './config/database.js';
import routerClientes from './routes/clientes.js'
import routerPets from './routes/pets.js'


const app = express();

app.use(express.json())
app.use('/api/v1', routerClientes, routerPets)

const port = 3000

database.db
    .sync({ force: false }) // recria as tabelas a cada start
    .then(() => {
        app.listen(port, () => {
            console.info(`Servidor rodando na porta: ${port}`)
        })
    })
    .catch((e) => {
        console.info(`Não foi possivel conectar com o banco ${e}`)
    })