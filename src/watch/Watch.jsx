import React from 'react';
import { useParams } from 'react-router-dom';

const Watch = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '40px', marginTop: '64px' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube Video Player"
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
        />
      </div>
    </div>
  );
};

export default Watch;
