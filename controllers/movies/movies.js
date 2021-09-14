import MoviePost from "../../models/movies/moviesSchema.js";
import mongoose from "mongoose";

export const getAllMov = async (req, res) => {
  const {page}=req.query
  try {
    const Limit=21
    const startIndex=(Number(page)-1) * Limit ;
    const total=await MoviePost.countDocuments({})
    const movies = await MoviePost.find().sort({ _id: -1 }).limit(Limit).skip(startIndex);
    res.status(201).json({data: movies,currentPage: Number(page) ,totalPages: Math.ceil(total / Limit)});
  } catch (error) {
    res.status(401).json("error");
  }
};

export const getMovById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await MoviePost.findById(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json("error");
  }
};

export const getMov = async (req, res) => {
  const limit = 10;
  const page = 1;
  try {
    const data = await MoviePost.find()
      .sort({ _id: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json("error");
  }
};

export const createMov = async (req, res) => {
  const data = req.body;
  const movie = new MoviePost(data);
  try {
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(401).json("error");
  }
};

export const updateMov = async (req, res) => {
  const { id } = req.params;
  const updateMovie = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(401).json("no data with that id");
  const updatedMovie = await MoviePost.findByIdAndUpdate(id, updateMovie, {
    new: true,
  });
  res.status(201).json(updatedMovie);
};

export const deleteMov = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(401).json("no data with that id");
  await MoviePost.findByIdAndRemove(id);
  res.status(201).json("data Deleted");
};


// filter data

export const filterAction =async(req,res)=>{
  const {page}=req.query
  try {
    const Limit=5
    const startIndex=(Number(page)-1) * Limit ;
    const total=await MoviePost.countDocuments({genre:{$in:'Action'}})
    const movies = await MoviePost.find({genre:{$in:'Action'}}).sort({_id:-1}).limit(Limit).skip(startIndex);
    res.status(201).json({data: movies,currentPage: Number(page) ,totalPages: Math.ceil(total / Limit)});
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
}
export const filterRom =async(req,res)=>{
  const {page}=req.query
  try {
    const Limit=5
    const startIndex=(Number(page)-1) * Limit ;
    const total=await MoviePost.countDocuments({genre:{$in:'Romance'}})
    const movies = await MoviePost.find({genre:{$in:'Romance'}}).sort({_id:-1}).limit(Limit).skip(startIndex)
    res.status(201).json({data: movies,currentPage: Number(page) ,totalPages: Math.ceil(total / Limit)});
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
}
export const filterAdven =async(req,res)=>{
  const {page}=req.query
  try {
    const Limit=5
    const startIndex=(Number(page)-1) * Limit ;
    const total=await MoviePost.countDocuments({genre:{$in:'Adventure'}})
    const movies = await MoviePost.find({genre:{$in:'Adventure'}}).sort({_id:-1}).limit(Limit).skip(startIndex);
    res.status(201).json({data: movies,currentPage: Number(page) ,totalPages: Math.ceil(total / Limit)});
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
}

export const filterScifi =async(req,res)=>{
  const {page}=req.query
  try {
    const Limit=5
    const startIndex=(Number(page)-1) * Limit ;
    const total=await MoviePost.countDocuments({genre:{$in:'Sci-Fi'}})
    const movies = await MoviePost.find({genre:{$in:'Sci-Fi'}}).sort({_id:-1}).limit(Limit).skip(startIndex);
    res.status(201).json({data: movies,currentPage: Number(page) ,totalPages: Math.ceil(total / Limit)});
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
}
export const filterCrime =async(req,res)=>{
  const {page}=req.query
  try {
    const Limit=5
    const startIndex=(Number(page)-1) * Limit ;
    const total=await MoviePost.countDocuments({genre:{$in:'Crime'}})
    const movies = await MoviePost.find({genre:{$in:'Crime'}}).sort({_id:-1}).limit(Limit).skip(startIndex);
    res.status(201).json({data: movies,currentPage: Number(page) ,totalPages: Math.ceil(total / Limit)});
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
}

export const filterThriller =async(req,res)=>{
  const {page}=req.query
  try {
    const Limit=5
    const startIndex=(Number(page)-1) * Limit ;
    const total=await MoviePost.countDocuments({genre:{$in:'Thriller'}})
    const movies = await MoviePost.find({genre:{$in:'Thriller'}}).sort({_id:-1}).limit(Limit).skip(startIndex);
    res.status(201).json({data: movies,currentPage: Number(page) ,totalPages: Math.ceil(total / Limit)});
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
}