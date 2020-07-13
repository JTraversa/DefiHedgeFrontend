import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Language from "@material-ui/icons/Language";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Code from "@material-ui/icons/Code";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            As the most liquid instrument in the world, interest-rate swaps are the next natural step in the progression of decentralized finance. 
		  </h5>
		  <h5 className={classes.description}>
			  {" "}
		  </h5>
		  <h5 className={classes.description}>
            Importantly, Rate-swaps foster fixed-rate lending, opening DeFi to a wider use-case while creating a more accessable decentralized financial ecosystem.
          </h5>
		  <h5 className={classes.description}>
			{" "}
		  </h5>
        </GridItem>
      </GridContainer>
      <div>
	  <h2 className={classes.title}>Objectives</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Community"
              description="We would like to maintain a decentralized community through the implementation of a stakeholder based governance system."
              icon={Language}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Safety"
              description="We have designed our collateralized system with paramount importance placed upon the safety of our users funds. In the coming months our code will be thoroughly & publicly audited by a reputable organization."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Open Development"
              description="While we plan to develop the first exchange and user facing interface to the DefiHedge protocol, our goal is to have created an open protocol for others to develop venue's and applications."
              icon={Code}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
