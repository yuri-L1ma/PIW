import { useState } from "react"

const Questao02 = () => {
    const [virado, setVirado] = useState(true)

    const acaoBotao = () => {
        setVirado(!virado)
    }

    return (
        <>
            <img src={virado ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"} alt="" style={{width: 200}}/> 
            <button
                onClick={acaoBotao}
            >CLIQUE</button>       
            <h1>Oi</h1>
        </>
    )
}

export default Questao02