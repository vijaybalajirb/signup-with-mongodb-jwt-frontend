import {React,useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,history, useHistory} from "react-router-dom";
import {Container,Card,Form,Button} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from './loading-button';




const Login = () => {


    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [buttonHidden, setButtonHidden] = useState(true);
    const [AddLoad,setAddLoad] = useState(false)
    let history = useHistory();

    useEffect(() => {
        if(password.length > 0 && email.length > 0){
          setButtonHidden(false)
        }else{
          setButtonHidden(true)
        }
      }, [ password, email])

      const toasted=()=>{
        toast(<b>Login Successful</b>)
        setButtonHidden(true) 
     }

     async function submitHandle(e) {
       e.preventDefault();
      setAddLoad(true);
      const data = { email: email, password:password };
      const req = await fetch("https://jwt-loginprotected.herokuapp.com/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        credentials: "same-origin",
        body: JSON.stringify(data),
      });
     let resp = await req.json();
     console.log(resp)
     if(resp.message=="Login Successful"){
       toasted()
       console.log(resp)
       localStorage.setItem("token",resp.token)
       history.push("/protected")
     }
      
      setAddLoad(false);
     
     
      setEmail('');
      setPassword('');
    }

    return(
        <Container fluid>
      <h1 style={{textAlign:"center",paddingTop:20}}>Welcome to URL_Shortner</h1>
      <h3 style={{textAlign:"center",paddingTop:20}}>Login Now!</h3>
      
      <Card className="register-card">
  <ToastContainer />
        <Card.Body>
        <Form onSubmit={submitHandle}>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
 <br/>
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
  </Form.Group><br/>

  {AddLoad === true ? (
            <LoadingButton />
          ):(
  <Button className="float-right" disabled={buttonHidden} variant="primary" size="lg" type="submit">    
    Login
  </Button>
          )}
  <br/><br/>
  <Form.Text className="float-right">
      <br/>
     Forgot Password? <Link to="/forgot">Click here to reset password</Link>
    </Form.Text>
  
</Form>
        </Card.Body>

      </Card>


       </Container>
  
         


    )
}

export default Login;