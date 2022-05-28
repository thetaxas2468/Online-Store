import "./Create.css"
import 'bootstrap/dist/css/bootstrap.css';
import ContactUs from "../../../components/ContactUs/ContactUs";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OpenClose from "../../../components/OpenClose/OpenClose";
function Create(){
    const [name,setName]=useState("");
    const [value,setValue]=useState(null);
    const [QR,setQR]=useState("");
    const [desc,setDesc]=useState("");
    

    const changeName = (e)=>{
        setName(e.target.value)
    }
    const changeValue = (e)=>{
        setValue(e.target.value)
    }
    const changeQR = (e)=>{
        setQR(e.target.value)
    }
    const changeDesc = (e)=>{
        setDesc(e.target.value)
    }
    const btnClicked=()=>{
        if(value === null || value === "" || QR === "" || name === "" || desc === ""){
            alert("Please fill all the fields")
            return;
        }

        axios.get(`http://localhost:3002/items/add-item?name=${name}&value=${value}&QR=${QR}&desc=${desc}`).then((res)=>{
            if(res.data===true){alert("Done")}
            else{alert("failed")}
        }).catch((err)=>alert("Failed please put correct info"))
    }
    return(
        <div className="create">
            <OpenClose/>
            {<div><Link to="/" className="links btn btn-primary">Go to home page to view items</Link>
            <Link to="/update" className="links btn btn-primary">Update an item by QR Code</Link>
            <Link to="/delete" className="links btn btn-primary">Delete an item by QR Code</Link>
            <Link to="/create" className="links btn btn-primary">Add an item by QR Code</Link></div>}
            <form className="forms mt-5">
                <div className="form-group">
                    <h1 className="mb-4">Item Name</h1>
                    <input type="text" className="form-control mb-4" placeholder="Kinder" onChange={(e)=>changeName(e)}/>
                </div>
                <div className="form-group">
                    <h1 className="mb-4">Value</h1>
                    <input type="number" className="form-control mb-4" placeholder="Price" onChange={(e)=>changeValue(e)}/>
                </div>
                <div className="form-group">
                    <h1 className="mb-4">QR</h1>
                    <input type="text" className="form-control mb-4" placeholder="QR CODE" onChange={(e)=>changeQR(e)}/>
                </div>
                <div className="form-group pb-5">
                    <h1 className="mb-4">Description</h1>
                    <textarea className="form-control mb-4" placeholder="Desc" rows="3" onChange={(e)=>changeDesc(e)}/>
                </div>
            </form>
            <button className="btn btn-primary p-4" onClick={()=>btnClicked()}>Submit Item</button>
            <ContactUs></ContactUs>
        </div>
    );
}



export default Create;