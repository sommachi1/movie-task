import "./moviecard.css";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import herocard1 from '../images/Video1.png'
import herocard2 from "../images/Video2.png";
import herocard3 from "../images/Video3.png";
type Movie = {
  id:number;
  img: string;

};

const Exclusive = () => {
  //   const [selected, setSelected] = useState(null);
  const [position, setPosition] = useState(0);
  const visibleSlides = 5;
  const slideWidth = 390; // px

  const movies: Movie[] = [
    {
      id: 1,
      img: herocard1,
     
    },
    {
      id: 2,
      img: herocard2,
     
    },
    {
      id: 3,
      img: herocard3,
     
    },
   
    {
      id: 1,
      img: herocard1,
      
    },
    {
      id: 2,
      img: herocard2,
      
    },
    {
      id: 3,
      img: herocard3,
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
                <img src={movie.img}  className="movie-image1" />
               
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => moveSlide(2)} className="My_button"><MdOutlineArrowForwardIos size={30}/></button>
      </div>
    </section>
  );
};

export default Exclusive;