import React from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';

function Header() {
  return (
    <div className='header'>
        <h1>Header</h1>
        <MenuSharpIcon />
        <img 
            className='header_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt=''
        />
        <input type="text" />
        <SearchIcon />
        <VideoCallIcon />


    </div>
  )
}

export default Header