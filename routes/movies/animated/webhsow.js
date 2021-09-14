import express from 'express'
import { getWebShow,getAllWebShow, getWebShowById, createWebShow, updateWebShow, deleteWebShow } from "../../../controllers/animated/webseries.js";

const router=express.Router()

router.get('/',getWebShow)
router.get('/all',getAllWebShow)
router.get('/:id',getWebShowById)
router.post('/',createWebShow)
router.patch('/:id',updateWebShow)
router.delete('/:id',deleteWebShow)

export default router