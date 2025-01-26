// // import { PlayIcon } from "@heroicons/react/24/solid";
// // Replaced Next.js useParams with react-router-dom useParams
// import {  useRef, useState, useEffect } from "react";
// // import { Dialog, Transition } from "@headlessui/react";
// import { Link } from "react-router-dom"; // Replaced Next.js Link with react-router-dom Link
// import Seasons from "../components/Seasons";

// /*eslint-disable*/
// export default function TvPage({id,contentType}) {
//   const [data, setData] = useState(null);
//   const [season, setSeason] = useState(null);
//   const [play, setPlay] = useState(false);
//   const cancelButtonRef = useRef(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/tv/${id}/details`);
//         const fetchedData = await response.json();
//         console.log("this is tv show",fetchedData);
//         setData(fetchedData.content);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, [id]); // Adding 'id' as a dependency to the useEffect hook

//   return (
//     <>
//       {data ? (
//         <>
//           <section className="relative lg:h-screen">
//             <div className="relative w-full h-full bg-gradient-to-b from-white/20 to-neutral-900/80">
//               <img
//                 src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
//                 alt="Backdrop"
//                 className="w-full h-full object-cover object-top"
//               />
//               <div className="absolute top-0 inset-0 lg:bg-black/30 bg-gradient-to-b from-black/60 from-20% via-black/50 via-40% to-[#010101] to-98%"></div>
//             </div>
//             <div className="lg:absolute inset-x-10 inset-y-16 flex lg:flex-row lg:items-end justify-between gap-6 lg:p-0 p-6 text-white">
//               <div className="lg:space-y-6 space-y-4 lg:w-[60%]">
//                 <h1 className="lg:text-8xl text-4xl font-bold tracking-tighter">
//                   {data.name}
//                 </h1>
//                 <div className="flex items-center lg:text-base text-sm lg:divide-x font-medium lg:gap-0 gap-6">
//                   <p className="text-green-500 lg:pe-8">
//                     {Math.floor(data.vote_average * 10)}% Rating
//                   </p>
//                   <h1 className="lg:px-8">
//                     {data.seasons.length}
//                     {data.seasons.length > 1 ? " Seasons" : " Season"}
//                   </h1>
//                   <h1 className="lg:px-8">
//                     {data.first_air_date.slice(0, 4)}-
//                     {data.last_air_date.slice(0, 4)}
//                   </h1>
//                 </div>
//                 <div className="flex flex-wrap items-center lg:gap-4 gap-3">
//                   {data.genres.map((item) => (
//                     <span
//                       key={item.id}
//                       className="lg:px-4 px-3 py-2 bg-white/10 font-medium backdrop-blur rounded-full text-sm lg:text-base"
//                     >
//                       {item.name}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="lg:text-lg text-base opacity-70">
//                   {data.overview}
//                 </p>
//               </div>
//               {/* <div className="space-y-2 lg:w-[50%] text-white">
//                 <h1 className="font-semibold tracking-tighter text-xl lg:text-3xl">
//                   {season && season?.name}
//                 </h1>
//               </div> */}
//             </div>
//           </section>
//           {data.seasons.map((item, index) => (
//             <Seasons key={index} season_number={item.season_number} id={id}/>
//           ))}
//         </>
//       ) : (
//         <section className="relative h-screen animate-pulse">
//           <div className="absolute inset-0 bg-gradient-to-b from-white/10 from-10% via-black/10 via-80% to-black/20 to-90%"></div>
//         </section>
//       )}
//     </>
//   );
// }


import { useRef, useState, useEffect } from "react";
import Seasons from "../components/Seasons";
// import { useContentStore } from "../store/content";

/*eslint-disable*/
export default function TvPage({id}) {
  const [data, setData] = useState(null);
  const cancelButtonRef = useRef(null);
  // const {contentType,setContentType}=useContentStore();
  // console.log(contentType);
  // setContentType(contentTypeNow);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/tv/${id}/details`);
        const fetchedData = await response.json();
        // console.log("this is tv show", fetchedData);
        setData(fetchedData.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]); // Adding 'id' as a dependency to the useEffect hook

  if (!data) {
    return (
      <section className="relative h-screen animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 from-10% via-black/10 via-80% to-black/20 to-90%"></div>
        {/* Loading Spinner or Placeholder */}
        <div className="flex justify-center items-center text-white">Loading...</div>
      </section>
    );
  }

  // Destructure the necessary data fields
  const {
    backdrop_path,
    name,
    vote_average,
    seasons,
    first_air_date,
    last_air_date,
    genres,
    overview,
  } = data;

  return (
    <>
      <section className="relative lg:h-screen">
        <div className="relative w-full h-full bg-gradient-to-b from-white/20 to-neutral-900/80">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt="Backdrop"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-0 inset-0 lg:bg-black/30 bg-gradient-to-b from-black/60 from-20% via-black/50 via-40% to-[#010101] to-98%"></div>
        </div>
        <div className="lg:absolute inset-x-10 inset-y-16 flex lg:flex-row lg:items-end justify-between gap-6 lg:p-0 p-6 text-white">
          <div className="lg:space-y-6 space-y-4 lg:w-[60%]">
            <h1 className="lg:text-8xl text-4xl font-bold tracking-tighter">
              {name}
            </h1>
            <div className="flex items-center lg:text-base text-sm lg:divide-x font-medium lg:gap-0 gap-6">
              <p className="text-green-500 lg:pe-8">
                {Math.floor(vote_average * 10)}% Rating
              </p>
              <h1 className="lg:px-8">
                {seasons.length}
                {seasons.length > 1 ? " Seasons" : " Season"}
              </h1>
              <h1 className="lg:px-8">
                {first_air_date.slice(0, 4)}-{last_air_date.slice(0, 4)}
              </h1>
            </div>
            <div className="flex flex-wrap items-center lg:gap-4 gap-3">
              {genres.map((item) => (
                <span
                  key={item.id}
                  className="lg:px-4 px-3 py-2 bg-white/10 font-medium backdrop-blur rounded-full text-sm lg:text-base"
                >
                  {item.name}
                </span>
              ))}
            </div>
            <p className="lg:text-lg text-base opacity-70">{overview}</p>
          </div>
        </div>
      </section>
      {seasons.map((item, index) => (
        <Seasons key={index} season_number={item.season_number} id={id} />
      ))}
    </>
  );
}
