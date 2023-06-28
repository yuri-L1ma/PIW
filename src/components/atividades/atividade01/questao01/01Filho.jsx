const Filho = ({ peso, altura }) => {
    
    const calcIMC = (peso, altura) => {
        return peso / (altura * altura)
    }

    const renderIMC = () => {
        const imc = calcIMC(peso, altura)

        if (imc < 18) {
            return (
                <h3>Abaixo do peso</h3>
            )
        } else if (imc > 25) {
            return (
                <h3>Acima do peso</h3>
            )
        }

        return (
            <h3>Peso Ideal</h3>
        )
    }

    return (
        <div>{renderIMC()}</div>
    )
}

export default Filho