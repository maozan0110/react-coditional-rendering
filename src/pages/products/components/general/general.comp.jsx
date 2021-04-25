import React from 'react';
import"./general.style.css";
import Asignatura from '../asignatura/asignatura.comp';
import Estudiante from '../estudiante/estudiante.comp';


const General = () => {
return ( 

<div className="general-container">

<Asignatura categoryName="POGRAMMING ONE"/>
<Estudiante product={{
    name:"Carlos",
    grade:3,
    gender:"male",

}}/>
<Estudiante product={{
    name:"mariana",
    grade:5,
    gender:"female",

}}/>
<Estudiante product={{
    name:"jimena",
    grade:2,
    gender:"female",
}}/>

<Estudiante product={{
    name:"alejandro",
    grade:5,
    gender:"male",

}}/>
<Estudiante product={{
    name:"manuel",
    grade:3,
    gender:"male",

}}/>
<Estudiante product={{
    name:"leidy",
    grade:5,
    gender:"female",

}}/>
<Estudiante product={{
    name:"cristian",
    grade:5,
    gender:"male",

}}/>

<Asignatura categoryName="PROGRAMMING TWO"/>
<Estudiante product={{
    name:"maricela",
    grade:3,
    gender:"female",

}}/>
<Estudiante product={{
    name:"carlos",
    grade:2,
    gender:"male",

}}/>
<Estudiante product={{
    name:"albeiro",
    grade:3,
    gender:"male",

}}/>

<Estudiante product={{
    name:"jorge",
    grade:2,
    gender:"male",

}}/>

<Estudiante product={{
    name:"orlando",
    grade:4,
    gender:"male",

}}/>

<Estudiante product={{
    name:"jesus",
    grade:4,
    gender:"male",

}}/>

<Estudiante product={{
    name:"esperanza",
    grade:3,
    gender:"female",

}}/>


<Asignatura categoryName="PROGRAMMING THREE"/>
<Estudiante product={{
    name:"manuela",
    grade:4,
    gender:"female",

}}/>

<Estudiante product={{
    name:"luzmartina",
    grade:3,
    gender:"female",

}}/>
<Estudiante product={{
    name:"marina",
    grade:2,
    gender:"female",

}}/>
<Estudiante product={{
    name:"david",
    grade:3,
    gender:"male",

}}/>
<Estudiante product={{
    name:"viviana",
    grade:3,
    gender:"female",

}}/>
<Estudiante product={{
    name:"paula",
    grade:2,
    gender:"female",

}}/>

</div>
);
    
}
export default General;