import { useSelector } from "react-redux"

const Imagem = () => {
    const id = useSelector((state) => state.id.value)
    return (
        <>
            <img
                src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                style = {{width: "500px"}}
            />
        </>
    )
}

export default Imagem