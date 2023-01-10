import '../styles/landingPage.css'
import { Link } from "react-router-dom";


const LandingPage = () =>{
    return (
        <div className="landingpage">
            <div className="selectLoginType">
                <h1>Library Management System</h1>
                <div className="img1">
                    <img src="./images/administrator.png" alt="admin" />
                </div>
                <div className="img2">
                <img src="./images/team.png" alt="user" />
                </div>
                <Link to='/adminlogin' className='admin'>Admin Login</Link>
                <Link to='/userlogin' className='user'>User Login</Link>
            </div>
        </div>
    )
}

export default LandingPage;