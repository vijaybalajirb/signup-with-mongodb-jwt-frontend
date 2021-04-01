import {React,useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Container,Card,Form,Button} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from "./loading-button";

let env = "https://jwt-loginprotected.herokuapp.com/";
const Forgot = () => {

    const [email, setEmail] = useState("");
    const [buttonHidden, setButtonHidden] = useState(true);
    const [AddLoad,setAddLoad] = useState(false)

    useEffect(() => {
        if(email.length > 0){
          setButtonHidden(false)
        }else{
          setButtonHidden(true)
        }
      }, [email])
      
      const toasted=()=>{
        toast("Password Reset Successfull")
      }

      async function submitHandle(e) {
        e.preventDefault();
        setAddLoad(true);
        const data = { email };
        const req = await fetch(`${env}forgot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const res = await req.json();
        setAddLoad(false);
        if(res.statusCode==200){
          alert("Paaword Reset link is sent to your mail")

        }
        
        setEmail('');
      }

    return(
    <Container fluid>
         <h3 style={{textAlign:"center",paddingTop:20}}>Enter your Email ID!</h3><br/>

    <Card>
        <Card.Body>
        <Form onSubmit={submitHandle}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
    {AddLoad === true ? (
            <LoadingButton />
          ):(
  <Button className="float-right" disabled={buttonHidden} variant="primary" size="lg" type="submit">    
    Submit
  </Button>
          )}
    
    </Form.Group>
        </Form>
        </Card.Body>
    </Card>


    </Container>
    )

}

export default Forgot;