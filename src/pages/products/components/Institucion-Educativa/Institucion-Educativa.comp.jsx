import React from 'react';
import ProductTable from '../general/general.comp';
import Colegio from '../colegio/colegio.comp';
import"./Institucion-Educativa.style.css";

const InstitucionEducativa = () => {
return ( 

<div className="institucion-educativa-container">

<Colegio/>
<ProductTable/>



</div>
);
    
}
export default InstitucionEducativa;