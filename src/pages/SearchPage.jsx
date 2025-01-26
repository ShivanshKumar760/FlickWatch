// import { useState } from "react";
// import { useContentStore } from "../store/content";
// import Navbar from "../components/Navbar";
// import { Search } from "lucide-react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
// import { Link } from "react-router-dom";

// const SearchPage = () => {
// 	const [activeTab, setActiveTab] = useState("movie");
// 	const [searchTerm, setSearchTerm] = useState("");

// 	const [results, setResults] = useState([]);
// 	const { setContentType } = useContentStore();

// 	const handleTabClick = (tab) => {
// 		setActiveTab(tab);
// 		tab === "movie" ? setContentType("movie") : setContentType("tv");
// 		setResults([]);
// 	};

// 	const handleSearch = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/search/${activeTab}/${searchTerm}`);
// 			setResults(res.data.content);
// 		} catch (error) {
// 			if (error.response.status === 404) {
// 				toast.error("Nothing found, make sure you are searching under the right category");
// 			} else {
// 				toast.error("An error occurred, please try again later");
// 			}
// 		}
// 	};

// 	return (<>
        
// 		<div className='bg-black min-h-screen text-white '>
//             <Navbar/>
// 			<div className='container mx-auto px-4 py-8 '>
// 				<div className='flex justify-center gap-3 py-14'>
// 					<button
// 						className={`py-2 px-4 rounded ${
// 							activeTab === "movie" ? "bg-red-600" : "bg-gray-800"
// 						} hover:bg-red-700`}
// 						onClick={() => handleTabClick("movie")}
// 					>
// 						Movies
// 					</button>
// 					<button
// 						className={`py-2 px-4 rounded ${
// 							activeTab === "tv" ? "bg-red-600" : "bg-gray-800"
// 						} hover:bg-red-700`}
// 						onClick={() => handleTabClick("tv")}
// 					>
// 						TV Shows
// 					</button>
// 					<button
// 						className={`py-2 px-4 rounded ${
// 							activeTab === "person" ? "bg-red-600" : "bg-gray-800"
// 						} hover:bg-red-700`}
// 						onClick={() => handleTabClick("person")}
// 					>
// 						Person
// 					</button>
// 				</div>
//                 <h1 className="font-semibold lg:text-9xl text-3xl tracking-tighter lg:mb-0 mb-2">
//               Search Anything..
//             </h1>
//             {/* className="ring-1 ring-white/80 focus:ring-green-500 rounded-full flex items-center justify-between" */}
// 				<form className="ring-1 ring-white/80 focus:ring-green-500 rounded-full flex items-center justify-between" onSubmit={handleSearch}>
// 					<input
// 						type='text'
// 						value={searchTerm}
// 						onChange={(e) => setSearchTerm(e.target.value)}
// 						placeholder={"Search for a " + activeTab}
// 						// className='w-full p-2 rounded bg-gray-800 text-white'
//                         className="peer bg-transparent border-0 lg:px-10 p-4 w-full focus:outline-0 focus:ring-0 rounded-full tracking-normal lg:text-xl placeholder:text-white/40 lg:placeholder:text-xl placeholder:text-sm placeholder:tracking-tight"
// 					/>
// 					<button className='bg-transparent text-white p-2 rounded'>
// 						<Search className='size-6' />
// 					</button>
// 				</form>

// 				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-20'>
// 					{results.map((result) => {
// 						if (!result.poster_path && !result.profile_path) return null;

// 						return (
// 							<div key={result.id} className='bg-gray-800 p-4 rounded'>
// 								{activeTab === "person" ? (
// 									<div className='flex flex-col items-center'>
// 										<img
// 											src={ORIGINAL_IMG_BASE_URL + result.profile_path}
// 											alt={result.name}
// 											className='max-h-96 rounded mx-auto'
// 										/>
// 										<h2 className='mt-2 text-xl font-bold'>{result.name}</h2>
// 									</div>
// 								) : (
// 									<Link
// 										to={"/watch/" + result.id}
// 										onClick={() => {
// 											setContentType(activeTab);
// 										}}
// 									>
// 										<img
// 											src={ORIGINAL_IMG_BASE_URL + result.poster_path}
// 											alt={result.title || result.name}
// 											className='w-full h-auto rounded'
// 										/>
// 										<h2 className='mt-2 text-xl font-bold'>{result.title || result.name}</h2>
// 									</Link>
// 								)}
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</div>
//         </>
// 	);
// };
// export default SearchPage;



