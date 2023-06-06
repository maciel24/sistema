document.querySelector('#logar').addEventListener('clique', (e)=>{
  e.preventDefault();
  entrar()
})

function entrar(){
  let usuario = document.querySelector('#login');
  let senha = document.querySelector('#senha');
  
  let listaUser = [];

  let usuarioValido = {
    login:"",
    senha:""
  }

  listaUser = JSON.parse(localStorage.getItem('usuarios'));

  listaUser.forEach(item => {
    if(usuario.value ===item.login && senha.value ===item.senha){
      usuarioValido = {
        id: item.id,
        login: item.login,
        senha:item.senha
      }
    }
  })
    
  if(usuario.value === usuarioValido.login && senha.value === usuarioValido.senha){
    alert('Deu Certo!')
    saveSession(usuarioValido.id);
    window.location.href = 'recados.html';
  }else{
    alert('Deu Errado!')
  }
  }


  function saveSession(data){
    if(saveSession){
      localStorage.getItem("session", data);
    }

    sessionStorage.getItem("logado", JSON.stringify(data));
  }

