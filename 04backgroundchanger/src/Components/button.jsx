import React from "react";

function Button({ title, backgroundColor, titleColor, onclick }) {
  return (
    <button
      className="shadow-lg rounded-full px-4 py-1"
      style={{
        background: backgroundColor,
        color: titleColor,
      }}
      onClick={() => {
        onclick(backgroundColor);
      }}
    >
      {title}
    </button>
  );
}
export default Button;
