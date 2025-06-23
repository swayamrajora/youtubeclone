import React from 'react';
import './VideoCard.css';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const { snippet, duration } = video || {};
  const { title, thumbnails, channelTitle } = snippet || {};
  const videoId = video.id.videoId || video.id;

  return (
    <Link to={`/watch/${videoId}`} className="video-card">
      <div className="thumbnail-container">
        <img src={thumbnails?.high?.url} alt={title} />
        {duration && <span className="video-duration">{duration}</span>}
      </div>
      <div className="video-info">
        <h4>{title}</h4>
        <p>{channelTitle}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
