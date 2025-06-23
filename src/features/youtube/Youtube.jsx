import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [videos, setVideos] = useState([]);

  // ✅ Use import.meta.env directly (your current VITE_API_KEY="..." line should be in .env only)
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              key: API_KEY,
              q: 'mango',
              part: 'snippet',
              maxResults: 10,
              type: 'video'
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>YouTube Videos</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {videos.map((item) => (
          <li key={item.id.videoId} style={{ flex: '1 0 300px' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title={item.snippet.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <p>{item.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
