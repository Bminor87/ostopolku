import { useEffect, useRef, useState } from 'react';

/**
 * Reports once an element has scrolled into the viewport. The flag never
 * resets, so entrance animations only play the first time.
 */
export function useInView<T extends Element>(threshold = 0.15) {
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element || isInView) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [isInView, threshold]);

    return { ref, isInView };
}
