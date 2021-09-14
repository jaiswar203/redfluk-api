import express from 'express'
const router=express.Router()
import {getDataBySearch} from '../controllers/movies/search.js'

router.get('/search',getDataBySearch)

export default router