const $inputs = document.getElementsByTagName("input");
const $buttons = document.getElementsByClassName("buttons")[0].children;
const $calcular = document.querySelector(".calcular button");
console.log($buttons);


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
    const datos = {
      "Propina total:" : $total.value, 
      "Total a pagar:" : $Personas.value, 
      "Monto por persona:" : valor
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
    // instrucciones faltantes
  }
})