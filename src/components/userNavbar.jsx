import { Link } from "react-router-dom";
import '../styles/userNavbar.css';

const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
            <div className="usernavbar">
      <div className="logo">
        <h1>UserPortal</h1>
      </div>
      <div className="nav">
        <ul>
            <li><Link to="/user/" className="z" >Dashboard</Link></li>
            <li><Link to="/user/booklist" className="c">Book List</Link></li>
            <li><Link to="/" className="e">Logout</Link></li>
        </ul>
      </div>
    </div>
    </div>
     );
}
 
export default UserNavbar;