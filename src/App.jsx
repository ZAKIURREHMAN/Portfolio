
import  React, {Suspense } from "react";



const  Home   = React.lazy(()=>import('./component/Home/Home'))
const Navbar = React.lazy(()=>import("./component/Navbar/Navbar"))
const About = React.lazy(()=>import("./pages/About"))
import { webRoutes } from "./routes/Route";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<p className=" text-[50px] " >----------Loading</p>} >
    < Navbar />

    <Routes>
      < Route path={webRoutes.home} element={<Home/>} />
      < Route path={webRoutes.about} element={<About/>} />
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
