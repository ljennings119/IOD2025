import React from "react";

const BlackPanther = () => {
  return (
    <section
      id="blackpanther"
      className="wrapper bg-img"
      style={{ backgroundImage: "url('/src/assets/images/banner4.jpg')" }}
    >
      <div className="inner">
        <article className="box">
          <header>
            <h2>Black Panther</h2>
          </header>
          <div className="content">
            <p>
              A black panther isn’t a separate species but a term for big cats
              with black coats, usually leopards in Asia and Africa or jaguars in
              the Americas that have a genetic condition called melanism. This
              causes excess dark pigment, giving their fur a nearly black
              appearance, though faint spots or rosettes can often still be seen
              in bright light. Black panthers are powerful, stealthy predators
              that hunt mainly at night, using their dark coloration as
              camouflage. They live in forests, jungles, and swamps and are
              admired for their strength, agility, and mystery.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlackPanther;
