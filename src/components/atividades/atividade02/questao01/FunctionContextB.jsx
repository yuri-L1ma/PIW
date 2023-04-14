import ColorTheme from "./MyColorContext"
import { useContext } from "react"

const FunctionContextB = () => {
    const cores = useContext(ColorTheme)
    return (
        <h1 style={{backgroundColor: cores.bkgB}}>Função B</h1>
    )
}

export default FunctionContextB