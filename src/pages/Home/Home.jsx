import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Itemlist from "../../helpers/itemList"
import Openclosed from "../../components/OpenClose/OpenClose"
import Contactus from "../../components/ContactUs/ContactUs"
import "./Home.css"


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
    return (
        <div className="home">
            <Openclosed/>
            <Navbar/>
            {IsPending && <div><h1>Loading...</h1></div>}
            <Itemlist list={Items}/>
            <Contactus/>
        </div>
    );
}

export default Home;