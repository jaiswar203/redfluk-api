import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import movieRoutes from './routes/routes.js'
import AdminRoutes from './routes/Admin.js'
import trendingCardRouter from './routes/movies/Trending.js'
import movieCardRouter from './routes/movies/movies.js'
import WebShowRouter from './routes/movies/WebShow.js'
import TvShowRouter from './routes/movies/tvshow.js'
import AnimeMovieRouter from './routes/movies/animated/movies.js'
import AnimeSeriesRouter from './routes/movies/animated/webhsow.js'
import SearchRoute from './routes/search.js'
import MovieFilter from './routes/filter/MovieFilter.js'
import webShowFilter from './routes/filter/webShowFilter.js'
import TvShowFilter from './routes/filter/tvShowFilter.js'

const app=express()
dotenv.config({path:'./.env'})

app.use(bodyParser.json({limit:'4gb',extended:true}))
app.use(bodyParser.urlencoded({limit:'4gb',extended:true}))
app.use(cors())

app.use('/searchCard',SearchRoute)
app.use('/movies',movieRoutes)
app.use('/admin',AdminRoutes)
app.use('/trendCard',trendingCardRouter)
app.use('/movieCard',movieCardRouter)
app.use('/webshowCard',WebShowRouter)
app.use('/tvshowCard',TvShowRouter)
app.use('/filter',MovieFilter)
app.use('/webshowfilter',webShowFilter)
app.use('/tvshowfilter',TvShowFilter)
app.use('/animatedmovie',AnimeMovieRouter)
app.use('/animatedseries',AnimeSeriesRouter)

app.get('/',(req,res)=>{
    res.send('Hello To RedFluk Api')
})

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen('5000',()=> console.log('connected')))
    .catch((err)=>console.log(err))

mongoose.set('useFindAndModify',false)
