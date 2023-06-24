import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenu from "./MyMenuV1"
import { Container } from "@mui/material"

import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

import CadastrarAluno from "./aluno/Cadastrar"
import ListarAluno from "./aluno/Listar"
import EditarAluno from "./aluno/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:12}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>
                    <Route path="cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="listarAluno" element={<ListarAluno/>}/>
                    <Route path="editarAluno/:id" element={<EditarAluno/>}/>
                </Routes>     
            </Container>
        </BrowserRouter>
    )
}
export default MainPage