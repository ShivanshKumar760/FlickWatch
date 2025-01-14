import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-red-400">
      Hello world!
    </h1> */}

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
