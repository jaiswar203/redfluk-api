import mongoose from 'mongoose'

const Slider=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    download:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    trailer:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
    
})


const TrailerSchema=mongoose.model('Trailer',Slider)

export default TrailerSchema