// import { useState } from "react";
// import { useContentStore } from "../store/content";
// import Navbar from "../components/Navbar";
// import { Search } from "lucide-react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
// import { Link } from "react-router-dom";

// const SearchPage = () => {
// 	const [activeTab, setActiveTab] = useState("movie");
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [results, setResults] = useState([]);
// 	const { setContentType } = useContentStore();

// 	const handleTabClick = (tab) => {
// 		setActiveTab(tab);
// 		tab === "movie" ? setContentType("movie") : setContentType("tv");
// 		setResults([]);
// 	};

// 	const handleSearch = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/search/${activeTab}/${searchTerm}`);
// 			setResults(res.data.content);
// 		} catch (error) {
// 			if (error.response.status === 404) {
// 				toast.error("Nothing found, make sure you are searching under the right category");
// 			} else {
// 				toast.error("An error occurred, please try again later");
// 			}
// 		}
// 	};

// 	return (
// 		<div className="bg-black min-h-screen text-white">
// 			<Navbar />
// 			<div className="container mx-auto px-4 py-8">
// 				<div className="flex justify-center gap-3 py-14">
// 					<button
// 						className={`py-2 px-4 rounded ${activeTab === "movie" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
// 						onClick={() => handleTabClick("movie")}
// 					>
// 						Movies
// 					</button>
// 					<button
// 						className={`py-2 px-4 rounded ${activeTab === "tv" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
// 						onClick={() => handleTabClick("tv")}
// 					>
// 						TV Shows
// 					</button>
// 					<button
// 						className={`py-2 px-4 rounded ${activeTab === "person" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
// 						onClick={() => handleTabClick("person")}
// 					>
// 						Person
// 					</button>
// 				</div>

// 				<h1 className="font-semibold lg:text-9xl text-3xl tracking-tighter lg:mb-0 mb-2">Search Anything..</h1>

// 				<form
// 					className="ring-1 ring-white/80 focus:ring-green-500 rounded-full flex items-center justify-between"
// 					onSubmit={handleSearch}
// 				>
// 					<input
// 						type="text"
// 						value={searchTerm}
// 						onChange={(e) => setSearchTerm(e.target.value)}
// 						placeholder={"Search for a " + activeTab}
// 						className="peer bg-transparent border-0 lg:px-10 p-4 w-full focus:outline-0 focus:ring-0 rounded-full tracking-normal lg:text-xl placeholder:text-white/40 lg:placeholder:text-xl placeholder:text-sm placeholder:tracking-tight"
// 					/>
// 					<button className="bg-transparent text-white p-2 rounded">
// 						<Search className="size-6" />
// 					</button>
// 				</form>

// 				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-20">
// 					{results.map((result) => {
// 						if (!result.poster_path && !result.profile_path) return null;

// 						return (
// 							<div
// 								key={result.id}
// 								className="bg-gray-800 p-4 rounded relative group transform transition duration-300 hover:scale-105"
// 							>
// 								{activeTab === "person" ? (
// 									<div className="flex flex-col items-center">
// 										<img
// 											src={ORIGINAL_IMG_BASE_URL + result.profile_path}
// 											alt={result.name}
// 											className="max-h-96 rounded mx-auto"
// 										/>
// 										<h2 className="mt-2 text-xl font-bold">{result.name}</h2>
// 									</div>
// 								) : (
// 									<Link
// 										to={"/watch/" + result.id}
// 										onClick={() => {
// 											setContentType(activeTab);
// 										}}
// 									>
// 										<img
// 											src={ORIGINAL_IMG_BASE_URL + result.poster_path}
// 											alt={result.title || result.name}
// 											className="w-full h-auto rounded group-hover:opacity-80"
// 										/>
// 										{activeTab === "movie" && (
// 											<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
// 												<button className="bg-red-600 p-4 rounded-full shadow-lg hover:bg-red-700">
// 													<i className="fas fa-play text-white text-3xl"></i>
// 												</button>
// 											</div>
// 										)}
// 										<h2 className="mt-2 text-xl font-bold">{result.title || result.name}</h2>
// 									</Link>
// 								)}
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default SearchPage;



