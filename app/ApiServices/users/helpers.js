const user = require('./models');

// VALIDA QUE SEA CORREO Y CONTRASEÑA VALIDAS
function validarCredenciales(correo, contraseña) {
    user.contraseña = contraseña;
    user.correo = correo;
    // Verificar formato de correo electrónico
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(user.correo)) {
      return false; 
    }
  
    // Verificar longitud de la contraseña
    if (contraseña.length < 8) {
      return false; 
    }
  
    return true; // Correo y contraseña válidos
  }

  
  function validarCampos(correo, contraseña) {

    if (correo.trim() === '' || contraseña.trim() === '') {
      return false; // Correo o contraseña vacíos
    }
  
    return true; // Correo y contraseña no están vacíos
  }
  module.exports ={
    validarCredenciales,
    validarCampos
  }
