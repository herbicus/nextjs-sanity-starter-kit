"use client";

import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

export const MIN_WIDTH_PHONE = 640; // sm
export const MIN_WIDTH_TABLET = 768; // md
export const MIN_WIDTH_DESKTOP = 1024; // lg
export const MIN_WIDTH_DESKTOP_WIDE = 1280; // xl

export const MEDIA_QUERY_PHONE = `screen and (min-width: ${MIN_WIDTH_PHONE}px)`;
export const MEDIA_QUERY_TABLET = `screen and (min-width: ${MIN_WIDTH_TABLET}px)`;
export const MEDIA_QUERY_DESKTOP = `screen and (min-width: ${MIN_WIDTH_DESKTOP}px)`;
export const MEDIA_QUERY_DESKTOP_WIDE = `screen and (min-width: ${MIN_WIDTH_DESKTOP_WIDE}px)`;

// Range Queries
export const MEDIA_QUERY_TABLET_ONLY = `screen and (min-width: ${MIN_WIDTH_TABLET}px) and (max-width: ${MIN_WIDTH_DESKTOP - 1}px)`;
export const MEDIA_QUERY_DESKTOP_ONLY = `screen and (min-width: ${MIN_WIDTH_DESKTOP}px) and (max-width: ${MIN_WIDTH_DESKTOP_WIDE - 1}px)`;
export const MEDIA_QUERY_DESKTOP_WIDE_ONLY = `screen and (min-width: ${MIN_WIDTH_DESKTOP_WIDE}px)`;

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query));
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}
