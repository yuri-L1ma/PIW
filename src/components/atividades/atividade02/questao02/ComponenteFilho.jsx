import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"
import PokemonContexto from "./PokemonContexto"

const ComponenteFilho = () => {
    const numero = useContext(PokemonContexto) + 1
    return (
        <>
            <h1>Sou Filho</h1>
            <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    alt="Pokemon"
                    style={{ width: "400px" }}
                />
            <ComponenteNeto />
        </>
    )
}

export default ComponenteFilho
