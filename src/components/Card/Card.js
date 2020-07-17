import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/material-kit-react/components/cardStyle.js";

const useStyles = makeStyles(styles);

export default function Card(props) {
  const classes = useStyles();
  const { className, carousel2, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: carousel,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
	[classes.cardCarousel2]: carousel2,	
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node
};
