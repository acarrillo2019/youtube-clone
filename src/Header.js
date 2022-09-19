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
        <div className='header__left'>
            <MenuSharpIcon />
            <img 
                className='header__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt=''
            />
        </div>

        <div className='header__input'>
            <input placeholder="Search" type="text" />
            <SearchIcon className='header__inputButton'/>
        </div>

        <div className='header__icons'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar
                alt="Profile Pic"
                src="https://ff-storage-p01-storage.filmfreeway.com/press_kits/headshots/002/113/444/original/f09182d9ec-headshot.jpg?1662997322"
            />
        </div>
    </div>
  )
}

export default Header