import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./pages/About";
import { webRoutes } from "./routes/Route";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    < Navbar />
    <Routes>
      < Route path={webRoutes.home} element={<Home/>} />
      < Route path={webRoutes.about} element={<About/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
