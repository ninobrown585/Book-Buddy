/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const change = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/register", {
        email: form.email,
        password: form.password,
      });

      // const response = await fetch("http://localhost:3000/api/register", {
      //     method: "Post",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: form.email,
      //       password: form.password,
      //     }),
      //   });
      //   const data = await response.json();

      console.log(data);
      localStorage.setItem("token", data.token);
      navigate("/users");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={change}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="submit" className="btn btn-primary">
            <a href="http://localhost:5173/register">Signup</a>         
        </button>
      </form>
      
    </div>
  );
}