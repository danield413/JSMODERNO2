import React from 'react';

const Resultado = ({total, plazo, cantidad}) => (
    <div className="u-full-width resultado" >
        <h2> Resumen </h2>
        <p> La cantidad solicitada es: $ {cantidad} </p>
        <p> El plazo a pagar es de: {plazo} meses </p>
        <p> El total a pagar es: $ {total} </p>
    </div>
);
 
export default Resultado;