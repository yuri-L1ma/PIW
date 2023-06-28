import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenu from "./MyMenuV1"
import { Container } from "@mui/material"
import { useLocation } from "react-router-dom"

import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

import CadastrarAluno from "./aluno/Cadastrar"
import ListarAluno from "./aluno/Listar"
import ListarAlunoAcima from "./aluno/ListarAcima"
import EditarAluno from "./aluno/Editar"
import Login from "./Login"

const MainPage = () => {

    return (
        <BrowserRouter>
            <Routes>
                {/* Criamos a nova rota "login" fora do container de rotas das outras páginas para que a página de Login não tenha um menu por padrão. Além disso, foi colocado o menu dentro dentro um "Route" com caminho * geral, para que ele sobrescreva as outras rotas, exceto a de login. Dessa forma a página de login não tem menu */}
                <Route path="*" element={<MyMenu/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Container sx={{mt:12}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>
                    <Route path="cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="listarAluno" element={<ListarAluno/>}/>
                    <Route path="listarAlunoAcima" element={<ListarAlunoAcima/>}/>
                    <Route path="editarAluno/:id" element={<EditarAluno/>}/>
                </Routes>     
            </Container>
        </BrowserRouter>
    )
}
export default MainPage