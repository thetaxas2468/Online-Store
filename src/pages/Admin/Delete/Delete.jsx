import "./Delete.css"
import 'bootstrap/dist/css/bootstrap.css';
import ContactUs from "../../../components/ContactUs/ContactUs";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OpenClose from "../../../components/OpenClose/OpenClose";
function Delete(){

    const [QR,setQR]=useState("");


    const changeQR = (e)=>{
        setQR(e.target.value)
    }
    const btnClicked=()=>{
        if( QR === "" ){
            alert("Please fill all the fields")
            return;
        }

        axios.get(`http://localhost:3002/items/delete-item?QR=${QR}`).then((res)=>{
            res=parseInt(res.data);
            if(res>0){
                alert("done");
            }
            else{
                alert("failed")
            }
        }).catch((err)=>alert("Failed please put correct info"))
    }
    return(
        <div className="delete">
            <OpenClose/>
            {<div><Link to="/" className="links btn btn-primary">Go to home page to view items</Link>
            <Link to="/update" className="links btn btn-primary">Update an item by QR Code</Link>
            <Link to="/delete" className="links btn btn-primary">Delete an item by QR Code</Link>
            <Link to="/create" className="links btn btn-primary">Add an item by QR Code</Link></div>}
            <form className="forms mt-5">
                <div className="form-group">
                    <h1 className="mb-4">QR</h1>
                    <input type="text" className="form-control mb-4" placeholder="QR CODE" onChange={(e)=>changeQR(e)}/>
                </div>
            </form>
            <button className="btn btn-primary p-4" onClick={()=>btnClicked()}>Submit Item</button>
            <ContactUs></ContactUs>
        </div>
    );
}



export default Delete;