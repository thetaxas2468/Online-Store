import "./OpenClose.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function OpenClose(){
    
    return(
        <div className="openclose container">
            <h1>Shop is opened</h1>
            <div className="d-flex justify-content-between">
                <Link to="/Signin" className="btn btn-primary active signinsignout">Sign In</Link>
                <Link to="/Signup" className="btn btn-primary active signinsignout">Sign Up</Link>
                
            </div>
        </div>
    );
}



export default OpenClose;