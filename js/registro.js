




var clientes =[];



function añadirCliente(){

  var clientes_reg = JSON.parse(localStorage.getItem('clientes'));

  for (var i in clientes_reg) {

    clientes[i]= clientes_reg[i];


  }



  var elem_cliente={};



  elem_cliente.usuario= document.getElementById('inputUsuario').value;
  elem_cliente.nombre= document.getElementById('inputNombre').value;
  elem_cliente.correo= document.getElementById('inputCorreo').value;
  elem_cliente.contraseña= document.getElementById('inputContraseña').value;


  clientes.push(elem_cliente);

  localStorage.setItem("clientes",JSON.stringify(clientes));

  //location.href="/html/index.html";

}
