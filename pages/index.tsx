import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

    <div className='container'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="form" style={{
        position: 'absolute', 
        left: '50%', 
        top: '30%',
        transform: 'translate(-50%, -50%)'
    }}>
        <label><b>Username:</b></label>
        <TextField sx={{ m: 2 }} helperText="Please enter your name" id="demo-helper-text-misaligned" label="Name" value={name} onChange={handleChange} />
        <Button sx={{ m: 2, p: 1.8 }} variant="outlined" onClick={addNewUser}>Add</Button>
      </div>
    </div>
  );
}





