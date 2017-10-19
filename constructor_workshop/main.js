const tvCharacterOne = {
    name:"SpongeBob",
    show:"SpongeBob SquarePants",
    rating: 3
}

const tvCharacterTwo = {
    name:"Louie",
    show:"Ducktales",
    rating: 10
}

const tvCharacterThree = {
    name:"Rick",
    show:"Walking Dead",
    rating: 8
}

function tvCharacter (name, show, rating){
    this.name = name
    this.show = show
    this.rating = rating
}

const SpongeBob = new tvCharacter('Spongebob', 'Spongebob Squarepants', 7)
// console.log(SpongeBob)

function car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}

const carName = new car("Toyota", "Forerunner", 2018)
const carNameTwo = new car("Tesla", "Model 3", 2018)
const carNameThree = new car("Nissa", "Pathfinder", 2001)

// console.log(carName, carNameTwo, carNameThree)

const createCar = () => {
    let result = []
    for(let i = 0; i < 10; i++){
        const carObj = {
            name: "VW",
            model: "Rabbit",
            year: 2008
        }
        result.push(carObj)
    }
    return result   
}

// console.log(createCar())

const createCarTwo = () => {
    let result = []
    for(let i = 0; i < 10; i++){
        result.push(new car("VW", "Rabbit", 2008))
    }
    return result
}

// console.log(createCarTwo())

function Recipe(ingredients, instructions, time){
    this.ingredients = ingredients
    this.instructions = instructions
    this.time = time
} 

const newRecipe = (numRecipes) => {
    let result = []
    for(let i = 0; i < numRecipes; i++){
        result.push(new Recipe([], [], 0))
    }
    return result
}

console.log(newRecipe(80))