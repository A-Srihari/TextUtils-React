import "./App.css";
import About, { toggleStyle } from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import React, { use, useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a1c21";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#282c34";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };


  

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtilsProject"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert}></Alert>
        <div
          className="container"
          style={{ width: "90%", margin: "auto", padding: "20px" }}
        >
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} /> */}
          {/* </Routes> */}
        <TextForm mode={mode} showAlert={showAlert} />
          
        </div>

      {/* </Router> */}
    </>
  );
}

export default App;
