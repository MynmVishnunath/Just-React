import { useState } from 'react';
import './App.css';
import Movie_Detail from './components/Movie_Details_page/movie_details';
import Description from './components/Movie_Details_page/Description/description';
import Overview from './components/Movie_Details_page/Overview/overview';
import CastList from './components/Movie_Details_page/Cast_List/cast_list';
import { Routes, Route, Link } from 'react-router-dom';
import Movie_List from './components/movie_list_page/movie_list_page';
const movies = [
  {
    movieName: 'Inception',
    director: 'Christopher Nolan',
    productionCompany: 'Warner Bros.',
    releaseDate: { year: 2010, month: 7, day: 16 },
    imdbRating: 8.8,
    description:
      "A thief with the ability to enter people's dreams takes on the ultimate heist: planting an idea into a target’s subconscious.",
    posterImage: 'https://wallpapercave.com/wp/wp11374739.jpg',
    cast: [
      {
        name: 'Leonardo DiCaprio',
        role: 'Dom Cobb',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/e/e5/Leonardo_DiCaprio_2014.jpg',
      },
    ],
    awards: ['Academy Award for Best Cinematography', 'Best Sound Editing'],
    genre: ['Action', 'Sci-Fi', 'Thriller'],
  },
  {
    movieName: 'Parasite',
    director: 'Bong Joon-ho',
    productionCompany: 'Barunson E&A',
    releaseDate: { year: 2019, month: 5, day: 30 },
    imdbRating: 8.5,
    description:
      'A poor family schemes their way into a wealthy household, sparking a twisted and tragic clash of social classes.',
    posterImage: 'https://cms.gameflycdn.com/proxy/gf/boxart/480w/5022411.jpg',
    cast: [
      {
        name: 'Song Kang-ho',
        role: 'Kim Ki-taek',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/6/6a/Song_Kang-ho_2022.jpg',
      },
    ],
    awards: ['Academy Award for Best Picture', "Palme d'Or"],
    genre: ['Drama', 'Thriller'],
  },
  {
    movieName: 'The Grand Budapest Hotel',
    director: 'Wes Anderson',
    productionCompany: 'Fox Searchlight Pictures',
    releaseDate: { year: 2014, month: 3, day: 28 },
    imdbRating: 8.1,
    description:
      'A whimsical tale of a concierge and a young lobby boy who become entangled in murder, inheritance, and high society.',
    posterImage: 'https://wallpaperaccess.com/full/2579063.jpg',
    cast: [
      {
        name: 'Ralph Fiennes',
        role: 'Monsieur Gustave H.',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ralph_Fiennes%2C_2018.jpg',
      },
    ],
    awards: ['Academy Award for Best Production Design', 'Best Costume Design'],
    genre: ['Comedy', 'Drama'],
  },
  {
    movieName: 'Spirited Away',
    director: 'Hayao Miyazaki',
    productionCompany: 'Studio Ghibli',
    releaseDate: { year: 2001, month: 7, day: 20 },
    imdbRating: 8.6,
    description:
      'A young girl becomes trapped in a spirit world and must find her courage to rescue her parents and escape.',
    posterImage: 'https://wallpapercave.com/wp/wp9659752.jpg',
    cast: [
      {
        name: 'Rumi Hiiragi',
        role: 'Chihiro (voice)',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/f/f4/Rumi_Hiiragi.jpg',
      },
    ],
    awards: [
      'Academy Award for Best Animated Feature',
      'Berlin International Film Festival Golden Bear',
    ],
    genre: ['Fantasy', 'Adventure', 'Animation'],
  },
  {
    movieName: 'The Dark Knight',
    director: 'Christopher Nolan',
    productionCompany: 'Warner Bros.',
    releaseDate: { year: 2008, month: 7, day: 18 },
    imdbRating: 9.0,
    description:
      'Batman faces his greatest psychological and physical test yet against the anarchic Joker in Gotham’s darkest hour.',
    posterImage: 'https://wallpapercave.com/wp/wp15069138.webp',
    cast: [
      {
        name: 'Heath Ledger',
        role: 'Joker',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/f/fd/Heath_Ledger.jpg',
      },
    ],
    awards: ['Academy Award for Best Supporting Actor', 'Best Sound Editing'],
    genre: ['Action', 'Crime', 'Drama'],
  },
  {
    movieName: 'Interstellar',
    director: 'Christopher Nolan',
    productionCompany: 'Paramount Pictures',
    releaseDate: { year: 2014, month: 11, day: 7 },
    imdbRating: 8.6,
    description:
      'A team of astronauts travels through a wormhole in search of a new home as Earth nears environmental collapse.',
    posterImage: 'https://wallpapercave.com/wp/wp14859093.jpg',
    cast: [
      {
        name: 'Matthew McConaughey',
        role: 'Cooper',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/0/0e/Matthew_McConaughey_2019.jpg',
      },
    ],
    awards: ['Academy Award for Best Visual Effects'],
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
  },
  {
    movieName: 'Slumdog Millionaire',
    director: 'Danny Boyle',
    productionCompany: 'Celador Films',
    releaseDate: { year: 2008, month: 11, day: 12 },
    imdbRating: 8.0,
    description:
      'A Mumbai teen’s life story unfolds during his run on a game show, leading to accusations of cheating and revelations of hope.',
    posterImage: 'https://wallpapercave.com/wp/wp4120674.jpg',
    cast: [
      {
        name: 'Dev Patel',
        role: 'Jamal Malik',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/1/19/Dev_Patel_2016.jpg',
      },
    ],
    awards: ['Academy Award for Best Picture', 'Best Director'],
    genre: ['Drama', 'Romance'],
  },
  {
    movieName: 'Coco',
    director: 'Lee Unkrich',
    productionCompany: 'Pixar Animation Studios',
    releaseDate: { year: 2017, month: 11, day: 22 },
    imdbRating: 8.4,
    description:
      'A young boy dreams of becoming a musician and discovers his family’s secrets in the vibrant Land of the Dead.',
    posterImage: 'https://wallpapercave.com/wp/wp14911441.webp',
    cast: [
      {
        name: 'Anthony Gonzalez',
        role: 'Miguel (voice)',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/9/98/Anthony_Gonzalez_2017.jpg',
      },
    ],
    awards: ['Academy Award for Best Animated Feature', 'Best Original Song'],
    genre: ['Animation', 'Adventure', 'Family'],
  },
  {
    movieName: 'Dune',
    director: 'Denis Villeneuve',
    productionCompany: 'Legendary Pictures',
    releaseDate: { year: 2021, month: 10, day: 22 },
    imdbRating: 8.0,
    description:
      'Paul Atreides must navigate political conflict and prophecy as he inherits control over the spice-rich desert planet Arrakis.',
    posterImage: 'https://wallpapercave.com/wp/wp15284956.jpg',
    cast: [
      {
        name: 'Timothée Chalamet',
        role: 'Paul Atreides',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/0/01/Timothee_Chalamet_2019.jpg',
      },
    ],
    awards: ['Academy Award for Best Sound', 'Best Cinematography'],
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
  },
  {
    movieName: 'Ford v Ferrari',
    director: 'James Mangold',
    productionCompany: '20th Century Fox',
    releaseDate: { year: 2019, month: 11, day: 15 },
    imdbRating: 8.1,
    description:
      'The story of a team of engineers and drivers building a revolutionary race car to beat Ferrari at Le Mans in 1966.',
    posterImage: 'https://wallpapercave.com/uwp/uwp4136723.jpeg',
    cast: [
      {
        name: 'Christian Bale',
        role: 'Ken Miles',
        actorImage:
          'https://upload.wikimedia.org/wikipedia/commons/4/43/Christian_Bale_2019.jpg',
      },
    ],
    awards: ['Academy Award for Best Editing', 'Best Sound Mixing'],
    genre: ['Action', 'Biography', 'Sport'],
  },
];
function App() {
  const [selectedMovie,setselectedMovie] = useState(movies[0]);
  const array_for_List = movies.map(
    ({ movieName, imdbRating, posterImage, releaseDate },index) => {
      return {
        Index:index,
        movieName,
        imdbRating,
        posterImage,
        releaseDate,
      };
    }
  );

  function cardClick(index){
    setselectedMovie(movies[index]);
  }
  return (
    <Routes>
      <Route path="/" element={<Movie_List movie_data={array_for_List} onClick={cardClick} />} />

      <Route path="/detail" element={<Movie_Detail selectedMovie={selectedMovie}/>}>
        <Route path="overview" index element={<Overview overview={selectedMovie}/>}/>
        <Route path="description" element={<Description description = {selectedMovie.description} />} />
        <Route path="cast" element={<CastList castlist={selectedMovie.cast} />} />
      </Route>
    </Routes>
  );
}

export default App;
