import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { useState } from "react"
import { Link } from "react-router-dom"

const MyMenu = () => {

    const [anchoElProfessor,setAnchoElProfessor] = useState(null)
<<<<<<< HEAD
=======
    const [anchoElAluno,setAnchoElAluno] = useState(null)
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26

    function handleOpenProfDropMenu(event) {
        setAnchoElProfessor(event.currentTarget)
    }

<<<<<<< HEAD
    function handleCloseProdDropMenu() {
        setAnchoElProfessor(null)
    }

=======
    function handleCloseProfDropMenu() {
        setAnchoElProfessor(null)
    }

    function handleOpenAlunoDropMenu(event) {
        setAnchoElAluno(event.currentTarget)
    }

    function handleCloseAlunoDropMenu() {
        setAnchoElAluno(null)
    }

>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
    function profDropMenu() {
        return (
            <Box>
                <Button 
                    sx={{ color: "white", mt: 1 }}
                    onClick={handleOpenProfDropMenu}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchoElProfessor}
                    open={Boolean(anchoElProfessor)}
<<<<<<< HEAD
                    onClose={handleCloseProdDropMenu}
                >
                    <MenuItem 
                        onClick={handleCloseProdDropMenu}
=======
                    onClose={handleCloseProfDropMenu}
                >
                    <MenuItem 
                        onClick={handleCloseProfDropMenu}
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                        component={Link}
                        to="cadastrarProfessor"
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
<<<<<<< HEAD
                        onClick={handleCloseProdDropMenu}
=======
                        onClick={handleCloseProfDropMenu}
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                        component={Link}
                        to="listarProfessor"
                    >
                        Listar
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

<<<<<<< HEAD
=======
    function alunoDropMenu(){
        return(
            <Box>
                <Button 
                    sx={{color: "white", mt: 1}}
                    onClick={handleOpenAlunoDropMenu}
                >
                    Alunos
                </Button>
                <Menu
                    anchorEl={anchoElAluno}
                    open={Boolean(anchoElAluno)}
                    onClose={handleCloseAlunoDropMenu}
                >
                    <MenuItem 
                        onClick={handleCloseAlunoDropMenu}
                        component={Link}
                        to="cadastrarAluno"
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseAlunoDropMenu}
                        component={Link}
                        to="listarAluno"
                    >
                        Listar
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <AdbIcon sx={{ mr: 1 }} />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            fontWeight: 800,
                            letterSpacing: ".2rem"
                        }}
                    >
                        CRUD_V0
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        {profDropMenu()}
<<<<<<< HEAD
                        <Button sx={{ color: "white", mt: 1 }}>
                            Alunos
                        </Button>
=======
                        {alunoDropMenu()}
>>>>>>> d2c1fe12ecbeb469b9ed2a1d1a850d040ea27c26
                        <Button sx={{ color: "white", mt: 1 }}>
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu