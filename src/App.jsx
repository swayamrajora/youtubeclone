import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import PermanentSidebar from "./Component/Permanentsb/PermanentSidebar";
import CategoryBar from "./Component/CategoryBar/CategoryBar";
import axios from "axios";
import VideoCard from "./Component/VideoCard/VideoCard";

const App = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: API_KEY,
              q: "mango", // can be made dynamic
              part: "snippet",
              maxResults: 12,
              type: "video",
            },
          }
        );

        const durations = [
          "12:34", "6:45", "9:21", "3:10",
          "5:32", "7:08", "2:15", "10:50",
          "4:39", "8:00", "6:12", "11:22"
        ];

        // Add static durations to video data
        const videosWithDuration = response.data.items.map((video, index) => ({
          ...video,
          duration: durations[index] || "4:00", // fallback if not enough durations
        }));

        setVideos(videosWithDuration);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div>
      <main>
        {/* Navbar */}
        <Navbar />

        {/* Category */}
       <div style={{
        position: 'sticky',
        top: '64px', // same as AppBar height
        zIndex: 1100,
        backgroundColor: '#fff',
        padding: '8px 0',
        marginLeft:'80px'
      }}>
        <CategoryBar />
      </div>
        {/* Sidebar */}
        <PermanentSidebar />

        {/* Videos Section */}
        <section
        style={{
        marginTop: "64px",
        padding: "20px 40px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        maxWidth: "1200px",
        marginRight: "auto",
        marginLeft: "auto",
  }}
>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </section>

        {/* Footer */}
        <footer></footer>
      </main>
    </div>
  );
};

export default App;
