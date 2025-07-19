import "./moviecard.css";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import herocard1 from '../../public/images/herocard1.png'
import herocard2 from "../../public/images/herocard2.png";
import herocard3 from "../../public/images/herocard3.png";
import herocard4 from "../../public/images/herocard4.png";
import imdb from "../../public/images/imdb.png";
import Favorite from '../../public/images/Favorite.png'
type Movie = {
  id: number;
  img: string;
  year: string;
  title: string;
  ratingImg: string;
  friut: string;
  genres: string;
};

const Card = () => {
  //   const [selected, setSelected] = useState(null);
  const [position, setPosition] = useState(0);
  const visibleSlides = 5;
  const slideWidth = 390; // px

  const movies: Movie[] = [
    {
      id: 1,
      img: herocard1,
      year: "USA, 2016 - Current",
      title: "Stranger Things",
      ratingImg: imdb,
      friut: "tomato",
      genres: "Action, Adventure, Horror",
    },
    {
      id: 2,
      img: herocard2,
      year: "USA, 2005",
      title: "Batman Begins",
      ratingImg: imdb,
      friut: "tomato",
      genres: "Action, Adventure",
    },
    {
      id: 3,
      img: herocard3,
      year: "USA, 2018",
      title: "Spider-Man : Into The Spider Verse",
      ratingImg: imdb,
      friut: "tomato",
      genres: "Animation, Action, Adventure",
    },
    {
      id: 4,
      img: herocard4,
      year: "USA, 2017",
      title: "Dunkirk",
      ratingImg: imdb,
      friut: "tomato",
      genres: "Action, Drama, History",
    },
    {
      id: 1,
      img: herocard1,
      year: "USA, 2016 - Current",
      title: "Stranger Things",
      ratingImg: imdb,
      friut: "tomato",
      genres: "Action, Adventure, Horror",
    },
    {
      id: 2,
      img: herocard2,
      year: "USA, 2005",
      title: "Batman Begins",
      ratingImg: imdb,
      friut: "tomato",
      genres: "Action, Adventure",
    },
    {
      id: 3,
      img: herocard3,
      year: "USA, 2018",
      title: "Spider-Man : Into The Spider Verse",
      ratingImg: imdb,
      friut: "tomato",
      genres: "Animation, Action, Adventure",
    },
    {
      id: 4,
      img: herocard4,
      year: "USA, 2017",
      title: "Dunkirk",
      ratingImg: imdb,
      friut: "tomato",
      genres: "Action, Drama, History",
    },
  ];
  const maxPosition = movies.length - visibleSlides;
  const moveSlide = (direction: number) => {
    let newPosition = position + direction;
    if (newPosition < 0) newPosition = 0;
    if (newPosition > maxPosition) newPosition = maxPosition;
    setPosition(newPosition);
  };

  return (
    <section>
      <div className="The_header">
        <h1>Featured Movie</h1>
        <div className="the_link">
          <a href="#">See More </a>
        </div>
      </div>
      <div className="Movie_box">
        <button onClick={() => moveSlide(-2)} className="My_button"><MdOutlineArrowBackIosNew size={30}/></button>

        <div className="movie-list-wrapper">
          <div
            className="movie-list"
            style={{ transform: `translateX(-${position * slideWidth}px)` }}

          >
            {movies.map((movie) => (
              <div key={movie.id} className="Movie-card">
                <img src={movie.img} alt={movie.title} className="movie-image1" />
                <img src={Favorite} alt="like" className="like" />
                <div className="mymovie-info">
                  <p className="my_year">{movie.year}</p>
                  <h3 className="my_titlehead">{movie.title}</h3>
                  <div className="ratings">
                    <div className="imdb">
                      <img src={movie.ratingImg} alt="logo" />
                      <p>840/100</p>
                      <div className="my_tomato">
                        <p>
                          🍅<span>97%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="movies_genres">{movie.genres}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => moveSlide(2)} className="My_button"><MdOutlineArrowForwardIos size={30}/></button>
      </div>
    </section>
  );
};

export default Card;