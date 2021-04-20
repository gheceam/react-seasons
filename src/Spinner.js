import React from "react";

const Spinner = (props) => {
  return (
    <div className="spinner ui active dimmer">
      <div class="ui massive text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading....",
};

export default Spinner;
