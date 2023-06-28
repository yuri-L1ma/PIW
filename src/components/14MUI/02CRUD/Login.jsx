import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

//{login: "Jose", password: "123456"}, {login: "Mario", password: "1234567"}, {login: "Ana", password: "12345678"}. Segue os usuários registrados no sistema

const Login = () => {
// O "navigate" é um hook que permite a navegação entre páginas. Ele é usado para redirecionar o usuário para a página de listagem de alunos após o login
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()

        const login = document.getElementById("login").value
        const password = document.getElementById("password").value

        // com os dados obtidos do formulário pelo "document.getElementByID" usamos o axio para fazer uma requisição post ao back-end, e assim verificar se o login e senha estão certos. Se estiverem, o usuário é redirecionado para a página de listagem de alunos, se não permanece na página de login
        axios.post("http://localhost:3001/logar/login", {login, password}).then((response) => {
            if(response.data){
                navigate("/listarAluno")
            }else{
                alert("Login ou senha incorretos")
            }
        }).catch((error) => console.log(error))

        console.log(login, password)
    }

    return (
        // Foi preciso ter atenção as propriedades "name" e "id" do forms, elas são usadas para pegar os valores dos inputs
        <div className="container-login">
            <h1>CRUD LOGINS</h1>
            <form className="login" onSubmit={handleLogin}>
                <div className="input-label">
                    <label htmlFor="login">Login</label>
                    <input type="text" placeholder="Digite seu login" name="login" id="login" />
                </div>
                <div className="input-label">
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="Digite sua senha" name="password" id="password" />
                </div>
                <button className="form">
                    Entrar
                </button>
            </form>
        </div>
    )
}

export default Login