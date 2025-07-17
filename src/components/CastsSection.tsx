import "./Casts.css";
import { IoIosArrowForward } from "react-icons/io";

const Casts = () => {
  return (
<section>
      <div className="exl_headers">
        <h1>Exclusive Videoes</h1>
        <div className="spanie_link">
          <a href="#">
            <span className="see"> See More</span>
            <span className="spanie">
              <IoIosArrowForward />
            </span>
          </a>
        </div>
      </div>

      <div className="exl_box">
        <div>
          {/* <button>Left</button> */}
        </div>
        <div className="exl-i">
          <img src="../../public/images/cast1.png" alt="Stranger Things" />
          <div className="movie-info">
            <h3>Keanu Reeves</h3>
          </div>
        </div>

        <div>
          <img src="../../public/images/cast2.png" alt="Stranger Things" />
          <div className="movie-info">
            <h3>Ryan Reynolds</h3>
          </div>
        </div>

         <div>
          <img src="../../public/images/cast2.png" alt="Stranger Things" />
          <div className="movie-info">
            <h3>Ryan Reynolds</h3>  
          </div>
        </div>

        

        <div>
          <img src="../../public/images/cast3.png" alt="Stranger Things" />
          <div className="movie-info">
            <h3>Timothée Chalamet</h3>
           </div>
        </div>
      </div>
      <div>
        <button>Right</button>
      </div>
    </section>

    
  );
};
export default Casts;