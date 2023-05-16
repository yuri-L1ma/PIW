import { useEffect, useState } from "react"

const Questao03 = () => {
    let [smallPopulationCountry, setSmallPopulationCountry] = useState({})
    let [bigPopulationCountry, setBigPopulationCountry] = useState({})

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (data) => {
                let small = data[0]
                let big = data[0]

                for (let country of data) {
                    if (country.population < small.population) {
                        small = country
                    } else if (country.population > big.population) {
                        big = country
                    }
                }
                
                setSmallPopulationCountry(small)
                setBigPopulationCountry(big)
            }
        )
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1>Capital com menor população: {smallPopulationCountry.capital[0]}</h1>
            <h1>Capital com maior população: {bigPopulationCountry.capital[0]}</h1>
        </>
    )
}

export default Questao03