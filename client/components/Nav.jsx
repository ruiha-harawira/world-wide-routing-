import React from 'react'
import continents from '../../data/continents'
  
function Nav() {

let continentsArr = Object.keys(continents)

  return (
    <div>
      <h2>Nav</h2>
      <ul>
    {continentsArr.map((continent, index) => {
      return <li key = {index}> {continent}</li>
    })}
      </ul>
    </div>
  )
}


export default Nav
