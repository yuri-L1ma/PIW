import { useState } from "react"

const Questao02 = () => {
    const [frente, setFrente] = useState(true) // Aqui inicialize a variável de estado para configurar a imagem do Pikachu

    return (
        <>
            <img src=
                {frente ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"}
                alt=""
                style={{ width: 200 }}
            />
            {/* Quase toda lógica da imagem alternada está nesse trecho. Com uma operação condicional ternária, é feita a verificação do estado da imagem e sua atualização. frente TRUE => Imagem de frente | frente FALSE => Imagem de costa */}
            <button
                onClick={() => {
                    setFrente(!frente)
                }}
            // Por fim, com o clique do Button o estado da imagem sempre é invertido.
            >
                CLIQUE
            </button>
            <h1>Olá! Não clique no botão vou ficar de mal com você!</h1>
        </>
    )
}

export default Questao02