import { data } from "./components/constants/API_DATA";
import CardComponent from "./components/Card";
import "./assets/style.css"



function App() {
 console.log('this is app component',data);
 
 

  return (
   <div className="container">
    <CardComponent data={data}/>   
   </div>

  )
}

export default App

