const authors = [
  {
    id: "auth1",
    name: "AuthorName1",
    surname: "AuthorSurname1",
    age: 25,
    books: [
      {
        id: "book1",
        title: "a1Test Book 1",
        score: 8,
        isPublished: false,
      },
      {
        id: "book2",
        title: "a1Test Book 2",
        score: 6,
        isPublished: true,
      },
    ],
  },
  {
    id: "auth2",
    name: "AuthorName2",
    surname: "AuthorSurname2",
    age: 35,
    books: [
      {
        id: "book3",
        title: "33Test Book 3",
        score: 5,
        isPublished: true,
      },
      {
        id: "book4",
        title: "44Test Book 4",
        score: 9,
        isPublished: true,
      },
    ],
  },
  {
    id: "auth3",
    name: "AuthorName3",
    surname: "AuthorSurname3",
    age: 45,
    books: [
      {
        id: "book5",
        title: "55Test Book 5",
        score: 4,
        isPublished: false,
      },
      {
        id: "book6",
        title: "66Test Book 6",
        score: 6,
        isPublished: false,
      },
    ],
  },
];

const books = [
  {
    id: "book1",
    title: "11Test Book 1",
    author_id: "auth1",
    score: 8,
    isPublished: false,
  },
  {
    id: "book2",
    title: "22Test Book 2",
    author_id: "auth1",
    score: 6,
    isPublished: true,
  },
  {
    id: "book3",
    title: "33Test Book 3",
    author_id: "auth2",
    score: 5,
    isPublished: true,
  },
  {
    id: "book4",
    title: "44Test Book 4",
    author_id: "auth2",
    score: 9,
    isPublished: true,
  },
  {
    id: "book5",
    title: "55Test Book 5",
    author_id: "auth3",
    score: 4,
    isPublished: false,
  },
  {
    id: "book6",
    title: "66Test Book 6",
    author_id: "auth3",
    score: 6,
    isPublished: false,
  },
];

module.exports = {
  authors,
  books,
};
