//Traigo los elemetos del HTML
var textAltura=document.getElementById("altura");
var textPeso=document.getElementById("Peso");
var textIMC=document.getElementById("IMC");
var boton = document.getElementById("botoncito");
var bajoPeso = document.getElementById("bajoPeso");
var normal = document.getElementById("Normal");
var sobrePeso = document.getElementById("SobrePeso");
var obesidad = document.getElementById("Obesidad");
var obesidadMorbida = document.getElementById("ObesidadMorbida");
var resultado;

//Me encuentro a la escpera del click sobre "Calcular"
boton.addEventListener("click",validarIndiceMasaMuscular);


//Funcion tras hacer Click
function validarIndiceMasaMuscular() 
{
    //Me aseguro que ningun campo sea imcompleto
    if (textAltura.value == "" || textPeso.value == "")
    {
        resultado = "Ingrese Ambos valores"
        textIMC.style.backgroundColor = '#f58382';
    }else{
        resultado = textPeso.value/(textAltura.value*textAltura.value);        
        textIMC.style.backgroundColor = '#43e3e8';
    }     
    //Entrego el mensaje de resultado
    textIMC.value=resultado;

    //Comparacion para poder dar el valor de refencia segun resultado
    if (resultado > 0 && resultado <18.5) {
        /* "Desnutricion" */
        bajoPeso.style.border = "1px solid black";
        bajoPeso.style.backgroundColor = "rgba(177, 26, 223, 0.329)";
        normal.style.border = "none";
        normal.style.backgroundColor = "#EAD4F1";
        sobrePeso.style.border = "none";
        sobrePeso.style.backgroundColor = "#EAD4F1";
        obesidad.style.border = "none";
        obesidad.style.backgroundColor = "#EAD4F1";
        obesidadMorbida.style.border = "none";
        obesidadMorbida.style.backgroundColor = "#EAD4F1";
    }else if(resultado >= 18.5 && resultado < 24.9) {
        /* "Normal" */
        bajoPeso.style.border = "none";
        bajoPeso.style.backgroundColor = "#EAD4F1";
        normal.style.border = "1px solid black";
        normal.style.backgroundColor = "rgba(177, 26, 223, 0.329)";
        sobrePeso.style.border = "none";
        sobrePeso.style.backgroundColor = "#EAD4F1";
        obesidad.style.border = "none";
        obesidad.style.backgroundColor = "#EAD4F1";
        obesidadMorbida.style.border = "none";
        obesidadMorbida.style.backgroundColor = "#EAD4F1";

    }else if(resultado >= 24.9 && resultado < 29.9){
        /* "Sobrepeso" */
        bajoPeso.style.border = "none";
        bajoPeso.style.backgroundColor = "#EAD4F1";
        normal.style.border = "none";
        normal.style.backgroundColor = "#EAD4F1";
        sobrePeso.style.border = "1px solid black";
        sobrePeso.style.backgroundColor = "rgba(177, 26, 223, 0.329)";
        obesidad.style.border = "none";
        obesidad.style.backgroundColor = "#EAD4F1";
        obesidadMorbida.style.border = "none";
        obesidadMorbida.style.backgroundColor = "#EAD4F1";
    }else if(resultado >= 29.9 && resultado <= 34.9){
        /* "Obesidad" */
        bajoPeso.style.border = "none";
        bajoPeso.style.backgroundColor = "#EAD4F1";
        normal.style.border = "none";
        normal.style.backgroundColor = "#EAD4F1";
        sobrePeso.style.border = "none";
        sobrePeso.style.backgroundColor = "#EAD4F1";
        obesidad.style.border = "1px solid black";
        obesidad.style.backgroundColor = "rgba(177, 26, 223, 0.329)";
        obesidadMorbida.style.border = "none";
        obesidadMorbida.style.backgroundColor = "#EAD4F1";
    }else if(resultado > 34.9){
        /* "Obsesidad morbida" */
        bajoPeso.style.border = "none";
        bajoPeso.style.backgroundColor = "#EAD4F1";
        normal.style.border = "none";
        normal.style.backgroundColor = "#EAD4F1";
        sobrePeso.style.border = "none";
        sobrePeso.style.backgroundColor = "#EAD4F1";
        obesidad.style.border = "none";
        obesidad.style.backgroundColor = "#EAD4F1";
        obesidadMorbida.style.border = "1px solid black";
        obesidadMorbida.style.backgroundColor = "rgba(177, 26, 223, 0.329)";
    }
    //Mensaje vacio en caso de no haber resultado
    else{
        bajoPeso.style.border = "none";
        bajoPeso.style.backgroundColor = "#EAD4F1";
        normal.style.border = "none";
        normal.style.backgroundColor = "#EAD4F1";
        sobrePeso.style.border = "none";
        sobrePeso.style.backgroundColor = "#EAD4F1";
        obesidad.style.border = "none";
        obesidad.style.backgroundColor = "#EAD4F1";
        obesidadMorbida.style.border = "none";
        obesidadMorbida.style.backgroundColor = "#EAD4F1";
    }

}