// import { useState } from "react";
// import { useContentStore } from "../store/content";
// import Navbar from "../components/Navbar";
// import { Search } from "lucide-react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
// import { Link } from "react-router-dom";
// import { Play } from "lucide-react";

// const SearchPage = () => {
// 	const [activeTab, setActiveTab] = useState("movie");
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [results, setResults] = useState([]);
// 	const { setContentType } = useContentStore();

// 	const handleTabClick = (tab) => {
// 		setActiveTab(tab);
// 		tab === "movie" ? setContentType("movie") : setContentType("tv");
// 		setResults([]);
// 	};

// 	const handleSearch = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/search/${activeTab}/${searchTerm}`);
// 			setResults(res.data.content);
// 		} catch (error) {
// 			if (error.response.status === 404) {
//                 console.log("Here");
// 				toast.error("Nothing found, make sure you are searching under the right category");
// 			} else {
// 				toast.error("An error occurred, please try again later");
// 			}
// 		}
// 	};

// 	return (
// 		<div className="bg-black min-h-screen text-white">
// 			<Navbar />
// 			<div className="container mx-auto px-4 py-8">
// 				<div className="flex justify-center gap-3 py-14">
// 					<button
// 						className={`py-2 px-4 rounded ${activeTab === "movie" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
// 						onClick={() => handleTabClick("movie")}
// 					>
// 						Movies
// 					</button>
// 					<button
// 						className={`py-2 px-4 rounded ${activeTab === "tv" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
// 						onClick={() => handleTabClick("tv")}
// 					>
// 						TV Shows
// 					</button>
// 					<button
// 						className={`py-2 px-4 rounded ${activeTab === "person" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
// 						onClick={() => handleTabClick("person")}
// 					>
// 						Person
// 					</button>
// 				</div>

// 				<h1 className="font-semibold lg:text-9xl text-3xl tracking-tighter lg:mb-0 mb-2 text-green-500">Search Anything..</h1>

// 				<form
// 					className="ring-1 ring-white/80 focus:ring-green-500 rounded-full flex items-center justify-between"
// 					onSubmit={handleSearch}
// 				>
// 					<input
// 						type="text"
// 						value={searchTerm}
// 						onChange={(e) => setSearchTerm(e.target.value)}
// 						placeholder={"Search for a " + activeTab}
// 						className="peer bg-transparent border-0 lg:px-10 p-4 w-full focus:outline-0 focus:ring-0 rounded-full tracking-normal lg:text-xl placeholder:text-white/40 lg:placeholder:text-xl placeholder:text-sm placeholder:tracking-tight"
// 					/>
// 					<button className="bg-transparent text-white px-5 rounded">
// 						<Search className="size-6" />
// 					</button>
// 				</form>

// 				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-20">
// 					{results.map((result) => {
// 						if (!result.poster_path && !result.profile_path) return null;

// 						return (
// 							<div
// 								key={result.id}
// 								className="bg-black p-4 rounded-lg relative group transform transition duration-300 hover:scale-105"
// 							>
// 								{activeTab === "person" ? (
// 									<div className="flex flex-col items-center">
// 										<img
// 											src={ORIGINAL_IMG_BASE_URL + result.profile_path}
// 											alt={result.name}
// 											className="max-h-96 rounded mx-auto"
// 										/>
// 										<h2 className="mt-2 text-xl font-bold">{result.name}</h2>
// 									</div>
// 								) : (
// 									<Link
// 										to={"/watch/" + result.id}
// 										onClick={() => {
// 											setContentType(activeTab);
// 										}}
// 									>
// 										<div className="relative">
// 											<img
// 												src={ORIGINAL_IMG_BASE_URL + result.poster_path}
// 												alt={result.title || result.name}
// 												className="w-full h-auto rounded group-hover:opacity-80 transition-opacity"
// 											/>
// 											{activeTab === "movie" && (
// 												<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
// 													<button className="bg-green-500 p-6 rounded-full shadow-lg hover:bg-green-500">
// 														<Play/>
// 													</button>
// 												</div>
// 											)}
// 										</div>
// 										<h2 className="mt-2 text-xl font-bold">{result.title || result.name}</h2>
// 									</Link>
// 								)}
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default SearchPage;



