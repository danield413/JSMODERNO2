// CLASES Y PROTOTYPES

function Playlist(nombre) {
    this.nombre = nombre;
}

Playlist.prototype.play = function() {
    console.log(`Reproduciendo la playlist ${this.nombre}`)
}
Playlist.prototype.eliminar = function() {
    console.log(`eliminando la playlist ${this.nombre}`)
}

const Playlist1 = new Playlist('Rock 90s');
const Playlist2 = new Playlist('Punk 90s');

console.log(Playlist1),
console.log(Playlist2);

Playlist1.play();
Playlist1.eliminar()