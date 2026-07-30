"use client";

import { useEffect } from "react";

const protectedMediaSelector = "img, picture, video, canvas";
const listenerOptions = { capture: true };

function isProtectedMediaTarget(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(target.closest(protectedMediaSelector))
  );
}

export function MediaContextMenuGuard() {
  useEffect(() => {
    function preventMediaContextMenu(event: MouseEvent) {
      if (isProtectedMediaTarget(event.target)) {
        event.preventDefault();
      }
    }

    function preventMediaDrag(event: DragEvent) {
      if (isProtectedMediaTarget(event.target)) {
        event.preventDefault();
      }
    }

    document.addEventListener(
      "contextmenu",
      preventMediaContextMenu,
      listenerOptions,
    );
    document.addEventListener("dragstart", preventMediaDrag, listenerOptions);

    return () => {
      document.removeEventListener(
        "contextmenu",
        preventMediaContextMenu,
        listenerOptions,
      );
      document.removeEventListener(
        "dragstart",
        preventMediaDrag,
        listenerOptions,
      );
    };
  }, []);

  return null;
}
