import './Aboutpage.css';
import { Link } from 'react-router-dom';

const Aboutpage = () => {
  return (
    <div><div className= 'container'>
    <div className="container_content">
    <div className="container_content_inner">
    <div className="title">
      <h1>Hello</h1>
    </div>
    <div className="par">
    <p>
    Welcome to Agri, your trusted partner in agricultural finance. With a deep commitment to the farming community, we specialize in providing tailored loan solutions that fuel growth and sustainability. Our mission is clear: empower farmers and agri-entrepreneurs with the financial support needed to thrive. At [Your Company Name], integrity, transparency, and customer satisfaction are at the core of our values. Our expertise in agricultural finance, quick approval processes, and personalized service set us apart. We understand the unique challenges farmers face, and our goal is to make agricultural financing accessible, easy, and efficient. Join us in cultivating success—choose Agri for your agricultural loan needs.
    </p>
    </div>
    <div className="bt">
    <Link to ="/Service"><button className='bt_more'> Loan </button></Link>
    </div>
    </div>
    </div>
     <div className="container_outer_img">
     <div className="img-inner">
     <img src="https://i.pinimg.com/564x/9d/dc/55/9ddc55a37da63786785ba0c71d92be61.jpg"/>
           </div>
         </div>
      </div>
    <div className="overlay"></div></div>
  )
}

export default Aboutpage