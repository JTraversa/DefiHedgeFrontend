import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image from "assets/img/faces/avatar.jpg";

import DollarSwap from "assets/img/DollarSwap.png"
import InterestBubbles from "assets/img/InterestBubbles.png"
import MoneyGlass from "assets/img/MoneyGlass.png"
import MoneyUmbrella from "assets/img/MoneyUmbrella.png"
import MoneyVault from "assets/img/MoneyVault.png"
import PiggybankHands from "assets/img/PiggybankHands.png"
import RateBalance from "assets/img/RateBalance.png"
import RateGrowth from "assets/img/RateGrowthSmall.png"
import WateringMoney from "assets/img/WateringMoneySmall.png"
import HandshakeContract from "assets/img/HandshakeContract.jpg"

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div>
          <div className={classes.title1}>
            <h2>Fixed-Rate Lending</h2>
          </div>
          <br />
          <GridContainer
		  justify="center"
		  spacing={3}>
            <GridItem xs={12} sm={2}>
              <img
                src={MoneyGlass}
                alt="..."
                className={
					                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
				  }
              />
			  <div className={classes.comment}>Protect Yourself From Rate Volatility</div>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={HandshakeContract}
                alt="..."
                className={                 
				  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
				  }
              />
			  <div className={classes.comment}>Lend Knowing Collateralized Contracts Gauruntee No Default Risk</div>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={PiggybankHands}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
			  <div className={classes.comment}>Avoid Centralized Risks & Maintain Custody Of Your Funds</div>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
		<div>
          <div className={classes.title2}>
            <h2>Interest-Rate Swaps</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <img
                src={DollarSwap}
                alt="..."
                className={                  
				  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
				  }
              />
			  <div className={classes.comment}>Leverage Your Capital Using Rate Derivatives</div>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={RateGrowth}
                alt="..."
                className={
				  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
				  
				}
              />
		      <div className={classes.comment}>Increase Your Exposure To High Rates</div>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={InterestBubbles}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
			  <div className={classes.comment}>Speculate On Rate Growth & Volatility</div>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
