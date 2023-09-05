//Foreach

const numeros = [10,60,50,6,3,4,8,9];
let replica = 0; 

numeros.forEach((item) => {
    replica+=item;
})
// console.log(replica);
//-----------------------------------------

//map

let doble = numeros.map((valor) => valor*2)
// console.log(doble);

const estudiante = [
    {nombre : 'juan',apellido: 'montoya', edad :18},
    {nombre : 'joel',apellido: 'montoya', edad :14},
    {nombre: 'carlos', apellido: 'montoya', edad: 45}
]

const nombre_completo = estudiante.map((student) => {
    return `${student.nombre} ${student.apellido}`
})
// console.log(nombre_completo);

const nombre_completo2 = estudiante.map(student => `${student.nombre} ${student.apellido}`)
console.log(nombre_completo2);
//-----------------------------------------------------

//Metodo filter

const numerosFiltrados = numeros.filter((num) => num < 30)
const personasFiltradas = estudiante.filter(student => student.edad > 18)
// console.log(numerosFiltrados);
// console.log(personasFiltradas);

//-------------------------------------------------------

//Every

const frutas = ['Banano','Mango','Manzana','Pera','Uva','Fresa']
const cumple = frutas.every( word => word.length > 3);
console.log(cumple);

const cumpleObjetos = estudiante.every(student => student.apellido === 'montoya');
console.log(cumpleObjetos);

//---------------------------------------------------------

//Objetos

const auto = {
    color: 'Azul',
    year: 1982,
    canridadPuertas: 4,
    marca: 'Mazda',
    reviciones:{
        fechaIngreso: '10-01-2023',
        fechaSalida: '20-01-2023',
        estadoSalida: 'BUENO',
        entregadoPor: 'Juan Peres'
    },
    tieneSeguro : true,
    registradoTransito: true
}
const autos = []
autos.push(auto);
console.log(autos);