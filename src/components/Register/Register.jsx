/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";
import axios from "axios";
// import useNavigate from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";


export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [token, setToken] = useState("");
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname: firstName,
              lastname: lastName,
              email: email,
              password: password,
            }),
          }
        );
        const result = await response.json();
        console.log(result);
        sessionStorage.setToken("token", result.token);
        setIsLoggedIn(true);
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <>
        <div className="formBox">
          <h2 id="RegisterHead">Register!</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label id="formLabel">
              Firstname:{""}
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </label>
            <label id="formLabel">
              Lastname:{""}
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </label>
            <label id="formLabel">
              Email:{""}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label id="formLabel">
              Password:{""}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            <button id="signUpButton">Register!</button>
          </form>
        </div>
      </>
    );
  };