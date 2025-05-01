/*Create an array called books, with 3 objects, each representing a book:

    title (string)

    author (string)

    yearPublished (number)

Use .forEach() to print the title and author of each book. */

let books = [
    {
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        yearPublished: 1936
        
    },
    {
        title: "Then She Was Gone",
        author: "Lisa Jewel",
        yearPublished: 2017
    },
    {
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        yearPublished: 2018
    }
]

books.forEach(book => console.log(book.title, book.author));