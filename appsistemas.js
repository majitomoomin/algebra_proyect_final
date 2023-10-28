// appsistemas.js

function calcular_crammer2x2() {
    // Obtener los valores de la matriz 2x2
    let a11 = parseFloat(document.getElementById("a11a").value);
    let a12 = parseFloat(document.getElementById("a12a").value);
    let a21 = parseFloat(document.getElementById("a21a").value);
    let a22 = parseFloat(document.getElementById("a22a").value);
    let b1 = parseFloat(document.getElementById("a1=").value);
    let b2 = parseFloat(document.getElementById("a2=").value);

    let detA = a11 * a22 - a12 * a21;

    if (detA === 0) {
        document.getElementById("calcular_2x2").value = "El determinante es cero, el sistema no tiene solución única.";
        return;
    }

    let detX = b1 * a22 - b2 * a12;
    let detY = a11 * b2 - a21 * b1;

    let x = detX / detA;
    let y = detY / detA;

    document.getElementById("calcular_2x2").value = "Total: x = " + x + ", y = " + y;
}

function calcular_gaussjordan2x2() {
    let a11 = parseFloat(document.getElementById("a11a").value);
    let a12 = parseFloat(document.getElementById("a12a").value);
    let a21 = parseFloat(document.getElementById("a21a").value);
    let a22 = parseFloat(document.getElementById("a22a").value);
    let b1 = parseFloat(document.getElementById("a1=").value);
    let b2 = parseFloat(document.getElementById("a2=").value);

    // Aplicar el método de Gauss-Jordan
    let detA = a11 * a22 - a12 * a21;

    if (detA === 0) {
        document.getElementById("calcular_2x2").value = "El determinante es cero, el sistema no tiene solución única.";
        return;
    }

    // Eliminación hacia adelante
    let factor = a21 / a11;
    a21 -= factor * a11;
    a22 -= factor * a12;
    b2 -= factor * b1;

    // Sustitución hacia atrás
    let y = b2 / a22;
    let x = (b1 - a12 * y) / a11;

    // Mostrar el resultado en el textarea
    document.getElementById("calcular_2x2").value = "Total (Gauss-Jordan): x = " + x + ", y = " + y;
}

function calcular_crammer3x3() {
    // Obtener los valores de la matriz 3x3
    let a11 = parseFloat(document.getElementById("a11b").value);
    let a12 = parseFloat(document.getElementById("a12b").value);
    let a13 = parseFloat(document.getElementById("a13b").value);
    let a21 = parseFloat(document.getElementById("a21b").value);
    let a22 = parseFloat(document.getElementById("a22b").value);
    let a23 = parseFloat(document.getElementById("a23b").value);
    let a31 = parseFloat(document.getElementById("a31b").value);
    let a32 = parseFloat(document.getElementById("a32b").value);
    let a33 = parseFloat(document.getElementById("a33b").value);
    let b1 = parseFloat(document.getElementById("b1=").value);
    let b2 = parseFloat(document.getElementById("b2=").value);
    let b3 = parseFloat(document.getElementById("b3=").value);

    // Calcular el determinante
    let detA = a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31);

    // Verificar si el sistema tiene solución única
    if (detA === 0) {
        document.getElementById("calcular_3x3").value = "El determinante es cero, el sistema no tiene solución única.";
        return;
    }

    // Calcular los determinantes para encontrar las variables
    let detX = b1 * (a22 * a33 - a23 * a32) - b2 * (a21 * a33 - a23 * a31) + b3 * (a21 * a32 - a22 * a31);
    let detY = a11 * (b2 * a33 - b3 * a32) - a12 * (b1 * a33 - b3 * a31) + a13 * (b1 * a32 - b2 * a31);
    let detZ = a11 * (a22 * b3 - a23 * b2) - a12 * (a21 * b3 - a23 * b1) + a13 * (a21 * b2 - a22 * b1);

    // Calcular las variables
    let x = detX / detA;
    let y = detY / detA;
    let z = detZ / detA;

    // Mostrar el resultado en el textarea
    document.getElementById("calcular_3x3").value = "Total: x = " + x + ", y = " + y + ", z = " + z;
}

// appsistemas.js

// appsistemas.js

function calcular_gaussjordan3x3() {
    // Obtener los valores de la matriz 3x3
    let a11 = parseFloat(document.getElementById("a11b").value);
    let a12 = parseFloat(document.getElementById("a12b").value);
    let a13 = parseFloat(document.getElementById("a13b").value);
    let a21 = parseFloat(document.getElementById("a21b").value);
    let a22 = parseFloat(document.getElementById("a22b").value);
    let a23 = parseFloat(document.getElementById("a23b").value);
    let a31 = parseFloat(document.getElementById("a31b").value);
    let a32 = parseFloat(document.getElementById("a32b").value);
    let a33 = parseFloat(document.getElementById("a33b").value);
    let b1 = parseFloat(document.getElementById("b1=").value);
    let b2 = parseFloat(document.getElementById("b2=").value);
    let b3 = parseFloat(document.getElementById("b3=").value);

    let detA = a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31);

    if (detA === 0) {
        document.getElementById("calcular_3x3").value = "El determinante es cero, el sistema no tiene solución única.";
        return;
    }

    // Eliminación hacia adelante
    let factor1 = a21 / a11;
    let factor2 = a31 / a11;

    a21 -= factor1 * a11;
    a22 -= factor1 * a12;
    a23 -= factor1 * a13;
    b2 -= factor1 * b1;

    a31 -= factor2 * a11;
    a32 -= factor2 * a12;
    a33 -= factor2 * a13;
    b3 -= factor2 * b1;

    let factor3 = a32 / a22;
    a32 -= factor3 * a22;
    a33 -= factor3 * a23;
    b3 -= factor3 * b2;

    // Sustitución hacia atrás
    let z = b3 / a33;
    let y = (b2 - a23 * z) / a22;
    let x = (b1 - a12 * y - a13 * z) / a11;

    // Verificar si los resultados son finitos
    if (!isFinite(x) || !isFinite(y) || !isFinite(z)) {
        document.getElementById("calcular_3x3").value = "El sistema no tiene solución finita.";
        return;
    }

    // Mostrar el resultado en el textarea
    document.getElementById("calcular_3x3").value = "Total (Gauss-Jordan): x = " + x + ", y = " + y + ", z = " + z;
}
