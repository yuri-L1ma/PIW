import FunctionB from "./FunctionB"

const FunctionA = ({sobrenome}) => {
    return (
        <div>
            <h1>Componente A</h1>
            <FunctionB nome="Yuri" sobrenome={sobrenome}></FunctionB>
        </div>
    )
}

export default FunctionA