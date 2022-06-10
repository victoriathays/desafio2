document.querySelector('#cadastro').addEventListener('click', (w)=>{
    w.preventDefault();
    let email = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    
    if(login === '' || senha === '') {
        alert("Você não preencheu os campos")
    }else if (login != '' || senha != ''){
        location.href = 'index.html';
        salvar(email, senha);
    }

});

function salvar(email, senha){
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');

    let usuario = {
        id: db.length + 1,
        login: email,
        senha: senha
    }

    db.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(db));
    location.href = 'index.html';
}