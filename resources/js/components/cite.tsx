import { Link } from '@inertiajs/react';
import { Fragment } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { getSource } from '@/data/sources';
import { lahteet } from '@/routes';

export type CiteItem = string | { id: string; at?: string };

type CiteProps = {
    /** One or more source ids, optionally with a page or slide locator. */
    refs: CiteItem | CiteItem[];
    /**
     * Paragraph-level citation: the guide places a period inside the
     * brackets when the citation closes several referenced sentences.
     */
    paragraph?: boolean;
};

function normalise(item: CiteItem): { id: string; at?: string } {
    return typeof item === 'string' ? { id: item } : item;
}

/**
 * In-text citation in Haaga-Helia format, e.g. "(Roche 8.5.2024)". Hovering a
 * reference shows the full list entry; clicking opens it in the reference list.
 */
export function Cite({ refs, paragraph = false }: CiteProps) {
    const items = (Array.isArray(refs) ? refs : [refs]).map(normalise);

    return (
        <span className="text-muted-foreground">
            {' '}
            (
            {items.map((item, index) => {
                const source = getSource(item.id);

                return (
                    <Fragment key={`${item.id}-${index}`}>
                        {index > 0 && '; '}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={`${lahteet.url()}#${item.id}`}
                                    className="rounded-sm decoration-brand/50 decoration-dotted underline-offset-4 transition-colors hover:bg-brand/15 hover:text-brand hover:underline"
                                >
                                    {source.cite}
                                    {item.at && `, ${item.at}`}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-md bg-popover p-3 text-left text-xs leading-relaxed text-popover-foreground shadow-xl ring-1 ring-border [&>span>svg]:bg-popover [&>span>svg]:fill-popover">
                                <p>{source.entry}</p>
                                {source.url && (
                                    <p className="mt-1 break-all text-muted-foreground">
                                        {source.url}
                                    </p>
                                )}
                                <p className="mt-2 font-medium text-brand">
                                    Klikkaa avataksesi lähdeluettelossa →
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </Fragment>
                );
            })}
            {paragraph && '.'})
        </span>
    );
}
