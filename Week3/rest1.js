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

function listAuthors(...authors) {
    console.log(authors);
}

listAuthors("Margaret Mitchell", "Lisa Jewell", "Delia Owens");
