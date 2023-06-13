const collection = [
{
    name: 'Birds of Prey',
    director: 'Cathy Yan',
    releaseYear: 2020,
    picture: 'birdsofprey.jpeg',
    genre: ['Action', 'Comedy', 'Crime'],
    cast: ['Margot Robbie', 'Rosie Perez', 'Mary Elizabeth Winstead'],
    overview: ['It is open season on Harley Quinn when her explosive breakup with the Joker puts a big fat target on her back. Unprotected and on the run, Quinn faces the wrath of narcissistic crime boss Black Mask, his right-hand man, Victor Zsasz, and every other thug in the city. But things soon even out for Harley when she becomes unexpected allies with three deadly women -- Huntress, Black Canary and Renee Montoya.After splitting with the Joker, Harley Quinn joins superheroines Black Canary, Huntress, and Renee Montoya to save a young girl from an evil crime lord.'],
    trailer : ['https://youtu.be/kGM4uYZzfu0']
},

{
    name: 'Clueless',
    director: 'Amy Heckerling',
    releaseYear: 1995,
    picture: 'clueless.jpeg',
    genre: ['Comedy', 'Romance'],
    cast: ['Alicia Silverstone', 'Stacey Dash', 'Brittany Murphy'],
    overview: ['Shallow, rich and socially successful Cher (Alicia Silverstone) is at the top of her Beverly Hills high schools pecking scale. Seeing herself as a matchmaker, Cher first coaxes two teachers into dating each other. Emboldened by her success, she decides to give hopelessly klutzy new student Tai (Brittany Murphy) a makeover. When Tai becomes more popular than she is, Cher realizes that her disapproving ex-stepbrother (Paul Rudd) was right about how misguided she was -- and falls for him.'],
    trailer : ['https://youtu.be/Mgjwq1ZzdPQ']
},

{
    name: 'Lady Bird',
    director: 'Greta Gerwig',
    releaseYear: 2017,
    picture: 'ladybird.jpeg',
    genre: ['Comedy', 'Drama'],
    cast: ['Saoirse Ronan', 'Laurie Metcalf', 'Timothée Chalamet'],
    overview: ['"Lady Bird" is a coming-of-age film set in Sacramento in 2002, focusing on the turbulent relationship between a strong-willed teenager named Christine "Lady Bird" McPherson and her mother, Marion. Lady Bird dreams of leaving her hometown and attending a prestigious college on the east coast, while Marion worries about their financial struggles. The film follows Lady Birds final year of high school as she navigates friendships, romantic relationships, and personal growth, ultimately discovering the importance of family, self-acceptance, and the meaning of home.'],
    trailer : ['https://youtu.be/cNi_HC839Wo']
},

{
    name: 'Little Women',
    director: 'Greta Gerwig',
    releaseYear: 2019,
    picture: 'littlewoman.jpeg',
    genre: ['Drama', 'Romance'],
    cast: ['Saoirse Ronan', 'Emma Watson', 'Florence Pugh', 'Timothée Chalamet'],
    overview: ['In the years after the Civil War, Jo March lives in New York and makes her living as a writer, while her sister Amy studies painting in Paris. Amy has a chance encounter with Theodore, a childhood crush who proposed to Jo but was ultimately rejected. Their oldest sibling, Meg, is married to a schoolteacher, while shy sister Beth develops a devastating illness that brings the family back together.'],
    trailer : ['https://youtu.be/AST2-4db4ic']
},

{
    name: 'Selma',
    director: 'Ava DuVernay',
    releaseYear: 2014,
    picture: 'selma.jpeg',
    genre: ['Biography', 'Drama', 'History'],
    cast: ['David Oyelowo', 'Carmen Ejogo', 'Jim France', 'Oprah Winfrey'],
    overview: ['Although the Civil Rights Act of 1964 legally desegregated the South, discrimination was still rampant in certain areas, making it very difficult for Blacks to register to vote. In 1965, an Alabama city became the battleground in the fight for suffrage. Despite violent opposition, Dr. Martin Luther King Jr. (David Oyelowo) and his followers pressed forward on an epic march from Selma to Montgomery, and their efforts culminated with President Lyndon Johnson signing the Voting Rights Act of 1965.'],
    trailer : ['https://youtu.be/x6t7vVTxaic']
},

{
    name: 'The Woman King',
    director: 'Gina Prince-Bythewood',
    releaseYear: 2022,
    picture: 'womanking.jpeg',
    genre: ['Action', 'Drama', 'History'],
    cast: ['Viola Davis', 'Thuso Mbedu', 'Lashana Lynch'],
    overview: ['The Woman King is the remarkable story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen. Inspired by true events, The Woman King follows the emotionally epic journey of General Nanisca (Oscar®-winner Viola Davis) as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.'],
    trailer : ['https://youtu.be/3RDaPV_rJ1Y']
},

{
    name: 'Fleabag',
    director: ['Phoebe Waller-Bridge'],
    releaseYear: 2016,
    picture: 'fleabag.jpeg',
    genre: ['Comedy', 'Drama'],
    cast: ['Phoebe Waller-Bridge', 'Sian Clifford', 'Olivia Colman', 'Jenny Rainsford'],
    overview: ['A dry-witted woman, known only as Fleabag, has no filter as she navigates life and love in London while trying to cope with tragedy. The angry, grief-riddled woman tries to heal while rejecting anyone who tries to help her, but Fleabag continues to keep up her bravado through it all. Comic actress Phoebe Waller-Bridge stars as the titular character on the series, which is based on Waller-Bridges 2013 one-woman show of the same name.'],
    trailer : ['https://youtu.be/Nd3Qlo0qspU']
},

{
    name: 'The Handmaids Tale',
    director: ['Bruce Miller', 'Elisabeth Moss'],
    releaseYear: 2017,
    picture: 'handmaids.jpeg',
    genre: ['Drama', 'Sci-Fi', 'Thriller'],
    cast: ['Elisabeth Moss', 'Yvonne Strahovski', 'Ann Dowd', 'O-T Fagbenle'],
    overview: ['Based on the best-selling novel by Margaret Atwood, this series is set in Gilead, a totalitarian society in what used to be part of the United States. Gilead is ruled by a fundamentalist regime that treats women as property of the state, and is faced with environmental disasters and a plummeting birth rate. In a desperate attempt to repopulate a devastated world, the few remaining fertile women are forced into sexual servitude. One of these women, Offred, is determined to survive the terrifying world she lives in, and find the daughter that was taken from her.'],
    trailer : ['https://youtu.be/81PyH5TH-NQ']
},

{
    name: 'Orange Is The New Black',
    director: 'Jenji Kohan',
    releaseYear: 2013,
    picture: 'orange.jpeg',
    genre: ['Comedy', 'Crime', 'Drama'],
    cast: ['Taylor Schilling', 'Kate Mulgrew', 'Uzo Aduba', 'Danielle Brooks'],
    overview: ['Piper Chapman is a public relations executive with a career and a fiance when her past suddenly catches up to her. In her mid-30s she is sentenced to spend time in a minimum-security womens prison in Connecticut for her association with a drug runner 10 years earlier. This Netflix original series is based on the book of the same title. Forced to trade power suits for prison orange, Chapman makes her way through the corrections system and adjusts to life behind bars, making friends with the many eccentric, unusual and unexpected people she meets.'],
    trailer : ['https://youtu.be/vY0qzXi5oJg']
},

{
    name: 'The Crown',
    director: ['Benjamin Caron', 'Jessica Hobbs'],
    releaseYear: 2016,
    picture: ['thecrown.jpeg'],
    genre: ['Biography', 'Drama', 'History'],
    cast: ['Claire Foy', 'Olivia Colman', 'Imelda Staunton', 'Helena Bonham Carter'],
    overview: ['Netflix-original drama chronicles the life of Queen Elizabeth II from the 1940s to modern times. The series begins with an inside look at the early reign of the queen, who ascended the throne at age 25 after the death of her father, King George VI. As the decades pass, personal intrigues, romances, and political rivalries are revealed that played a big role in events that shaped the later years of the 20th century.'],
    trailer : ['https://youtu.be/JWtnJjn6ng0"']
}
];

