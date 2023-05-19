import { data } from "./components/constants/API_DATA";
import CardComponent from "./components/Card";
import "./assets/style.css"
import ErrorPage from "./components/ErrorPage";
import { Routes,Route } from "react-router-dom";




function App() {

   return (
   <div className="container">
   <Routes>
    <Route path="/" element={<CardComponent data={data}/>}/>
    <Route path="/about" element={<h1>You are inside about route.</h1>}/>
    <Route path="/contact" element={<h1>You are inside contact route.</h1>}/>
    <Route path="*" element={<ErrorPage/>}/>
   </Routes> 
   </div>

  )
}

export default App

