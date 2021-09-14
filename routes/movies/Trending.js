import express from 'express'
import { createMovies, deleteMovies, getMovieById, getMovies, updateMovies } from '../../controllers/movies/Trending.js'
const router=express.Router()

router.get('/',getMovies)
router.get('/:id',getMovieById)
router.post('/',createMovies)
router.patch('/:id',updateMovies)
router.delete('/:id',deleteMovies)

export default router