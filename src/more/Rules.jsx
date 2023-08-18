import React from "react";
import "./Rules.css";
import Header from "../component/Home/Header";
import BottomTab from "./BottomTab";
import MetaData from "./MetaData";
import Footer from "./Footer";
// import Footer from "../Footer";

const Rules = () => {
  return (
    <>
      <MetaData title="Rules" />
      <Header />
      <div
        className="rules"
        style={{
          padding: "50px 30px",
          display: "flex",
          width: "95%",
          overflow: "hidden",
        }}
      >
        <ul className="rules">
          
          
        </ul>
      </div>
      <Footer />
      <BottomTab />
    </>
  );
};

export default Rules;
