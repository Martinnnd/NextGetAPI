"use client";
import { useState } from "react"

export default function BotonConsulta() {
  
    const [pokemonData, setPokemonData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchPokemonData = async () => {
        setLoading(true)
        setError(null)

        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            if(!response.ok){
                throw new Error("error al consultar la API")
            }

            const data = await response.json()
            setPokemonData(data.results)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h1 className="text-3xl text-red-500">Consulta Pokemon</h1>
            <button className="my-24 bg-red-500 p-3 rounded-xl transition-all hover:transition-all hover:bg-white hover:text-red-500" onClick={fetchPokemonData}>Consultar</button>

            {pokemonData && (
                <ul className="grid grid-cols-5 gap-5 my-15">
                    {pokemonData.map((pokemon, index) => (
                        <li className="bg-red-500 rounded-xl mx-4 p-2 uppercase transition-all hover:transition-all hover:z-50 hover:p-5" key={{index}}>{pokemon.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )



}
