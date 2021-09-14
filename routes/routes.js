import express from 'express'
const router=express.Router()
import {getTrailer,getLastTrailer,createTrailer,updateTrailer, deleteTrailer} from '../controllers/Trailer/Trailer.js'
import {UploadSlider,getSlider,getLastSlider,updateSlider, deleteSlider} from '../controllers/Trailer/Slider.js'


// trailers and slider 
router.get('/trailer',getTrailer)
router.get('/trailerlast',getLastTrailer)
router.post('/trailer',createTrailer)
router.patch('/trailer/:id',updateTrailer)
router.delete('/trailer/:id',deleteTrailer)

router.get('/sliderlast',getLastSlider)
router.get('/slider',getSlider)
router.post('/slider',UploadSlider)
router.patch('/slider/:id',updateSlider)
router.delete('/slider/:id',deleteSlider)


export default router