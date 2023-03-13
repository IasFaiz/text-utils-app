import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import { Link } from "react-router-dom";
let name = "Faiz";

function App() {
  return (
    <>
      <NavBar text={name} />
      <div className="container my-3">
        <TextForm Title="Enter the Text Here..." />
      </div>
    </>
  );
}

export default App;
