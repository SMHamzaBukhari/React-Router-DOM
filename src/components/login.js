import React from "react";
import './loginsignup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";


function Login(){
    return(
        <> 
        <div className="outer-container">
       <div className="inner-container">
           <div className="loginTop">
               <div className="custom"></div>
               <Typography variant="h4" color="black">Login</Typography>
           </div>
           <div className="container">
           <div className="inp">
           <TextField
           color="warning"
            id="standard-basic" 
            label="Username or Email" 
            variant="standard" />
           <TextField
           color="warning"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
           </div>
           <div className="forget typography">  <Typography color="gray" variant="caption">Forgotten your password?</Typography></div>
           <div className="button">
           <Button className="btn" variant="contained" href="/dashboard">Login</Button>
           </div>
           <div className="loginBottom typography">
               <Typography color="gray" variant="caption">Don't have an account? <a href="/signup">Sign Up</a></Typography>
               
               </div>
               </div>
       </div>
       </div>
        </>
    )
}
export default Login;