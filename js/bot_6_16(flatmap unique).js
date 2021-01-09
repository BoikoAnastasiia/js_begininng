const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое'],
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика'],
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения'],
  },
];

const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index,
);
//console.log(allGenres)
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг
// рейтинг которых(свойство rating) больше либо равно значению переменной MIN_RATING.
// // В переменной booksByAuthor получился массив
// книг написанных автором с именем(свойство author)
// которое совпадает со значением в переменной AUTHOR.
