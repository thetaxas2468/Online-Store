import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Itemlist from "../../helpers/itemList"
import Openclosed from "../../components/OpenClose/OpenClose"
import Contactus from "../../components/ContactUs/ContactUs"
import "./Home.css"
import {Link} from "react-router-dom";

const Home =()=>{
    const [IsPending,setIsPending]=useState(true);
    const [Items,setItems]=useState([]);


    useEffect(()=>{
        setTimeout(()=>{
            axios.get("http://localhost:3002/items").then((result)=>{
                setItems(result.data);
                setIsPending(false);
            }).catch((err)=>{
                console.log(err)
            })
        },1000)
    },[]);
    console.log("what")
    return (
        <div className="home">
            <Openclosed/>
            
                <div className="container d-flex justify-content-between">
                <Link to="/Signin" className="btn btn-primary active signinsignout">Sign In</Link>
                <Link to="/Signup"  className="btn btn-primary active signinsignout">Sign Up</Link>
            </div>

            <Navbar/>
            {IsPending && <div><h1>Loading...</h1></div>}
            <Itemlist list={Items}/>
            <Contactus/>
        </div>
    );
}

export default Home;