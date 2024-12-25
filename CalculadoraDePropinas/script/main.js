const $inputs = document.getElementsByTagName("input");
const $buttons = document.getElementsByClassName("buttons")[0].children;
const $calcular = document.querySelector(".calcular button");
//console.log($buttons);


const $total = $inputs[0];
const $Personas = $inputs[1];
const $propina = $inputs[2];

const $diez = $buttons[0];
const $quince = $buttons[1];
const $veinte = $buttons[2];

let porcentaje = 0;
const opciones = [0, 0, 0];
for (let index = 0; index < $buttons.length; index++) {
  $buttons[index].addEventListener("click", (e) => {
    const value = e.target.textContent;
    porcentaje = parseInt(value)/100;
    $propina.value = "";
    $diez.classList.remove("active");
    $quince.classList.remove("active");
    $veinte.classList.remove("active");
    if (index === 0) {
         $diez.classList.add("active");
    } else if (index === 1) {
         $quince.classList.add("active");
    } else {
         $veinte.classList.add("active");
    }
    
  });
}

$propina.addEventListener("click", () => {
  Array.from($buttons).forEach(button => button.classList.remove("active"));
  porcentaje = 0;
  console.log("Limpiado todos los buttons");
  
})

$calcular.addEventListener("click", () => {
  const regexTotal = /^-?\d+\.?\d+$/;
  const regexEnteros = /^\d+$/;
  const createElement = (valor) => {
    const preview = document.createElement("div");
    preview.setAttribute("class", "print");
    const totalCuenta = parseFloat($total.value);
    const propinatotal = totalCuenta*valor;
    const totalAPagar = totalCuenta + propinatotal;
    const montoPorPersona = totalAPagar/parseInt($Personas.value);
    const datos = {
      "Propina total:" : propinatotal, 
      "Total a pagar:" : totalAPagar, 
      "Monto por persona:" : montoPorPersona
    }
    Object.keys(datos).forEach(key => {
      const view = document.createElement("div");
      view.setAttribute("class", "view");
      const span1 = document.createElement("span");
      span1.textContent = key;
      const span2 = document.createElement("span");
      span2.textContent = `S/. ${datos[key]}`;
      view.appendChild(span1);
      view.appendChild(span2);
      preview.appendChild(view);
    });
    const $container = document.getElementsByClassName("container")[0];
    $container.appendChild(preview);
  }

  const total = regexTotal.test($total.value);
  const personas = regexEnteros.test($Personas.value);
  const personalizado = regexEnteros.test($propina.value);

  if (total && personas && porcentaje > 0) {
    createElement(porcentaje);
  } else if (total && personas && personalizado) {
    createElement($propina);
  } else {
    const errors = (texto, index) => {
      const dato = document.getElementsByClassName("dato")[index];
      const icon = document.createElement("div");
      const img = document.createElement("img");
      const div = document.createElement("div");
      icon.setAttribute("class", "icon");
      img.setAttribute("src", "./assets/error.svg");
      div.textContent = texto;
      icon.appendChild(img);
      icon.appendChild(div);
      dato.appendChild(icon);
    }
    
    if (!total) {
      errors("Solo se admiten números positivos", 0);
    }
    
    if (!personas) {
      errors("Solo se admite numeros enteros positivos", 1);
    }

    if (porcentaje === 0 && !personalizado) {
      errors("Solo se admite numeros enteros positivos", 2);
    }
  }
})