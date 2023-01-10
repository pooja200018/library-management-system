import '../styles/userLogin.css';

import { useNavigate } from "react-router-dom";

const Userlogin = () => {

    let navigate = useNavigate();

    let login = () =>{
        navigate('/user/')
    }
    return ( 
        <div className="userlogin">
      <div className="formcontainer">
        <h1>Login as User</h1>
        <div className="form_input">
          <form  onSubmit={login}>
            <div className="email">
              <input type="email" required   placeholder="✉  enter email" />
            </div>
            <div className="password">
              <input type="password" required   placeholder="➳  enter password" />
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
     );
}
 
export default Userlogin;