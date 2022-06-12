import React from "react";
import babyNamesData from "./data/babyNamesData.json";

const names = babyNamesData;

const Names = () => {
  return (
    <div className="App-content container-fluid">
      <div className="row">
        {names.map((name) => {
          if (name.sex === "f") {
            return (
              <ul className="female col-xs-2 m-2 badge rounded-pill fa fa-female">
                {name.name}
              </ul>
            );
          } else {
            return (
              <ul className="male col-xs-2 m-2 badge fa fa-male">
                {name.name}
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Names;
