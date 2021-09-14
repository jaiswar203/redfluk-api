import express from 'express'
import { filterAction, filterAdven, filterCrime, filterRom, filterScifi, filterThriller } from '../../controllers/movies/tvshows.js'


const router=express.Router()

router.get('/action',filterAction)
router.get('/adventure',filterAdven)
router.get('/crime',filterCrime)
router.get('/thriller',filterThriller)
router.get('/romance',filterRom)
router.get('/scifi',filterScifi)

export default router