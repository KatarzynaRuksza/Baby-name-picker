import "./App.css";
import React, { useState } from "react";
import Names from "./Names";
import babyNamesData from "./data/babyNamesData.json";

const App = () => {
  const [Value, setValue] = useState(babyNamesData);

  const search = (input) => {
    const insertedName = input.target.value.toLowerCase();
    setValue(
      babyNamesData.filter((name) =>
        name.name.toLowerCase().includes(insertedName)
      )
    );
  };
  return (
    <div>
      <input
        type={"text"}
        onKeyUp={search}
        className="search-box "
        placeholder="Insert baby name you are looking for here..."
      />
      <Names names={Value} />
    </div>
  );
};

export default App;
