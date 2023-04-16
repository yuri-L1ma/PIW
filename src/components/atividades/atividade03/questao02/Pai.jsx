import { useState } from "react"

const Pai = () => {
    let [maior, setMaior] = useState()
    let [menor, setMenor] = useState()
    let [media, setMedia] = useState()

    const vetor = [1,2,3,4,5]

    const recebeMaior = (big) => {
        maior = big
        setMaior(maior)
    }
    
    const recebeMenor = (small) => {
        menor = small
        setMenor(menor)
    }

    const recebeMedia = (meio) => {
        media = meio
        setMedia(media)
    }

    return (
        <>
            <h1>Cálculo Vetor</h1>
            <h3>Maior: {maior}</h3>
            <h3>Menor: {menor}</h3>
            <h3>Média: {media}</h3>
            <FilhoA vetor={vetor} enviarResultado={recebeMaior}></FilhoA>
            <FilhoB vetor={vetor} enviarResultado={recebeMenor}></FilhoB>
            <FilhoC vetor={vetor} enviarResultado={recebeMedia}></FilhoC>
        </>
    )
}

const FilhoA = ({vetor, enviarResultado}) => {
    let maior 
    
    const calcularMaior = () => {
        maior = Math.max(...vetor)
        enviarResultado(maior)
    }

    return (
        <>
            <button onClick={calcularMaior}>|CALCULAR MAIOR|</button>
        </>
    )
}

const FilhoB = ({vetor, enviarResultado}) => {
    let menor
    
    const calcularMenor = () => {
        menor = Math.min(...vetor)
        enviarResultado(menor)
    }

    return (
        <>
            <button onClick={calcularMenor}>|CALCULAR MENOR|</button>
        </>
    )
}	

const FilhoC = ({vetor, enviarResultado}) => {
    let media
    
    const calcularMedia = () => {
        let soma = 0

        for(let i of vetor){
            soma += i
        }

        media = soma/vetor.length
        enviarResultado(media)
    }

    return (
        <>
            <button onClick={calcularMedia}>|CALCULAR MÉDIA|</button>
        </>
    )
}	

export default Pai