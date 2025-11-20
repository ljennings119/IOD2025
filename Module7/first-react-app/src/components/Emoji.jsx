import { useState, useContext } from "react";
import { MoodContext } from "../hooks/MoodContext";

export default function Emoji() {
    // your original local state
    const [isHappy, setIsHappy] = useState(true);

    // context state
    const { mood, changeMood } = useContext(MoodContext);

    // original face logic
    const face = isHappy ? "🙂" : "😢";

    function handleClick() {
        setIsHappy(!isHappy);
    }

    return (
        <>
            {/* Your original component */}
            <div className="Emoji componentBox">
                <h3>Local Mood (from useState)</h3>
                <p style={{ fontSize: "3rem" }}>{face}</p>
                <button onClick={handleClick}>Change Local Mood</button>
            </div>

            {/* Context-based emoji component */}
            <div className="componentBox">
                <h3>Global Mood (from Context)</h3>
                <p style={{ fontSize: "3rem" }}>{mood}</p>
                <button onClick={changeMood}>Change Global Mood</button>
            </div>
        </>
    );
}
