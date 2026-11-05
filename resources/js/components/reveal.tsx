import type { ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type RevealProps = {
    children: ReactNode;
    as?: ElementType;
    delay?: number;
    className?: string;
};

/**
 * Fades and slides its children in when they scroll into view.
 */
export function Reveal({
    children,
    as: Component = 'div',
    delay = 0,
    className,
}: RevealProps) {
    const { ref, isInView } = useInView<HTMLDivElement>();

    return (
        <Component
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isInView
                    ? 'blur-0 translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0 blur-[2px]',
                className,
            )}
        >
            {children}
        </Component>
    );
}