import { useState } from "react";
import { useContentStore } from "../store/content";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const SearchPage = () => {
	const [activeTab, setActiveTab] = useState("movie");
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const { setContentType } = useContentStore();

	const handleTabClick = (tab) => {
		setActiveTab(tab);
		tab === "movie" ? setContentType("movie") : setContentType("tv");
		tab==="movie"?localStorage.setItem("contentType", "movie"): localStorage.setItem("contentType", "tv");;
		setResults([]);
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/search/${activeTab}/${searchTerm}`);
			setResults(res.data.content);
		} catch (error) {
			if (error.response.status === 404) {
                console.log("Here");
				toast.error("Nothing found, make sure you are searching under the right category");
			} else {
				toast.error("An error occurred, please try again later");
			}
		}
	};

	return (
		<div className="bg-black min-h-screen text-white">
			<Navbar setActiveTab={setActiveTab}/>
			<div className="container mx-auto px-4 py-8">
				<div className="flex justify-center gap-3 py-14">
					<button
						className={`py-2 px-4 rounded ${activeTab === "movie" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
						onClick={() => handleTabClick("movie")}
					>
						Movies
					</button>
					<button
						className={`py-2 px-4 rounded ${activeTab === "tv" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
						onClick={() => handleTabClick("tv")}
					>
						TV Shows
					</button>
					<button
						className={`py-2 px-4 rounded ${activeTab === "person" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
						onClick={() => handleTabClick("person")}
					>
						Person
					</button>
				</div>

				<h1 className="font-semibold lg:text-9xl text-3xl tracking-tighter lg:mb-0 mb-2 text-green-500">Search Anything..</h1>

				<form
					className="ring-1 ring-white/80 focus:ring-green-500 rounded-full flex items-center justify-between"
					onSubmit={handleSearch}
				>
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder={"Search for a " + activeTab}
						className="peer bg-transparent border-0 lg:px-10 p-4 w-full focus:outline-0 focus:ring-0 rounded-full tracking-normal lg:text-xl placeholder:text-white/40 lg:placeholder:text-xl placeholder:text-sm placeholder:tracking-tight"
					/>
					<button className="bg-transparent text-white px-5 rounded">
						<Search className="size-6" />
					</button>
				</form>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-20">
					{results.map((result) => {
						if (!result.poster_path && !result.profile_path) return null;

						return (
							<div
								key={result.id}
								className="bg-black p-4 rounded-lg relative group transform transition duration-300 hover:scale-105"
							>
								{activeTab === "person" ? (
									<div className="flex flex-col items-center">
										<img
											src={ORIGINAL_IMG_BASE_URL + result.profile_path}
											alt={result.name}
											className="max-h-96 rounded mx-auto"
										/>
										<h2 className="mt-2 text-xl font-bold">{result.name}</h2>
									</div>
								) : (
									<Link
										to={"/watch/" + result.id}
										onClick={() => {
											setContentType(activeTab);
										}}
									>
										<div className="relative">
											<img
												src={ORIGINAL_IMG_BASE_URL + result.poster_path}
												alt={result.title || result.name}
												className="w-full h-auto rounded group-hover:opacity-80 transition-opacity"
											/>
											{activeTab === "movie" && (
												<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
													<button className="bg-green-500 p-6 rounded-full shadow-lg hover:bg-green-500">
														<Play/>
													</button>
												</div>
											)}
										</div>
										<h2 className="mt-2 text-xl font-bold">{result.title || result.name}</h2>
									</Link>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SearchPage;



