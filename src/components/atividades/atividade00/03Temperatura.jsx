const Temperatura = () => {
    function convertCelsiusToFahrenheit(celsius){
        return ((9 * celsius) + 160) / 5
    }

    function convertFahrenheitToCelsius(fahrenheit){
        return ((5 * fahrenheit) - 160) / 9
    }

    function convertKelvinToAll(kelvin){
        let temps = {celsius: 0, fahrenheit: 0}

        temps.celsius = kelvin - 273
        temps.fahrenheit = ((9 * kelvin) - 2297) / 5 

        return temps
    }

    return (
        <div>
            <h1>26 C to F = {convertCelsiusToFahrenheit(26)}</h1>
            <h1>26 F to C = {convertFahrenheitToCelsius(26)}</h1>
            <h1>26 K to C = {convertKelvinToAll(26).celsius}</h1>
            <h1>26 K to F = {convertKelvinToAll(26).fahrenheit}</h1>
        </div>
    )
}

export default Temperatura