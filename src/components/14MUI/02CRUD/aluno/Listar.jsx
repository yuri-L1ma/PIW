import { Paper, Box, TableContainer, TableHead, Typography, Table, TableBody, TableRow, TableCell } from "@mui/material"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const Listar = () => {
    const [alunos, setAlunos] = useState([])
    const [media, setMedia] = useState(0)

    useEffect(() => {
        initAluno()
    }, [])

    const initAluno = async () => {
        let alunosDB = await axios.get("http://localhost:3001/alunos/listar")
        setAlunos(alunosDB.data)

        // Calculando a média através de um laço, que inicia com um variável zerada, e vai somando os valores de cada aluno, no final, divide pelo tamanho do array
        let mediaCalculada = 0
        for (let aluno of alunosDB.data) {
            mediaCalculada += aluno.ira
        }
        setMedia(mediaCalculada / alunosDB.data.length)
    }

    const deleteAlunoById = (id) => {
        if (window.confirm("Deseja Excluir? " + id)) {
            axios.delete(`http://localhost:3001/alunos/deletar/${id}`).then(
                (response) => {
                    let alunosNovo = alunos.filter(aluno => aluno._id != id) 
                    setAlunos(alunosNovo)
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
                        {
                            alunos.map(
                                (aluno) => {
                                    // Para criar as linhas que mudam de acordo com IRA, foi realizada uma renderização condicional que verifica se o IRA é menor que a média, se for, a linha fica vermelha. A análise é feita por um operador ternário. Usamos a mesma lógica para mudar a cor da letra.
                                    return (
                                        <StyledTableRow key={aluno._id} sx={
                                            aluno.ira < media ?
                                                { background: "#f4998d !important" } :
                                                {}
                                        }>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell sx={aluno.ira < media ? { color: "red" } : {}}>{aluno.nome}</StyledTableCell>
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
                    {/* Criamos uma nova linha para criar a média aritmmética usando o componente do MUI e duas celulas */}
                    <TableRow>
                        <StyledTableCell sx={{ fontWeight: 900 }}>MÉDIA ARTIMETICA</StyledTableCell>
                        <StyledTableCell>{media}</StyledTableCell>
                    </TableRow>
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

export default Listar
