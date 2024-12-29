/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";
import axios from "axios";
// import useNavigate from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";


export default function Register() {
    const [form, setForm] = useState ({ email: "", password: ""});
    // const navigate = useNavigate();
    const [registerUser] = useRegisterMutation();

    const change = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const submit = async (e) => {
        e.preventDefault();
        try{
            const response = await registerUser(form).unwrap();
            console.log(response);
            // Navigate("/users");
        }catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form onSubmit={submit}>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}