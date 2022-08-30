//Jimena Merchan
//POV: sos un profesor/a que quiere sacar el promedio de notas de sus alumnos, vos elegis la cantidad de notas a ingresar y js devuelve la cuenta.
let cantNotasAIngresar = parseInt(prompt('Ingrese la cantidad de notas a las que desea sacar el promedio'));
let cantPromedioNotas;
let 

nota;
let sumaDeNotas= 0;

for(let i = 0; i < cantNotasAIngresar ; i++){  
    let numeroDeNota = i + 1;
    nota = parseInt(prompt('Ingrese la nota numero ' + numeroDeNota ))
    if(nota<= 10 && nota >= 0){
        sumaDeNotas= sumaDeNotas + nota
    } else{
        nota = parseInt(prompt('Ingrese un numero mayor a 0 y menor a 10'));
        sumaDeNotas= sumaDeNotas + nota
    }
}

function calcularPromedio(){
    cantPromedioNotas = sumaDeNotas / cantNotasAIngresar;
}

calcularPromedio();
alert('El promedio de notas es de ' + cantPromedioNotas)



