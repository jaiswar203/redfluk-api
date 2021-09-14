import TrendingPost from "../../models/movies/trendingSchema.js";
import mongoose from 'mongoose'

export const createMovies=async(req,res)=>{
    const data=req.body

    const newMovie=new TrendingPost(data)
    try {
        await newMovie.save()
        res.status(201).json(newMovie)
    } catch (error) {
        res.status(404).json('Error')
        console.log(error)
    }
}

export const getMovies=async(req,res)=>{
    const {page=1,limit=10}=req.query
    try {
        const data=await TrendingPost.find().sort({_id:-1}).limit(limit * 1).skip((page-1)*limit)
        res.status(201).json(data)
    } catch (error) {
        res.status(404).json('Error')
    }
}

export const getMovieById=async(req,res)=>{
    const {id}=req.params
    try {
        const data=await TrendingPost.findById(id)
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
    }
}

export const updateMovies=async(req,res)=>{
    const {id}=req.params
    const updatedData=req.body
    if(!mongoose.Types.ObjectId.isValid((id))) return res.status(401).json('no data found')
    const updatedMovie=await TrendingPost.findByIdAndUpdate(id,updatedData,{new:true})
    res.status(201).json(updatedMovie)
}

export const deleteMovies=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid((id))) return res.status(401).json('error')
    await TrendingPost.findByIdAndRemove(id)
    res.status(201).json('deleted Data')
}