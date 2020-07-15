import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import exchange from "assets/img/exchange.jpg";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
	classes.img
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="white"
        brand="DefiHedge"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "transparent"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/svgversion.svg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
		    <GridContainer justify="center">
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  <div className={classes.name}>
              <h3 className={classes.title}>How It Works</h3>
              </div>
              </GridItem>
            </GridContainer>
          <div className={classes.container}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
				<div className={classes.name}>
				Much like any traditional exchange, rates are determined by a marketplace of buyers & sellers (floating & fixed sides).
				</div>
				<div>{" "}</div>
				<div className={classes.name}>
				Users can enter limit orders at a given rate, or market orders to take the best rate currently available.
				</div>
				</GridItem>
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
				<div className={classes.imgcontainer}>
				<img src={exchange} alt="..." className={imageClasses} />
				</div>
			  </GridItem>
			</GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
