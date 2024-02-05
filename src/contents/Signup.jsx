import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../assets/account.png";
import "../styles/Signup.scss";
import { Register } from "../utils/HttpService";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (ele) => {
    ele.preventDefault();
    try {
      const response = await Register("User/", {
        firstName,
        lastName,
        email,
        password,
      });
      if(response){
        navigate("/signin")
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleNavigate = ()=>{
    navigate("/signin")
  }

  return (
    <>
      <div className="box-signup">
        <div className="left-box">
          <Typography variant="h5" className="signup-Fundo" gutterBottom>
            Fundo
          </Typography>
          <Typography variant="h6" gutterBottom>
            Create your Fundo Account
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                className="input1"
                required
                id="outlined-required"
                label="First Name"
                onChange={(ele) => {
                  setFirstName(ele.target.value);
                }}
              />

              <TextField
                className="input1"
                required
                id="outlined-required"
                label="Last Name"
                onChange={(ele) => {
                  setLastName(ele.target.value);
                }}
              />
            </div>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "52ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                className="long-input1"
                label="Email"
                onChange={(ele) => {
                  setEmail(ele.target.value);
                }}
              />
              <Typography variant="caption" display="block" gutterBottom>
                You can use letters, numbers & periods
              </Typography>
            </div>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "52ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                type="password"
                className="long-input1"
                label="Password"
                onChange={(ele) => {
                  setPassword(ele.target.value);
                }}
              />
              <Typography variant="caption" display="block" gutterBottom>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </Typography>
            </div>
          </Box>
          <br></br>
          <br></br>
          <br></br>
          <Stack spacing={13} direction="row">
            <Button className="button" variant="text" onClick={handleNavigate}>
              Sign in Instead
            </Button>
            <Button className="button" variant="contained" onClick={handleSubmit}>
              Register
            </Button>
          </Stack>
        </div>
        <div className="right-box">
          <img src={logo} className="logo" alt="logo" />
          <Typography variant="h5" className="text" gutterBottom>
            One account. All of Fundo working for you
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Signup;
