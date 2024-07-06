
import Auth from "./Pages/Auth.jsx"
import Home from "./Pages/Home.jsx"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SavedRec from "./Pages/SavedRec.jsx"
import CreateRec from "./Pages/CreateRec.jsx"
import Navbar from "./Components/Navbar.jsx"
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Create" element={<CreateRec />} />
      <Route path="/auth" element={<Auth/>} />
      <Route path='/Save' element={<SavedRec />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
