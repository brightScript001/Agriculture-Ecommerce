import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", handler);
    setMatches(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

export default useMediaQuery;
