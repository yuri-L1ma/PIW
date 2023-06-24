import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { useState } from "react"
import { Link } from "react-router-dom"

const MyMenu = () => {

    const [anchoElProfessor,setAnchoElProfessor] = useState(null)
    const [anchoElAluno,setAnchoElAluno] = useState(null)

    function handleOpenProfDropMenu(event) {
        setAnchoElProfessor(event.currentTarget)
    }

    function handleCloseProfDropMenu() {
        setAnchoElProfessor(null)
    }

    function handleOpenAlunoDropMenu(event) {
        setAnchoElAluno(event.currentTarget)
    }

    function handleCloseAlunoDropMenu() {
        setAnchoElAluno(null)
    }

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
                    onClose={handleCloseProfDropMenu}
                >
                    <MenuItem 
                        onClick={handleCloseProfDropMenu}
                        component={Link}
                        to="cadastrarProfessor"
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseProfDropMenu}
                        component={Link}
                        to="listarProfessor"
                    >
                        Listar
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

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
                        {alunoDropMenu()}
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