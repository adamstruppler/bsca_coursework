const products = ["Apple", "Avovado", "Apricot", "Mango", "Spicy Ham", "Fetta Cheese", "Nutella"]

// console.log(products);

const pluralizer = (productsIn) => {
    for(let i = 0; i < productsIn.length; i++) {
        productsIn[i] += "s"    
    }
    return productsIn
}

// console.log(pluralizer(products))

const pluralizerProducts = products.map(product =>  product + 's')

// console.log(pluralizerProducts)


const numbers = [1,2,3,4,5,6,7,8,9];

let doublesArray = []

const printNumbers = (arr) => {
    for(let i = 0; i < arr.length; i++){
        doublesArray.push(arr[i] * 2)
    }
    return doublesArray
}

// console.log(printNumbers(numbers))

//ARRAY.map(function)
// const printNumbersMap = numbers.map(function(sdfgdsfg){
//     return sdfgdsfg * 2
// })

// console.log(printNumbersMap)

// const printNumbersMap = numbers.map((number) => {
//     return number * 2
// })

// console.log(printNumbersMap)

// const printNumbersMap = numbers.map(number => number * 2)

// console.log(printNumbersMap)

const numFunction = (arr) => {
    let newArr = []
    
    for(let i = 0; i < arr.length; i++){
        newArr.push ()
    }
    return newArr
}

// console.log(numFunction(numbers))

const numFunctionMap = numbers.map(n => {
    return {number: n * 2}
})

// console.log(numFunctionMap)

const numGreaterThanFive = (arr) => {
    let greaterThanFive = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > 5 && arr[i] < 9){
                greaterThanFive.push({number: arr[i]})
        }            
    }
    return greaterThanFive
}

// console.log(numGreaterThanFive(numbers))

const numGreaterThanFiveFilter = numbers.filter( num => {
    return num > 5 && num < 9
})

// console.log(numGreaterThanFiveFilter)

const mapAndFilters = numbers.filter( num => {
   return num < 4
}).map(i => {
    return 
    {number: i}
})

console.log(mapAndFilters)