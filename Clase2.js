function restar(num1,num2) {
    return num1-num2;
}


const sumar = (num1,num2) => {
    console.log(num1+num2);
}


const multiplicar = function (num1,num2) {
    return num1*num2;
}

const multi_num = num => {
    return num * 100
}

const otraMulti = (n1,n2) => n1*n2;

const operaciones_matematicas = (n1,n2,operacion) => {
    return operacion(n1,n2);
}

//console.log(sumar(4,6));
//console.log(multiplicar(5,5));
//console.log(multi_num(5));
//console.log(otraMulti(4,20))
console.log(operaciones_matematicas(209,7,multiplicar))

//--------------------------------------------------------------------------

let arreglo_1 = [1,2,3,4,5,6,7,8,9,10];

arreglo_1.push(11,12,13);

const arreglo_2 = [{nombre:"Juan",apellido:"Montoya",edad: 18}];
console.log(arreglo_2[0].nombre);


for (let i = 0; i < arreglo_1.length; i++) {
    console.log(arreglo_1[i]*i);
}