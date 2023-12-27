import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { TfiMobile } from "react-icons/tfi";
// import { IoShuffle , IoPersonOutline} from "react-icons/io5";
// import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoCloseCircleOutline, IoMenu } from "react-icons/io5";
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function Nav() {

  const usernameee = useSelector((state)=>state.userr.user)
  const cartSum = useSelector((state)=>state.cartt.sum)

  const [smallMenu, setMenu] = useState(false);
  const [close, setClose] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  window.addEventListener("resize", function (e) {
    let windowWidth = e.currentTarget.innerWidth;
    windowWidth <= 700 ? setMenu(true) : setMenu(false);
    // windowWidth <= 650 ?
  });

  const changeMenu = () => {
    setActiveMenu(!activeMenu);
    setClose(true);
    setMenu(false);
  };
  const changeMenuTwo = () => {
    setActiveMenu(!activeMenu);
    setClose(false);
    setMenu(true);
  };

  // const [menuOpen, setMenuOpen] = useState(false);


  return (
   
   <>

       <nav>
       
        <div className="container">
             <div className='logo'><img src='https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png' alt=''></img></div> 
             
             
             
             <div className='nav-options'>

                <ul className={activeMenu ? "activeMenu" : undefined} 
                          style={smallMenu ? { display: "none" } : { display: "flex" }}>
                    <li>{
                           JSON.stringify(usernameee) === '{}' ? <div><NavLink to='login'>Login</NavLink></div> : <div className='profileName'>Welcome {usernameee.username}</div>
                        }
                    </li>
                    <li><NavLink to='home'>Home</NavLink></li>
                    <li><NavLink to='products'>Products</NavLink></li>
                    <li><NavLink to='cart'>
                          <div className='cart'> 
                            Cart <BsCart3/>
                            <span>{cartSum}</span>
                            </div>
                        </NavLink> 
                    </li>
                    
                    
                </ul>

                {smallMenu ? (
            <IoMenu
              onClick={() => changeMenu()}
              style={smallMenu ? { display: "block" } : { display: "none" }}
            />
          ) : (
            <IoCloseCircleOutline
              onClick={() => changeMenuTwo()}
              style={close&& !smallMenu ? { display: "block" } : { display: "none" }}
            />
          )}
             </div>
             
             
        </div>

       </nav>
       <hr></hr>
    </>
  )
}
