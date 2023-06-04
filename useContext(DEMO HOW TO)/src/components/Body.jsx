import React from 'react'
import { useContext } from 'react'
import UserContext from '../Contexts/UserContext'
function Body() {
  const {data} = useContext(UserContext);
  
  return (
    <div>
        This is body component.
        
        <p>hello body</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione quasi autem, consequuntur qui explicabo natus maiores sapiente laboriosam fugiat culpa eos reprehenderit vitae, laudantium veniam in magni, voluptates ut?</p>
        <div>
          <h3>below value are from context</h3>
          <h4>{data.name}</h4>
          <h5>{data.email}</h5>
        </div>
    </div>
  )
}

export default Body