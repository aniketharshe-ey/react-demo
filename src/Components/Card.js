import React from "react";
import { Image } from "react-bootstrap";
import CardRow from "./CardRow";
import PropTypes from "prop-types";

const Card = ({ image, row1, row2, row3 }) => {
  return (
    <div className="flex-item">
      {image && (
        <Image src={image.src} alt={image.alt} className="imageStyle" />
      )}
      <CardRow row={row1} />
      <CardRow row={row2} />
      <CardRow row={row3} />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.object,
  row1: PropTypes.object,
  row2: PropTypes.object,
  row3: PropTypes.object,
};

export default Card;
