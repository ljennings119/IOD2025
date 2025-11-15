import cats from "../data/cats.js";
import SingleCat from "./SingleCat.jsx";

export default function BigCats() {
  return (
    <div style={styles.wrapper}>
      {cats.map(cat => (
        <SingleCat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
        />
      ))}
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
};
