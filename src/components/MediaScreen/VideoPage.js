import React, { useEffect } from 'react';

const VideoPage = () => {
  
  useEffect(() => {
    // Load YouTube iframe API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube player after the script is loaded
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        height: '700',
        width: '1430',
        videoId: 'ezbJwaLmOeM',  // Updated YouTube video ID
        playerVars: {
          autoplay: 1,  // Auto-play the video
        },
      });
    };
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <div id="youtube-player"></div>  {/* This div will be replaced by the YouTube player */}
    </div>
  );
};

export default VideoPage;
