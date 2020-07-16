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
import MoneyVault from "assets/img/MoneyVault.png";
import Compound from "assets/img/compound.png";
import WateringMoney from "assets/img/WateringMoneySmall.png";
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
          height: 400,
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
			  <div className={classes.textWrapper2}>
				<div className={classes.name}>
				For every swap, there is a fixed, and floating side.
				</div>
				<div>{" "}</div>
				<div className={classes.name}>
				In this example the current market rate is 8%. Alice wants a 1 year, fixed 5% rate, and has $1000 in principal, whereas Bob wants a leveraged floating position.
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
					Once Bob accepts Alice's order, Bob has agreed to back Alice's fixed rate with $50.
				</div>
				<div>{" "}</div>
				<div className={classes.name}>
				Both user's funds are then pooled together in the DefiHedge smart contract until the term completes.
				</div>
			   </div>
				</GridItem>
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
				<div className={classes.imgcontainer}>
				<img src={MoneyVault} alt="..." className={imageClasses} />
				</div>
			  </GridItem>
			</GridContainer>
			</div>
		<Divider />
		<div className={classes.container2}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  <div className={classes.textWrapper3}>
				<div className={classes.name}>
				In the same transaction, the pooled funds are used to mint cTokens on the Compound Protocol in order to earn interest for the duration of the agreement.
				</div>
			   </div>
				</GridItem>
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
				<div className={classes.imgcontainer}>
				<img src={Compound} alt="..." className={imageClasses} />
				</div>
			  </GridItem>
			</GridContainer>
			</div>
		<Divider />
		<div className={classes.container2}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  <div className={classes.textWrapper2}>
				<div className={classes.name}>
				Once the lending term has completed, either party can initiate a return of funds.
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
				Alice is returned her $1000 principal, in addition to the expected $50 (5% yield) Bob had already committed.
				</div>
				<div>{" "}</div>
				<div className={classes.name}>
				Assuming the rate has remained an average of ~8% over the duration, Bob is returned $84, a 68% return on his investment.
				</div>
			   </div>
				</GridItem>
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
				<div className={classes.imgcontainer}>
				<img src={WateringMoney} alt="..." className={imageClasses} />
				</div>
			  </GridItem>
			</GridContainer>
			</div>
		<Divider />
		<Divider />
		<div className={classes.container2}>
			<GridContainer justify="center">
			  <GridItem xs={12} sm={6} className={classes.navWrapper}>
			  <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=iCKwBL27MW8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch Proof of Concept
              </Button>
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
