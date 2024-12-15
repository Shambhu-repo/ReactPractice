import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../food-del-assets/assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {   //took this props from app.jsx
    const[menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'> 
    
      <div className='market-names'> 
      <Link to='/'>  <h1 className='market-name-nepali'>स्याउली-बजार <br></br> Syauli-Bajar</h1> </Link> {/* it will link to home page when we click on logo or name of the app   */}
      </div>
      
      {/*<img src={assets.logo} alt=" " className='logo' /> */}
      
      <ul className="navbar-menu">
      <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >home</Link>
      <a  href='#explorer-menu' onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}> menu</a>
      <a href='#app-download'   onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</a>
      <a  href='#footer'   onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt='' />
         <div className="navbar-search-icon">
          <Link to='/cart'>  <img src={assets.basket_icon} alt="" /> </Link> {/*it will link the cart page when we click on basket icon */}
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
         </div>
         <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
      )
    
}

export default Navbar
