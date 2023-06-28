import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({bkgD}) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: bkgD }}>Função D</h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD
