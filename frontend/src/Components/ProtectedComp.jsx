import {React,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button} from "react-bootstrap";
import LoadingButton from './loading-button';


const ProtectedComp = () => {

    const [AddLoad,setAddLoad] = useState(false)

  async function protecthandle(e){
        e.preventDefault();
        setAddLoad(true);
        const req = await fetch("https://jwt-loginprotected.herokuapp.com/protected",{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('token'),
          },
        })
        let resp = await req.json();
         console.log(resp)
        setAddLoad(false);
  }

    return(
        <Container className="mb-2 mr-3" fluid>
          <br/>
                {AddLoad === true ? (
                    <LoadingButton />
                  ):(<Button className="btn btn-primary" onClick={protecthandle}>Click here to view protedted info in console</Button> ) }
        </Container>
    )
                }   

export default ProtectedComp;