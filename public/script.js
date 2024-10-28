//Modal Login 
function abrirModal(){
    const modal =   document.getElementById('modal-login')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id == 'modal-login'){
          modal.classList.remove('abrir')
      }
    })
  }
  function cancelarModal(){
    const modal =   document.getElementById('btn-modal')
    modal.classList.add('abrir')
  
    modal.addEventListener('click', (e) => {
      if(e.target.id == 'btn-modal'){
          modal.classList.remove('abrir')
      }
    })
  }
  function cancelarModal(){
    const modal =   document.getElementById('fechar')
    modal.classList.add('abrir')
  
    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar'){
          modal.classList.remove('fechar')
      }
    })
  }
  
  function entrarModal(){
    const modal =   document.getElementById('btn-modal')
    modal.classList.add('abrir')
  
    modal.addEventListener('click', (e) => {
      if(e.target.id == 'btn-modal'){
          modal.classList.remove('abrir')
      }
    })
  }
  //Logica dos usuarios 
  /*{
    mini banco de dados
  }*/ 
  let db = [
    {
      email:"miguelphb@gmail.com", //1°
      senha:"migueldsds"
    },
    {
      email:"naryaradiniz@gmail.com", //2°
      senha:"n123456n"
    }
  ]

  const imagemLogada = ``;
  const nickname = document.getElementById('nickname');
  const avatarImage = document.getElementById('avatar-image');
  
  const logar = document.getElementById('logar').addEventListener('click', ()=>{
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const leituraDeDados = db.forEach( dado =>{
      if(email == dado.email && senha == dado.senha){
       return window.alert('Logado com sucesso')
      }else
      return window.alert('Credenciais invalidas')
    })
  });

