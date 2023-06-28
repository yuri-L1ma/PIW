const Supermercado = ({ nome, children }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {children}
        </div>
    )
}

const Legume = ({ nome }) =>
    <div>
        <h3>Legume {nome}</h3>
    </div>

const Fruta = ({ nome }) =>
<div>
    <h3>Fruta {nome}</h3>
</div>

const Bebida = ({ nome }) =>
    <div>
        <h3>Bebida {nome}</h3>
    </div>

export {Supermercado, Legume, Fruta, Bebida}