import React from 'react';
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow.js';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
        </div>
        <hr/>

        <ChannelRow 
        image
        channel
        verified
        subs
        noOfVideos
        description
        />
    <hr />

    <VideoRow />

    </div>
  )
}

export default SearchPage;