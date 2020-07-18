function validacion(){
    var nombres, apellidos, dni, direccion;
    nombres = document.getElementById("nombres").value;
    apellidos = document.getElementById("apellidos").value;
    dni = document.getElementById("dni").value;
    direccion = document.getElementById("direccion").value;


    if(nombres === "" || apellidos === "" || dni === "" || direccion === ""){
        alert("todos los campos son obligatorios")
        return false;
    }
    else if(nombres.length>20) {
        alert("el nombre es muy largo");
        return false;
    }
    else if(apellidos.length>20) {
        alert("los apellidos son muy largos");
        return false;
    }
    else if(direccion.length>20) {
        alert("la direccion es muy larga");
        return false;
    }
    else if(isNaN(dni)) {
        alert("El dni ingresado es incorrecto");
        return false;
    }
    else if(dni.length>8 || dni.length<8) {
        alert("el dni es incorrecto");
        return false;
    } else {
        return enviarDatos();
    }
}