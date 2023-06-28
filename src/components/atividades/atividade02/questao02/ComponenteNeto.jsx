import { useContext } from "react"
import PokemonContexto from "./PokemonContexto"

const ComponenteNeto = () => {
    const numero = useContext(PokemonContexto) + 2
    return (
        <>
            <h1>Sou Neto</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                alt="Pokemon"
                style={{ width: "400px" }}
            />
        </>
    )
}

export default ComponenteNeto
