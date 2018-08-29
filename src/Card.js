import React from 'react';
import './Card.css';

const Card = props => {
  let style = {};
  if (props.showing) {
    style.backgroundColor = props.backgroundColor;
  }
  return (
    <div onClick={props.onClick} className="card-container" style={style} />
  );
};

export default Card;
