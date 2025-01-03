import React from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  poster,
  overlay = true,
  overlayOpacity = 0.4
}) => {
  return (
    <div className="relative w-full h-full">
      {overlay && (
        <div 
          className="absolute inset-0 bg-black z-10" 
          style={{ opacity: overlayOpacity }}
        />
      )}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline=""
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;