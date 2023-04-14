import Neyma from "../../../imgs/neyma.jpg"
import Imposto from "../../../imgs/imposto.jpg"

const Hero = ({ name, img }) => {
    return (
        <>
            <img alt="Sei la" style={{width: 200}} src={img}/>
            <h2>Herói {name}</h2>
        </>
    )
}

const Enemy = ({ name, img}) => {
    return (
        <>
            <img alt="Sei la" style={{width: 200}} src={img}/>
            <h2>Enemigo {name}</h2>
        </>
    )
}

const Arena = () => {
    return (
        <>
            <Hero name = "Neymar" img = {Neyma}/>
            <Enemy name = "Imposto" img = {Imposto} />
        </>
    )
}

const World = ({children}) => {
    return (
        children
    )
}

export {World, Arena}