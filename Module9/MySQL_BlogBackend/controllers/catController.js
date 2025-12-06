const axios = require("axios");

// GET random cat fact
exports.getCatFact = async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    res.json(response.data);
  } catch (err) {
    console.error("Cat Fact Error:", err);
    res.status(500).json({ message: "Failed to fetch cat fact" });
  }
};

// GET cat breeds using query params
exports.getCatBreeds = async (req, res) => {
  try {
    const limit = req.query.limit || 5; // default 5 breeds
    const response = await axios.get(`https://catfact.ninja/breeds?limit=${limit}`);

    res.json({
      count: response.data.data.length,
      breeds: response.data.data
    });
  } catch (err) {
    console.error("Breeds Error:", err);
    res.status(500).json({ message: "Failed to fetch cat breeds" });
  }
};

// GET breed detail using route param
exports.getBreedDetail = async (req, res) => {
  try {
    const breedName = req.params.name.toLowerCase();

    const response = await axios.get("https://catfact.ninja/breeds?limit=200");
    const match = response.data.data.find(
      (b) => b.breed.toLowerCase() === breedName
    );

    if (!match) {
      return res.status(404).json({ message: "Breed not found" });
    }

    res.json(match);
  } catch (err) {
    console.error("Breed Detail Error:", err);
    res.status(500).json({ message: "Failed to fetch breed details" });
  }
};
