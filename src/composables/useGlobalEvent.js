// composition function
// accepts an event to listen to and a callback to run when the event takes place
import { onMounted, onUnmounted } from "vue";

export const useGlobalEvent = (eventName, callback) => {
  onMounted(() => {
    // registers a global event when a component is mounted
    window.addEventListener(eventName, callback);
  });
  onUnmounted(() => {
    // removes global event when the component is removed from the DOM
    window.removeEventListener(eventName, callback);
  });
};
