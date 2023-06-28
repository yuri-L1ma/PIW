import { Paper, Box, TableContainer, TableHead, Typography, Table, TableBody, TableRow, TableCell } from "@mui/material"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const ListarAcima = () => {
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        initAluno()
    }, [])

    const initAluno = async () => {
        let alunos = await axios.get("http://localhost:3001/alunos/listar")
        // Com a mesma lógica de calcular a média, foi calculada a média de todos os alunos do banco de dados
        let mediaCalculada = 0
        for (let aluno of alunos.data) {
            mediaCalculada += aluno.ira
        }
        mediaCalculada = mediaCalculada / alunos.data.length
        // Aqui temos a diferença para renderizar apenas os alunos com média maior que a média calculada, usamos o método filter que retorna um novo array, apenas com os alunos que seguem "ira > mediaCalculada" 
        setAlunos(alunos.data.filter(aluno => aluno.ira > mediaCalculada))
    }

    const deleteAlunoById = (id) => {
        if (window.confirm("Deseja Excluir? " + id)) {
            axios.delete(`http://localhost:3001/alunos/deletar/${id}`).then(
                (response) => {
                    setAlunos(alunos.filter(aluno => aluno._id != id))
                }
            ).catch(error => console.log(error))
        }
    }

    return (
        <>
            <Typography variant="h4" fontWeight="bold">
                Listar Aluno
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2, mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Com a variável de estado Alunos foi populada com o filter no userEffect, só aparecem na tabela os alunos aprovados  */}
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell >{aluno.nome}</StyledTableCell> 
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" onClick={() => deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default ListarAcima
