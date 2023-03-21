const MeusDados = (props) => {
    let {nome, curso, universidade} = props
    return(
        <div>
            <h1>{nome}</h1>
            <h1>{curso}</h1>
            <h1>{universidade}</h1>
        </div>
    )
}

export default MeusDados