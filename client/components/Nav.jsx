import React from 'react'
import {Link} from 'react-router-dom'
import continents from '../../data/continents'
  
function Nav() {

let continentsArr = Object.keys(continents)

  return (
    <div>
      <h2>Nav</h2>
      <ul>
      <Link to='/'><li>Home</li></Link>
    {continentsArr.map((continent, index) => {
      return <Link to = {`/continents/${continent}`}key = {index}><li > {continent}</li>
      </Link>
      
    })}
      </ul>
    </div>
  )
}


export default Nav
