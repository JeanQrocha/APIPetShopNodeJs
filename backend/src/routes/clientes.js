import express from 'express'
import ControllerCliente from '../controller/clientes.js'


const router = express.Router()

router.get('/users', ControllerCliente.FindAll )
router.get('/user/:id', ControllerCliente.FindOne)
router.post('/user', ControllerCliente.Create)
router.put('/user/:id', ControllerCliente.Update)
router.delete('/user/:id', ControllerCliente.Delete)


export default router
