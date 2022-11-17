// libs
import { useEffect } from "react";

interface PROPS {
  eventName: string;
  isHover: boolean;
  handler: () => void;
}
export default function useEventListener({
  eventName,
  isHover,
  handler,
}: PROPS) {
  useEffect(() => {
    async function checkEvent() {
      const isSupported = window && window.addEventListener;
      if (!isSupported) return false;
      if (isHover === true) {
        // Add event listener
        window.addEventListener(eventName, handler);
      } else {
        window.removeEventListener(eventName, handler);
      }
    }
    checkEvent();

    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, [eventName, isHover, handler]);
}
