import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DataFetch.css'

const DataFetch = () => {

      const [pokemon, setPokemon] = useState([])
      const [id, setId] = useState(2);
       useEffect(() => {
            
            axios.get(`https://pokeapi.co/api/v2/item/${id}`)
            .then(res => {
                  console.log(res)
                  setPokemon(res.data)
            })
            .catch(err => console.log(err))
      },[id])

      return (
            <div>
                  <h1>Pokemon</h1>
                  <input type="text" value={id}  onChange={e => setId(e.target.value)} />

                  <div className='cards'>
                        <h1>Name : {pokemon.name}</h1>
                        <h2>Cost : {pokemon.cost}</h2>
                  </div>
            </div>
      )
}

export default DataFetch
