import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const PokemonAxios = () => {
    let [id, setId] = useState(1) //O id do pokemon que eu quero buscar
    let [nome, setNome] = useState('')
    let [imagem, setImagem] = useState('')
    let [imagem2, setImagem2] = useState('')
    let [load, setLoad] = useState(false)

    useEffect(
        () => {
            setLoad(true)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(
                    ({ data }) => {
                        setNome(data.name)
                        setImagem(data.sprites.front_shiny)
                        setImagem2(data.sprites.back_shiny)
                        setLoad(false)
                    }
                )
                .catch(
                    (error) => console.log(error)
                )
        },
        [id] //Quando eu passo somente uma lista vazia, o useEffect é executado somente uma vez
    )

    const renderizarConteudo = () => {
        if(load) return (
            <tr>
                <td>
                    <h3>Loading</h3>
                </td>
            </tr>
        )
        return (
            <>
                <tr>
                    <td>
                        <h3>Nome: {nome}</h3>
                    </td>
                    <td>
                        <h3>ID: {id}</h3>
                    </td>
                </tr>
                <tr>
                    <td><img src={imagem} style={{ width: "400px" }} /></td>
                    <td><img src={imagem2} style={{ width: "400px" }} /></td>
                </tr>
            </>
        )
    }

    return (
        <>
            <h1>Load: {load + ""}</h1>
            <table>
                {renderizarConteudo()}
                <tr>
                    <td>
                        <button onClick={() => setId((prev) => prev - 1)}>ANTERIOR</button>
                    </td>
                    <td>
                        <button onClick={() => setId((prev) => prev + 1)}>PRÓXIMO</button>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default PokemonAxios