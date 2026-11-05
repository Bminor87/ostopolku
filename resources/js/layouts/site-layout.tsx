import { Link, router, usePage } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { sections } from '@/data/sections';
import { cn } from '@/lib/utils';
import { lahteet } from '@/routes';

function useScrollProgress(): number {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollable =
                document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return progress;
}

export default function SiteLayout({ children }: { children: ReactNode }) {
    const { component } = usePage();
    const currentIndex = Math.max(
        sections.findIndex((section) => section.component === component),
        0,
    );
    const previous = sections[currentIndex - 1];
    const next = sections[currentIndex + 1];
    const progress = useScrollProgress();

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement | null;

            if (
                target?.closest(
                    'input, textarea, select, [contenteditable="true"]',
                )
            ) {
                return;
            }

            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }

            if (event.key === 'ArrowRight' && next) {
                router.visit(next.href);
            }

            if (event.key === 'ArrowLeft' && previous) {
                router.visit(previous.href);
            }
        };

        window.addEventListener('keydown', handleKey);

        return () => window.removeEventListener('keydown', handleKey);
    }, [next, previous]);

    return (
        <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 -z-0 opacity-70 [background:radial-gradient(60rem_40rem_at_10%_-10%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent),radial-gradient(50rem_35rem_at_110%_10%,color-mix(in_oklab,var(--segment-a)_14%,transparent),transparent)]"
            />

            <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
                <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
                    <Link
                        href={sections[0].href}
                        className="group flex shrink-0 items-center gap-2 rounded-md px-1 py-1 text-sm font-semibold tracking-tight"
                    >
                        <span
                            className="flex h-5 items-end gap-0.5"
                            aria-hidden
                        >
                            {[0, 1, 2, 3].map((bar) => (
                                <span
                                    key={bar}
                                    className="w-1 origin-bottom animate-wave rounded-full bg-brand"
                                    style={{
                                        height: '100%',
                                        animationDelay: `${bar * 0.15}s`,
                                    }}
                                />
                            ))}
                        </span>
                        <span className="transition-colors group-hover:text-brand">
                            Ostopolku
                        </span>
                    </Link>

                    <nav className="-mx-1 flex min-w-0 flex-1 [scrollbar-width:none] gap-1 overflow-x-auto px-1">
                        {sections.slice(1, -1).map((section) => {
                            const isActive = section.component === component;

                            return (
                                <Link
                                    key={section.component}
                                    href={section.href}
                                    prefetch
                                    className={cn(
                                        'relative shrink-0 rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand/15 hover:text-foreground sm:text-sm',
                                        isActive
                                            ? 'bg-foreground text-background hover:bg-foreground hover:text-background'
                                            : 'text-muted-foreground',
                                    )}
                                >
                                    <span className="mr-1 tabular-nums opacity-60">
                                        {section.number}
                                    </span>
                                    {section.shortTitle}
                                </Link>
                            );
                        })}
                    </nav>

                    <Link
                        href={lahteet.url()}
                        prefetch
                        className={cn(
                            'flex shrink-0 items-center gap-1.5 rounded-full border border-brand/60 px-3 py-1.5 text-xs font-semibold text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground hover:shadow-lg hover:shadow-brand/30 sm:text-sm',
                            component === 'lahteet' &&
                                'bg-brand text-brand-foreground',
                        )}
                    >
                        <BookOpen className="size-4" />
                        Lähteet
                    </Link>
                </div>
                <div
                    className="h-0.5 origin-left bg-gradient-to-r from-brand via-segment-b to-segment-a transition-transform duration-150"
                    style={{ transform: `scaleX(${progress})` }}
                />
            </header>

            <main key={component} className="relative z-10 animate-fade-up">
                {children}
            </main>

            <footer className="relative z-10 mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6">
                <div className="grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
                    {previous ? (
                        <Link
                            href={previous.href}
                            className="group flex clickable items-center gap-3 rounded-xl border border-border bg-card/60 p-4"
                        >
                            <ArrowLeft className="size-5 shrink-0 text-brand transition-transform group-hover:-translate-x-1" />
                            <span className="flex flex-col">
                                <span className="text-xs text-muted-foreground">
                                    Edellinen
                                </span>
                                <span className="font-medium">
                                    {previous.title}
                                </span>
                            </span>
                        </Link>
                    ) : (
                        <span />
                    )}
                    {next && (
                        <Link
                            href={next.href}
                            className="group flex clickable items-center justify-end gap-3 rounded-xl border border-border bg-card/60 p-4 text-right"
                        >
                            <span className="flex flex-col">
                                <span className="text-xs text-muted-foreground">
                                    Seuraava
                                </span>
                                <span className="font-medium">
                                    {next.title}
                                </span>
                            </span>
                            <ArrowRight className="size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                        </Link>
                    )}
                </div>
                <p className="mt-6 text-center text-xs text-muted-foreground">
                    Jesse Hellman · MAR001HH1A Asiakasymmärrys ja markkinointi ·
                    Haaga-Helia ammattikorkeakoulu 2026 ·{' '}
                    <span className="hidden sm:inline">
                        Selaa osioita nuolinäppäimillä ← →
                    </span>
                </p>
            </footer>
        </div>
    );
}
