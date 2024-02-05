import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/Signin.scss";
import { Login } from "../utils/HttpService";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleSubmit = async (ele) => {
    ele.preventDefault();
    try {
      await Login("User/signin  ", {
        email,
        password,
      });
      navigate("/dashboard/notes");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <>
      <div className="main">
        <div className="box-signin">
          <div className="info-signin">
            <h6 className="f-text">Fundo</h6>
            <h6 className="s-text">Sign in</h6>
            <p className="u-text">Use your Fundoo Account</p>
          </div>

          <div>
            <TextField
              required
              className="input-signin"
              label="Email"
              onChange={(ele) => {
                setEmail(ele.target.value);
              }}
            />
          </div>

          <div>
            <TextField
              required
              type="password"
              className="input-signin"
              label="Password"
              onChange={(ele) => {
                setPassword(ele.target.value);
              }}
            />
            <Link to=""> Forgot Password</Link>
          </div>
            
          <div className="button-div">
            <Button
              className="button"
              variant="text"
              onClick={handleNavigate}
            >
              Create Account
            </Button>
            <Button
              className="button"
              variant="contained"
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
