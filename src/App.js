import "./App.css";
import ButtonIcon from "./Components/ButtonIcon/ButtonIcon";
import CustomButton from "./Components/CustomButton";
import LoginSignup from "./Components/LoginSignup/LoginSignup";

function App() {
  const handleClickGoogleBtn = () => {
    console.log("You Clicked Google Btn!");
  };

  const googleBtnStyle = {
    background: "blue",
    fontSize: "2rem",
    borderRadius: "6px",
  };
  return (
    <div className="App">
      {/* <LoginSignup />
      <ButtonIcon /> */}
      <CustomButton
        label="Signin with google"
        handleClick={handleClickGoogleBtn}
        btnStyle={googleBtnStyle}
      />
      <CustomButton label="Signin with microsoft" />
    </div>
  );
}

export default App;
