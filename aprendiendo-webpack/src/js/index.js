import '../css/style.scss';

const clientes = ['cliente1', 'cliente2', 'cliente3' , 'cliente4'];

let html = '';
clientes.forEach((cliente) => {
    html +=  `
    <li> ${cliente} </li>
    `
})

document.querySelector('#clientes').innerHTML = html;