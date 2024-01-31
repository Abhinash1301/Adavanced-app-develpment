import './Services.css';
import { Link } from 'react-router-dom';
// import servicesimg from '../assets/servicesimg'
function Services() {
  return (

    <div className='services-container'> 
      <nav className='navi4'>
        <Link to="#">Loan</Link>
        <Link to="#">Loan Status</Link>
        <Link to="#">Profile</Link>
      </nav>
    <div className='academy'>
     <main>
    <div className="about-me">
      <div className='event1'><img src="https://wallpapercave.com/wp/wp9064473.jpg" alt="me"></img>
      <p className='para'>A Tractor loan is a type of financing specifically designed to assist individuals, farmers, or businesses in purchasing tractors and related agricultural equipment.</p>
     <Link to='/Apply'> <button className='button-33'>APPLY NOW</button></Link></div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event2'><img src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="me"></img>
      <p className='para'>Agriculture land loans are specifically intended for the purchase, development of agricultural land.The loan amount depends on factors.</p>
      <Link to ='/Apply'><button className='button-33'>APPLY NOW</button></Link>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event3'><img src="https://images.pexels.com/photos/2165642/pexels-photo-2165642.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img><p className='para'>Agricultural loans provide essential financial support to farmers for activities like crop cultivation and equipment purchase, with varying amounts and collateral. </p><Link to ='/Apply'><button className='button-33'>APPLY NOW</button></Link></div>
    </div>
    <div className="about-me1">
      <div className='event4'><img src="https://images.pexels.com/photos/289334/pexels-photo-289334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="me"></img><p className='para'>Agricultural loans provide essential financial support to farmers for activities like crop cultivation and equipment purchase, with varying amounts, subsidized interest rates, and collateral requirements. </p><Link to ='Apply'><button className='button-31'>APPLY NOW</button></Link></div>&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event5'><img src="https://img.freepik.com/free-photo/organic-farm-harvests-fresh-fruit-vegetables-generated-by-ai_188544-36467.jpg?t=st=1706294658~exp=1706298258~hmac=c6e59c75ff88077c0501d0d77dfe8b799ca5c1c6111e2c44d271d7a47045ea94&w=2000" alt="me"></img><p className='para'>Agricultural loans provide essential financial support to farmers for activities like crop cultivation and equipment purchase, with varying amounts, subsidized interest rates, and collateral requirements. </p><Link to='Apply'><button className='button-31'>APPLY NOW</button></Link>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event6'><img src="https://img.freepik.com/free-photo/photorealistic-money-with-plant_23-2151027604.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated" alt="me"></img><p className='para'>Agricultural loans provide essential financial support to farmers for activities like crop cultivation and equipment purchase, with varying amounts, subsidized interest rates, and collateral requirements. </p><Link to ='Apply'><button className='button-30'>APPLY NOW</button></Link></div>
    </div>
  </main>
  </div>
    </div>
  );
}

export default Services;