import { useEffect } from 'react';

const useFullscreen = () => {
  const enterFullscreen = () => {
    const element = document.documentElement; // Fullscreen the entire document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    return () => {
      exitFullscreen(); // Ensure exit fullscreen when the component unmounts
    };
  }, []);

  return { enterFullscreen, exitFullscreen };
};

export default useFullscreen;
