import React, { useRef, useState } from "react";
import MetaData from "./MetaData";
import "./Support.css";
import emailjs from "@emailjs/browser";
import BottomTab from "./BottomTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Support = ({ history }) => {
  const [done, setDone] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i9fazbj",
        "template_svq1ake",
        formRef.current,
        "_a_6zq4t6OyBCpqTb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <MetaData title="Support" />
      <div
        className="support"
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <h2
          className="support__heading"
          style={{
            textAlign: "center",
          }}
        >
          Are you in trouble
        </h2>
        <h2
          className="support__heading"
          style={{
            textAlign: "center",
          }}
        >
          Report us your problems
        </h2>
        <div>
          <form
            style={{
              width: "400px",
              margin: "auto",
              padding: "20px 0",
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
              name="user__name"
            />
            <input
              type="text"
              placeholder="Reporting Subject"
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
              name="user__subject"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
            />
            <textarea
              cols="30"
              rows="5"
              required
              placeholder="Write message here"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
              }}
              name="user__message"
            ></textarea>
            <button
              style={{
                border: "none",
                cursor: "pointer",
                width: "100%",
                background: "#3BB77E",
                height: "40px",
                margin: "10px 0",
                color: "#fff",
                fontSize: "1.2vmax",
              }}
            >
              Submit
            </button>
            {done &&
              toast.success(
                "Your Report is submittes you get the feedback"
              )}
          </form>
          <div className="animation"></div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BottomTab />
    </>
  );
};

export default Support;
