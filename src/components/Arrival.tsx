import "./arrival.css";
import { IoIosArrowForward } from "react-icons/io";

const Arrival = () => {
  return (
    <section>
      <div className="moviecard_headers">
        <h1>New Arrivals</h1>
        <div className="spanie_link">
          <a href="#">
           <span className="see"> See More</span>
            <span className="spanie">
              <IoIosArrowForward />
            </span>
          </a>
        </div>
      </div>

      <div className="Movie_box">
        <div>
          <button>Left</button>
        </div>
        <div>
          <img src="../../public/images/arrival1.png" alt="Stranger Things" />
          <div className="movie-info">
            <p className="year">USA, 2016 - Current</p>
            <h3>Dune</h3>
            <div className="ratings">
              <div className="imdb">
                <img src="../../public/images/imdb.png" alt="" />
                <p>840/100</p>
                 <span className="tomato">🍅 97%</span>
              </div>
            </div>
            <p className="genres">Action, Adventure, Horror</p>
          </div>
        </div>

        <div>
          <img src="../../public/images/arrival2.png" alt="Stranger Things" />
          <div className="movie-info">
            <p className="year">USA, 2016 - Current</p>
            <h3>No Time To Die</h3>
            <div className="ratings">
              <div className="imdb">
                <img src="../../public/images/imdb.png" alt="" />
                <p>840/100</p>
                 <span className="tomato">🍅 97%</span>
              </div>
            </div>
            <p className="genres">Action, Adventure, Horror</p>
          </div>
        </div>

        <div>
          <img src="../../public/images/arrival3.png" alt="Stranger Things" />
          <div className="movie-info">
            <p className="year">USA, 2016 - Current</p>
            <h3>Spider-Man : Into The Spider Verse</h3>
            <div className="ratings">
              <div className="imdb">
                <img src="../../public/images/imdb.png" alt="" />
                <p>840/100</p>
                 <span className="tomato">🍅 97%</span>
              </div>
            </div>
            <p className="genres">Action, Adventure, Horror</p>
          </div>
        </div>

        <div>
          <img src="../../public/images/arrival4.png" alt="Stranger Things" />
          <div className="movie-info">
            <p className="year">USA, 2016 - Current</p>
            <h3>Dunkirk</h3>
            <div className="ratings">
              <div className="imdb">
                <img src="../../public/images/imdb.png" alt="" />
                <p>840/100</p>
                 <span className="tomato">🍅 97%</span>
              </div>
            </div>
            <p className="genres">Action, Adventure, Horror</p>
          </div>
        </div>
      </div>
      <div>
          <button>Right</button>
        </div>
    </section>

   
  );
};

export default Arrival;
