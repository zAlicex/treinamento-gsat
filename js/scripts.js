// Exemplo de credenciais válidas
const validCredentials = {
    username: 'Alice Oliveira', // Defina o nome de usuário aqui
    password: '123'  // Defina a senha aqui
};

// Adicionar evento de submit ao formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const empresa = document.getElementById('empresa').value;

    // Exibir os valores no console para verificar
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Empresa:', empresa);

    // Verificar se o username e password correspondem aos credenciais válidos
    if (username === validCredentials.username && password === validCredentials.password) {
        console.log('Login bem-sucedido');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('empresa', empresa);  // Armazena a empresa
        localStorage.setItem('username', username);  // Armazena o usuário
        window.location.href = 'inicio.html';
    } else {
        // Exibir mensagem de erro
        console.log('Login falhou');
        document.getElementById('errorMessage').style.display = 'block';
    }
});









