import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SignupForm from "./screens/SignupForm";
import "./screens/SignupForm.css";

const App = () => {
  return (
    <div className="App">
      <SignupForm />
    </div>
    //   <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/signup"><SignupForm /></Link>
    //         </li>
    //         <li>
    //           <Link to="/singup-fail">Singup Fail</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //   </div>
    // </Router>
  );
};

export default App;
