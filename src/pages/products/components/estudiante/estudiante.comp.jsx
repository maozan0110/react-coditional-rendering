import React from 'react';
import"./estudiante.style.css";


const Estudiante = (props) => {
return ( 

<div className="estudiante-container">

{props.product.grade === 2
?
<span className="product-without-grade">{props.product.name}</span>
:
<span>{props.product.name} </span>
}    

{"   "}{props.product.grade}
{"   "}{props.product.gender}

</div>

);
    
}
export default Estudiante;