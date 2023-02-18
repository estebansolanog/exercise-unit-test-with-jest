// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// one dollar is:
let oneDollarIs = {
    "JPY": 134.2, // japan yen
    "EUR": 0.9, // us dollar
    "GBP": 0.8, // british pound
}

// one euro is:
let oneYenIs = {
    "EUR": 0.008, // japan yen
    "USD": 0.008, // us dollar
    "GBP": 0.006, // british pound
}

const fromEuroToDollar = (euro) =>{
    let resultado = euro * oneEuroIs.USD
    return resultado
}
const fromDollarToYen = (dollar) =>{
    let resultado = dollar * oneDollarIs.JPY
    return resultado
}
const fromYenToPound = (yen) =>{
    let resultado = yen * oneYenIs.GBP
    return resultado
}

//exporta la función para usarla en otros archivos
// (similar a la palabra clave 'export' cuando se usa webpack)
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}