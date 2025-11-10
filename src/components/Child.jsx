import React, { memo } from "react";

const Child = ({ name }) => {
  console.log("Child component");
  console.log(name);

  return <div>{name.name}</div>;
};

export default memo(Child);
