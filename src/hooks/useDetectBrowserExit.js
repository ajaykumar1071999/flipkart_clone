import { useState, useEffect } from "react";

const usePageExitAlert = (message) => {
  const [exitCount, setExitCount] = useState(() => {
    const storedExitCount = localStorage.getItem("exitCount");
    return storedExitCount ? parseInt(storedExitCount, 10) : 0;
  });

  const handleBeforeUnload = (event) => {
    const updatedExitCount = exitCount + 1;
    const confirmationMessage =
      message ||
      `Are you sure you want to leave? (Attempt ${updatedExitCount})`;

    // Save the updated exitCount to local storage
    localStorage.setItem("exitCount", updatedExitCount.toString());

    // For modern browsers, show a generic message
    event.preventDefault();
    event.returnValue = confirmationMessage;
    setExitCount(updatedExitCount);

    return confirmationMessage;
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden" && message) {
      // Show your custom alert here
      alert(`Custom alert: ${message}`);
      setExitCount((prevCount) => prevCount + 1);
      // Save the updated exitCount to local storage
      localStorage.setItem("exitCount", exitCount.toString());
    }
  };

  const handleUnload = () => {
    // Show your custom alert when the user leaves the page
    alert("Custom alert: You are leaving the page.");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [message, exitCount]);

  return { exitCount };
};

export default usePageExitAlert;
