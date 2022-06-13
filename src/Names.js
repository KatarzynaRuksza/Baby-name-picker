import React from "react";
//import babyNamesData from "./data/babyNamesData.json";

//const names = babyNamesData;

const Names = (props) => {
  return (
    <div>
      <div className="App-content container-fluid">
        <div className="row">
          {props.names
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((name) => {
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
    </div>
  );
};

export default Names;
