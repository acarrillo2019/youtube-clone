import React from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <MenuSharpIcon />
        <img 
            className='header__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt=''
        />
        <input type="text" />
        <SearchIcon />
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
            alt="Profile Pic"
            src="https://ff-storage-p01-storage.filmfreeway.com/press_kits/headshots/002/113/444/original/f09182d9ec-headshot.jpg?1662997322"
        />

    </div>
  )
}

export default Header