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
  
})