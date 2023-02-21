let edad = 18; 
let mensaje; 

if (edad >= 0 && edad <= 12) { 
  mensaje = 'Es un niño'; 
} else if(edad > 12 && edad <= 17) {     
  mensaje = 'Es un adolescente';  
} else if(edad > 17 && edad <= 59) { 
  mensaje = 'Es un adulto'; 
} else if (edad >= 60){  
  mensaje = 'Es un adulto mayor' ;
} else {   
mensaje = "Edad incorrecta";  
}  

 console.log(mensaje);