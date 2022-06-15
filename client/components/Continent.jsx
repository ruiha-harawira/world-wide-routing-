import React from 'react'
import {useParams} from 'react-router-dom'
import continents from '../../data/continents'

// function getCountries() {}
// for (let i = 0; i < continents.countries.length; i ++) {
//   const countries = continents.countries[i].name 
//   console.log(countries) 
// }

function Continent() {

  const {name} = useParams()
  const country = continents[name].countries
  // const image = continents[name.images]
 return (
   <div>
 <h1>Hello</h1>
 <ul>
 
 </ul>
   </div>

 )
  

}



export default Continent 