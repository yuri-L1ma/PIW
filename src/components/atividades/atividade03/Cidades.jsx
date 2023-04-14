import { useState } from "react"

const Cidades = () => {
    const [cidades, setCidades] = useState(new Map())
   
    // setCidades(new Map(() => {
    //     cidades.set("Fortaleza", 0)
    //     cidades.set("Maracanau", 0)
    //     cidades.set("Iguatu", 0)
    //     cidades.set("Sobral", 0)
    // }))

    setCidades(new Map(cidades.set("Fortaleza", 0)))    

    const voteCity = (id) => {
        if (id === 0) {
            setCidades(new Map(cidades.set('Fortaleza', cidades.get('Fortaleza') + 1)))
        } else if (id === 1) {
            cidades.set('Maracanau', cidades.get('Maracanau') + 1)
        } else if (id === 2) {
            cidades.set('Iguatu', cidades.get('Iguatu') + 1)
        } else {
            cidades.set('Sobral', cidades.get('Sobral') + 1)
        }
    }


    return (
        <>
            <h1>Votação de cidades</h1>
            <p>Fortaleza: {cidades.get('Fortaleza')}</p>
            <p>Maracanaú: {cidades.get('Maracanau')}</p>
            <p>Iguatu: {cidades.get('Iguatu')}</p>
            <p>Sobral: {cidades.get('Sobral')}</p>

            <div>
                <button onClick={() => voteCity(0)}>VOTAR FORTALEZA</button>
                <button onClick={() => voteCity(1)}>VOTAR MARACANAÚ</button>
                <button onClick={() => voteCity(2)}>VOTAR IGUATU</button>
                <button onClick={() => voteCity(3)}>VOTAR SOBRAL</button>
            </div>

            <div>
                <p>Cidade mais votada</p>
                <p>Cidade menos votada</p>
            </div>
        </>
    )
}

export default Cidades