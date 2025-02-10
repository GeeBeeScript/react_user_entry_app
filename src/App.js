import React, { useState } from "react";

import "./App.css";
import NewEntry from "./components/New Entry/NewEntry";
import Entry from "./components/Entry/Entry";


function App() {
  const initialValue = { name: "Jess", age: "21", id: "0.1" };
  const [allUsers, setAllUsers] = useState([initialValue]);

  const liftFurtherHandler = (user) => {
    setAllUsers((prevState) => {
      return [...prevState, user];
    });
  };
  
  return (
    <div className="App">
      <NewEntry liftFurther={liftFurtherHandler} />
      <Entry users={allUsers} />
    </div>
  );
}

export default App;
