import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  textWrapper2: {
	  marginTop: "-20px"
  },
  textWrapper: {
	  marginTop: "20px"
  },
    textWrapper3: {
	  marginTop: "45px"
  },
  container2: {
	  ...container,
	  marginTop: "40px",
	  marginBottom: "40px"
  },
  imgcontainer: {
	  width: "200px",
	  height: "200px",
	  marginLeft: "25.5%"
  },
  img: {
	  width: "100%",
      height: "auto"
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "20px",
	transform: "translate(-10px,0px)",
	color: "black"
  },
  topmargin: {
	  marginTop: "20px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
	backgroundColor: "#c7ced9",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    minHeight: "84px",
    textDecoration: "none",
	transform: "translate(0px,-100px)",
	color: "#FFFFFF"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    textAlign: "center",
	marginTop: "10px"
  },
  containerMargin: {
	  marginTop: "25px",
	  marginBottom: "25px"
  }
};

export default profilePageStyle;
