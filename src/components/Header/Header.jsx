import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { getMenuStyles } from '../../utils/common'
import useHeaderColor from '../../hooks/useHeaderColor'
// import OutsideClickHandler from 'react-outside-click-handler'
import { Link  } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import AddPropertyModal from '../AddPropertyModal'
import useAuthCheck from '../../hooks/useAuthCheck.jsx'
import image from '../image/logo5.png'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const headerColor = useHeaderColor()
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();


  //for Add property
  const [modalOpened, setModalOpened] = useState(false);

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };

  return (
    <section className='h-wrapper' style={{ background: headerColor }}>
      <div className='flexCenter padding  h-container'>
        {/* logo */}
        <Link to='/'>
          <img src={image} className='logo' alt='logo' style={{width:"30%"  , paddingLeft:"2rem"}}/>
        </Link>
        {/* menu */}
        {/* <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false)
          }}
        > */}
          <div
            // ref={menuRef}
            className='flexCenter h-menu'
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties">Properties</NavLink>

            <a href='mailto:manshasinghal04@gmail.com'>Contact</a>

            {/* add property */}
            <div onClick={handleAddPropertyClick}>Add Property</div>
            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
            {/* login button */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
       

            {/* login Button */}
            {/* {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>  */}

        {/* for medium and small screens */}
        <div className='menu-icon' onClick={() => setMenuOpened(prev => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header;
