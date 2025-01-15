// import { useEffect, useRef, useState } from "react";
// import { useContentStore } from "../store/content";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { SMALL_IMG_BASE_URL } from "../utils/constants";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// /*eslint-disable */
// const MovieSlider = ({ category }) => {
// 	const { contentType } = useContentStore();
// 	const [content, setContent] = useState([]);
// 	const [showArrows, setShowArrows] = useState(false);

// 	const sliderRef = useRef(null);

// 	const formattedCategoryName =
// 		category?.replaceAll("_", " ")[0].toUpperCase() + category?.replaceAll("_", " ").slice(1);
// 	const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

// 	useEffect(() => {
// 		const getContent = async () => {
// 			const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/${contentType}/${category}`);
// 			setContent(res.data.content);
// 		};

// 		getContent();
// 	}, [contentType, category]);

// 	const scrollLeft = () => {
// 		if (sliderRef.current) {
// 			sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
// 		}
// 	};
// 	const scrollRight = () => {
// 		sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
// 	};

// 	return (
// 		<div
// 			className='bg-black text-white relative px-5 md:px-20'
// 			onMouseEnter={() => setShowArrows(true)}
// 			onMouseLeave={() => setShowArrows(false)}
// 		>
// 			<h2 className='mb-4 text-2xl font-bold'>
// 				{formattedCategoryName} {formattedContentType}
// 			</h2>

// 			<div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef}>
// 				{content?.map((item) => (
// 					<Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
// 						<div className='rounded-lg overflow-hidden'>
// 							<img
// 								src={SMALL_IMG_BASE_URL + item.backdrop_path}
// 								alt='Movie image'
// 								className='transition-transform duration-300 ease-in-out group-hover:scale-125'
// 							/>
// 						</div>
// 						<p className='mt-2 text-center'>{item.title || item.name}</p>
// 					</Link>
// 				))}
// 			</div>

// 			{showArrows && (
// 				<>
// 					<button
// 						className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
//             size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
//             '
// 						onClick={scrollLeft}
// 					>
// 						<ChevronLeft size={24} />
// 					</button>

// 					<button
// 						className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
//             size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
//             '
// 						onClick={scrollRight}
// 					>
// 						<ChevronRight size={24} />
// 					</button>
// 				</>
// 			)}
// 		</div>
// 	);
// };
// export default MovieSlider;
import { useEffect, useRef, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constants";
import { ChevronLeft, ChevronRight, Play } from "lucide-react"; // Added Play icon from lucide-react

/*eslint-disable */
const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [content, setContent] = useState([]);
  const [showArrows, setShowArrows] = useState(false);

  const sliderRef = useRef(null);

  const formattedCategoryName =
    category?.replaceAll("_", " ")[0].toUpperCase() + category?.replaceAll("_", " ").slice(1);
  const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

  useEffect(() => {
    const getContent = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/${contentType}/${category}`);
      setContent(res.data.content);
    };

    getContent();
  }, [contentType, category]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <div
      className="bg-black text-white relative px-5 md:px-20 py-8"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <h2 className="mb-6 text-4xl font-extrabold text-center tracking-wider text-yellow-500">
        {formattedCategoryName} {formattedContentType}
      </h2>

      <div className="flex space-x-6 overflow-x-scroll scrollable-content" ref={sliderRef}>
        {content?.map((item) => (
          <Link
            to={`/watch/${item.id}`}
            className="min-w-[250px] relative group overflow-hidden transition-all duration-500 ease-in-out transform"
            key={item.id}
          >
            <div className="relative rounded-lg shadow-2xl transition-transform duration-300 ease-in-out group-hover:scale-105">
              {/* Gradient Overlay and Image */}
              <div
                className="relative w-full h-96 rounded-lg overflow-hidden"
                style={{
                  background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%), url(${SMALL_IMG_BASE_URL + item.poster_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Title Text and Play Button - Initially hidden */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:scale-110">
                  <span className="text-white backdrop-blur-lg p-2 rounded-md mb-4">
                    {item.title || item.name}
                  </span>
                  {/* Play Button - Centered */}
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-green-500 p-4 rounded-full shadow-md hover:bg-green-600 transition duration-300 ease-in-out mt-14">
                    <Play size={24} />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            className="absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10 transition-all duration-300 ease-in-out transform hover:scale-110"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10 transition-all duration-300 ease-in-out transform hover:scale-110"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieSlider;
