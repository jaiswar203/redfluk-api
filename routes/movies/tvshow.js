import express from 'express'
import { getTvShow,getAllTvShow, getTvShowById, createTvShow, updateTvShow, deleteTvShow } from "../../controllers/movies/tvshows.js";

const router=express.Router()

router.get('/',getTvShow)
router.get('/all',getAllTvShow)
router.get('/:id',getTvShowById)
router.post('/',createTvShow)
router.patch('/:id',updateTvShow)
router.delete('/:id',deleteTvShow)

export default router