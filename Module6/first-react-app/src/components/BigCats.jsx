import { useState } from "react";
import cats from "../data/cats.js";
import SingleCat from "./SingleCat.jsx";
import AddCatForm from "./AddCatForm.jsx";

export default function BigCats() {
  const [catList, setCatList] = useState(cats);

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
