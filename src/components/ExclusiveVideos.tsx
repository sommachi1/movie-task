import "./Exclusive.css";
import { IoIosArrowForward } from "react-icons/io";

const Exclusive = () => {
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
          <img src="../../public/images/video1.png" alt="Stranger Things" />
        </div>

        <div>
          <img src="../../public/images/video2.png" alt="Stranger Things" />
        </div>

        

        <div>
          <img src="../../public/images/video3.png" alt="Stranger Things" />
          <div className="movie-info">
           </div>
        </div>
      </div>
      <div>
        <button>Right</button>
      </div>
    </section>

    
  );
};
export default Exclusive;