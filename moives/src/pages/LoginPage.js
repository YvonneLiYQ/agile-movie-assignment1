import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Spinner from "../components/spinner";

import { login } from "../api/tmdb-api";

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const confirm = async () => {
    setIsLoading(true);
    let res = await login(userName, password);
    if(res){
      alert("success")
      navigate("/");
      
    }else{
      alert("You must provide a username and password.");
    }
    setIsLoading(false);
    console.log("res", res);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.

  return (
    <>
      <h1>
        <center>Please login to continue</center>
      </h1>
      <center>
        <input
          id="username"
          style={{
            width: 200,
            padding: 10,
            border: "1px solid #eee",
            borderRadius: 5,
          }}
          placeholder="user name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </center>
      <br />
      <center>
        <input
          id="password"
          style={{
            width: 200,
            padding: 10,
            border: "1px solid #eee",
            borderRadius: 5,
          }}
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </center>
      <br />
      {/* Login web form  */}

      <center>
        <button
          style={{
            backgroundColor: "#7576ff",
            border: "none",
            padding: "10px 20px",
            color: "#fff",
            width: "200px",
            borderRadius: 10,
            cursor: "pointer",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
          onClick={confirm}
          id="login-button"
        >
          {isLoading &&  <Spinner />}
         
          <span style={{marginLeft:10}}>Log in</span>
        </button>
      </center>
    </>
  );
};

export default LoginPage;
