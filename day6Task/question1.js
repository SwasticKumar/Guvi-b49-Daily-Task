//create JavaScript of Oops to Class - Movie:

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(arr) {
    let pgMovie = arr.filter((value) => value.rating == "PG-13");
    console.log(pgMovie);
  }
}
const movie1 = new Movie(
  "Indiana Jones and the Dial of Destiny",
  "Walt Disney Studios Motion Pictures",
  "PG-13"
);
const movie2 = new Movie(
  "Viduthalai Part-1",
  " RS Infotainment Grass Root Film Company",
  "PG-18"
);
const movie3 = new Movie("John Wick: Chapter 4", "Lionsgate", "R");
const movie4 = new Movie(
  "Dungeons & Dragons: Honour Among Thieves",
  "Paramount Pictures",
  "PG-13"
);
const movie = new Movie();
let _movieList = [];
_movieList.push(movie1, movie2, movie3, movie4);
movie.getPG(_movieList);
