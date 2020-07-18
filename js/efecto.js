
var indicador=0;

function cambiarImg()
{

   // console.log("se ejecuta");
    var img1=document.getElementById("publicidad1");
    var img2=document.getElementById("publicidad2");
    var img3=document.getElementById("publicidad3");

    if(indicador%2==0)
    {
        // indicador es par
        img1.innerHTML="<center><img src='img/camiseta1.jpg'></center>";
        img2.innerHTML="<center><img src='img/camiseta2.jpg'></center>";
        img3.innerHTML="<center><img src='img/camiseta3.jpg'></center>";

    }
    else{
        //indicador es impar
        img1.innerHTML="<center><img src='img/1.jpg'></center>";
        img2.innerHTML="<center><img src='img/2.jpg'></center>";
        img3.innerHTML="<center><img src='img/3.jpg'></center>";
    }

    indicador=indicador + 1; // contador
}

setInterval(cambiarImg,3000);