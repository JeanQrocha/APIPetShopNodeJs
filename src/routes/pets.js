import express from 'express'
import ControllerCachorros from '../controller/pets.js'


const router = express.Router()

router.get('/cachorros', ControllerCachorros.FindAll )
router.get('/cachorro/:id', ControllerCachorros.FindOne)
router.post('/cachorro', ControllerCachorros.Create)
router.put('/cachorro/:id', ControllerCachorros.Update)
router.delete('/cachorro/:id', ControllerCachorros.Delete)


export default router
