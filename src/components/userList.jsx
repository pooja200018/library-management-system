import { useState,useEffect } from "react";
import '../styles/userList.css';

const UserList = () => {

    let [user,setUser] =useState([])

useEffect(()=>{
    let fectData = async() =>{
        let response = await fetch("http://localhost:2001/users")
        let datas = await response.json()
        setUser(datas)      //updating
    }
    fectData()
},[])

let Delete =(id,name)=>{
    setUser(user.filter(x => x.id !== id))
        alert(`${name} has been deleted`)
}


    return ( 
        <div className="userlist">
            <h1>User List: {user.length}</h1>
            <div className="usersection">
                {user.map(user=>(
                    <div className="userhn">
                        
                        <h2>UserName : {user.name}</h2>
                        <h3>Age : {user.age}</h3>
                        <p>Phone No. : {user.phoneNumber}</p>
                        <p>Email : {user.email}</p>

                        <button onClick={()=>Delete(user.id,user.name)} className="btnd">Delete</button>
                    </div>
                ))
                }
                
            </div>
        </div>
     );
}
 
export default UserList;