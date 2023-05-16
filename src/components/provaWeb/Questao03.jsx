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
                setSmallPopulationCountry(small)
                setBigPopulationCountry(big)
                for (let country of data) {
                    if (Number(country.population) < small) {
                        small = country
                    } else if (Number(country.population) > bigPopulationCountry.population) {
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
            <h1>Capital com menor população: {smallPopulationCountry.capital}</h1>
            <h1>Capital com maior população: {bigPopulationCountry.capital}</h1>
        </>
    )
}

export default Questao03