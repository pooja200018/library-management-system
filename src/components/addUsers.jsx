import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {

    let navigate = useNavigate()

    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [email,setEmail] = useState("")
    let [phoneNumber,setphoneNumber] = useState("")


    let handleSubmit = (e) =>{
        e.preventDefault();
        //data to be posted
        let userdata ={name,age,email,phoneNumber}

        //posting to server
        fetch('http://localhost:2001/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userdata)
        })
        alert('added user successfully')

        navigate('/admin/userlist')
    }
    

    return ( 
        <div className="addusers">
            <h1>Add new User</h1>
            <div className="form" onSubmit={handleSubmit}>
                <form action="">
                    <div className="name">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
                    </div>
                    <div className="age">
                        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} min='1'  placeholder="Enter age" />
                    </div>
                    <div className="phonenumber">
                        <input type="tel" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} minLength='10' maxLength='10' placeholder="Enter phonenumber" />
                    </div>
                    <div className="email">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email_id"/>
                    </div>

                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUsers;