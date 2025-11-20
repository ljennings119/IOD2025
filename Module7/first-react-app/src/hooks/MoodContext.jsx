import { createContext, useState } from "react";

export const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [mood, setMood] = useState("😄");

  const changeMood = () => {
    const options = ["😄", "🤔", "😴", "😡", "🤩", "🥺"];
    const random = Math.floor(Math.random() * options.length);
    setMood(options[random]);
  };

  return (
    <MoodContext.Provider value={{ mood, changeMood }}>
      {children}
    </MoodContext.Provider>
  );
}