const moviesContainer = document.querySelector(".card-collection");

const cardCollection = document.createElement("div");
  cardCollection.classList.add("mainContainer");   

const displayCollection = (
    nameValue, 
    directorValue, 
    releaseYearValue, 
    pictureValue, 
    genreValue, 
    castValue, 
    overviewValue, 
    trailerValue
    ) => {
 
  
//   const header = document.createElement("header");
  
//   const head = document.createElement("div");
//   head.classList.add("head");

//   const mainTitle = document.createElement("h1");
//   mainTitle.classList.add("mainTitle");

//   const description = document.createElement("p");
//   description.classList.add("description");

//   const icone = document.createElement("img");
//   icone.classList.add("icone");
//   icone.setAttribute("src", "movie.jpeg");

  const container1 = document.createElement("div");
  container1.classList.add("container1");

  const movieName = document.createElement("h2");
  movieName.classList.add("movieName");
  movieName.innerHTML = nameValue;

  const director =document.createElement("h5");
  director.classList.add("director");
  director.innerHTML = directorValue;

  const realease = document.createElement("h5");
  realease.classList.add("releaseyear");
  realease.innerHTML = releaseYearValue;

//   const year_director = document.createElement("div")
//   year_director.classList.add("year")

  const movieImg = document.createElement("img");
  movieImg.classList.add("movieImg");
  movieImg.setAttribute("src", pictureValue);

  const genre = document.createElement("nav");
  genre.classList.add("genre");
  genre.innerHTML = genreValue;


  const cast = document.createElement("p");
  cast.classList.add("cast");
  cast.innerHTML = castValue;


  const overview = document.createElement("p");
  overview.classList.add("movieOverview");
  overview.innerHTML = overviewValue;

  const trailer = document.createElement("a");
  trailer.classList.add("trailer");
  trailer.setAttribute("href", trailerValue);


// Append

moviesContainer.appendChild(cardCollection);
// cardCollection.appendChild(header);
// header.appendChild(head);
// head.appendChild(mainTitle);
// head.appendChild(description);
// header.appendChild(icone);

cardCollection.appendChild(container1);
container1.appendChild(movieName);
container1.appendChild(director);
container1.appendChild(realease);
container1.appendChild(movieImg);
container1.appendChild(genre);
container1.appendChild(cast);
container1.appendChild(overview);
container1.appendChild(trailer);

};

const generateMovieCollection = () => {
    collection.forEach((film) => {
            displayCollection(
                film.name,
                film.director,
                film.releaseYear,
                film.picture,
                film.genre,
                film.cast,
                film.overview,
                film.trailer
            );
        });
};

generateMovieCollection ();
