import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CoolFacts() {
  const [fact, setFact] = useState("");
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const animals = [
    "dog", "cat", "panda", "fox", "bird", "koala", "kangaroo", "raccoon", "red_panda"
  ];

  const filteredAnimals = animals.filter(a => 
    a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchFact = async (selectedAnimal) => {
    setAnimal(selectedAnimal);
    setLoading(true);
    
    try {
      const res = await fetch(`https://some-random-api.com/animal/${selectedAnimal}`);
      const data = await res.json();
      
      setFact(data.fact || "Wildlife is full of surprises!");
      setImageUrl(data.image || "");
    } catch (err) {
      console.error("Fetch error:", err);
      setFact("Oops! Could not load a fact right now.");
      setImageUrl("");
    }
    setLoading(false);
  };

  const shareToFeed = async () => {
    if (!fact || loading) return;
    
    setSharing(true);
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("title", `Cool ${animal.charAt(0).toUpperCase() + animal.slice(1).replace('_', ' ')} Fact!`);
      formData.append("description", fact);
      
      // If there's an image, download it and include it
      if (imageUrl) {
        try {
          const imageResponse = await fetch(imageUrl);
          const imageBlob = await imageResponse.blob();
          formData.append("media", imageBlob, `${animal}.jpg`);
        } catch (err) {
          console.error("Failed to fetch image:", err);
          // Continue without image if fetch fails
        }
      }

      await axios.post(
        "http://localhost:5000/api/posts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Fact shared to your Wildlife Feed! 🎉");
      if (window.confirm("View your post on the feed?")) {
        navigate("/posts");
      }
    } catch (err) {
      console.error("Share error:", err);
      alert("Failed to share. Please try again.");
    } finally {
      setSharing(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #53c1fc 0%, #3da5dc 100%)",
      padding: "80px 1rem 2rem"
    }}>
      <div style={{
        maxWidth: "700px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          <h1 style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}>
            Discover Wildlife Facts
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1rem",
            marginBottom: "1rem"
          }}>
            Click any animal to learn amazing facts!
          </p>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search animals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "0.75rem 1rem",
              borderRadius: "25px",
              border: "2px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.9)",
              fontSize: "1rem",
              outline: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          />
        </div>

        {/* Animal Selection Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.5rem",
          marginBottom: "1.5rem",
          maxHeight: "250px",
          overflowY: "auto",
          padding: "0.75rem",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          {filteredAnimals.map((a) => (
            <button
              key={a}
              onClick={() => fetchFact(a)}
              style={{
                padding: "0.75rem",
                borderRadius: "8px",
                border: a === animal ? "2px solid #fff" : "1px solid rgba(255,255,255,0.2)",
                background: a === animal 
                  ? "rgba(255,255,255,0.3)" 
                  : "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                cursor: "pointer",
                fontSize: "1.1rem",
                fontWeight: a === animal ? "700" : "500",
                transition: "all 0.2s",
                transform: a === animal ? "scale(1.05)" : "scale(1)",
                boxShadow: a === animal 
                  ? "0 4px 12px rgba(0,0,0,0.2)" 
                  : "none",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.background = "rgba(255,255,255,0.25)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = a === animal ? "scale(1.05)" : "scale(1)";
                e.target.style.background = a === animal 
                  ? "rgba(255,255,255,0.3)" 
                  : "rgba(255,255,255,0.15)";
              }}
            >
              {a.replace('_', ' ')}
            </button>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <p style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "1rem",
            marginBottom: "1rem"
          }}>
            No animals found. Try a different search!
          </p>
        )}

        {/* Fact Card */}
        {animal ? (
          <div style={{
            background: "rgba(255,255,255,0.95)",
            borderRadius: "16px",
            padding: "1.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            marginBottom: "1.5rem"
          }}>
            {/* Animal Name Header */}
            <h2 style={{
              color: "#53c1fc",
              fontSize: "1.5rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "1rem",
              textTransform: "capitalize"
            }}>
              {animal.replace('_', ' ')}
            </h2>

            {/* Animal Image */}
            {imageUrl && !loading && (
              <div style={{
                marginBottom: "1rem",
                borderRadius: "12px",
                overflow: "hidden",
                maxHeight: "300px",
                display: "flex",
                justifyContent: "center",
                background: "#f0f0f0"
              }}>
                <img
                  src={imageUrl}
                  alt={animal}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "300px",
                    objectFit: "cover"
                  }}
                />
              </div>
            )}

            {/* Fact Text */}
            <div style={{
              minHeight: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              background: "#f9f9f9",
              borderRadius: "10px",
              border: "2px solid #53c1fc"
            }}>
              <p style={{
                color: "#333",
                fontSize: "1rem",
                lineHeight: "1.6",
                margin: 0,
                textAlign: "center",
                fontWeight: "500"
              }}>
                {loading ? "Loading an amazing fact..." : fact}
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: "flex",
              gap: "0.75rem",
              marginTop: "1rem",
              flexWrap: "wrap"
            }}>
              <button
                onClick={() => fetchFact(animal)}
                disabled={loading}
                style={{
                  flex: 1,
                  minWidth: "150px",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  border: "none",
                  background: loading ? "#ccc" : "#53c1fc",
                  color: "#fff",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 12px rgba(83, 193, 252, 0.4)"
                }}
                onMouseOver={(e) => {
                  if (!loading) {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 16px rgba(83, 193, 252, 0.6)";
                  }
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 12px rgba(83, 193, 252, 0.4)";
                }}
              >
                New Fact
              </button>

              <button
                onClick={shareToFeed}
                disabled={loading || sharing || !fact}
                style={{
                  flex: 1,
                  minWidth: "150px",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  border: "none",
                  background: (loading || sharing || !fact) ? "#ccc" : "#10b981",
                  color: "#fff",
                  cursor: (loading || sharing || !fact) ? "not-allowed" : "pointer",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.4)"
                }}
                onMouseOver={(e) => {
                  if (!loading && !sharing && fact) {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 16px rgba(16, 185, 129, 0.6)";
                  }
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.4)";
                }}
              >
                {sharing ? "Sharing..." : "Share to Feed"}
              </button>
            </div>
          </div>
        ) : (
          <div style={{
            background: "rgba(255,255,255,0.95)",
            borderRadius: "20px",
            padding: "3rem 2rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            marginBottom: "1.5rem",
            textAlign: "center"
          }}>
            <h2 style={{
              color: "#53c1fc",
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "1rem"
            }}>
              Select an Animal
            </h2>
            <p style={{
              color: "#666",
              fontSize: "1.1rem",
              lineHeight: "1.6"
            }}>
              Choose any animal from the list above to discover amazing facts and see beautiful photos!
            </p>
          </div>
        )}

        {/* Back Button */}
        <button
          onClick={() => navigate("/posts")}
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: "12px",
            border: "2px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "all 0.3s"
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255,255,255,0.25)";
            e.target.style.borderColor = "rgba(255,255,255,0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.borderColor = "rgba(255,255,255,0.3)";
          }}
        >
          Back to Feed
        </button>
      </div>
    </div>
  );
}