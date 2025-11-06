import express from 'express'
import database from './config/database.js';
import router from './routes/petShop.js'


const app = express();

app.use(express.json())
app.use('/api/v1', router)

const port = 3000

database.db
    .sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.info(`Servidor rodando na porta: ${port}`)
        })
    })
    .catch((e) => {
        console.info(`Não foi possivel conectar com o banco ${e}`)
    })