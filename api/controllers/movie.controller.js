import {fetchFromTMDB} from "../movieService/tmdbMovie.service.js";

const getTrendingMovieController=(req,res)=>{
    fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US")
    .then((data)=>{
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];
        res.json({ success: true, content: randomMovie });
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    })
};

const  getMovieTrailersController=(req,res)=>{
    const { id } = req.params;
    fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
    .then((data)=>{
        res.json({ success: true, trailers: data.results });
    }).catch((err)=>{
        if (err.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
    });
};

const getMovieDetailsController=(req,res)=>{
    const { id } = req.params;
    fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
    .then((data)=>{
        res.status(200).json({ success: true, content: data })
    }).catch((err)=>{
        if (err.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
    });
};


const  getSimilarMoviesController=(req,res)=>{
    const {params:{id}}=req;
    fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`)
    .then((data)=>{
        res.status(200).json({ success: true, similar: data.results });
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    });
};


const getMoviesByCategoryController=(req,res)=>{
    const { category } = req.params;
    console.log(category)
    fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`)
    .then((data)=>{
        console.log(data);
        res.status(200).json({ success: true, content: data.results });
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    });
};

export {getTrendingMovieController,getMovieTrailersController,getSimilarMoviesController,getMovieDetailsController,getMoviesByCategoryController};