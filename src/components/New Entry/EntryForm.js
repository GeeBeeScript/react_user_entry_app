import React, { useState } from "react";

import "./EntryForm.css";
import ErrorModal from "../popups/ErrorModal";

const EntryForm = (props) => {
  const [userDetails, setUserDetails] = useState({ name: "", age: ""});
  const [error, setError] = useState({ isError: false, errorMessage: "" });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setError({ isError: false, errorMessage: "" });
  
    if (userDetails.name.trim() === "" || userDetails.age.trim() === "") {
      setError({ isError: true, errorMessage: "Invalid input" })
      return 
    }

    if (+userDetails.age.trim() < 1) {
      setError({ isError: true, errorMessage: "Invalid age" })
      return 
    }

    setError({ isError: false, errorMessage: "" })
    props.liftState(userDetails)
    setUserDetails({name: "", age: ""})
  };

  const addUserName = (event) => {
    setUserDetails((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const addUserAge = (event) => {
    setUserDetails((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };

  const showModalHandler = () => {
    setError({});
  };

  return (
    <div className="entry-form__con">
      <form onSubmit={onSubmitHandler}>
        <div className="con">
          <label>Username</label>
          <input value={userDetails.name} type="text" onChange={addUserName} />
        </div>
        <div className="con">
          <label>Age</label>
          <input value={userDetails.age} type="number" onChange={addUserAge} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error.isError && (
        <ErrorModal
          showModal={showModalHandler}
          message={error.errorMessage}
        />
      )}
    </div>
  );
};

export default EntryForm;
