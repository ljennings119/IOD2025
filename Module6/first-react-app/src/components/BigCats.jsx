import { useState } from "react";
import cats from "../data/cats.js";
import SingleCat from "./SingleCat.jsx";
import AddCatForm from "./AddCatForm.jsx";

export default function BigCats() {
  const [catList, setCatList] = useState(cats);

 // Sort A–Z
  function sortAZ() {
    const sorted = [...catList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCatList(sorted);
  }

  // Sort Z–A
  function sortZA() {
    const sorted = [...catList].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setCatList(sorted);
  }

  // Filter Panthera family only
  function filterPanthera() {
    const filtered = cats.filter(cat =>
      cat.latinName.startsWith("Panthera")
    );
    setCatList(filtered);
  }

  // Reset list
  function resetList() {
    setCatList(cats);
  }

  // Add new cat
  function addCat(newCat) {
    setCatList([...catList, newCat]);
  }

  // Delete cat
  function deleteCat(id) {
    const updated = catList.filter(cat => cat.id !== id);
    setCatList(updated);
  }

  return (
    <div>
      <AddCatForm onAddCat={addCat} />

    <div style={styles.buttonRow}>
        <button onClick={sortAZ}>Sort A–Z</button>
        <button onClick={sortZA}>Sort Z–A</button>
        <button onClick={filterPanthera}>Panthera Only</button>
        <button onClick={resetList}>Reset</button>
      </div>

      <div style={styles.wrapper}>
        {catList.map(cat => (
          <div key={cat.id}>
            <SingleCat
              name={cat.name}
              latinName={cat.latinName}
              image={cat.image}
            />
            <button
              onClick={() => deleteCat(cat.id)}
              style={{ marginTop: "5px", display: "block" }}
            >
              Delete
            </button>
          </div>
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
  }
};
