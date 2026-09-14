import { useEffect, useRef, useState } from 'react';

// One-shot (by default) IntersectionObserver reveal hook.
// Returns [ref, inView]; attach ref to the element to observe.
export default function useInView({ threshold = 0.15, rootMargin = '0px 0px -6% 0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      // No observer support: defer the fallback reveal to avoid a
      // synchronous state update inside the effect body.
      const fallback = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(fallback);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
