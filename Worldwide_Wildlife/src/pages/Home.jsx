import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/images/banner.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.jpg";

export default function Home() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetch("https://some-random-api.ml/facts/dog")
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
      .catch(() => setFact("Wildlife is full of surprises!"));
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section
        id="banner"
        className="bg-img"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="inner">
          <header>
            <h1>
              Explore <span>Wildlife</span>
            </h1>
          </header>
        </div>
      </section>

      {/* Axolotls Section */}
      <section
        id="one"
        className="wrapper post bg-img"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="inner">
          <article className="box">
            <header>
              <h2>Axolotls</h2>
            </header>
            <div className="alert alert-info">
              Did you know? Axolotls can regenerate their hearts and spinal cords!
            </div>
            <footer>
              <Link to="/axolotls" className="button alt">Learn More</Link>
            </footer>
          </article>
        </div>
      </section>

      {/* Platypus Section */}
      <section
        id="two"
        className="wrapper post bg-img"
        style={{ backgroundImage: `url(${banner5})` }}
      >
        <div className="inner">
          <article className="box">
            <header><h2>Platypus</h2></header>
            <div className="alert alert-info">
              Fun fact: Male platypuses have venomous spurs!
            </div>
            <footer>
              <Link to="/platypus" className="button alt">Learn More</Link>
            </footer>
          </article>
        </div>
      </section>

      {/* Black Panther Section */}
      <section
        id="three"
        className="wrapper post bg-img"
        style={{ backgroundImage: `url(${banner4})` }}
      >
        <div className="inner">
          <article className="box">
            <header><h2>Black Panther</h2></header>
            <div className="alert alert-info">
              Black panthers are leopards or jaguars with dark pigmentation!
            </div>
            <footer>
              <Link to="/blackpanther" className="button alt">Learn More</Link>
            </footer>
          </article>
        </div>
      </section>

      {/* Secretary Bird Section */}
      <section
        id="four"
        className="wrapper post bg-img"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <div className="inner">
          <article className="box">
            <header><h2>Secretary Bird</h2></header>
            <div className="alert alert-info">
              They hunt snakes by stomping them with precision!
            </div>
            <footer>
              <Link to="/secretarybird" className="button alt">Learn More</Link>
            </footer>
          </article>
        </div>
      </section>

      {/* Wildlife Fact Section */}
      <section className="wrapper post bg-img" style={{ backgroundImage: `url(${banner1})` }}>
        <div className="inner">
          <article className="box">
            <header>
              <h2>Wildlife Fun Facts</h2>
            </header>
            <Link
              to="/cool-facts"
              style={{
                display: "block",
                textDecoration: "none",
                fontWeight: "600",
                borderRadius: "10px",
                fontSize: "1.15rem",
                backgroundColor: "#53c1fc",
                border: "2px solid #53c1fc",
                color: "#fff",
                textAlign: "center",
                padding: "1.5rem 2rem",
                marginTop: "1rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(83, 193, 252, 0.3)"
              }}
            >
              {fact}
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
