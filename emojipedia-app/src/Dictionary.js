import React from "react";

const Dictionary = (props) => {
  return (
    <div className="term" key={props.id}>
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
};

export default Dictionary;
