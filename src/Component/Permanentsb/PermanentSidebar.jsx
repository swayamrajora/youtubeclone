import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { SiYoutubeshorts, SiYoutubemusic } from 'react-icons/si'
import { MdSubscriptions } from 'react-icons/md'
import './PermanentSidebar.css'

const PermanentSidebar = () => {
  return (
    <div className="permanent-sidebar">
      <div className="sidebar-icon">
        <IoMdHome size={24} />
        <span>Home</span>
      </div>
      <div className="sidebar-icon">
        <SiYoutubeshorts size={24} />
        <span>Shorts</span>
      </div>
      <div className="sidebar-icon">
        <MdSubscriptions size={24} />
        <span>Subscriptions</span>
      </div>
      <div className="sidebar-icon">
        <SiYoutubemusic size={24} />
        <span>Music</span>
      </div>
    </div>
  )
}

export default PermanentSidebar
