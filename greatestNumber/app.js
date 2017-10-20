function Guesser(number, lives) {
    this.number = number
    this.lives = lives
}

Guesser.prototype.guess = function(n) {
   if(n > this.number) {
       console.log(`${n} is too big`)

       if(this.lives !== 0) {
             // if the user guesses a number too big, subtract one from total lives 
             this.lives = this.lives - 1
             console.log(`You have ${this.lives} lives`)
       } else {
           console.log(`Oops! You dont have anymore lives!`)
       }
      
   } else if (n < this.number) {
       console.log(`${n} is to small`)
       if(this.lives !== 0) {
        // if the user guesses a number too small. subtrack one from total lives
            this.lives = this.lives - 1
            console.log(`You have ${this.lives} lives`)
        } else {
            console.log(`Oops! You dont have anymore lives!`)
        }
      
    } else {  // you could do a else if (n === this.number)
       console.log(`${n} is the correct number!`)
   }
}


const myGuess = new Guesser(10, 2)

myGuess.guess(50)
myGuess.guess(7)
myGuess.guess(9)
myGuess.guess(10)
