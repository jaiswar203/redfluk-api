import MoviePost from "../../models/movies/moviesSchema.js";
import TrendingPost from "../../models/movies/trendingSchema.js";
import WebShowPost from "../../models/movies/webshowschema.js";
import TvShowPost from "../../models/movies/tvshowschema.js";


export const getDataBySearch = async (req, res) => {
    const { searchQuery } = req.query;
  
    // const title = new RegExp(searchQuery, "i");
    // Promise.all([
        //   await TrendingPost.find({ title }),
    //   await MoviePost.find({ title }),
    //   await WebShowPost.find({ title }),
    // ])
    //   .then((result) => {
        //     //   result.filter((i)=>i.length!==0 ? res.status(201).json(i) : null)
        //     // result.reduce((a, b, c) => {
            //     //   if (a !== undefined) {
                //     //     return res.status(201).json(a);
                //     //   } else if (b !== undefined) {
    //     //     return res.status(201).json(b);
    //     //   } else if (c !== undefined) {
        //     //     return res.status(201).json(c);
        //     //   } else {
            //     //     return console.log("no data");
            //     //   }
            //     // });
            //   })
            
    try {
        const title = new RegExp(searchQuery, "i");
        const data1=await MoviePost.find({title})
        const data2=await TrendingPost.find({title})
        const data3=await WebShowPost.find({title})
        const data4=await TvShowPost.find({title})

        if(data1.length!==0){
            return res.status(201).json(data1)
        }else if(data2.length!==0){
            return res.status(201).json(data2)
        }else if(data3.length!==0){
            return res.status(201).json(data3)
        }else if(data4.length!==0){
            return res.status(201).json(data4)
        }else{
            return res.status(404).json({message:'not found'})
        }
    } catch (error) {
        res.status(404).json(error)
    }  
  };
