import React from "react";
import './loginsignup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
function Signup(){
    return(
        <> 
        <div className="outer-container signup">
       <div className="inner-container">
           <div className="loginTop">
               <div className="custom"></div>
               <Typography variant="h4" color="black">Sign Up</Typography>
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
           <TextField
           color="warning"
          id="standard-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
           </div>
           <div className="forget typography">  <Typography color="gray" variant="caption">By signing up, you agree to our 
           <strong> <a href="">Terms, Data Policy and Cookie Policy.</a></strong></Typography></div>
           <div className="button">
           <Button className="btn" variant="contained" href="/">Sign Up</Button>
           </div>
           <div className="loginBottom typography">
               <Typography color="gray" variant="caption">Already have an account? <a href="/">Login</a></Typography>
               
               </div>
               </div>
       </div>
       </div>
        </>
    )
}
export default Signup;