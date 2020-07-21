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
    textWrapper4: {
	  marginTop: "20px",
	  paddingLeft: "100px"
  },
    textWrapper5: {
	  marginTop: "-5px",
	  transform: "translate(35px,0px)",
	  marginLeft: "Auto",
	  marginRight: "Auto"
  },
    textWrapper6: {
	  marginTop: "20px",
	  paddingRight: "100px"
  },
    textWrapper7: {
	  marginTop: "20%",
	  paddingRight: "100px"
  },
      textWrapper8: {
	  marginTop: "12.5%",
	  paddingLeft: "100px"
  },
  container2: {
	  ...container,
	  marginTop: "40px",
	  marginBottom: "40px"
  },
  container3: {
	  paddingRight: "0px",
	  paddingLeft: "15px",
	  marginRight: "auto",
	  marginLeft: "auto",
	  marginTop: "40px",
	  marginBottom: "40px",
	  maxWidth: "1140px"
  },
  container4: {
	  paddingRight: "0px",
	  paddingLeft: "0px",
	  marginRight: "auto",
	  marginLeft: "auto",
	  marginTop: "0px",
	  marginBottom: "0px",
	  maxWidth: "650px"
  },
  imgcontainer: {
	  width: "200px",
	  height: "200px",
	  marginLeft: "25.5%"
  },
  imgcontainer2: {
	  width: "200px",
	  height: "200px",
	  marginLeft: "25.5%",
	  marginRight: "50px"
  },
  imgcontainer3: {
	  width: "200px",
	  height: "200px",
	  marginLeft: "auto",
	  marginRight: "auto"
  },
  img: {
	  width: "100%",
      height: "auto",
	  borderRadius: "15%",
	  boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
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
	color: "black",
	fontFamily: '"Geneva", "Tahoma", "Verdana", sans-serif',
  },
  name2: {
    marginTop: "20px",
	marginBottom: "20px",
	color: "black",
	fontFamily: '"Geneva", "Tahoma", "Verdana", sans-serif',
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
	backgroundColor: "#f2f3f4",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    color: "#3C4858",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    display: "inline-block",
    position: "relative",
    textDecoration: "none",
	transform: "translate(0px,-150px)",
	color: "#FFFFFF",
	fontSize: "40px"
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
	marginTop: "10px",
	marginBottom: "10px"
  },
  containerMargin: {
	  marginTop: "25px",
	  marginBottom: "25px"
  }
};

export default profilePageStyle;
