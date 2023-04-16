import { useState } from "react"

const Cidades = () => {
    let [cidades, setCidades] = useState(new Map([['Fortaleza', 0], ['Maracanau', 0], ['Iguatu', 0], ['Sobral', 0]]))
    let [mostVotedCity, setMostVotedCity] = useState(["Não há votos suficientes para computar"])
    let [lessVotedCity, setLessVotedCity] = useState(["Não há votos suficientes para computar"])

    const voteCity = (id) => {

        if (id === 0) {
            cidades.set('Fortaleza', cidades.get('Fortaleza') + 1)
        } else if (id === 1) {
           cidades.set('Maracanau', cidades.get('Maracanau') + 1)
        } else if (id === 2) {
            cidades.set('Iguatu', cidades.get('Iguatu') + 1)
        } else {
            cidades.set('Sobral', cidades.get('Sobral') + 1)
        }

        setCidades(cidades)
        setMostVotedCity(getMostVotedCity())
        setLessVotedCity(getLessVotedCity())
    }

    const getMostVotedCity = () => {
        mostVotedCity = []
        
        for(let a of getCities(Math.max(...cidades.values()))){
            mostVotedCity.push(a)
        }

        return mostVotedCity
    }

    const getLessVotedCity = () => {
        lessVotedCity = []
        
        for(let a of getCities(Math.min(...cidades.values()))){
            lessVotedCity.push(a)
        }

        return lessVotedCity
    }

    const getCities = (number) => {
        let allCities = []

        for(let [chave, valor] of cidades.entries()){
            if(valor === number){
                allCities.push(chave)
            }
        }

        return allCities
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
                <p>Cidade mais votada: {mostVotedCity}</p>
                <p>Cidade menos votada: {lessVotedCity}</p>
            </div>
        </>
    )
}

export default Cidades