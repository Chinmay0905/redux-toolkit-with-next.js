import Header from '../components/Header';
import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Navbar from '../components/Navbar'

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
      <Navbar />
      <Header />
      <label>New User:</label>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" value={name} onChange={handleChange}/>
      <Button variant="outlined" onClick={addNewUser}>Add</Button>
    </div>
  );
}





