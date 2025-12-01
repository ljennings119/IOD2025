import React from "react";

const SecretaryBird = () => {
  return (
    <section
      id="secretarybird"
      className="wrapper bg-img"
      style={{ backgroundImage: "url('/src/assets/images/banner3.jpg')" }}
    >
      <div className="inner">
        <article className="box">
          <header>
            <h2>Secretary Bird</h2>
          </header>
          <div className="content">
            <p>
              The secretary bird (Sagittarius serpentarius) is a large,
              long-legged bird of prey native to the grasslands and savannas of
              sub-Saharan Africa. Unlike most raptors, it hunts on foot, using
              powerful kicks to kill snakes, insects, and small mammals. It stands
              up to 4 feet (1.2 meters) tall, with long legs, broad wings, and a
              distinctive crest of black feathers behind its head. Despite its
              size, it can fly well and builds large stick nests in trees. Known
              for its elegance and snake-hunting skill, the secretary bird is a
              national symbol of South Africa.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SecretaryBird;
