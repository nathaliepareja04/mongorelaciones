import { Router } from 'express'
import studentCtrl from '../controllers/student.controller.js'

const route=Router()

route.get('/',studentCtrl.listar)
route.get('/:id',studentCtrl.listarPorId)

route.post('/',studentCtrl.crear)
route.delete('/:id',studentCtrl.eliminar)
route.put('/:id',studentCtrl.actualizar)

export default route