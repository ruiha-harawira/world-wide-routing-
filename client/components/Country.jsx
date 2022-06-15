import React from 'react'
import { useParams } from 'react-router-dom'
import countries from '../../data/countries'

function Country() {
const { code } = useParams()
const selectedCountry = countries.find(country => 
  country.code === code)

return (
  <div>
    <h1>{selectedCountry.flag} {selectedCountry.name}</h1>
    <h3>Capital: {selectedCountry.capital}</h3>
    <h3>Area: {selectedCountry.areaSqKms} km2</h3>
    <h3>Population: {selectedCountry.population}</h3>
    <h3>Currency: {selectedCountry.currencyName} ({selectedCountry.currencyCode})</h3>
    <h3>Neighbours: {selectedCountry.neighbours}</h3>
  </div>

)

}

export default Country