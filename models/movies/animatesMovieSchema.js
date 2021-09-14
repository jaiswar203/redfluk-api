import mongoose from 'mongoose'

const MovieSchema=mongoose.Schema({
    datatype:String,
    poster:String,
    youtube:String,
    title:String,
    genre:[String],
    language:[String],
    director:String,
    duration:String,
    quality:String,
    release:String,
    imdb:String,
    name:String,
    description:String,
    detailtitle:String,
    screenshots:[String],
    gdrive1:String,
    gdrive2:String,
    gdrive3:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

var AnimatedPost=mongoose.model('AnimatedMovies',MovieSchema)

export default AnimatedPost