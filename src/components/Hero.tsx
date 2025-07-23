import { useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../images/Menu.png";
import { CiSearch } from "react-icons/ci";
import { FaRegPlayCircle } from "react-icons/fa";
import logo from "../images/movixlogo.png"; // Make sure to add your logo image
import tomamto from "../images/tomato.png";
import imdp from '../images/imdb.png';

export default function HeroWithNav() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      {/* Navbar  */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="MovieApp Logo" className="logo-img" />
          <span className="logo-text">MovieApp</span>
        </div>

        <div className="searchiie">
          <div className="search-container">
            <input
              type="text"
              placeholder="What do you want to watch? "
              className="search-input"
            />
            <CiSearch className="search-icon" />
          </div>
        </div>

        <div className="menu-container">
          <p>Hi, Favour</p>
          <img src={Menu} alt="Menu" />
        </div>
      </nav>

      {/* Hero Section*/}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            John Wick 3 : <br></br>Parabellum
          </h1>

          <div className="features-container">
            <div className="feature-item">
              <img src={imdp} alt="imdp" />
              <span className="feature-text">86.0 / 100</span>
            </div>

            <div className="feature-item">
              <img src={tomamto} alt="tomato" />
              <span className="feature-text">97%</span>
            </div>
          </div>

          <p className="hero-description">
            John Wick is on the run after killing a member<br></br> of the
            international assassins' guild, and with <br></br>a $14 million
            price tag on his head, he <br></br>is the target of hit men and
            women everywhere.
          </p>

          <button
            className="trailer-button"
            onClick={() => navigate("/")}
          >
            <FaRegPlayCircle />
            <span>WATCH TRAILER</span>
          </button>
        </div>
      </section>
    </div>
  );
}
