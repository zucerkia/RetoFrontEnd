


function logear(){



  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;


  var usuarios = JSON.parse(localStorage.getItem('clientes'));

  for (var i = 0; i < usuarios.length; i++) {

    if(usuarios[i].correo ==email && usuarios[i].contraseña == password){
      console.log('entra');
      break;
    }
    else{
      console.log('correo o usuario invalidos');
    }
  }







}
