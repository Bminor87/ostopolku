import type { ReactNode } from 'react';

type PageHeaderProps = {
    number: string;
    title: string;
    children?: ReactNode;
};

export function PageHeader({ number, title, children }: PageHeaderProps) {
    return (
        <header className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20">
            <div className="flex items-center gap-3">
                <span className="flex size-10 animate-pop items-center justify-center rounded-full bg-brand text-lg font-bold text-brand-foreground shadow-lg shadow-brand/30">
                    {number}
                </span>
                <span className="h-px w-16 origin-left animate-[fade-up_0.8s_0.2s_both] bg-gradient-to-r from-brand to-transparent" />
            </div>
            <h1 className="mt-5 animate-[fade-up_0.8s_0.1s_both] text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                {title}
            </h1>
            {children && (
                <div className="mt-5 max-w-3xl animate-[fade-up_0.8s_0.25s_both] text-lg text-pretty text-muted-foreground">
                    {children}
                </div>
            )}
        </header>
    );
}

export function Section({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <section
            className={`mx-auto max-w-6xl px-4 py-10 sm:px-6 ${className}`}
        >
            {children}
        </section>
    );
}

export function SectionTitle({
    children,
    kicker,
}: {
    children: ReactNode;
    kicker?: string;
}) {
    return (
        <div className="mb-6">
            {kicker && (
                <p className="mb-1 text-xs font-semibold tracking-widest text-brand uppercase">
                    {kicker}
                </p>
            )}
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {children}
            </h2>
        </div>
    );
}
