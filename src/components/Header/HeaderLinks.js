/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import WhitepaperPDF from "assets/pdf/DefiHedge_Whitepaper.pdf";
import DefiHedgeDeck from "assets/pdf/DefiHedge.pdf"
import DefiHedgeDeck2 from "assets/pdf/DefiHedge--Deck.pdf"
import DefiHedgeDeck3 from "assets/pdf/DefiHedge--Deck--2.pdf"
import DefiHedgeDeck4 from "assets/pdf/DefiHedge-Deck.pdf"
import DefiHedgeDeck5 from "assets/pdf/DefiHedge--Deck--3.pdf"
import DefiHedgeDeck6 from "assets/pdf/DefiHedge--Deck--4.pdf"
import WhitepaperPDF2 from "assets/pdf/DefiHedge-Whitepaper-v0.2.0.pdf";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Markets"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Mainnet DEX (Q4 2020)
            </Link>,
			<a
              href="https://defi-hedge-protocol.vercel.app/"
              target="_blank"
              className={classes.dropdownLink}
            >
			Ropsten PoC
			</a>
          ]}
        />
      </ListItem>
	  <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="howitworks" className={classes.dropdownLink}>
              How It Works
            </Link>,
            <Link to="aboutus" className={classes.dropdownLink}>
              About Us
            </Link>,
			<a
              href="https://github.com/JTraversa/DefiHedge-Protocol"
              target="_blank"
              className={classes.dropdownLink}
            >
              Github
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          a href= {WhitepaperPDF2}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Whitepaper
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-github"
          title="Check out our PoC on Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/JTraversa/DefiHedge-Protocol"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
