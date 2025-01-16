import { useState, useEffect } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

/*eslint-disable*/
export default function Similar({id,contentType}) {
  const navigate=useNavigate();
  const [similar, setSimilar] = useState(null);
  const handleReload=(id)=>{
   
    navigate(`/watch/${id}`)
    window.location.reload();
  }
  useEffect(() => {
    async function fetchSimilar() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/api/v1/${contentType}/${id}/similar`
        );
        const fetchedSimilar = await response.json();
        console.log(fetchedSimilar);
        setSimilar(fetchedSimilar.similar);
      } catch (error) {
        console.error("Error fetching trailers:", error);
      }
    }
    fetchSimilar();
  }, [contentType, id]); // Ensure to re-run effect when id or page changes

  return (
    <>
      {similar ? (
        <section className="relative bg-black">
          <div className="lg:px-10 px-6">
            <div className="flex items-center gap-4 overflow-x-auto py-3 pb-10 ps-1 snap-x scrollable-content">
              {similar?.map((item, index) => (
                <div
                  key={index}
                  className="relative group flex-shrink-0 lg:w-64 w-48 snap-start h-full"
                  onClick={()=>(handleReload(item.id))}
                >
                  <div className="relative rounded-lg bg-white/20">
                    <img
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                          : "https://images.unsplash.com/photo-1464639351491-a172c2aa2911?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                      }
                      alt={item.title}
                      className="lg:h-96 h-72 object-cover object-center rounded-lg"
                    />
                    <div className="absolute top-0 inset-0 bg-black/40 group-hover:bg-black/80 transition duration-300 ease-in-out"></div>
                    <div className="hidden group-hover:flex transition duration-300 ease-in-out absolute z-40 inset-0 items-center justify-center">
                      <div className="bg-white/10 px-4 py-3 flex items-center justify-center gap-1 rounded-full backdrop-blur-xl backdrop-opacity-60">
                        <h1 className="tracking-tight font-medium text-sm">
                          Watch Now
                        </h1>
                        <PlayIcon className="flex-shrink-0 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
