const { useEffect, useState } = require("react");

const Questao01A = () => {
    const [medias, setMedias] = useState([]) // Aqui setei as médias como variáveis de estado para realizar a renderização na tela assim que o resultado for obtido do filho.

    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } }, // 8.4 + 5.4 = 13.8 / 2 = 6.9 APROVADO
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } }, // 6.7 + 3.5 = 10.2 / 2 = 5.1 REPROVADO
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } } // 7.3 + 9.2 = 16.5 / 2 = 8.25 APROVADO
    ]

    const recebendoFilho = (msg) => {
        setMedias(msg) // Aqui setei as médias recebidas do filho para a variável de estado. 
    }

    const renderizarAlunos = () => {
        const alunosAprovados = [] 

        for (let i = 0; i <= 2; i++) {
            if (medias[i] >= 6)
                alunosAprovados.push(
                    <div>
                        <h1>{alunos[i].nome}</h1>
                    </div>
                )
        }

        // Para obter a lista de alunos aprovados, criei uma variável auxiliar que recebe somente alunos aprovados. Esses alunos são obtidos após a verificação das médias recebidas do componente filho, dentro de uma estrutura de repetição FOR. Nessa lógica, consigo comparar aluno por aluno e inserir um código JSX com o nome do aluno, dentro do array auxiliar. Em teste, é pra ser impresso SICRANO e FULANO.

        return alunosAprovados
    }

    return (
        <>
            <Questao01B alunos={alunos} mensagem={recebendoFilho} /> {/* Aqui, passei os alunos e um outro prop que envia a função de comunicação pai e filho*/}
            {renderizarAlunos()}
        </>
    );
}

function Questao01B({ alunos, mensagem }) {
    let mediasAlunos = []

    useEffect(() => {
        for (let aluno of alunos) {
            mediasAlunos.push((aluno.notas.ap1 + aluno.notas.ap2) / 2)
        } // Cálculo relativamente simples para obter a média de cada aluno. Realizei um FOR, percorri aluno por aluno, calculei sua média, e coloquei em uma variável que será enviada para o componente pai.

        mensagem(mediasAlunos)
    }, [])

    return (
        <></>
    )
}

export { Questao01A, Questao01B }