import { container, title } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  imgcontainer: {
	  transform: "translate(0px,-100px)",
	  marginBottom: "-70px"
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
	fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    display: "inline-block",
    position: "relative",
	transform: "translate(0px, -100px)",
	minHeight: "32px",
	fontSize: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
	marginTop: "-25px"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "1000px",
    margin: "0px 0 0",
	color: "#FFFFFF",
	transform: "translate(0px, -100px)"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
