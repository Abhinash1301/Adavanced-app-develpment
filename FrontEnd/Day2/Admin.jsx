import { useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
function Adminlogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      // console.log(Logging in with username: ${username} and password: ${password});
    };
  
    return (
        <div className='bod-adl'>
        <div className='adl'>
            <div className="login-container-ad">
      <div className="login-card-ad">
        <div className="login-ad">
        <h2>Admin Login</h2>
        </div>
        <form className='url'>
          {/* <label htmlFor="username">Username:</label> */}
          <input className='in'
            type="text"
            id="username"
            placeholder='Enter your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}
<br></br>

          {/* <label htmlFor="password">Password:</label> */}
          <input className='in'
            type="password"
            id="password"
            placeholder='Enter your Password'
            value={password}
            
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='but' type="button" onClick={handleLogin}>
            Log In
          </button>
          <br></br>
          <div className="new">
          <p className="link-text">
             <Link to ="/Adminregisters"><a href="/Adminregister">Create an account</a></Link>
          </p>
          </div>
        </form>
      </div>
    </div>
        </div>
        </div>
    );
}

export default Adminlogin