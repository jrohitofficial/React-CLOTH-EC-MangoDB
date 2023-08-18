import React from "react";
import { Link } from "react-router-dom";
import logoo from "../Assets/trendy.png";


const Footer = () => {
  return (
    <div
      className="Footer flex space__around pz__15"
      style={{ borderTop: ".3px solid rgba(21,21,21,0.5)" }}
    >
      {/* Footer 1st part */}
      <div className="footer1st">
        <img
          src={logoo}
          style={{
            width: "100%",

            objectFit: "contain",
            cursor: "pointer",
          }}
        />
        <div className="location flex py__10">
         
          <h6> Suruchi Marga Kathmandu,Nepal</h6>
        </div>

        

       

       

       
      </div>

    </div>
     
  );
};

export default Footer;
