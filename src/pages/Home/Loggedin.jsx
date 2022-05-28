import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Itemlist from "../../helpers/itemList"
import Openclosed from "../../components/OpenClose/OpenClose"
import Contactus from "../../components/ContactUs/ContactUs"
import Button from "react-bootstrap/Button";
import "./Home.css"


const Home =()=>{
    const [IsPending,setIsPending]=useState(true);
    const [Items,setItems]=useState([]);
    const logout = ()=>{
        window.location.href="/";
    }

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
    return (
        <div className="home">
            <Openclosed/>
            
            <div className="mt-5 mb-5"><h1>Welcome to the store client x</h1>
            <Button onClick={()=>logout()}>Log out</Button></div>
            <Navbar/>
            {IsPending && <div><h1>Loading...</h1></div>}
            <Itemlist list={Items}/>
            <Contactus/>
        </div>
    );
}

export default Home;