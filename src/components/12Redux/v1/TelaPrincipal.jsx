import Imagem from "./Imagem"
import BotaoIncrementar from "./BotaoIncrementar"
import BotaoDecrementar from "./BotaoDecrementar"

const TelaPrincipal = () => {

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem></Imagem>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar></BotaoIncrementar>
                        </td>
                        <td>
                            <BotaoDecrementar></BotaoDecrementar>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal