import express from 'express'
import ControllerCachorros from '../controller/pets.js'


const router = express.Router()

router.get('/pets', ControllerCachorros.FindAll )
router.get('/pet/:id', ControllerCachorros.FindOne)
router.post('/pet', ControllerCachorros.Create)
router.put('/pet/:id', ControllerCachorros.Update)
router.delete('/pet/:id', ControllerCachorros.Delete)


export default router
