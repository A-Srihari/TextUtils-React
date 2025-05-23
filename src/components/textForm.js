// import React from 'react'
import PropTypes from 'prop-types'
import React, { useState } from "react";
import About from './About';
          
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';


export default function TextForm(props) {
  // * This should always be in the top of the function not outside the function or inside the return
  // * useStates uses array destructuring to get the state and the function to update the state

  const [text, setText] = useState("");

  // ^ function to convert text to uppercase
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    text.length === 0
      ? props.showAlert("Please enter text to convert it to uppercase", "warning")
      : props.showAlert("Text has been converted to uppercase", "success");
  };

  // ^ function to convert text to lowercase
  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    text.length === 0
      ? props.showAlert("Please enter text to convert it to lowercase", "warning")
      : props.showAlert("Text has been converted to lowercase", "success");
  };

  // ^ Function to handle text area change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // ^ Function to copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    text.length === 0
      ? props.showAlert("Please enter text to copy it", "warning")
      : props.showAlert("Text has been copied to clipboard", "success");
    // alert("Text copied to clipboard");
  //   Swal.fire({
  //   icon: 'success',
  //   title: 'Copied!',
  //   text: 'Text has been copied to clipboard',
  //   timer: 2000,
  //   showConfirmButton: false,
  // });
  }; 
  
  // ^ Function to clear text
  const handleClear = () => {
    setText("");
    text.length === 0
      ? props.showAlert("Please enter text to clear it", "warning")
      : props.showAlert("Text has been cleared", "success");
  };

  // ^ Function to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text.length === 0
      ? props.showAlert("Please enter text to remove extra spaces", "warning")
      : props.showAlert("Extra spaces have been removed", "success");
  };
  const styles = {
    color: props.mode === "dark" ? "white" : "#282c34",
    backgroundColor: props.mode === "dark" ? "#282c34" : "white",
    // padding: "10px",
    // borderRadius: "5px",
  };
  return (
    <div>
      <form className="my-3">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Text Area</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={styles}
            placeholder='Enter your text here'
          ></textarea>
        </div>
        
        {/*  Buttons */}
        <div className="btn bg-primary  my-4 text-light me-2" onClick={handleUppercaseClick}>Uppercase text</div>
        <div className="btn bg-info my-4 text-light me-2" onClick={handleLowercaseClick}>Lowercase text</div>
        <div className="btn bg-warning my-4 text-light me-2" onClick={handleCopy}>Copy text</div>
        <div className="btn bg-danger my-4 text-light me-2" onClick={handleClear}>Clear text</div>
        <div className="btn bg-secondary my-4 text-light me-2" onClick={handleExtraSpaces}>Remove extra spaces</div>
      </form>

      <div className="container-fluid my-3 d-flex flex-column align-items-start">
        <h2>Your text summary</h2>
        <p>Your text has {text.trim().split(/\s+/).filter(words=>words.length>0).length} words.</p>
        <p>Your text has {text.length} characters.</p>
        <p>Timw takes to read: {((text.trim().split(/\s+/).filter(words=>words.length>0).length)*0.008*60).toFixed(2) + " seconds"}</p>
        <h2>Preview</h2>
        <p className="border d-flex flex-wrap p-2 align-self-start text-preview">{text===""?"Enter your text in text area to preview it here":text}</p>
      </div>
    </div>
  );
}
