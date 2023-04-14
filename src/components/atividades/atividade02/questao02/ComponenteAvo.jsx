import { useState } from "react"
import ComponenteFilho from "./ComponenteFilho"
import PokemonContexto from "./PokemonContexto"

const ComponenteAvo = () => {
    // let numero = 1
    const [numero, setNumero] = useState(1)

    const acaoBotao = () => {
        setNumero(numero+1)
    }

    return (
        <>
            <PokemonContexto.Provider value={numero}>
                <h1>Sou Avo</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    alt="Pokemon"
                    style={{ width: "400px" }}
                />
                <button
                onClick={
                    acaoBotao
                }>
                    ME APERTE!
                </button>
                <ComponenteFilho />
            </PokemonContexto.Provider>
        </>
    )
}

export default ComponenteAvo
