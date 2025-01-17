import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import WatchPage from "./pages/WatchPage"
import SearchPage from "./pages/SearchPage"
import { Toaster } from "react-hot-toast"
function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-red-400">
      Hello world!
    </h1> */}

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/watch/:id" element={<WatchPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
    </BrowserRouter>

    <Toaster />
    </>
  )
}
//file completed

export default App
