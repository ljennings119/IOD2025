import { useState } from "react";

export default function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // new cat object
    const newCat = {
      id: Date.now(), 
      name,
      latinName,
      image,
    };

    onAddCat(newCat); 
    setName("");
    setLatinName("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit} className="componentBox" style={{marginBottom: "20px"}}>
      <h3>Add a New Big Cat</h3>

      <div>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div>
        <label>Latin Name: </label>
        <input value={latinName} onChange={(e) => setLatinName(e.target.value)} required />
      </div>

      <div>
        <label>Image URL: </label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
      </div>

      <button type="submit">Add Cat</button>
    </form>
  );
}
