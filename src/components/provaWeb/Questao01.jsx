const { useEffect, useState } = require("react");

const Questao01A = () => {
    const [medias, setMedias] = useState([])
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
    ]

    const recebendoFilho = (msg) => {
        setMedias(msg)
    }

    const renderizarAlunos = () => {
        const alunosAprovados = []

        for (let i = 0; i <= 2; i++) {
            if (medias[i] > 6)
                alunosAprovados.push(
                    <div>
                        <h1>{alunos[i].nome}</h1>
                    </div>
                )
        }

        return alunosAprovados
    }

    return (
        <>
            <Questao01B alunos={alunos} mensagem={recebendoFilho} />
            {renderizarAlunos()}
        </>
    );
}

function Questao01B({ alunos, mensagem }) {
    let medias = []

    useEffect(() => {
        for(let aluno of alunos){
            medias.push((aluno.notas.ap1 + aluno.notas.ap2) / 2)
        }
        mensagem(medias)
    }, [])

    return (
        <></>
    )
}

export {Questao01A}