const fallArray = [
    'pumpkin',
    'spice',
    'is',
    'very',
    'nice',
    'happy',
    'fall'
]

// find and print the greatest length string in out array

const greatString = (arr) => {
    let greatestLengthSoFar = 0
    let indexWhereWordsAreStored = 0

    for(let i = 0; i < arr.length; i++){
        let currentLengthOfWord = arr[i].length
        if(currentLengthOfWord > greatestLengthSoFar) {
          greatestLengthSoFar = currentLengthOfWord  
          indexWhereWordsAreStored = i
        }
    }
    return `${arr[indexWhereWordsAreStored]} has length ${greatestLengthSoFar}`
    // Longest word has length 
}

console.log(greatString(fallArray))