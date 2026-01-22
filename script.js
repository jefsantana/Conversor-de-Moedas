//REALIZAR A CONVERSÃO ENTRE INPUT E BOTAO

const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.40
    const euroToday = 6.33
    const libraToday = 7.28
      

    changeCurrency();
    let convertedValue = 0

    if (currencySelect.value == "dolar") {
        //Se o select estiver selecionado o valor de dolar, entre aqui
        convertedValue = inputCurrencyValue / dolarToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }
    if (currencySelect.value == "euro") {
        //Se o select estiver selecionado o valor de euro, entre aqui
        convertedValue = inputCurrencyValue / euroToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }
    if (currencySelect.value == "libra") {
        //Se o select estiver selecionado o valor de libra, entre aqui
        convertedValue = inputCurrencyValue / libraToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImages = document.querySelectorAll(".currency-img")
    const currencyImage = currencyImages[1] || document.querySelector('.currency-img')

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
     if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./assets/libra.png"
    }
}


currencySelect.addEventListener("change", convertValues)
convertbutton.addEventListener("click", convertValues)




//REALIZAR A CONVERSÃO APERTANDO ENTER NO INPUT
const inputCurrency = document.querySelector(".input-currency");

inputCurrency.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertValues();
    }
});