import "./Admin.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Openclosed from "../../components/OpenClose/OpenClose"
import { useState } from "react";

const  Admin = ()=>{
    // this should be in env
    const adminPassword = "admin"
    const [realAdmin,setrealAdmin]=useState(false);
    const [password,setPassword]=useState("");

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const btnClicked =()=>{
        if(password === adminPassword){
            setrealAdmin(true);
        }
        else{
            alert("Wrong Password")
        }
    }
    return(
        <div className="admin">
            
            <Openclosed/>
            {realAdmin && <div><Link to="/" className="links btn btn-primary">Go to home page to view items</Link>
            <Link to="/update" className="links btn btn-primary">Update an item by QR Code</Link>
            <Link to="/delete" className="links btn btn-primary">Delete an item by QR Code</Link>
            <Link to="/create" className="links btn btn-primary">Add an item by QR Code</Link></div>}
            {!realAdmin && <div className="d-flex justify-content-center"><label className="label label-primary"><h4>Admin Password:</h4></label>
            <input className="inputAdmin" type="password" onChange={(e)=>handlePassword(e)}></input>
            <button className="btn btn-primary submitbutton" onClick={()=>btnClicked()}>Submit</button></div>}
        </div>
    );
}



export default Admin;