// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import { Play } from "lucide-react"
// import { Info } from "lucide-react"
// import useGetTrendingContent from "../hooks/useGetTrendingContent"
// import { MOVIE_CATEGORIES, ORIGINAL_IMG_BASE_URL, TV_CATEGORIES } from "../utils/constants"
// import { useState } from "react"
// import { useContentStore } from "../store/content"
// import MovieSlider from "../components/MovieSlider"
// import Footer from "../components/Footer"

// function HomeScreen() {
//   const {trendingContent}=useGetTrendingContent();
//   const [imgLoading, setImgLoading] = useState(true);
//   const { contentType } = useContentStore();

//   const genresById = {
//     28: "Action",
//     12: "Adventure",
//     16: "Animation",
//     35: "Comedy",
//     80: "Crime",
//     99: "Documentary",
//     18: "Drama",
//     10751: "Family",
//     14: "Fantasy",
//     36: "History",
//     27: "Horror",
//     10402: "Music",
//     9648: "Mystery",
//     10749: "Romance",
//     878: "Science Fiction",
//     10770: "TV Movie",
//     53: "Thriller",
//     10752: "War",
//     37: "Western",
//     10759:"Action & Adventure",
//     10762:"Kids",
//     10763:"News",
//     10764:"Reality",
//     10765:"Sci-Fi & Fantasy",
//     10766:"Soap",
//     10767:"Talk",
//     10768:"Wat & Politics"
//   };

//   const getGenres = (genreIds) => {
//     return genreIds.map((id) => ({ id, name: genresById[id] }));
//   };
//   console.log("trending content is:",trendingContent);
  
// 	if (!trendingContent)
// 		return (
// 			<div className='h-screen text-white relative'>
// 				<Navbar />
// 				<div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer' />
// 			</div>
// 		);
//   return (
//     <>
//     <div className="relative h-screen text-white">
//         <Navbar/>
//         {/* COOL OPTIMIZATION HACK FOR IMAGES */}
// 				{imgLoading && (
// 					<div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10' />
// 				)}
//         <img src={ORIGINAL_IMG_BASE_URL+trendingContent?.backdrop_path} alt="Hero img" className="absolute top-0 left-0 w-full h-full object-cover -z-50" onLoad={() => {
// 						setImgLoading(false);
// 					}}/>

//         <div className="absolute top-0 left-0 w-full h-full object-cover bg-black/40 -z-50" aria-hidden='true'/>

//         <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-36">
//           <div className="bg-gradient-to-b from-black via-transparent to-transparent
//           absolute w-full h-full top-0 left-0 -z-10"/>

//           <div className="max-w-2xl">
//           <h1 className="mt-4 mb-5 text-6xl font-extrabold text-balance">
//             {trendingContent?.title || trendingContent?.name}
//           </h1>
//             {getGenres(trendingContent?.genre_ids).map((genre) => (
//                 <span
//                   key={genre.id}
//                   href={`/genre/${genre.id}`}
//                   className="lg:px-4 px-3 py-2 bg-white/60 font-medium backdrop-blur rounded-full lg:text-base text-sm mt-5 mx-2 mb-4"
//                 >
//                   {genre.name}
//                 </span>
//             ))}

//             <p className="mt-3 text-lg">
//               {trendingContent?.release_date?.split("-")[0] ||
//                   trendingContent?.first_air_date.split("-")[0]}{" "}
//                 | {trendingContent?.adult ? "18+" : "PG-13"}
//             </p>
//             <p className='mt-4 text-lg'>
//               {trendingContent?.overview.length > 300
//                   ? trendingContent?.overview.slice(0, 300) + "..."
//                   : trendingContent?.overview}
//             </p>
//           </div>

//           <div className="flex mt-8 gap-5">
//               <Link to={`/watch/${trendingContent?.id}`}>
//                 <Play className="size-7 inline-block mr-4 fill-black"/>
//                 Play
//               </Link>

//               <Link to={`/watch/${trendingContent?.id}`}>
//                 <Info className="size-7 inline-block mr-2 fill-black"/>
//                 More info...
//               </Link>
//           </div>
//         </div>
//     </div>

