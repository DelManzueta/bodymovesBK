import React from 'react';

const HeroVideo = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline=""
        poster="https://video.squarespace-cdn.com/content/v1/61f41652db696350f9ab5b9b/48b39d4d-9232-4904-a1d1-a47f95eb0181/thumbnail"
      >
        <source 
          src="blob:https://bodymovesbk.com/a80bd4cb-f82e-40e1-819d-22b6d5a10e2c" 
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HeroVideo;