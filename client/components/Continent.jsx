import React from 'react'
import { useParams, Link } from 'react-router-dom'
import continents from '../../data/continents'

// function getCountries() {}
// for (let i = 0; i < continents.countries.length; i ++) {
//   const countries = continents.countries[i].name
//   console.log(countries)
// }

function Continent() {
  const { name } = useParams()
  const countries = continents[name].countries
  const image = continents[name].image
  return (
    <div>
      <h1>{name}</h1>
      <img src={`/images/${image}`} alt={`${name}`} />
      <ul>
        
        {countries.map((country) => {
          return (
            <li key={country.code}>
              <Link to={`/continents/${name}/${country.code}`}>
                {country.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Continent
