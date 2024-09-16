import "./index.css";

const CustomButton = ({ label, handleClick, btnStyle }) => {
  return (
    <div>
      <button className="custom-btn" style={btnStyle} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
