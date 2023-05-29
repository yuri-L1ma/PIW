import { useEffect, useState } from "react"

const Questao03 = () => {
    let [smallPopulationCountry, setSmallPopulationCountry] = useState({})
    let [bigPopulationCountry, setBigPopulationCountry] = useState({})

    // Nessas duas variáveis eu criei um estado para cada uma, para que eu possa renderizar na tela assim que o resultado for obtido da API.

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then(
            (response) => {
                return response.json()
            } // Só lembrando que o resultado do fetch é uma outra promessa
        )
        .then(
            (data) => {
                let small = data[0]
                let big = data[0]

                // Aqui criei duas variáveis auxiliares com a primeira capital recebida da API. Com o FOR logo abaixo, será comparado capital por capital, e se a populção da capital comparada for menor que a população da capital da variável auxiliar, a variavel auxiliar será substituída. O mesmo acontece com a capital maior. Dessa forma, ao final da estrutura de repetição, terei as capitais com menor e maior população.

                for (let country of data) {
                    if (country.population < small.population) {
                        small = country
                    } else if (country.population > big.population) {
                        big = country
                    }
                }
                
                setSmallPopulationCountry(small)
                setBigPopulationCountry(big)

                // Com os resultados obtidos eu consigo setar as variáveis de estado e renderizar na tela.
            }
        )
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1>Capital com menor população: {smallPopulationCountry.capital}</h1>
            <h1>Capital com maior população: {bigPopulationCountry.capital}</h1>
        </>
    )
}

export default Questao03