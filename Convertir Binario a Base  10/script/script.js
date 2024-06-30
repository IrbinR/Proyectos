const myInput = document.getElementById("numeroBinario");
const myDiv = document.getElementById("mostrar");
const error = document.getElementsByClassName("mensajes")
console.log(error);

myInput.addEventListener("keyup", () => {
  error[0].textContent= "";
  if (myInput.value === "") {
    myDiv.textContent = "";
  } else {
    let binario = myInput.value;
    let validacion = 0;
    let longitud = binario.length;
    let cantidadDecimales = 0;
    for (let i = 0; i < longitud; i++) {
      if (
        binario.charAt(i) === '0' ||
        binario.charAt(i) === '1' ||
        binario.charAt(i) === '.'
      ) {
        if (binario.charAt(i) === '.') {
          cantidadDecimales++;
        }
        validacion++;
      }
    }

    if (validacion === longitud) {
      if (binario.indexOf(".") !== -1) {
        if (cantidadDecimales === 1) {
          if (binario.length - 1 <= 20) {
            let fraccionaria = conversionFraccionaria(binario);
            myDiv.textContent = fraccionaria;
          } else {
            error[0].textContent="¡Error!";
            myDiv.textContent = "Solo esta permtido ingresar hasta 20 dígitos.";
          }
        } else {
          error[0].textContent="¡Error!";
          myDiv.textContent =
            "Si ingresa un binario fraccionario solo se admitira un punto decimal.";
        }
      } else {
        if (longitud <= 20) {
          let decimal = conversionEntera(binario);
          myDiv.textContent = decimal;
        } else {
          error[0].textContent="¡Error!";
          myDiv.textContent = "Solo esta permtido ingresar hasta 20 dígitos.";
        }
      }
    } else {
      error[0].textContent="¡Error!";
      myDiv.textContent = "Un dígito ingresado no es un 0 o 1.";
    }

    //myDiv.textContent = myInput.value;
  }
});

window.onload = function () {
  document.getElementById("numeroBinario").value = "";
};

function potenciacion(base, exponente){
    let potencia = 1;
    for ( let i = 0; i < exponente; i++ ){
        potencia *= base;
    }
    return potencia;
}

function conversionEntera(binario){
    let longitud = binario.length;
    let decimal = 0;
    for (let i = 0; i < longitud; i++) {
        let indicesAlFinal = longitud - (i + 1);
        let numeroRelativo = parseInt(binario.charAt(indicesAlFinal));
        decimal += numeroRelativo*potenciacion(2, i);

    }
    return decimal;
}

function conversionFraccionaria(binario){
    let parteEntera = binario.substring(0, binario.indexOf("."));
    let entero = conversionEntera(parteEntera);
    let parteDecimal = binario.substring(binario.indexOf(".") + 1);
    let decimal = 0;
    for (let i = 0; i < parteDecimal.length; i++) {
        let numeroRelativo = parseInt(parteDecimal.charAt(i));
        decimal += numeroRelativo * 1 / (potenciacion(2, i + 1));
    }
    let suma = entero + decimal;
    return suma;
}
