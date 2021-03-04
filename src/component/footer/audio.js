import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Audio = forwardRef(({ track, handleDuration, handleCurrentTime }, ref) => {
    return (
      <audio
        ref={ref}
        onLoadedMetadata={(e) => handleDuration(e.target.duration)}
        onTimeUpdate={(e) => handleCurrentTime(e.target.currentTime)}
      >
        <source src={track} type="audio/mpeg" />
      </audio>
    );
  },
);

Audio.propTypes = {
    handleDuration: PropTypes.func.isRequired,
    handleCurrentTime: PropTypes.func.isRequired,
    track: PropTypes.string.isRequired,
};

export default Audio;