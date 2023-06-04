import './App.css'
import UserContext from './Contexts/UserContext'
import {useState,Provider} from 'react' 
import Hero from './components/Hero'

function App() {
const [data,setData] = useState({
  name:'roshan',
  email:'roshan@gmail.com',
})

  return (
    <>
    <UserContext.Provider value={{data:data}}>
    <Hero/>
    
    </UserContext.Provider>
    </>
  )
}

export default App
