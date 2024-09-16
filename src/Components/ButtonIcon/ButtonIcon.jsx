import React from "react";

const ButtonIcon = () => {
  return (
    <div>
      <button
        className="bg-pink-400 rounded-sm"
        type="submit"
        onClick={() => console.log("thum")}
      >
        click me
      </button>
    </div>
  );
};

export default ButtonIcon;
