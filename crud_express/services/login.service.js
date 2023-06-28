// Criamos em memória local um objeto que contém os usuários que podem logar no sistema, com login e senha
const users = [
    {login: "Jose", password: "123456"},
    {login: "Mario", password: "1234567"},
    {login: "Ana", password: "12345678"},
];

class LoginService {
    // O método de login pega um data como parametro que é a requisição do servidor. Depois é percorrido ovetor de usuário para verificar se os dados, passados pela requisição, estão certos. Se estiverem, retorna true, se não, retorna false.
    static login(data) {
        for(let user of users) {
            let login = data.login;
            let password = data.password;

            if(user.login === login && user.password === password) {
                return true;
            }
        }
        return false;
    }
}

module.exports = LoginService;