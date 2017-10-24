let names = ["David Bowie", "The Artist Formerly Know as Prince", "John Lennon", "Jimi Hendrix", "Robert Plant", "Paul McCartney", "Gene Simmons", "Stevie Nicks", "Florence Welch", " Sonny and Char"];


// Map the names to objects

// ex: (name: "David Bowie")

// return results to mappedNames array

// let mappedNamesES5 = names.map(function(name){
//     var rockstar = {name: name};
//     return rockstar;
// })

// mappedNamesES5 = "Hi!"

// console.log(mappedNamesES5)

const mappedNames = names.map((name) => {
    let rockstar = {name: name}
    return rockstar
})

console.log(mappedNames)


// map thought just the first names
// return an array of the first name of the artist

const mappedFirstNames = names.map(name => name.split(" ")[0])
console.log(mappedFirstNames)

// Call filter method on names array
// only return first name that begin with J
// store this in result in a new array

const filteredNamesJ = names.filter(name => name[0] === "J")
console.log(filteredNamesJ)

// Return a array of 