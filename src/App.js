import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Categories from "./Pages/Categories";
import Home from "./Pages/Home";
import SearchProducts from "./Pages/SearchProducts";

function App() {
  return (
   <div className="App">
     <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/categories/:id" element={<Categories/>}/>
         <Route path='/search/:product' element={<SearchProducts/>}/>
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
