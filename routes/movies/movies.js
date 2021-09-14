import express from 'express'
const router=express.Router()
import { createMov, deleteMov, getAllMov, getMov, getMovById, updateMov } from '../../controllers/movies/movies.js'

router.get('/',getMov)
router.get('/all',getAllMov)
router.get('/:id',getMovById)

router.post('/',createMov)
router.patch('/:id',updateMov)
router.delete('/:id',deleteMov)


export default router