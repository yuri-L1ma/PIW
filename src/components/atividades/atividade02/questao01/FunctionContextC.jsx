import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"

const FunctionContextC = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({bkgC}) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: bkgC}}>Função C</h1>
                            <FunctionContextD />
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextC