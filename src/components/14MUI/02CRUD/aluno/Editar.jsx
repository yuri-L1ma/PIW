import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Editar = () => {
    let {id} =  useParams()

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("")

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3001/alunos/recuperar/${id}`).then(
            (response) => {
                setNome(response.data.nome)
                setCurso(response.data.curso)
                setIra(response.data.ira)
            }
        ).catch((error) => console.log(error))
    }, [])


    function handleSubmit(event) {
        event.preventDefault()
        const alunoEditado = { nome, curso, ira }
        axios.put(`http://localhost:3001/alunos/atualizar/${id}`, alunoEditado).then(
            (response) => {
                alert(`Aluno de nome ${response.data.nome} e ID ${response.data._id} editado com sucesso!`)
                navigate("/listarAluno")
            }
        ).catch((error) => console.log(error))
    }

    return (
        <>
            <Typography variant="h4" fontWeight="bold">
                Editar Aluno
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    label="Nome Completo"
                    name="nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
                
                <FormControl sx={{ width: "100%", mt: 2 }}>
                    <InputLabel id="select-id-label">Curso de graduação</InputLabel>
                    <Select
                        labelId="select-id-label"
                        label="Curso de graduação"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    >
                        <MenuItem value="cc">Ciência da Computação</MenuItem>
                        <MenuItem value="dd">Design Digital</MenuItem>
                        <MenuItem value="es">Engenharia de Software</MenuItem>
                        <MenuItem value="re">Redes de Computadores</MenuItem>
                        <MenuItem value="si">Sistemas de Informação</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    type="number"
                    value={ira}
                    label="Índice de Rendimento Acadêmico"
                    name="ira"
                    onChange={(event) => setIra(event.target.value)}
                />

                {/* <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(e) => setIra(parseFloat(e.target.value))}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira2"
                    label="IRA2"
                    name="ira2"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(e) => setIra2(parseFloat(e.target.value))}
                />
                 <Button
                        variant="contained"
                        onClick={()=>{alert(ira + ira2)}}
                    >
                        Somar
                </Button>
                 */}

                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2
                }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Editar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Editar