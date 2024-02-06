
let numeroSecreto = 6;
let numeroUsuario=0;
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeErorr = "¡Error! Completa todos los campos"
let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguagesDeProgramacion.push( 'Java', 'Ruby' ,'GoLang');
let listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];

function consolaxd() {

console.log(lenguagesDeProgramacion);


}
function alrevez(){

 let arrayInvertido = [...lenguagesDeProgramacion].reverse();
    console.log("Copia"+lenguagesDeProgramacion);
    console.log("Original"+arrayInvertido);
}

function suma(){

let suma = listaDeNumeros.reduce(function(acumulador,elemento){


    return acumulador + elemento;
    
},0);



}

numeroUsuario = prompt("Digite un numero de 1 al 10");

    for(let i =1; i<=numeroUsuario;i++){


        if (numeroUsuario == 1) {
           suma();

       
        }else if(numeroUsuario == 2){
            
      
        }
    

    }
  





/**
 * 
 * Codigo de prueba 
 * 
 */

/*
nombre = prompt("Escriba su nombre;")
edad = prompt("Edad:")

if(nombre == "" || edad == ""){

    alert(mensajeDeErorr);

}else if(edad >=18){

    alert( "¡Puedes obtener tu licencia de conducir!");

}



*/