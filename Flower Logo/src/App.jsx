import React from "react";

const App = () => {
  const [size, setSize] = useState(15);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const bg = [
    "#FAAA31",
    "#F6E422",
    "#B9D753",
    "#6CBEB0",
    "#79ADDC",
    "#A48DC1",
    "#D388B1",
    "#F37A5D",
  ];

  return (
    <div
      style={{ fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif' }}
      className="grid place-items-center min-h-screen"
    >
      <div
        className="form-group"
        style={{ marginBottom: "2rem", display: "grid", placeItems: "center" }}
      >
        <label style={{ display: "flex", alignItems: "center" }}>
          Size
          <input
            type="range"
            id="slider"
            min="5"
            max="20"
            value={size}
            onChange={handleSizeChange}
          />
        </label>
      </div>
      <div
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          background: "#fff",
          borderRadius: "16.667%",
          display: "grid",
          placeItems: "center",
          position: "relative",
          boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.2)",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <span
              key={i}
              className="petal"
              style={{
                height: "37.5%",
                width: "22.5%",
                borderRadius: "50% / 30%",
                position: "absolute",
                transformOrigin: "center 105%",
                transform: `rotate(${i * 45}deg)`,
                background: bg[i],
                top: "10%",
                mixBlendMode: "multiply",
              }}
            ></span>
          ))}
      </div>
    </div>
  );
};
export default App;
