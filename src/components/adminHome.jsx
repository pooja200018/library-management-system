import {Routes,Route} from "react-router-dom"
import AdminNavbar from "./adminNavbar";
import AdminDashboard from "./adminDashboard";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddBooks from "./addBooks";
import AddUsers from "./addUsers";


const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>} />
                <Route path='/booklist' element={<BookList/>}/>
                <Route path='/userlist' element={<UserList/>}/>
                <Route path="/bookList/:id" element={<ReadBook/>} />
                <Route path='/addbooks' element={<AddBooks/>} />
                <Route path='/addusers' element={<AddUsers/>} />
            </Routes>
        </div>
     );
}
 
export default AdminHome;