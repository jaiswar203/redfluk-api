import express from 'express'
import { filterAction, filterAdven, filterCrime, filterRom, filterScifi, filterThriller } from '../../../controllers/animated/movies.js'

const router=express.Router()

router.get('/action',filterAction)
router.get('/adventure',filterAdven)
router.get('/crime',filterCrime)
router.get('/romance',filterRom)
router.get('/scifi',filterScifi)
router.get('/thriller',filterThriller)

export default router