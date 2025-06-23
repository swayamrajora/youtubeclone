import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const { snippet, duration } = video || {};
  const { title, thumbnails, channelTitle } = snippet || {};

  return (
    <div className="video-card">
      <div className="thumbnail-container">
        <img src={thumbnails?.high?.url} alt={title || 'Video thumbnail'} />
        {duration && (
          <span className="video-duration">{duration}</span>
        )}
      </div>
      <div className="video-info">
        <h4>{title || 'No title available'}</h4>
        <p>{channelTitle || 'Unknown channel'}</p>
      </div>
    </div>
  );
};

export default VideoCard;
