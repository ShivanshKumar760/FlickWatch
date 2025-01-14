import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// const fetchFromTMDB=(url)=>{
//     const options = {
// 		headers: {
// 			accept: "application/json",
// 			Authorization: "Bearer " + process.env.TMDB_API_KEY,
// 		},
// 	};

//     axios.get(url,options).then((response)=>{
//         if (response.status !== 200) {
//             throw new Error("Failed to fetch data from TMDB" + response.statusText);
//         };
//         return response.data;
//     });
// };

const fetchFromTMDB = (url) => {
    const options = {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + process.env.TMDB_API_KEY,
        },
    };

    return axios.get(url, options)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error("Failed to fetch data from TMDB: " + response.statusText);
            }
            return response.data;
        })
        .catch((error) => {
            throw new Error("Failed to fetch data from TMDB: " + error.message);
        });
};


export  {fetchFromTMDB};