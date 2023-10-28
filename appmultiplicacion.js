function calcular_multiplicacion(){
    var a11a, a12a, a13a, a21a, a22a, a23a, a31a, a32a, a33a, a11b, a12b, a13b, a21b, a22b, a23b, 
    a31b, a32b, a33b, a11, a12, a13, a21, a22, a23, a31,a32, a33, total;
   //asignando valores
    /*  
                |a11 a12 a13| 
                |a21 a22 a23|
                |a31 a32 a33| */

//variables matriz A
   a11a=parseFloat(document.getElementById("a11a").value);
   a12a=parseFloat(document.getElementById("a12a").value);
   a13a=parseFloat(document.getElementById("a13a").value);
   a21a=parseFloat(document.getElementById("a21a").value);
   a22a=parseFloat(document.getElementById("a22a").value);
   a23a=parseFloat(document.getElementById("a23a").value);
   a31a=parseFloat(document.getElementById("a31a").value);
   a32a=parseFloat(document.getElementById("a32a").value);
   a33a=parseFloat(document.getElementById("a33a").value);
//variables matriz B
   a11b=parseFloat(document.getElementById("a11b").value);
   a12b=parseFloat(document.getElementById("a12b").value);
   a13b=parseFloat(document.getElementById("a13b").value);
   a21b=parseFloat(document.getElementById("a21b").value);
   a22b=parseFloat(document.getElementById("a22b").value);
   a23b=parseFloat(document.getElementById("a23b").value);
   a31b=parseFloat(document.getElementById("a31b").value);
   a32b=parseFloat(document.getElementById("a32b").value);
   a33b=parseFloat(document.getElementById("a33b").value);

   //multiplicación
   a11= (a11a*a11b+a12a*a21b+a13a*a31b);
   a12 = (a11a*a12b+a12a*a22b+a13a*a32b);
   a13= (a11a*a13b+a12a*a23b+a13a*a33b);
   
   a21= (a21a*a11b+a22a*a21b+a23a*a31b);
   a22= (a21a*a12b+a22a*a22b+a23a*a32b);
   a23= (a21a*a13b+a22a*a23b+a23a*a33b);

   a31= (a31a*a11b+a32a*a21b+a33a*a31b);
   a32= (a31a*a12b+a32a*a22b+a33a*a32b);
   a33= (a31a*a13b+a32a*a23b+a33a*a33b);


   //regresar datos al html
   document.getElementById("calcular_multiplicacion").textContent = `Total:\n
   ${a11} ${a12} ${a13}\n
   ${a21} ${a22} ${a23}\n
   ${a31} ${a32} ${a33}`;
}