import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const PokemonAxios = () => {
    let [id, setId] = useState(1) //O id do pokemon que eu quero buscar
    let [nome, setNome] = useState('')
    let [imagem, setImagem] = useState('')
    let [imagem2, setImagem2] = useState('')

    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(
                    ({ data }) => {
                        setNome(data.name)
                        setImagem(data.sprites.front_default)
                        setImagem2(data.sprites.back_default)
                    }
                )
                .catch(
                    (error) => console.log(error)
                )
        },
        [id] //Quando eu passo somente uma lista vazia, o useEffect é executado somente uma vez
    )

    return (
        <>
            <h3>Nome: {nome}</h3>
            <h3>ID: {id}</h3>
            <table>
                <tr>
                    <td><img src={imagem} style={{ width: "400px" }} /></td>
                    <td><img src={imagem2} style={{ width: "400px" }} /></td>
                </tr>
            </table>
            <button onClick={() => setId((prev) => prev - 1)}>ANTERIOR</button>
            <button onClick={() => setId((prev) => prev + 1)}>PRÓXIMO</button>
        </>
    )
}

export default PokemonAxios