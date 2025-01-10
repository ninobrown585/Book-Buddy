import { useState } from "react"
// import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Stack, Button, Paper, TextField, Typography, Link } from "@mui/material";
import {  useLoginMutation } from "../store/api";

const Login = ({setToken}) => {
  
  const [login] = useLoginMutation();
  const navigate = useNavigate();


 
  const [type, setType] = useState("login");
  // form fields

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 




  const handleSubmit = async (event) => {

      event.preventDefault();

      if (type === "login") {
          await login({ email, password });
          navigate("/account")
      }

  }

    return(
      <Paper elevation={6} sx={{ width: "35%", padding: 4, margin: "14px auto" }}>
      <form onSubmit={handleSubmit}>
          <Stack direction="column">
              <Typography
                  variant="h5"
                  sx={{ textAlign: "center" }}
              >
                  {/* {type === "login"} */}
              </Typography>
              <TextField
                  label="Email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  sx={{ margin: "8px 0" }}
              />

              <TextField
                  label="Password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  sx={{ margin: "8px 0" }}
                  type="password"
              />
              
          </Stack>
          <Button
              variant="contained" color="secondary"
              size="small"
              sx={{ margin: "8px 0", width: "35%" }}
              type="submit"
              onClick={handleSubmit}
          >
              {/* {type === "login"} */} Login
          </Button>
          
          <Button
              variant="contained" color="error"
              size="small"
              sx={{ margin: "8px 0", width: "70%" }}
              type="submit"
              onClick={() => {
                
                navigate('/register')}}
          >
              {/* {type === "login"} */} Register
          </Button>
          {/* {type === "login"
              ? (
                  <Typography>Need to create an account?{" "}
                      <Link href="#" onClick={() => setType("register")}>
                          Register</Link>
                  </Typography>
              ) : (
                  <Typography>Already have an account?{" "}
                      <Link href="#" onClick={() => setType("login")}>
                          Log In</Link>
                  </Typography>
              )
          } */}
      </form>
  </Paper>
    )

}

export default Login