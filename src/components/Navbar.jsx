// import { Link } from "react-router-dom"
// import logo from "../images/logo.png"
// import { useState } from "react"
// import { Menu } from "lucide-react";
// import { useContentStore } from "../store/content";
// const Navbar = () => {
//     const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);

//     const toggleMobileMenu=()=>{
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     }

//     const {contentType,setContentType}=useContentStore();
//     console.log(contentType);
//   return (
//     <header className="max-w-6xl mx-auto flex flex-wrap items-center  justify-between p-4 h-20 fixed top-0 z-40 inset-x-0 lg:px-10 px-6 py-6">
//        <div className="flex items-center gap-10 z-50 ">
//             <Link to="/">
//                 <img src={logo} alt="logo" className="h-16"/>
//             </Link>
//              {/* hidden for smaller screen visible for desktop */}

//              <div className='hidden lg:flex items-center gap-x-24'>
// 					<Link to='/' className='hover:underline cursor-pointer font-semibold text-lg text-neutral-400 hover:text-neutral-200 transition duration-300 ease-in-out' onClick={() =>{
//                      return setContentType("movie")}}>
// 						Movie
// 					</Link>
// 					<Link to='/' className='hover:underline cursor-pointer font-semibold text-lg text-neutral-400 hover:text-neutral-200 transition duration-300 ease-in-out' onClick={() => {return setContentType("tv")}}>
// 						Tv Show
// 					</Link>
// 				</div>
//        </div>

//        <div className="flex gap-2 items-center z-50">
        
//         <Link to="/search" className='hover:underline cursor-pointer font-semibold text-lg text-neutral-400 hover:text-neutral-200 transition duration-300 ease-in-out'>
//             Search
//         </Link>

//         <div className="sm:hidden">
//             <Menu className="size-6 cursor-pointer" onClick={()=>{
//                 toggleMobileMenu();
//             }}/>
//         </div>
//        </div>

//        {/* mobile nav bar */}
//         {
//             isMobileMenuOpen && (
//                 <div className="w-full sm:hidden mt-4 z-50 bg-black border border-gray-800 rounded">
//                     <Link to="/" className="block hover:underline p-2" onClick={toggleMobileMenu}>
//                         Movies
//                     </Link>

//                     <Link to="/" className="block hover:underline p-2" onClick={toggleMobileMenu}>
//                         TV shows
//                     </Link>
//                 </div>
//             )
//         }
      

//     </header>
//   )
// }

// export default Navbar

import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react";
import { useContentStore } from "../store/content";
/*eslint-disable */
const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);

    const toggleMobileMenu=()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const {contentType,setContentType}=useContentStore();
    console.log(contentType);

    useEffect(() => {
        const savedContentType = localStorage.getItem("contentType");
        if (savedContentType) {
          setContentType(savedContentType);
        }
    }, []);

    const reload=()=>{
        window.location.reload();
    }
    const removeSavedContentType=()=>{
        localStorage.removeItem("contentType");
        setTimeout(reload,5);
    }
  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center  justify-between p-4 h-20 fixed top-0 z-40 inset-x-0 lg:px-10 px-6 py-6">
       <div className="flex items-center gap-10 z-50 ">
            <Link to="/" onClick={removeSavedContentType}>
                <img src={logo} alt="logo" className="h-16"/>
            </Link>
             {/* hidden for smaller screen visible for desktop */}

             <div className='hidden lg:flex items-center gap-x-24'>
					<Link to='/' className='hover:underline cursor-pointer font-semibold text-lg text-neutral-400 hover:text-neutral-200 transition duration-300 ease-in-out' onClick={() =>{
                     return setContentType("movie")}}>
						Movies
					</Link>
					<Link to='/' className='hover:underline cursor-pointer font-semibold text-lg text-neutral-400 hover:text-neutral-200 transition duration-300 ease-in-out' onClick={() => {return setContentType("tv")}}>
						Tv Shows
					</Link>
				</div>
       </div>

       <div className="flex gap-2 items-center z-50">
        
        <Link to="/search" className='hover:underline cursor-pointer font-semibold text-lg text-neutral-400 hover:text-neutral-200 transition duration-300 ease-in-out'>
            Search
        </Link>

        <div className="sm:hidden">
            <Menu className="size-6 cursor-pointer" onClick={()=>{
                toggleMobileMenu();
            }}/>
        </div>
       </div>

       {/* mobile nav bar */}
        {
            isMobileMenuOpen && (
                <div className="w-full sm:hidden mt-4 z-50 bg-black border border-gray-800 rounded">
                    <Link to="/" className="block hover:underline p-2" onClick={toggleMobileMenu}>
                        Movies
                    </Link>

                    <Link to="/" className="block hover:underline p-2" onClick={toggleMobileMenu}>
                        TV shows
                    </Link>
                </div>
            )
        }
      

    </header>
  )
}

export default Navbar



