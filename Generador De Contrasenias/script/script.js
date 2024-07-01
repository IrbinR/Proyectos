const rango = document.querySelector(".formato__longitud__1")
const numero = document.querySelector(".formato__longitud__2")
const copiar = document.querySelector(".informacion__copiar")
const actualizar = document.querySelector(".informacion__actualizar")
const display = document.querySelector(".informacion__clave").lastElementChild 
const clave = document.querySelector(".informacion__clave__resultado")
const opciones = document.querySelector(".formato__opciones__principal__valor")
const elementos = document.querySelectorAll(".formato__opciones__principal__estilo__2")
const mayusculas = opciones.children[0]
const minusculas = opciones.children[1]
const numeros = opciones.children[2]
const simbolos = opciones.children[3]
const letras = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z"
const valores = [1, 1, 1, 1]
rango.addEventListener("input", () => {
    numero.value = rango.value
    generador()
})

numero.addEventListener("input", () => {
    rango.value=numero.value
    generador()
})

copiar.addEventListener("click", async () => {
    try {
        const valor = clave.value
        await navigator.clipboard.writeText(valor)
    } catch (Error) {
        console.log("Error al copiar: ", Error);        
    }
})

actualizar.addEventListener("click", () => {
    generador()
})

display.addEventListener("click", () => {
    const estado = display.textContent
    if(estado === "visibility_off") {
        display.textContent = "visibility"
        clave.type = "text"
    }
    else {
        display.textContent = "visibility_off"
        clave.type = "password"
    }
})

mayusculas.addEventListener("click", () => {
    if(valores[0] === 1) {
        elementos[0].classList.remove("formato__opciones__principal__estilo__2")
        elementos[0].classList.add("formato__opciones__principal__estilo__1")
        valores[0] = letras.toUpperCase().split(",")
    } else {
        elementos[0].classList.remove("formato__opciones__principal__estilo__1")
        elementos[0].classList.add("formato__opciones__principal__estilo__2")
        valores[0] = 1
    }
    generador()
})

minusculas.addEventListener("click", () => {
    if(valores[1] === 1) {
        elementos[1].classList.remove("formato__opciones__principal__estilo__2")
        elementos[1].classList.add("formato__opciones__principal__estilo__1")
        valores[1] = letras.split(",")
    } else {
        elementos[1].classList.remove("formato__opciones__principal__estilo__1")
        elementos[1].classList.add("formato__opciones__principal__estilo__2")
        valores[1] = 1
    }
    generador()
})

numeros.addEventListener("click", () => {
    const digitos = "0,1,2,3,4,5,6,7,8,9"
    if (valores[2] === 1) {
        elementos[2].classList.remove("formato__opciones__principal__estilo__2")
        elementos[2].classList.add("formato__opciones__principal__estilo__1")
        valores[2] = digitos.split(",") 
    } else {
        elementos[2].classList.remove("formato__opciones__principal__estilo__1")
        elementos[2].classList.add("formato__opciones__principal__estilo__2")
        valores[2] = 1
    }
    generador()
})

simbolos.addEventListener("click", () => {
    const caracteres = "º1ª1\\1!1|1\"1@1·1#1$1~1%1½1&1¬1/1{1(1[1)1]1=1}1?1¿1¡1ſ1€1¶1ŧ1←1↓1→1ø1þ1^1`1*1+1æ1ß1ð1đ1ŋ1ħ1ł1´1ç1Ç1<1>1«1»1¢1“1”1µ1•1;1·1:1_1-1,"
    if (valores[3] === 1) {
        elementos[3].classList.remove("formato__opciones__principal__estilo__2")
        elementos[3].classList.add("formato__opciones__principal__estilo__1")
        valores[3] = caracteres.split("1")
    } else {
        elementos[3].classList.remove("formato__opciones__principal__estilo__1")
        elementos[3].classList.add("formato__opciones__principal__estilo__2")
        valores[3] = 1
    }
    generador()
})

const generador = function () {
    const elementos = valores.filter(valor => valor === 1).length
    if(elementos < 4) {
        let contrasenia = ""
        const numCaracteres = numero.value
        const posiciones = []
        for (let i = 0; i < valores.length; i++) {
            if(valores[i] !== 1) {
                posiciones.push(i)
            }
            
        }
        const longitud = posiciones.length
        for( let i = 0; i < numCaracteres; i++) {
            const indice = posiciones[Math.floor(Math.random()*longitud)]
            const longitudIndice = valores[indice].length
            const subindice = Math.floor(Math.random()*longitudIndice)
            contrasenia += valores[indice][subindice]
        }
        const dato = clave.value
        if (dato.length > 0) {
           clave.value = ""
        }
        clave.value = contrasenia
    } else {
        clave.value=""
    }
}
