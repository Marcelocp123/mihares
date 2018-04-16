function ingresar(){
if (document.form.password.value=='123' && document.form.login.value=='Admin'){ 
        alert("BIENVENIDO ADMIN") 	
        document.Formulario.submit(); 
    } 
    else{ 
         alert("NOMBRE DE USUARIO O CONTRASEÑA INCORRECTA")
    } 
} 