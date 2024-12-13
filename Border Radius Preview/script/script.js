const ancho = document.getElementById("ancho")
const alto = document.getElementById("altura")
const topLeftX = document.getElementById("slider__top-left-x")
const topRightX = document.getElementById("slider__top-right-x")
const topLeftY = document.getElementById("slider2__top-left-y")
const bottomLeftY = document.getElementById("slider2__bottom-left-y")
const topRightY = document.getElementById("slider2__top-right-y")
const bottomRightY = document.getElementById("slider2__bottom-right-y")
const tooltipValueTopLeftX = document.querySelector(".tooltip__value__top-left-X")
const estilos = document.styleSheets
const root = getComputedStyle(document.documentElement)
/*console.log(estilos[0].cssRules[1].cssText);*/
/*getPropertyValue('--width-lateral').trim()*/
/*console.log(getComputedStyle(document.querySelector('.middle__radius')).getPropertyValue('border'));*/
console.log(topLeftX.value);
function codigoCSS() {
    const width = root.getPropertyValue("--width-central").trim()
    const height = root.getPropertyValue("--height-central").trim()
    const [tlx, trx, tly, bly, tory, bry] = [topLeftX.value, topRightX.value, topLeftY.value, bottomLeftY.value, topRightY.value, bottomRightY.value]
    let bordesRadius
    if (tlx === 0 && trx === 0 && tly === 0 &&
        bly === 0 && tory === 0 && bry === 0) {
            h 
    }

}
topLeftX.addEventListener('input', () => {
    const value = topLeftX.value
    tooltipValueTopLeftX.textContent = `${value}%`
    
})

