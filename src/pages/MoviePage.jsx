import { useState, useEffect, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import Overview from "../components/Overview";
import Similar from "../components/Similar";

/*eslint-disable*/
export default function MoviePage({id,contentType}) {
  const [data, setData] = useState(null);
  const [play, setPlay] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/v1/${contentType}/${id}/details`);
        const fetchedData = await response.json();
        // console.log(fetchedData);
        setData(fetchedData?.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [contentType, id]); // Ensure effect re-runs when the id changes
//   console.log(data)
  return (
    <>
      {data && data.id ? (
        <>
          <section className="relative h-screen">
            <div className="relative w-full h-full bg-gradient-to-b from-white/20 to-neutral-900/80">
              <img
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt="Backdrop"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-0 inset-0 lg:bg-black/30 bg-gradient-to-b from-black/60 from-20% via-black/50 via-40% to-[#010101] to-98%"></div>
            </div>
            <div className="absolute inset-10 lg:inset-52 flex items-center justify-center">
              <div className="flex-wrap flex flex-col items-center gap-2 text-white">
                <h1 className="lg:text-8xl text-5xl font-black text-center tracking-tighter">
                  {data.title}
                </h1>
                <p className="lg:text-xl text-lg font-medium text-center opacity-60 tracking-tight">
                  {data.tagline}
                </p>
              </div>
            </div>
            <div className="absolute lg:bottom-10 bottom-24 inset-x-0 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setPlay(true)}
                className="flex-shrink-0 flex items-center gap-3"
              >
                <div className="backdrop-blur-xl bg-white lg:p-4 p-2 rounded-full active:scale-95 transition duration-300 ease-in-out">
                  <PlayIcon className="lg:w-10 lg:h-10 w-7 h-7 ps-1" />
                </div>
                <p className="font-semibold lg:text-lg tracking-tight opacity-70">
                  Play Movie
                </p>
              </button>
              <Transition.Root show={play} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-50"
                  initialFocus={cancelButtonRef}
                  onClose={setPlay}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                  </Transition.Child>
                  <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden lg:rounded-2xl rounded-lg bg-white/20 shadow-xl transition-all my-8 w-full max-w-6xl lg:h-[40em] h-64">
                          <iframe
                            className="w-full h-full"
                            // src={`https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`}
                            src={`https://vidsrc.xyz/embed/movie/${id}`}
                            allowFullScreen
                          ></iframe>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>
          </section>

        {/* <hr></hr> */}
          {data || data?.success ? (
            <Overview
              poster_path={data?.poster_path}
              overview={data?.overview}
              genres={data?.genres}
              data={data}
              id={id}
              setPlay={() => setPlay(true)}
              vote_average={data?.vote_average}
              release_date={data?.release_date}
              runtime={data?.runtime}
              production_companies={data?.production_companies}
              contentType={contentType}
            />
          ) : (
            <></>
          )}

          <section className="bg-black">
            <div className="lg:p-10 p-6">
              <h1 className="lg:text-4xl text-2xl font-semibold tracking-tight text-white">
                Similar Movies
              </h1>
            </div>
            <Similar id={id} contentType={contentType} />
          </section>
        </>
      ) : (
        <section className="relative h-screen animate-pulse">
          <div className="bg-gradient-to-b from-white/20 from-10% via-black/10 via-80% to-black/20 to-90% h-full w-full flex flex-col items-center justify-center"></div>
        </section>
      )}
    </>
  );
}
