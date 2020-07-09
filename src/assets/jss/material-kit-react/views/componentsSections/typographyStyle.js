import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const typographyStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  space50: {
    height: "50px",
    display: "block"
  },
  title2: {
    marginTop: "60px",
    minHeight: "32px",
    textDecoration: "none",
	position: "relative",
	marginLeft: "10%",
  },
    title1: {
    marginTop: "60px",
    minHeight: "32px",
    textDecoration: "none",
	position: "relative",
	marginLeft: "38%",
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  },
  comment: {
	marginLeft: "0px",
	marginTop: "30px",
	marginBottom: "60px",
    textDecoration: "none",
	position: "relative",
	width: "250px",
	textAlign: "center"
  },
  
  ...imagesStyles
};

export default typographyStyle;
