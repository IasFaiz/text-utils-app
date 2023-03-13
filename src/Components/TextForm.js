import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const [text, settext] = useState("");
  let textChange = (e) => {
    settext(e.target.value);
  };

  let toUpperCase = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };
  let toLowerCase = () => {
    let newText = text.toLocaleLowerCase();
    settext(newText);
  };

  return (
    <>
      <div>
        <h2 className="my-4">{props.Title}</h2>
        <div className="mb-3">
          <textarea
            id="textt"
            className="form-control"
            onChange={textChange}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <div className="mb-3 bg-light">
          <button
            className="btn btn-outline-primary mx-2 "
            onClick={toUpperCase}
          >
            To Uppercase
          </button>
          <button
            className="btn btn-outline-success mx-2 "
            onClick={toLowerCase}
          >
            To LowerCase
          </button>
        </div>
        <div className="bg">
          <h2 className="my-2">Summary...</h2>
          <h4>
            Words={text.split(" ").length}, & Letters={text.length}
          </h4>
        </div>
      </div>
    </>
  );
}
