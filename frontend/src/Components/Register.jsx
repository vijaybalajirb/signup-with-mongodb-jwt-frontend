import {React,useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Container,Card,Form,Button} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//const server = "http://localhost:5000/api/user";

const Register = () => {
const [name, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password,setPassword] = useState("");
const [buttonHidden, setButtonHidden] = useState(true);

useEffect(() => {
    if(name.length > 0 && password.length > 0 && email.length > 0){
      setButtonHidden(false)
    }else{
      setButtonHidden(true)
    }
  }, [name, password, email])

  const toasted=(res)=>{
    if(res){
    toast(<b>Registration Successful</b>)
    }else{
      toast(<b>Email already exists</b>)
    
    }
 }


const submitHandle = async (e) => {
    e.preventDefault();
   const req = await fetch("https://jwt-loginprotected.herokuapp.com/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
       name:name,
       email:email,
       password:password
      })
      
    })
   let res = await req.json();
   if(res.message=="Registered"){
     res=true;
    toasted(res)
   }else{
     res=false;
     toasted(res)
   }
    

    setEmail(" ")
    setPassword(" ")
    setUsername(" ")
   }

 
 
    return(
       <Container fluid>
      <h1 style={{textAlign:"center",paddingTop:20}}>Welcome to URL_Shortner</h1>
      <h3 style={{textAlign:"center",paddingTop:20}}>Register as new user</h3>
      
      <Card className="register-card">
  <ToastContainer />
        <Card.Body>
        <Form onSubmit={submitHandle}>

        <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>{setUsername(e.target.value)}}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
  </Form.Group><br/>
  <Button className="float-right" disabled={buttonHidden} variant="primary" size="lg" type="submit">
      
    Register
  </Button><br/><br/>
  <Form.Text className="float-right">
      <br/>
     Already have an account ? <Link to="/login">Click here to login</Link>
    </Form.Text>
  
</Form>
        </Card.Body>

      </Card>


       </Container>
  
         


    )


}

export default Register;