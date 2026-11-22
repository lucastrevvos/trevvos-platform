"use client";
import { useEffect, useRef, useState } from "react";
export function useInView<T extends HTMLElement>(
  threshold = 0.3,
  once = false,
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (once && entry.isIntersecting) observer.disconnect();
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);
  return { ref, visible };
}
