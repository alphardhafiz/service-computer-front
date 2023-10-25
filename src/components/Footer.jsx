import React from "react";

function Footer({ children }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              copyright by kelompok 1
          </div>
      </div>
  )
};

var style = {
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  bottom: "0",
  width: "100%",
  backgroundColor:"black",
  color:"white"
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
};

export default Footer;
