//funcion para calcular las determinantes
function Calcular_determinante(){
   var a11, a12, a13, a21, a22, a23, a31, a32, a33, total;
  //asignando valores
   /*  
               |a11 a12 a13| ba11 ba12
               |a21 a22 a23| ba21 ba22
               |a31 a32 a33| ba31 ba32 */

  a11=parseFloat(document.getElementById("a11").value);
  a12=parseFloat(document.getElementById("a12").value);
  a13=parseFloat(document.getElementById("a13").value);
  a21=parseFloat(document.getElementById("a21").value);
  a22=parseFloat(document.getElementById("a22").value);
  a23=parseFloat(document.getElementById("a23").value);
  a31=parseFloat(document.getElementById("a31").value);
  a32=parseFloat(document.getElementById("a32").value);
  a33=parseFloat(document.getElementById("a33").value);

  det1= (a11*a22*a33)+(a12*a23*a31)+(a13*a21*a32);
  det2= (a12*a21*a33)+(a11*a23*a32)+(a13*a22*a31);
  total= det1-det2
  return(total)
}

function matriz_coofactores(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
   var ca11, ca12, ca13, ca21, ca22, ca23, ca31, ca32, ca33;
   //a1
   ca11 = (a22 * a33 - a32 * a23);
   ca12 = (a21 * a33 - a31 * a23)* -1;
   ca13 = (a21 * a32 - a31 * a22);
   //a2
   ca21 = (a12 * a33 - a32 * a13)* -1;
   ca22 = (a11 * a33 - a31 * a13);
   ca23 = (a11 * a32 - a12 * a31)* -1;
   //a3
   ca31 = (a12 * a23 - a22 * a13);
   ca32 = (a11 * a23 - a21 * a13)* -1;
   ca33 = (a11 * a22 - a21 * a12);

   return {
      ca11, ca12, ca13,
      ca21, ca22, ca23,
      ca31, ca32, ca33
   };

   /* adjunta    :    |ca11 ca21 ca31|
                     |ca12 ca22 ca32| 
                    |ca13 ca32 ca33|    */

}

// sacar inversa, a^-1= 1/det* adj
function calcular_inversa() {
   console.log("hola fukin")
   const a11 = parseFloat(document.getElementById("a11").value);
   const a12 = parseFloat(document.getElementById("a12").value);
   const a13 = parseFloat(document.getElementById("a13").value);
   const a21 = parseFloat(document.getElementById("a21").value);
   const a22 = parseFloat(document.getElementById("a22").value);
   const a23 = parseFloat(document.getElementById("a23").value);
   const a31 = parseFloat(document.getElementById("a31").value);
   const a32 = parseFloat(document.getElementById("a32").value);
   const a33 = parseFloat(document.getElementById("a33").value);

   const cofactores = matriz_coofactores(a11, a12, a13, a21, a22, a23, a31, a32, a33);
   const det = Calcular_determinante();

   if (det === 0 || isNaN(det)) {
      console.log("La matriz no tiene inversa porque su determinante es igual a 0.");
      document.getElementById("total").textContent = "La matriz no tiene inversa porque su determinante es igual a 0.";
   }
      else{
   // dividir cada elemento de la matriz de cofactores por el determinante
   const inv_ca11 = cofactores.ca11 +"/"+ det;
   const inv_ca12 = cofactores.ca21 +"/"+ det;
   const inv_ca13 = cofactores.ca31 +"/"+ det;
   const inv_ca21 = cofactores.ca12 +"/"+ det;
   const inv_ca22 = cofactores.ca22 +"/"+ det;
   const inv_ca23 = cofactores.ca32 +"/" + det;
   const inv_ca31 = cofactores.ca13 +"/"+ det;
   const inv_ca32 = cofactores.ca23 +"/"+ det;
   const inv_ca33 = cofactores.ca33 +"/"+ det;

   // Devuelve la matriz inversa al html
   document.getElementById("matriz_inversa").textContent = `Matriz Inversa:\n
   ${inv_ca11} ${inv_ca12} ${inv_ca13}\n
   ${inv_ca21} ${inv_ca22} ${inv_ca23}\n
   ${inv_ca31} ${inv_ca32} ${inv_ca33}`;
}
}
