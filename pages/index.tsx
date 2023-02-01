import Header from '../components/header';
import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";

export default function Clock() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  
  const addNewUser = () => {
    dispatch(addUser(name));
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Header />
      <label>New User:</label>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={addNewUser}>Add</button>
    </div>
  );
}





