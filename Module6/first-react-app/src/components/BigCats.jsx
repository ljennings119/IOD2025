import { useState } from "react";
import cats from "../data/cats.js";
import SingleCat from "./SingleCat.jsx";

export default function BigCats() {
  // state to hold the current list being displayed
  const [catList, setCatList] = useState(cats);

  // sort A–Z
  function sortAZ() {
    const sorted = [...catList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCatList(sorted);
  }

  // reverse Z–A
  function sortReverse() {
    const reversed = [...catList].slice().reverse();
    setCatList(reversed);
  }

  // filter only Panthera cats
function filterPanthera() {
  const filtered = cats.filter(cat =>
    cat.latinName.startsWith("Panthera")
  );
  setCatList(filtered);
}


  // reset to original list
  function resetList() {
    setCatList(cats);
  }

  return (
    <div>
      {/* Buttons */}
      <div style={styles.buttons}>
        <button onClick={sortAZ}>A–Z</button>
        <button onClick={sortReverse}>Reverse</button>
        <button onClick={filterPanthera}>Panthera Only</button>
        <button onClick={resetList}>Reset</button>
      </div>

      {/* Cat display area */}
      <div style={styles.wrapper}>
        {catList.map(cat => (
          <SingleCat
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    padding: "10px 20px",
  },
};
