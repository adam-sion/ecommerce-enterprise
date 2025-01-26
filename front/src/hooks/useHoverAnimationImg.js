import { useState } from "react";

/**
 * Custom hook to manage hover animations.
 *
 * @param {number | null} initialId - Initial hovered item ID (default: null).
 *
 * @returns {Object} - Returns an object with the following properties:
 *  - `hovered` (number | null): ID of the currently hovered item, or null if no item is hovered.
 *  - `exiting` (number | null): ID of the item that is exiting (i.e., no longer hovered), or null if no item is exiting.
 *  - `handleMouseEnter` (function): Function to be called when an item is hovered. Sets `hovered` to the ID of the hovered item and clears `exiting`.
 *  - `handleMouseLeave` (function): Function to be called when the mouse leaves an item. Sets `hovered` to null and `exiting` to the ID of the item that was hovered.
 *
 * Usage:
 * - Attach `handleMouseEnter` and `handleMouseLeave` to `onMouseEnter` and `onMouseLeave` events of the element.
 * - Use `hovered` and `exiting` to conditionally apply styles or trigger animations based on whether an item is currently hovered or exiting.
 */
const useHoverAnimationImg = (initialId = null) => {
  // State to track the currently hovered item ID
  const [hovered, setHovered] = useState(initialId);
  // State to track the ID of the item that is exiting
  const [exiting, setExiting] = useState(null);

  // Handler for mouse enter events
  const handleMouseEnter = (id) => {
    setHovered(id); // Set hovered item ID
    setExiting(null); // Clear exiting ID
  };

  // Handler for mouse leave events
  const handleMouseLeave = (id) => {
    setHovered(null); // Clear hovered item ID
    setExiting(id); // Set exiting item ID
  };

  // Return values and handlers for use in components
  return { hovered, exiting, handleMouseEnter, handleMouseLeave };
};

export default useHoverAnimationImg;