//     <div className="flex flex-col gap-10 bg-black py-10">
//       {contentType==="movie"?(MOVIE_CATEGORIES.map((category,i)=>{
//         return <MovieSlider key={i} category={category}/>
//       })):(TV_CATEGORIES.map((category,i)=>{
//         return <MovieSlider key={i} category={category}/>
//       }))}

//     </div>

//     <Footer/>
//     </>
    
//   )
// }

// export default HomeScreen





import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Play } from "lucide-react"
import { Info } from "lucide-react"
// import useGetTrendingContent from "../hooks/useGetTrendingContent"
import { MOVIE_CATEGORIES, ORIGINAL_IMG_BASE_URL, TV_CATEGORIES } from "../utils/constants"
import { useState } from "react"
import { useContentStore } from "../store/content"
import MovieSlider from "../components/MovieSlider"
import Footer from "../components/Footer"
import { useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import { useRef } from "react"

function HomeScreen() {
  const [imgLoading, setImgLoading] = useState(true);
  const { contentType } = useContentStore();
  const [trendingContent, setTrendingContent] = useState(null);
  const [numberOfTime, setNumberOfTime] = useState(1); // Use state for numberOfTime
  const contentRef = useRef(null); // Reference for the animated content
  // Increment numberOfTime every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNumberOfTime((prev) => prev + 1); // Update state
    }, 6000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Fetch trending content whenever contentType or numberOfTime changes
  useEffect(() => {
    const getTrendingContent = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/${contentType}/trending`);
      setTrendingContent(res.data.content);
    };
    getTrendingContent();
  }, [contentType, numberOfTime]); // Trigger useEffect on numberOfTime change

  useEffect(() => {
    if (trendingContent) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 300 }, // Start off-screen to the right
        { opacity: 1, x: 0, duration: 4, ease: "power2.out" } // Slide into view from the right
      );
    }
  }, [trendingContent]);

  // Handle fallback when trendingContent is not ready
  if (!trendingContent)
    return (
      <div className="h-screen text-white relative">
        <Navbar />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer" />
      </div>
    );

  const genresById = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
  };

  const getGenres = (genreIds) => {
    return genreIds.map((id) => ({ id, name: genresById[id] }));
  };

  return (
    <>
      <div className="relative h-screen text-white no-scrollbar">
        <Navbar />
        {imgLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10" />
        )}
        <img
          src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
          alt="Hero img"
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          onLoad={() => setImgLoading(false)
          }
          ref={contentRef}
        />

        <div
          className="absolute top-0 left-0 w-full h-full object-cover bg-black/40 -z-50"
          aria-hidden="true"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-36" ref={contentRef}>
          <div
            className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10"
          />
          <div className="max-w-2xl">
            <h1 className="mt-4 mb-5 text-6xl font-extrabold text-balance">
              {trendingContent?.title || trendingContent?.name}
            </h1>
            {getGenres(trendingContent?.genre_ids).map((genre) => (
              <span
                key={genre.id}
                href={`/genre/${genre.id}`}
                className="lg:px-4 px-3 py-2 bg-white/60 font-medium backdrop-blur rounded-full lg:text-base text-sm mt-5 mx-2 mb-4"
              >
                {genre.name}
              </span>
            ))}

            <p className="mt-3 text-lg">
              {trendingContent?.release_date?.split("-")[0] ||
                trendingContent?.first_air_date?.split("-")[0]}{" "}
              | {trendingContent?.adult ? "18+" : "PG-13"}
            </p>
            <p className="mt-4 text-lg">
              {trendingContent?.overview.length > 300
                ? trendingContent?.overview.slice(0, 300) + "..."
                : trendingContent?.overview}
            </p>
          </div>

          <div className="flex mt-8 gap-5" ref={contentRef}>
            <Link to={`/watch/${trendingContent?.id}`}>
              <Play className="size-7 inline-block mr-4 fill-black" />
              Play
            </Link>

            <Link to={`/watch/${trendingContent?.id}`}>
              <Info className="size-7 inline-block mr-2 fill-black" />
              More info...
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-black py-10">
        {contentType === "movie"
          ? MOVIE_CATEGORIES.map((category, i) => <MovieSlider key={i} category={category} />)
          : TV_CATEGORIES.map((category, i) => <MovieSlider key={i} category={category} />)}
      </div>
      <Footer />
    </>
  );
}

export default HomeScreen;
