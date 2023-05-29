import Imagem from "./Imagem"
import BotaoIncrementar from "./BotaoIncrementar"
import BotaoDecrementar from "./BotaoDecrementar"

import { useState } from "react"

const TelaPrincipal = () => {
    let [id, setId] = useState(1)

    const incrementar = () => {
        setId((prev) => prev+1)
    }

    const decrementar = () => {
        setId((prev) => prev-1)
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem id={id}></Imagem>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar incrementar={incrementar}></BotaoIncrementar>
                        </td>
                        <td>
                            <BotaoDecrementar decrementar={decrementar}></BotaoDecrementar>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal