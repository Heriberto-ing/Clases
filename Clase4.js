class Animal{
    constructor(especie, color, sonido, habitat){
        this.especie = especie;
        this.color = color;
        this.sonido = sonido;
        this.habitat = habitat;
    }

    moverse(tipoMovimiento){
        console.log(`Mi movimiento es: ${tipoMovimiento}`);
    }
    sonidoCaracteristico(){
        console.log(this.sonido);
    }
}



class Perro extends Animal{
    constructor(raza,color,sonido){
        super(raza, color, sonido,'casa')
    }

    ladrar() {
        return this.sonido;
    }

    sentarse(){
        console.log("Me he sentado");
    }
}

const Labrador = new Perro('labrador', 'dorado','woof');
Labrador.sentarse();
Labrador.sonidoCaracteristico()
Labrador.moverse("Caminar")

//---------------------------------------------------------

class Musica{
    constructor(info){
        this.fechaLanzamiento = info.fechaLanzamiento;
        this.artista = info.artista;
        this.genero = info.genero;
        this.nombre = info.nombre;
    }

    reproducir(){
        console.log(`Se esta reproduciento ${this.nombre} del artista ${this.artista}`);
    }

    pausar(){
        console.log(`Se ha pausado ${this.nombre} del artista ${this.artista}`);
    }
}

const cancion = new Musica({
    fechaLanzamiento: "09/06/2020",
    artista:"Mora",
    genero: "Reggaeton",
    nombre: "Escalofrios"
})

cancion.reproducir();
cancion.pausar();