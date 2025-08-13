

// let book = {
//     title: "Pride and Prejudice",
//     pages: 500,
//     isAvailable: true,
// };

//      if (book.isAvailable){
//         console.log(`The book "${book.title}" has "${book.pages}" pages`);
//      }

// let car = {
//     Brand: "Suzuki",
//     Model: 2021,  
//     Name: "Jimny"
// };

//     console.log (`I love the new ${car.Brand} ${car.Name} ${car.Model} model!`);

// let girlfriend = {
//     Name: "Fria Lelaine",
//     Age: 23,
//     isCute: false
// };
//         if (girlfriend.isCute) {
//             console.log (`My girlfriend's name is ${girlfriend.Name} and she is ${girlfriend.Age} years old.`);
//         } else {
//             console.log(`${girlfriend.Name} is ugly`);
//         }
   
const movie = {
    name: "Spider-Man Brand New Day",
    year: 2026,
    director: "Tony Stark",
    isWatched: true,

        describe: function (){
            if (movie.isWatched) {
                return ` The movie ${movie.name} will be realease this ${movie.year} and is directed by ${movie.director}.`;
            } else {
                return `This movie is ass`;
            }
        }
};

console.log(movie.describe());