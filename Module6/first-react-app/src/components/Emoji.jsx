import { useState } from "react";

function Emoji() {

  const [isHappy, setIsHappy] = useState(true);

  // decides which emoji to show
  const face = isHappy ? "🙂" : "😢";

  // this function shows what happens when button is clicked
  function handleClick() {
    setIsHappy(!isHappy); 
  }

  return (
    <div className="Emoji componentBox">
      <p style={{ fontSize: "3rem" }}>{face}</p>
      <button onClick={handleClick}>Change Mood</button>
    </div>
  );
}

export default Emoji;
