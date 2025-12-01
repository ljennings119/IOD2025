import React from "react";

const Axolotls = () => {
  return (
    <section
      id="axolotl"
      className="wrapper bg-img"
      style={{ backgroundImage: "url('/src/assets/images/banner2.jpg')" }}
    >
      <div className="inner">
        <article className="box">
          <header>
            <h2>Axolotls</h2>
          </header>
          <div className="content">
            <p>
              Axolotls are aquatic salamanders from Mexico known for staying in
              their juvenile form (with external gills) their entire lives. They
              can regenerate limbs and organs, making them a major subject of
              scientific study. Found naturally in Lake Xochimilco, they’re
              critically endangered in the wild but common as pets. They need
              cool, clean water and a carnivorous diet.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Axolotls;
