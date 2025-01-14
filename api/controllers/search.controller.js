import { fetchFromTMDB } from "../movieService/tmdbMovie.service.js";
import User from "../models/user.model.js";

const searchPersonController=(req,res)=>{
    const { query } = req.params;
    fetchFromTMDB(
        `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    ).then((response)=>{
        if (response.results.length === 0) {
			return res.status(404).send(null);
		}
        User.findByIdAndUpdate(req.user._id, {$push: {searchHistory: {id: response.results[0].id,image: response.results[0].profile_path,title: response.results[0].name,searchType: "person",createdAt: new Date()}}})
        .then(()=>{
            res.status(200).json({ success: true, content: response.results });
        }).catch((err)=>{
            console.log(err);
            console.log(err.message);
            console.log("Could not find the user!");
            res.json({success:false,msg:"Could not find the user!"});
        });
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        console.log("Error in searchPerson controller: ", err.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
    })
};

const searchMovieController=(req,res)=>{
    const { query } = req.params;
    fetchFromTMDB(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    ).then((response)=>{
        if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		User.findByIdAndUpdate(req.user._id, {
			$push: {
				searchHistory: {
					id: response.results[0].id,
					image: response.results[0].poster_path,
					title: response.results[0].title,
					searchType: "movie",
					createdAt: new Date(),
				},
			},
		}).then(()=>{
            res.status(200).json({ success: true, content: response.results });
        }).catch((err)=>{
            console.log(err);
            console.log(err.message);
            console.log("Could not find the user!");
            res.json({success:false,msg:"Could not find the user!"});
        });
    }).catch((err)=>{
        console.log("Error in searchMovie controller: ", err.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
    });


};

const searchTvController=(req,res)=>{
    const { query } = req.params;
    fetchFromTMDB(
        `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    ).then((response)=>{
        if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		User.findByIdAndUpdate(req.user._id, {
			$push: {
				searchHistory: {
					id: response.results[0].id,
					image: response.results[0].poster_path,
					title: response.results[0].name,
					searchType: "tv",
					createdAt: new Date(),
				},
			},
		}).then(()=>{
            res.json({ success: true, content: response.results });
        }).catch((err)=>{
            console.log(err);
            console.log(err.message);
            console.log("Could not find the user!");
            res.json({success:false,msg:"Could not find the user!"});
        });
    }).catch((error)=>{
        console.log("Error in searchTv controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
    });

};

const getSearchHistoryController=async (req,res)=>{
    try {
		res.status(200).json({ success: true, content: req.user.searchHistory });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	};
};

const removeItemFromSearchHistoryController=(req,res)=>{
    let { id } = req.params;

	id = parseInt(id);
    User.findByIdAndUpdate(req.user._id, {
        $pull: {
            searchHistory: { id: id },
        },
    }).then(()=>{
        res.status(200).json({ success: true, message: "Item removed from search history" });
    }).catch((error)=>{
        console.log("Error in removeItemFromSearchHistory controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
    })
};

export {searchPersonController,searchMovieController,searchTvController
    ,getSearchHistoryController,removeItemFromSearchHistoryController
};