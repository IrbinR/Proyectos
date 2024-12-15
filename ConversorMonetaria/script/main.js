const apiDivisas = async (path) => {
    const currencies = await fetch("https://api.vatcomply.com/currencies")
    const symbol = await currencies.json();

    for (const key in symbol) {
        const textContent = `${key} - ${symbol[key].name}`;
        option(textContent, path, key);
    }
}

const conversion = async () => {
    const monedaBase = document.getElementById("origen").value;
    const cambioMoneda = document.getElementById("destino").value;
    const cantidades = document.getElementsByTagName("input");
    const cantidadBase = cantidades[0].value;
    const rates = await fetch(`https://api.vatcomply.com/rates?base=${monedaBase}`);
    const json = await rates.json();
    const moneda = json.rates;
    const tipoCambio = moneda[cambioMoneda]
    cantidades[1].value = cantidadBase * tipoCambio;

}

const option = (textContent, path, value) => {
    const $origen = document.getElementById(path);
    const $createOption = document.createElement("option");
    $createOption.textContent = `${textContent}`
    $createOption.setAttribute("value", value);
    if (value === "USD" && path === "origen") {
        $createOption.setAttribute("selected", "");        
    } else if(value === "CNY" && path === "destino") {
        $createOption.setAttribute("selected", "");
    }
    $origen.appendChild($createOption);
}

const symbol = async (path) => {
    const currencies = await fetch("https://api.vatcomply.com/currencies")
    const data = await currencies.json();
    const monedaBase = document.getElementById(path).value;
    const symbolBase = data[monedaBase].symbol;
    return symbolBase
}


apiDivisas("origen");
apiDivisas("destino");


document.querySelector(".arrow").addEventListener("click", () => {
    conversion();
});