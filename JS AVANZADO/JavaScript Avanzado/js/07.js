//herencia via PROTOTYPES

function Playlist(nombre) {
    this.nombre = nombre;
}

Playlist.prototype.play = function() {
    console.log(`Reproduciendo la playlist ${this.nombre}`)
}
Playlist.prototype.eliminar = function() {
    console.log(`eliminando la playlist ${this.nombre}`)
}

/* Herencia */
function Cancion(nombre,genero){
    this.nombre = nombre;
    Playlist.call(this.nombre);
    this.genero = genero;
}
//heredar los metodos
Cancion.prototype = Object.create(Playlist.prototype);

const cancion = new Cancion('Nothing else matters', 'metal');

cancion.play();