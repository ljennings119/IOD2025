import React from "react";

const Platypus = () => {
  return (
    <section
      id="platypus"
      className="wrapper bg-img"
      style={{ backgroundImage: "url('/src/assets/images/banner5.jpg')" }}
    >
      <div className="inner">
        <article className="box">
          <header>
            <h2>Platypus</h2>
          </header>
          <div className="content">
            <p>
              The platypus is a unique, semi-aquatic mammal native to Australia.
              It’s one of the only mammals that lays eggs instead of giving birth
              to live young. Platypuses have duck-like bills, webbed feet,
              beaver-like tails, and thick waterproof fur. Males have venomous
              spurs on their hind legs, which can deliver a painful sting. They
              hunt underwater using electroreception to detect prey like insects,
              worms, and small crustaceans. Living mostly in freshwater rivers
              and streams, platypuses are shy, nocturnal creatures and an
              important symbol of Australia’s diverse wildlife.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Platypus;
