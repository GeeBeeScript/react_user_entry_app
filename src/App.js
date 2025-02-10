import React, { useState } from "react";

import "./App.css";
import NewEntry from "./components/New Entry/NewEntry";
import Entry from "./components/Entry/Entry";


function App() {
  const initialValue = { name: "Jess", age: "21", id: "0.1" };
  const [allUsers, setAllUsers] = useState([initialValue]);
  console.log(initialValue, allUsers);

  const liftFurtherHandler = (user) => {
    setAllUsers((prevState) => {
      return [...prevState, user];
    });
  };
  
  return (
    <div className="App">
      {/* {console.log("check: " + Boolean(errorStatement.isError))} */}
      <NewEntry liftFurther={liftFurtherHandler} />
      <Entry users={allUsers} />
      {/* {console.log("check: " + errorStatement + errorStatement.isError)} */}
    </div>
  );
}

export default App;
