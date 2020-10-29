//THIS CON EXPLICIT BINDING

function persona(el1, el2) {
    console.log(`hola soy ${this.nombre} y me gusta el ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Juan',
    trabajo: 'Proramador'
}
const generosMusicales = ['Heavy metal' , 'Rock'];

//explicit binding con call, cuando pasa arreglo debes colocar todas las posiciones
persona.call(informacion, generosMusicales[0] , generosMusicales[1]);

//explicit binding con .apply (si toma un arreglo)
persona.apply(informacion, generosMusicales);

// explicit binding .bind

const nuevaFn = persona.bind(informacion, generosMusicales[0] , generosMusicales[1]);
nuevaFn();