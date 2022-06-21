import React from 'react'
import { useParams , Link } from 'react-router-dom'
import countries from '../../data/countries'

function Country() {
const { code } = useParams()
const { name } = useParams()
const selectedCountry = countries.find(country => 
  country.code === code)
const countryNeighb = selectedCountry.neighbours.split(',')

let neighbourArr = countries.filter(country => countryNeighb.includes(country.code))

  

return (
  <div>
    <h1>{selectedCountry.flag} {selectedCountry.name}</h1>
    <h3>Capital: {selectedCountry.capital}</h3>
    <h3>Area: {selectedCountry.areaSqKms} km2</h3>
    <h3>Population: {selectedCountry.population}</h3>
    <h3>Currency: {selectedCountry.currencyName} ({selectedCountry.currencyCode})</h3>
    <h3>Neighbours: 
      {
        neighbourArr.map(neighbour => {
          return (
            <ul>
              <li>
                <Link to={`/continents/${name}/${neighbour.code}`}>{neighbour.name}</Link>
              </li>
            </ul>
          )
        })}
        </h3>
    </div>

   )
}


export default Country