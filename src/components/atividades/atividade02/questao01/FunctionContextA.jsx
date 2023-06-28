import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {
    const values = {bkgA:"green", bkgB:"red",bkgC:"yellow", bkgD:"blue"}
    return (
         <ColorTheme.Provider value={values}>
            <h1 style={{backgroundColor: values.bkgA}}>Função A</h1>
            <FunctionContextB />
            <FunctionContextC />
         </ColorTheme.Provider>
    )
}

export default FunctionContextA