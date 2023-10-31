import { useState } from "react";
import Button from "./Components/button";
function App() {
  const [color, setColor] = useState("olive");
  const onclickColorButton = (color) => {
    setColor(color);
  };
  const colorsData = [
    { title: "Red", textColor: "#fff" },
    { title: "Green", textColor: "#fff" },
    { title: "Yellow", textColor: "#000" },
    { title: "Gray", textColor: "#fff" },
    { title: "Pink", textColor: "#000" },
    { title: "Black", textColor: "#fff" },
    { title: "White", textColor: "#000" },
    { title: "Lavender", textColor: "#000" },
    { title: "Purple", textColor: "#fff" },
    { title: "Blue", textColor: "#fff" },
    { title: "Olive", textColor: "#fff" },
  ];
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <div
        className="shadow-lg"
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: "90vw",
          marginBottom: 40,
          borderRadius: 30,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {colorsData.map((value) => {
          return (
            <Button
              title={value.title}
              backgroundColor={value.title}
              titleColor={value.textColor}
              onclick={onclickColorButton}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
