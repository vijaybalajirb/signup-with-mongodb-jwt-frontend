import { useState } from 'react';
import { Container,Button,Form} from 'react-bootstrap';
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom';
import LoadingButton from './loading-button';
import 'react-toastify/dist/ReactToastify.css';

let env = "https://jwt-loginprotected.herokuapp.com/";
const ResetPassword = () => {
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitLoad, setsubmitLoad] = useState(false);
  const email = useParams().email;
  

  async function resetPassword() {
    setsubmitLoad(true);
    const data = { 
      email:email,
      password:password
     };
    
     console.log(password)
    const req = await fetch(`${env}reset`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    setsubmitLoad(false);
    setPassword('');
    setConfirmPassword('');
    if(res.statusCode==200){
      alert("PassWord Changed,Please login with your new password")
    }     
  }

  return (
    <Container fluid>
          <h1 style={{textAlign:"center",paddingTop:20}}>Reset password</h1>
      <form className="forgot-form">
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="form-group">
          {submitLoad === true ? (
            <LoadingButton />
          ) : (
            <Button className="btn btn-primary float-right" type="button"  onClick={resetPassword} disabled={password === '' || confirmPassword === '' || password !== confirmPassword ? true : false}>
              Submit
            </Button>
          )}
          <Form.Text className="float-right">
      <br/>
     Already have an account ? <Link to="/login">Click here to login</Link>
    </Form.Text>
        </div>
      </form>
    </Container>
  );
};

export default ResetPassword;