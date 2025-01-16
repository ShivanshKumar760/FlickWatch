import { useParams } from "react-router-dom"
import { useContentStore } from "../store/content"
import MoviePage from "./MoviePage";
import TvPage from "./TvPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WatchPage() {
    const {id}=useParams();
    const {contentType}=useContentStore();
  return (
<>
    <Navbar/>
    {contentType==="movie"? (<MoviePage id={id} contentType={contentType}/>):(<TvPage id={id} contentType={contentType}/>)}
    <Footer/>
</>
  )
}

export default WatchPage