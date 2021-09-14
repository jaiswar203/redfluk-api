import TrailerSchema from '../../models/Trailer/TrailerSchema.js'
import mongoose from 'mongoose'

export const createTrailer=async(req,res)=>{
    const trailer = req.body
    const newTrailer=new TrailerSchema(trailer)
    try {
        await newTrailer.save()
        res.status(201).json(newTrailer)
    } catch (error) {
        res.status(401).json({message:'Error'})
        console.log(error)
    }
}

export const getTrailer=async(req,res)=>{
    try {
        const Trailers=await TrailerSchema.find().sort({_id: -1})
        res.status(201).json(Trailers)
    } catch (error) {
        res.status(401).json({message:'Error'})
        console.log(error)
    }
}

export const getLastTrailer=async(req,res)=>{
    try {
        const slider=await TrailerSchema.find({}).sort({_id:-1}).limit(1).exec(function(err,docs) {res.status(201).json(docs)})
    } catch (error) {
        res.status(201).json({message:'error'})
    }
}

export const updateTrailer=async(req,res)=>{
    const {id:_id}=req.params
    const updateData=req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json('No Trailer with that id')

    const updatedTrailer=await TrailerSchema.findByIdAndUpdate(_id,updateData,{new :true})
    res.status(201).json(updatedTrailer)
}

export const deleteTrailer=async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json('no Trailer')

    await TrailerSchema.findByIdAndRemove(id)

    res.status(201).json('trailer deleted')
}