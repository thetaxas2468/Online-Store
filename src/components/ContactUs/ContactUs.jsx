import "./ContactUs.css"
import 'bootstrap/dist/css/bootstrap.css';

function ContactUs(){
    
    return(
        <div className="navbar d-flex justify-content-center mt-5">
            <h4 className="info">Email: void@hotmail.com</h4>
            <h4 className="info">phone: (+972) 5X-XXX-XXXX</h4>
            <div className="important mt-5"><h2>Important</h2>
            <h2> Every update that is confirmed by the admin will be visible to clients</h2></div>
            <h4 className="info">Copyright by Karam</h4>
        </div>
    );
}



export default ContactUs;