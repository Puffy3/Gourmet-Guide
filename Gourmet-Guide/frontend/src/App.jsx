
import Auth from "./Pages/Auth.jsx"
import Home from "./Pages/Home.jsx"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SavedRec from "./Pages/SavedRec.jsx"
import CreateRec from "./Pages/CreateRec.jsx"
import Navbar from "./Components/Navbar.jsx"
import Login from "./Components/Login.jsx"
import Register from "./Components/Register.jsx"
import Rec from "./Components/Rec.jsx"
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Create" element={<CreateRec />} />
      <Route path="/auth/register" element={<Register/>} />
      <Route path="/auth/login" element={<Login/>} />
      <Route path='/Save' element={<SavedRec />} />
      <Route path='/test' element={<Rec />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
