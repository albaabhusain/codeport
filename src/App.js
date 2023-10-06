import Landingpage from "./Components/innerComp/Landingpage";
import Main from "./Components/main";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Main/>
          </Route>
          <Route path='/Landing'>
            <Landingpage/>
          </Route>
          
        </Routes>
      </Router>
        
      
    </div>
    </>
  );
}

export default App;
