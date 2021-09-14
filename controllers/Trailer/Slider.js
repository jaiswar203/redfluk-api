import mongoose from 'mongoose'
import SliderSchema from '../../models/Trailer/Slider.js'


export const UploadSlider=async(req,res)=>{
    const Slider=req.body
    const Sliders=new SliderSchema(Slider)

    try {
        await Sliders.save()
        res.status(201).json(Sliders)
    } catch (error) {
        res.status(401).json({message:'Error'})
        console.log(error)
    }
}

export const getSlider =async(req,res)=>{
    try {
        const Slider =await SliderSchema.find().sort({_id:-1})
        res.status(201).json(Slider)
    } catch (error) {
        res.status(401).json({message:'Error'})
    }
}

export const getLastSlider=async(req,res)=>{
    try {
        const slider=await SliderSchema.find({}).sort({_id:-1}).limit(1).exec(function(err,docs) {res.status(201).json(docs)})
        
    } catch (error) {
        res.status(401).json({message:'error'})
    }
}

export const updateSlider=async(req,res)=>{
    const {id:_id}=req.params
    const updateData=req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json('No Trailer with that id')

    const updatedSlider=await SliderSchema.findByIdAndUpdate(_id,updateData,{new :true})
    res.status(201).json(updateSlider)
}

export const deleteSlider=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json('no Trailer')

    await SliderSchema.findByIdAndRemove(id)

    res.status(201).json('trailer deleted')
}