import mongoose from 'mongoose'

const Slider=mongoose.Schema({
    carousel1:{
        type:String,
        required:true
    },
    carousel2:{
        type:String,
        required:true
    },
    carousel3:{
        type:String,
        required:true
    },
    download:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const SliderSchema=mongoose.model('Slider',Slider)

export default SliderSchema