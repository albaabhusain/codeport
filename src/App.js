import Landingpage from "./Components/innerComp/Landingpage";
import Main from "./Components/main";

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
            
          
          <Route path='/Landing' element={<Landingpage/>}/>
            
         
          
        </Routes>
      </BrowserRouter>
        
      
    </div>
    </>
  );
}

export default App;
