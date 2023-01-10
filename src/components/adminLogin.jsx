import '../styles/adminLogin.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let navigate = useNavigate()

    let login = (p) =>{
        p.preventDefault();
        let data = {email,password}    //data from input

        //to validate the admin inputs
        if (email== "admin@gmail.com" && password == 1234) {
            navigate('/admin/')
        } else {
            alert('Invalid credentials')
        }
    }

  return (
    <div className="adminlogin">
      <div className="formcontainer">
        <h1>Login as Admin</h1>
        <div className="form_input">
          <form  onSubmit={login}>
            <div className="email">
              <input type="email" required value={email} onChange={(e) => setemail(e.target.value)} placeholder="✉  enter email" />
            </div>
            <div className="password">
              <input type="password" required value={password} onChange={(p)=>setpassword(p.target.value)} placeholder="➳  enter password" />
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
