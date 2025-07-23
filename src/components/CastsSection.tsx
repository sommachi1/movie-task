import "./arrival.css";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import cast1 from '../images/cast1.png'
import cast2 from "../images/cast2.png";
import cast3 from "../images/cast3.png";
import cast4 from "../images/cast4.png";

type Movie = {
  id: number;
  img: string;
  title: string;
};

const Casts = () => {
  //   const [selected, setSelected] = useState(null);
  const [position, setPosition] = useState(0);
  const visibleSlides = 5;
  const slideWidth = 390; // px

  const movies: Movie[] = [
    {
      id: 1,
      img: cast1,
      title: "Dune",
    },
    {
      id: 2,
      img: cast2,
      title: "No Time To Die",
    },
    {
      id: 3,
      img: cast3,
      
      title: "Shang-Chi and the Legend ",
      
    },
    {
      id: 4,
      img: cast4,
      
      title: "Don't Breathe 2",
     
    },
    {
      id: 1,
      img: cast1,
      
      title: "Dune",
      
    },
    {
      id: 2,
      img: cast2,
      
      title: "No Time To Die",
      
    },
    {
      id: 3,
      img: cast3,
      
      title: "Shang-Chi and the Legend ",
     
    },
    {
      id: 4,
      img: cast4,
      
      title: "Don't Breathe 2",
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
      <div className="headings">
        <h1>Featured Casts</h1>
        <div className="the_links">
          <a href="#">See More </a>
        </div>
      </div>
      <div className="Moviess_box">
        <button onClick={() => moveSlide(-2)} className="My_button"><MdOutlineArrowBackIosNew size={30}/></button>

        <div className="moviess-list-wrapper">
          <div
            className="moviess-list"
            style={{ transform: `translateX(-${position * slideWidth}px)` }}

          >
            {movies.map((movie) => (
              <div key={movie.id} className="Moviess-card">
                <img src={movie.img} alt={movie.title} className="movie-image1" />
          
                <div className="mymoviess-info">
                 
                  <h3 className="my_titlehead">{movie.title}</h3>
                  
                  
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

export default Casts;