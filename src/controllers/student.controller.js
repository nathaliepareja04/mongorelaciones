import { response } from "../helpers/response.js";
import { studentModel } from "../models/student.model.js";

const studentCtrl={}

studentCtrl.listar=async(req,res)=>{
    try {
        const registros=await studentModel.find().populate("school")
        response(res,200,true,registros,"lista de registros")
        
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}

studentCtrl.crear=async(req,res)=>{
    try {
        const nuevoRegistro=await studentModel.create(req.body)
        response(res,201,true,nuevoRegistro,"registro creado")
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}


studentCtrl.listarPorId=async(req,res)=>{
    try {
        const {id}=req.params
        const registro=await studentModel.findById(id).populate("school")
        if(!registro){
            return response(res,404,false,"","registro no encontrado")
        }
        response(res,200,true,registro,"registro encontrado")
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}


studentCtrl.eliminar=async(req,res)=>{
    try {
        const {id}=req.params
        const registro=await studentModel.findById(id)
        if(!registro){
            return response(res,404,false,"","registro no encontrado")
        }
        await registro.deleteOne()
        response(res,200,true,"","registro eliminado")
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}


studentCtrl.actualizar=async(req,res)=>{
    try {
        const {id}=req.params
        const registro=await studentModel.findById(id)
        if(!registro){
            return response(res,404,false,"","registro no encontrado")
        }
        await registro.updateOne(req.body)
        response(res,200,true,"","registro actualizado")
    } catch (error) {
        response(res,500,false,"",error.message)
    }
}

export default studentCtrl