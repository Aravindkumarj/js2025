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

let newBooks = [
    ...books,
    {
        title: "The Family upstairs",
        author: "Lisa Jewell",
        yearPublished: 2019
    }
]
console.log(newBooks)