import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
<<<<<<< HEAD
import { useState } from "react"

const Cadastrar = () => {

    const [nome,setNome] = useState("")
    const [curso,setCurso] = useState("")
    const [titulacao,setTitulacao] = useState("GRAD")
    const [ai,setAi] = useState({ds:false,es:false,mc:false,cg:false})
    const {ds,es,mc,cg} = ai

    function handleSubmit(event) {
        event.preventDefault()
        console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)
=======
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("0.0")
    const [ira2, setIra2] = useState("0.0")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({ ds: false, es: false, mc: false, cg: false })

    const { ds, es, mc, cg } = ai
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        /*console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)*/
        const professor = { nome, curso, titulacao, ai }
        axios.post("http://localhost:3001/professores/cadastrar", professor)
            .then(
                (response) => {
                    alert("Professor " + response.data._id + " adicionado com sucesso!")
                    navigate("/listarProfessor")
                }
            )
            .catch(error => console.log(error))
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
    }

    function handleCheckBox(event) {
        setAi(
<<<<<<< HEAD
                {
                    ...ai, //copia todo mundo que estava antes
                    [event.target.name]:event.target.checked //modifica apenas a propriedade clicada
                }
        )    
    }
    
=======
            {
                ...ai, //copia todo mundo que estava antes
                [event.target.name]: event.target.checked //modifica apenas a propriedade clicada
            }
        )
    }

>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
    return (
        <>
            <Typography variant="h4" fontWeight="bold">
                Cadastrar Professor
            </Typography>
<<<<<<< HEAD
            
=======

>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
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
<<<<<<< HEAD
                    onChange={(event)=>setNome(event.target.value)}
=======
                    onChange={(event) => setNome(event.target.value)}
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    label="Curso"
                    name="curso"
<<<<<<< HEAD
                    onChange={(event)=>setCurso(event.target.value)}
                />

                <FormControl sx={{width:"100%",mt:2}}>
=======
                    onChange={(event) => setCurso(event.target.value)}
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
                <FormControl sx={{ width: "100%", mt: 2 }}>
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                    <InputLabel id="select-id-label">Titulação</InputLabel>
                    <Select
                        labelId="select-id-label"
                        label="Titulação"
                        value={titulacao}
<<<<<<< HEAD
                        onChange={(event)=>setTitulacao(event.target.value)}
=======
                        onChange={(event) => setTitulacao(event.target.value)}
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>

<<<<<<< HEAD
                <FormControl sx={{mt:2,ml:2}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize:12,mb:2}}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckBox}/>} label="Desenvolvimento de Software"/>
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckBox}/>} label="Engenharia de Software"/>
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckBox}/>} label="Matemática Computacional"/>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onChange={handleCheckBox}/>} label="Computação Gráfica"/>
=======
                <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckBox} />} label="Desenvolvimento de Software" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckBox} />} label="Engenharia de Software" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckBox} />} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onChange={handleCheckBox} />} label="Computação Gráfica" />
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                    </FormGroup>
                </FormControl>

                <Box sx={{
<<<<<<< HEAD
                    display:"flex",
                    justifyContent:"center",
                    mt:2
=======
                    display: "flex",
                    justifyContent: "center",
                    mt: 2
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Cadastrar