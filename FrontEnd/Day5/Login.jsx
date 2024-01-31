import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
// import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  // const navigate=useNavigate();
    const handleName=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        setFormErrors(validate({email,password}));
        if(isSubmit===true){
            try{
              console.log("Login Successful");
              window.location.href = "/Service";
                // navigate('/Signup');
            }catch(error){
                console.error('Error: ',error);
            }
        }
    }

    

    const validate=(values)=>{
        const errors={};
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.email){
        errors.username="Email is Required";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        if(!values.password){
        errors.password="Password is Required";
        setIsSubmit(false);
        }
        else if(!preg.test(values.password)){
        errors.password="Invalid password";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        return errors;
    }
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('YOUR_API_ENDPOINT', {
  //       userName,
  //       password,
  //     });

  //     // Handle the successful login response as needed
  //     console.log('Login successful', response.data);

  //     // Redirect to the Service page or perform any other actions
  //   } catch (error) {
  //     // Handle errors, e.g., display an error message to the user
  //     console.error('Login failed', error.response.data);
  //   }
  // };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
                value={email}
                onChange={handleName}
              />
              <p>{formErrors.username}</p>
            </div>
            <div className="login__field">
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={handlePwd}
              />
             <p>{formErrors.password}</p>

            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Log In Now</span>
            </button>
          </form>
          <div className="social-login">
            <Link to="/Signup"><h3>log in via</h3></Link>
            <div className="social-icons">
              <a href="#" className="social-login__icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-login__icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-login__icon">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
