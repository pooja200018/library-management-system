import { Link } from "react-router-dom";
import "../styles/adminNavbar.css";

const AdminNavbar = () => {
  return (
    <div className="adminnavbar">
      <div className="logo">
        <h1>AdminPortal</h1>
      </div>
      <div className="nav">
        <ul>
            <li>
                <Link to="/admin/" className="z" >Dashboard</Link>
            </li>
          <li>
            <Link to="/admin/addbooks" className="a">Add Books</Link>
          </li>
          <li>
            <Link to="/admin/addusers" className="b">Add User</Link>
          </li>
          <li>
            <Link to="/admin/booklist" className="c">Book List</Link>
          </li>
          <li>
            <Link to="/admin/userlist" className="d">User List</Link>
          </li>
          <li>
            <Link to="/" className="e">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;
