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
import Divider from '@material-ui/core/Divider';

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
import moneyvault from "assets/img/moneyvault.png";
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
	  		<GridContainer justify="center">
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <h3 className={classes.title}>How It Works</h3>
              </GridItem>
            </GridContainer>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
		<div className={classes.container2}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  </GridItem>
			</GridContainer>
		</div>
          <div className={classes.container2}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  <div className={classes.textWrapper}>
				<div className={classes.name}>
				Much like any traditional exchange, rates are determined by a marketplace of buyers & sellers (floating & fixed side swaps).
				</div>
				<div>{" "}</div>
				<div className={classes.name}>
				Users can enter limit orders at a given rate, or market orders to take the best rate currently available.
				</div>
			   </div>
				</GridItem>
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
				<div className={classes.imgcontainer}>
				<img src={exchange} alt="..." className={imageClasses} />
				</div>
			  </GridItem>
			</GridContainer>
			</div>
		<Divider />
		<div className={classes.container2}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  <div className={classes.textWrapper}>
				<div className={classes.name}>
				For every swap, there is a fixed, and floating side.
				</div>
				<div>{" "}</div>
				<div className={classes.name}>
				In this example, Alice wants a 1 year, fixed 5% rate, and has $1000 in principal, whereas Bob wants a leveraged floating position.
				</div>
			  </div>
			  </GridItem>
			</GridContainer>
			</div>
		<Divider />
		  <div className={classes.container2}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  <div className={classes.textWrapper}>
				<div className={classes.name}>
				Once their order has been accepted, Bob has agreed to back this fixed rate with $50.
				</div>
				<div>{" "}</div>
				<div className={classes.name}>
				Both users funds are then pooled together in the DefiHedge smart contract until the term completes.
				</div>
			   </div>
				</GridItem>
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
				<div className={classes.imgcontainer}>
				<img src={moneyvault} alt="..." className={imageClasses} />
				</div>
			  </GridItem>
			</GridContainer>
			</div>
		<Divider />
		<div className={classes.container2}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  </GridItem>
			</GridContainer>
		</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
