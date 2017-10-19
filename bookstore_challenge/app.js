const storeInventory = [
    {name: "Catcher in the Rye", author: "J.D. Salinger", price: 10.00, genre: "Adult Fiction"},
    {name: "The Wind-Up Bird Chronicles", author: "Haruki Murakami", price: 15.00, genre: "Adult Fiction"},
    {name: "The Unbearable Lightness of Being", author: "Milan Kundera", price: 14.00, genre: "Adult Fiction"},
    {name: "Harry Potter: The Sorcerers Stone", author: "J.K. Rowling", price: 22.00, genre: "Youth Fiction"},
    {name: "In Cold Blood", author: "Truman Capote", price: 14.00, genre: "Non-Fiction"},
    {name: "A Brief History of Time", author: "Stephen Hawking", price: 18.00, genre: "Non-Fiction"},
    {name: "The Emperor of All Maladies", author: "Siddhartha Mukherjee", price: 20.00, genre: "Non-Fiction"},
    {name: "The Structure of Scientific Revolutions", author: "Thomas S. Khun", price: 16.00, genre: "Non-Fiction"},
    {name: "A Wrinkle in Time", author: "Madeleine L Engle", price: 14.00, genre: "Youth Fiction"},
    {name: "The House of the Scorpion", author: "Nancy Farmer", price: 16.00, genre: "Youth Fiction"},
    {name: "Mastering the Art of French Cooking", author: "Julia Child", price: 24.00, genre: "Food/Cooking"},
    {name: "Antifragile", author: "Nassim Nicholas Taleb", price: 20.00, genre: "Philosophy"}
  ]

  const bookInfo = storeInventory.map((book) => {
      return `${book.name} is by ${book.author} and is $${book.price}`
  })

//   console.log(bookInfo)

const newFunction =(arr) => {
    let bookInfo = arr.map((book) => {
        return `${book.name} is by ${book.author} and is $${book.price}`
    })
    return bookInfo
}

// console.log(newFunction(storeInventory))

const nonFiction = storeInventory.filter((books) => {
    return books.genre === "Non-Fiction"
})

// console.log(nonFiction)
 const nonFictionFunction = (arr) => {
     let newBookInfo = arr.filter((books) => {
         return books.genre === "Non-Fiction"
     })
     return newBookInfo
 }

//  console.log(nonFictionFunction(storeInventory))

const greaterThan = storeInventory.filter((books) => {
    return books.price > 15
})

// console.log(greaterThan)

const greaterThanFunction = (arr, price) => {
    let bookPrice = arr.filter((books) => {
        return books.price > price
    }).map(i => {
        return i.name
    })
    return bookPrice
}

// console.log(greaterThanFunction(storeInventory, 15))

const shoppingCart = []

const addBookToCart = (nameOfBook) => {
    const book = storeInventory.filter((book) => {
        return book.name === nameOfBook
    })
    shoppingCart.push(book[0])
}

addBookToCart("Catcher in the Rye")
addBookToCart("A Brief History of Time")
addBookToCart("Mastering the Art of French Cooking")

const totalPrice = (arr) => {
    let totalPrice = 0
    for(let i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price
    }
    return totalPrice
}

// console.log(totalPrice(shoppingCart))

const cart = (arr) => {
    console.log('************Shopping Cart***************')
    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i].name} is by ${arr[i].author} and cost $${arr[i].price} `)
    }
    console.log(`Total Price ${totalPrice(shoppingCart)}`)
    console.log('****************************************')
}

cart(shoppingCart)
