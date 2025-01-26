import { useEffect } from "react";

/**
 * Custom hook to handle click events outside a specified element.
 *
 * @param {React.RefObject} elementRef - The reference to the target element.
 * @param {Function} onClickOutside - Callback function to invoke when a click outside the element occurs.
 * @param {boolean} isListening - Flag indicating whether the event listener is active.
 */
const useClickOutside = (elementRef, onClickOutside, isListening) => {
  useEffect(() => {
    /**
     * Handles click events and checks if the click occurred outside the target element.
     * If the click is outside, the provided callback function is invoked.
     *
     * @param {MouseEvent} event - The mouse event triggered by a click.
     */
    const handleDocumentClick = (event) => {
      // Ensure the element exists and the click is outside the element.
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        onClickOutside(event);
      }
    };

    // Add or remove the event listener based on the `isListening` flag.
    if (isListening) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      document.removeEventListener("mousedown", handleDocumentClick);
    }

    // Cleanup: Remove the event listener when the component unmounts or dependencies change.
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isListening, onClickOutside, elementRef]); // Dependencies array includes all external references.
};

export default useClickOutside;
