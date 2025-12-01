import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CoolFacts() {
  const [fact, setFact] = useState("");
  const [animal, setAnimal] = useState("dog");
  const [loading, setLoading] = useState(false);

  const animals = ["dog", "cat", "panda", "fox", "bird", "koala"];

  const fetchFact = async (selectedAnimal = animal) => {
    setLoading(true);
    try {
      const res = await fetch(`https://some-random-api.ml/facts/${selectedAnimal}`);
      const data = await res.json();
      setFact(data.fact || "Wildlife is full of surprises!");
    } catch (err) {
      setFact("Oops! Could not load a fact right now.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="wrapper post bg-img" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?wildlife')" }}>
      <div className="inner">
        <article className="box">
          <header>
            <h2> Cool Wildlife Facts</h2>
            <p>Click an animal below to learn something amazing!</p>
          </header>

          {/* Buttons to pick different animals */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {animals.map((a) => (
              <button
                key={a}
                className={`btn btn-outline-light ${a === animal ? "active" : ""}`}
                onClick={() => {
                  setAnimal(a);
                  fetchFact(a);
                }}
              >
                {a.charAt(0).toUpperCase() + a.slice(1)}
              </button>
            ))}
          </div>

          {/* Fact Display */}
          <div className="alert alert-success" role="alert">
            {loading ? "Loading a wild fact..." : fact}
          </div>

          {/* Button to load a new random fact */}
          <button className="btn btn-info mt-3" onClick={() => fetchFact()}>
             Get Another Fact
          </button>
        </article>
      </div>
    </div>
  );
}
