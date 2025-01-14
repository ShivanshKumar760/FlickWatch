import { fetchFromTMDB } from "../movieService/tmdbMovie.service.js";

const getTrendingTvController=(req,res)=>{
    fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US")
    .then((data)=>{
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];
		res.json({ success: true, content: randomMovie });
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    });
};



const  getTvTrailersController=(req,res)=>{
    const {params:{id}}=req;
    fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
    .then((data)=>{
        res.json({ success: true, trailers: data.results });
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        if (err.message.includes("404")) {
			return res.status(404).send(null);
		}

        res.status(500).json({ success: false, message: "Internal Server Error" });
    });
};


const getTvDetailsController=(req,res)=>{
    const {params:{id}}=req;
    fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
    .then((data)=>{
        res.status(200).json({ success: true, content: data });
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        if (err.message.includes("404")) {
			return res.status(404).send(null);
		}

        res.status(500).json({ success: false, message: "Internal Server Error" });
    });
};


const getSimilarTvsController=(req,res)=>{
    const {params:{id}}=req;
    fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
    .then((data)=>{
        res.status(200).json({ success: true, similar: data.results });
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    });
};

const getTvsByCategoryController=(req,res)=>{
    const { category } = req.params;
    fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
    .then((data)=>{
        res.status(200).json({ success: true, content: data.results });
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    });

};

export {getTrendingTvController,getTvTrailersController,getTvDetailsController,getSimilarTvsController,getTvsByCategoryController};