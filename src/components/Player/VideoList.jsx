import React from 'react';
import { WrapLinkVideo } from './RecordPlayer.styled';

export const VideoList = ({ videos, onSelect }) => {
  return (
    <WrapLinkVideo>
      {videos.map(video => (
        <li
          key={video.id}
          onClick={() => onSelect(video.link)}
          className="link-url"
        >
          {video.link}
        </li>
      ))}
    </WrapLinkVideo>
  );
};
// Зробити лінки
