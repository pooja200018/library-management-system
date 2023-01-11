import { Routes,Route } from "react-router-dom";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";
import BookList from "./bookList";
import ReadBook from "./readBook";

const UserHome = () => {


    return ( 
        <div className="userhome">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>} />
                <Route path='/booklist' element={<BookList/>}/>
                <Route path="/bookList/:id" element={<ReadBook/>} />
            </Routes>
        </div>
     );
}
 
export default UserHome;