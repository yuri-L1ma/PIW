const PlacaMae = ({nome, preco}) => {
    return <h1>Sou uma placa mãe da marca {nome} e custo {preco}</h1>
}

const Memoria = ({nome, preco}) => {
    return <h1>Sou uma memória da marca {nome} e custo {preco}</h1>
}

const PlacaVideo = ({nome, preco}) => {
    return <h1>Sou placa de vídeo da marca {nome} e custo {preco}</h1>
}

export {PlacaMae, Memoria, PlacaVideo}
