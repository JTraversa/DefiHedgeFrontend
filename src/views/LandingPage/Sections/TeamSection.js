import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import Julian from "assets/img/TraversaJulian.png";
import team2 from "assets/img/faces/christian.jpg";
import William from "assets/img/WilliamHsieh.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                This Could Be You
                <br />
                <small className={classes.smallTitle}>Front-End Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You have a range of experience with React implementations, prefferably regarding high throughput applications or exchanges.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Julian} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Julian Traversa
                <br />
                <small className={classes.smallTitle}>Founder & Full Stack</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  After graduating Clemson University in 2018 and a brief period as a professional Heroes Of The Storm player, 
				  Julian founded Nescience, a software firm focused on the development of open-source financial tools. At Nescience Julian
				  developed a proprietary order-splitting & market-making algorithm, 
				  as well as full-stack development of Nescience's Rebalancing & Direct Indexing Tool.
				  
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
				  href="https://twitter.com/traversajulian"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
				  href="https://www.linkedin.com/in/juliant94/"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={William} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                William Hsieh
                <br />
                <small className={classes.smallTitle}>Contributor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  William has an impressive range of development experience from healthcare, to cybersecurity, to his current position in defense 
				  as a software developer at The Raytheon Company. After consulting for Julian throughout the development of Nescience Software & Capital,
				  William joined him at ETHDenver where they first created DefiHedge.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
