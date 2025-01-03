import React from 'react';

interface BlobProps {
  className?: string;
  color?: string;
  size?: number;
}

const Blob: React.FC<BlobProps> = ({ 
  className = '', 
  color = '#fe5416',
  size = 400
}) => {
  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{
        background: color,
        width: size,
        height: size,
        filter: 'blur(80px)',
        opacity: '0.15',
        mixBlendMode: 'multiply',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        animation: 'blob 25s ease-in-out infinite',
      }}
    />
  );
};

export default Blob;