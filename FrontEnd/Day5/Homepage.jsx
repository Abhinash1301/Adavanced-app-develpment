// Import React and any necessary modules
import { Link } from 'react-router-dom';
import './Homepage.css'; // Make sure to replace 'YourComponent' with the actual name of your React component


// Create a functional component
const Homepage = () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">AGRI</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
           <Link to ="/Aboutpage"> <li><a href="#">About</a></li></Link>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </nav>
      <div className="imgbg">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title">Agri Loan</div>
        <div className="sub_title">Only Store</div>
        <div className="btns">
          <Link to ="/login"> <button>User</button></Link>
          <Link to ="/Admin"><button>Admin</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
