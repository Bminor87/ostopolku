import { Head } from '@inertiajs/react';
import { Check, Copy, ExternalLink, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Cite } from '@/components/cite';
import { PageHeader, Section } from '@/components/page-header';
import { sourceCategories, sources } from '@/data/sources';
import type { Source, SourceCategory } from '@/data/sources';
import { cn } from '@/lib/utils';

function formatEntry(source: Source): string {
    return source.url
        ? `${source.entry} Luettavissa: ${source.url}. Luettu: ${source.accessed}.`
        : `${source.entry} Luettu: ${source.accessed}.`;
}

export default function Lahteet() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState<SourceCategory | null>(null);
    const [highlightedId, setHighlightedId] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const highlightFromHash = () => {
            const id = decodeURIComponent(window.location.hash.slice(1));

            if (!id) {
                return;
            }

            setHighlightedId(id);
            requestAnimationFrame(() =>
                document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
            );
        };

        highlightFromHash();
        window.addEventListener('hashchange', highlightFromHash);

        return () =>
            window.removeEventListener('hashchange', highlightFromHash);
    }, []);

    const visibleSources = useMemo(() => {
        const needle = query.trim().toLowerCase();

        return sources.filter(
            (source) =>
                (!category || source.category === category) &&
                (!needle || formatEntry(source).toLowerCase().includes(needle)),
        );
    }, [query, category]);

    const copyAll = async () => {
        await navigator.clipboard.writeText(
            sources.map(formatEntry).join('\n\n'),
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <Head title="Lähteet" />
            <PageHeader number="7" title="Lähteet">
                Lähdeluettelo on laadittu Haaga-Helian lähdeviittausohjeen
                mukaisesti, ja lähteet ovat aakkosjärjestyksessä tekijän tai
                julkaisijan mukaan
                <Cite refs="hh-libguide" />. Yhteensä {sources.length} lähdettä.
                Verkkolähteet on luettu 5.11.2026.
            </PageHeader>

            <Section className="pt-0">
                <div className="sticky top-16 z-20 -mx-4 flex flex-col gap-3 border-b border-border/60 bg-background/85 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border">
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <label className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 transition-colors focus-within:border-brand">
                            <Search className="size-4 text-muted-foreground" />
                            <input
                                type="search"
                                value={query}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                placeholder="Hae lähteistä…"
                                className="w-full bg-transparent text-sm outline-none"
                            />
                        </label>
                        <button
                            type="button"
                            onClick={copyAll}
                            className="flex clickable items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                        >
                            {copied ? (
                                <Check className="size-4 text-segment-c" />
                            ) : (
                                <Copy className="size-4" />
                            )}
                            {copied ? 'Kopioitu!' : 'Kopioi koko luettelo'}
                        </button>
                    </div>
                    <div className="flex [scrollbar-width:none] gap-2 overflow-x-auto">
                        {[null, ...sourceCategories].map((item) => (
                            <button
                                key={item ?? 'kaikki'}
                                type="button"
                                onClick={() => setCategory(item)}
                                className={cn(
                                    'shrink-0 cursor-pointer rounded-full border border-border px-3 py-1 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-brand',
                                    category === item &&
                                        'border-brand bg-brand text-brand-foreground',
                                )}
                            >
                                {item ?? 'Kaikki'}
                            </button>
                        ))}
                    </div>
                </div>

                <ol className="mt-6 flex flex-col gap-2">
                    {visibleSources.map((source, index) => (
                        <li
                            key={source.id}
                            id={source.id}
                            className={cn(
                                'group animate-[fade-up_0.5s_both] scroll-mt-48 rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-border hover:bg-card/80',
                                highlightedId === source.id &&
                                    'border-brand bg-brand/10 shadow-lg ring-4 shadow-brand/20 ring-brand/30',
                            )}
                            style={{
                                animationDelay: `${Math.min(index, 20) * 25}ms`,
                            }}
                        >
                            <p className="pl-8 -indent-8 leading-relaxed">
                                {source.entry}{' '}
                                {source.url ? (
                                    <>
                                        Luettavissa:{' '}
                                        <a
                                            href={source.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="break-all text-brand underline decoration-brand/40 underline-offset-2 transition-colors hover:decoration-brand"
                                        >
                                            {source.url}
                                            <ExternalLink className="ml-1 hidden size-3.5 group-hover:inline" />
                                        </a>
                                        . Luettu: {source.accessed}.
                                    </>
                                ) : (
                                    <>Luettu: {source.accessed}.</>
                                )}
                            </p>
                            <p className="mt-1 pl-8 text-xs text-muted-foreground">
                                Tekstiviite: ({source.cite}) · {source.category}
                            </p>
                        </li>
                    ))}
                </ol>
                {visibleSources.length === 0 && (
                    <p className="mt-6 text-center text-muted-foreground">
                        Hakuehdoilla ei löytynyt lähteitä.
                    </p>
                )}
            </Section>
        </>
    );
}
