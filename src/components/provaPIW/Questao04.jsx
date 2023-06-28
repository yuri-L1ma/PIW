// PROPs Drilling é o nome dado a uma prática de passagem de props, em uma árvore de componentes, de um nível ao outro de maneira "manual". Dependendo do tamanho dessa árvore, isso pode prejudicar o entendimento do projeto, já que se torna difícil encontrar onde os dados são tratados, lidos e inicializados. Com o uso do Contexto em React essa passagem de props de pai para filho é facilitada e controlada, sem a necessidade manual do envio de props em várias camadas subsequentes.

// Segue aqui um exemplo comparativo das duas formas de passagem de props:

// SEM CONTEXTO

const Menu = ({tema}) => {
    return(
        <div style={{backfaceVisibility: tema}}>
            <h1>Menu qualquer</h1>
        </div>
    )
}

const Header = ({tema}) => {
    return(
        <Menu tema={tema}></Menu>
    )
}

const Main = ({tema}) => {
    return(
        <>
            <Header tema={"#eeeeee"}></Header>
        </>
    )
}

// Aqui é visível como é difícil o entedimento da passagem do tema, já que ele é passado de um componente para o outro, sem que o componente que o recebeu faça uso dele. Isso pode ser prejudicial em projetos maiores, já que a passagem de props pode ser feita em vários níveis, dificultando o entendimento do código.

// COM CONTEXTO

const TemaContext = createContext()

const MenuC = () => {
    const tema = useContext(TemaContext)
    return(
        <div style={{backfaceVisibility: tema}}>
            <h1>Menu qualquer</h1>
        </div>
    )
}

const HeaderC = () => {
    return(
        <Menu></Menu>
    )
}

const MainC = ({tema}) => {
    return(
        <>
            <TemaContext.Provider value={"#eeeeee"}>
                <Header></Header>
            </TemaContext.Provider>
        </>
    )
}

// Com contexto esse trabalho é facilitado e controlado, já que o componente que recebe o valor do contexto é o que faz uso dele. Isso facilita o entendimento do código e a manutenção do mesmo.
