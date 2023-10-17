import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import Signin from "./pages/Signin";

import Signout from "./pages/Signout";
import Profile from "./pages/Profile";
import About from "./pages/About";

export default function App() {
  return <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Sign-in" element={<Signin />}/>
          <Route path="/Sign-out" element={<Signout />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/About" element={<About />}/>
          
        </Routes>
  </BrowserRouter>
}
