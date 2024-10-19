import React from 'react';

const VideoDuration = ({ lengthSeconds }) => {
  const formatTime = (lengthSeconds) => {
    const hours = Math.floor(lengthSeconds / 3600);
    const minutes = Math.floor((lengthSeconds % 3600) / 60);
    const seconds = lengthSeconds % 60;

    const formattedHours = hours > 0 ? String(hours).padStart(2, '0') + ':' : '';
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return formattedHours + formattedMinutes + ':' + formattedSeconds;
  };

  return <span>{formatTime(lengthSeconds)}</span>;
};

export default VideoDuration;
