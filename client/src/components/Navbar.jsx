import React, { useState } from 'react'
import variables from "../styles/variables.scss"
import {Icon, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
// import Person from '@mui/icons-material/Person'
// import Menu from '@mui/material/Menu'
import {useSelector , useDispatch} from "react-redux"
import { Search, Person } from "@mui/icons-material";
import "../styles/Navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import { setLogout } from '../redux/state'


{/*================================================================================================== */}
const Navbar = () => {

const[dropdownMenu,setDropdownMenu]=useState(false);
const user=useSelector((state)=>state.user)

const dispatch=useDispatch()

  return (
    <div className='navbar'>
      <a href='/'>
        <img src="/assets/logo.png" alt="logo" />
      </a>


{/*================================================================================================== */}


      <div className='navbar_search'>
        <input type="text" placeholder='search...' />
        <IconButton>
          <SearchIcon sx={{ color: variables.pinkred }} />
        </IconButton>
      </div>
{/*================================================================================================== */}
      <div className='navbar_right'>
        {user ? (
          <a href='/create-listing' className='host'>Become a Host</a>
        ) : (
          <a href="/login" className='host'>Become a HOST</a>
        )}
        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <MenuIcon sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile photo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

{/* ============================================================================================================ */}

{
  dropdownMenu && !user && ( <div className='navbar_right_accountmenu'> 
  <Link to="/login">Login</Link>
  <Link to="/register" >Sign Up</Link>
  </div>
  )
}


{/* ============================================================================================================ */}

{dropdownMenu && user && (
  <div className='navbar_right_accountmenu'>

           <Link to={`/${user._id}/trips`}>Trip List</Link>
            <Link to={`/${user._id}/wishList`}>Wish List</Link>
            <Link to={`/${user._id}/properties`}>Property List</Link>
            <Link to={`/${user._id}/reservations`}>Reservation List</Link>
            <Link to="/create-listing">Become A Host</Link>


<Link to="/login" onClick={()=>{
  dispatch(setLogout())
}}>Logout</Link>

  </div>
)

}

      </div>
    </div>
  )
}

export default Navbar;