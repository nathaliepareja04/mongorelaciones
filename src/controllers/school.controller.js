import { response } from "../helpers/response.js";
import { schoolModel } from "../models/school.model.js";
import { studentModel } from "../models/student.model.js";

const schoolCtrl={}

schoolCtrl.listar=async(req,res)=>{
    try {
        const registros=await schoolModel.find()
        response(res,200,true,registros,"lista de registros")
        
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}

schoolCtrl.crear=async(req,res)=>{
    try {
        const nuevoRegistro=await schoolModel.create(req.body)
        response(res,201,true,nuevoRegistro,"registro creado")
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}


schoolCtrl.listarPorId=async(req,res)=>{
    try {
        const {id}=req.params
        const registro=await schoolModel.findById(id)
        if(!registro){
            return response(res,404,false,"","registro no encontrado")
        }
        response(res,200,true,registro,"registro encontrado")
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}


schoolCtrl.eliminar=async(req,res)=>{
    try {
        const {id}=req.params
        const registro=await schoolModel.findById(id)
        if(!registro){
            return response(res,404,false,"","registro no encontrado")
        }

        await registro.deleteOne()
        response(res,200,true,"","registro eliminado")
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}


schoolCtrl.actualizar=async(req,res)=>{
    try {
        const {id}=req.params
        const registro=await schoolModel.findById(id)
        if(!registro){
            return response(res,404,false,"","registro no encontrado")
        }
        await registro.updateOne(req.body)
        response(res,200,true,"","registro actualizado")
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}

export default schoolCtrl