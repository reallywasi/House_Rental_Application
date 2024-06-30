import React from 'react'
import variables from "../styles/variables.scss"
import {Icon, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
// import Person from '@mui/icons-material/Person'
// import Menu from '@mui/material/Menu'

import { Search, Person } from "@mui/icons-material";

import MenuIcon from '@mui/icons-material/Menu';

{/*================================================================================================== */}
const Navbar = ({ user }) => {
  return (
    <div className='navbar'>
      <a href='/'>
        <img src="/assets/logo.png" alt="logo" />
      </a>


{/*================================================================================================== */}


      <div className='navbar-search'>
        <input type="text" placeholder='search...' />
        <IconButton>
          <SearchIcon sx={{ color: variables.pinkred }} />
        </IconButton>
      </div>
{/*================================================================================================== */}
      <div className='navbar-right'>
        {user ? (
          <a href='/create-listing'>Become a Host</a>
        ) : (
          <a href="/login">Become a HOST</a>
        )}
        <button className='navbar-right-account'>
        <MenuIcon sx={{ color: variables.darkgrey }} />     
          
        <Person sx={{ color: variables.darkgrey }} />

         </button>
      </div>
    </div>
  )
}

export default Navbar;