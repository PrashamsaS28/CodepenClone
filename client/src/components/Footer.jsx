import React from "react";

const Footer = () => {
  return (
    <div
      className="card-footer"
      style={{ backgroundColor: "#2C303A", padding: "5px 10px" }}
    >
      <form className="form-inline my-1 my-lg-0">
        <button
          type="button"
          className="btn btn mx-1 text-light"
          style={{
            position: "relative",
            fontSize: "12px",
            margin: "0",
            marginTop: "0px",
            padding: "2px 5px",
            backgroundColor: "#444857",
          }}
        >
          Console
        </button>
        <button
          type="button"
          className="btn btn mx-1 text-light"
          style={{
            position: "relative",
            fontSize: "12px",
            margin: "0",
            padding: "2px 5px",
            backgroundColor: "#444857",
          }}
        >
          Assets
        </button>

        <button
          type="button"
          className="btn btn mx-1 text-light"
          style={{
            position: "relative",
            fontSize: "12px",
            /* fontFamily:'"Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif', */ margin:
              "0",
            padding: "2px 5px",
            backgroundColor: "#444857",
          }}
        >
          Shortcuts
        </button>
      </form>
    </div>
  );
};

export default Footer;
