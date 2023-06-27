<<<<<<< HEAD
import { Paper, TableContainer, TableHead, Typography, Table, TableBody, TableRow, TableCell } from "@mui/material"

const Listar = () => {

    const professores = [
=======
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

    /*const professores = [
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
        { id: 0, nome: "Gladimir Bavares", curso: "DD", titulacao: "GRAD" },
        { id: 1, nome: "Tainara Zaia", curso: "DD", titulacao: "DOUT" },
        { id: 2, nome: "Saulo Bitor", curso: "ES", titulacao: "GRAD" },
        { id: 3, nome: "Zictor Zarias", curso: "CC", titulacao: "MEST" },
        { id: 4, nome: "Angrid Vonteiro", curso: "CC", titulacao: "DOUT" },
<<<<<<< HEAD
    ]
=======
    ]*/
    const [professores,setProfessores] = useState([])

    useEffect(
        ()=>{
            axios.get("http://localhost:3001/professores/listar")
            .then(
                (response)=>{
                    //console.log(response)
                    setProfessores(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    function deleteProfessorById(id){
        if(window.confirm("Deseja Excluir? " + id)){
            //alert("Professor " + id + " Excluído!")
            axios.delete(`http://localhost:3001/professores/remover/${id}`)
            .then(
                (response)=>{
                    const resultado = professores.filter( professor => professor._id != id)
                    setProfessores(resultado)
                }
            )
            .catch(error=>console.log(error))
        }
    }
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26

    return (
        <>
            <Typography variant="h4" fontWeight="bold">
                Listar Professor
            </Typography>
<<<<<<< HEAD
            <TableContainer component={Paper} sx={{mt:2}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOME</TableCell>
                            <TableCell>CURSO</TableCell>
                            <TableCell>TITULAÇÃO</TableCell>
                            <TableCell>AÇÕES</TableCell>
=======
            <TableContainer component={Paper} sx={{ mt: 2, mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            professores.map(
<<<<<<< HEAD
                                (professor)=>{
                                    return (
                                        <TableRow key={professor.id}>
                                            <TableCell>{professor.id}</TableCell>
                                            <TableCell>{professor.nome}</TableCell>
                                            <TableCell>{professor.curso}</TableCell>
                                            <TableCell>{professor.titulacao}</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
=======
                                (professor) => {
                                    return (
                                        <StyledTableRow key={professor._id}>
                                            <StyledTableCell>{professor._id}</StyledTableCell>
                                            <StyledTableCell>{professor.nome}</StyledTableCell>
                                            <StyledTableCell>{professor.curso}</StyledTableCell>
                                            <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" component={Link} to={`/editarProfessor/${professor._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" onClick={()=>deleteProfessorById(professor._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
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
<<<<<<< HEAD
=======


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

>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
export default Listar