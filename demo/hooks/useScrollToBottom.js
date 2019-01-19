import { useRef, useEffect } from 'react';

export function useScrollToBottom(watchedState) {
  const scrollerRef = useRef();

  useEffect(() => {
    if (scrollerRef.current) {
      const el = scrollerRef.current;
      const children = el.children;
      if (children.length > 1) {
        const lastChild = children[children.length - 1];
        lastChild.scrollIntoView();
      }
    }
  }, watchedState);

  return scrollerRef;
}
