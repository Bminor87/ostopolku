import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    Bot,
    Building2,
    Map,
    Sparkles,
    UserRound,
    UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { sections } from '@/data/sections';

const sectionDetails: Record<
    string,
    { icon: LucideIcon; description: string }
> = {
    yritys: {
        icon: Building2,
        description:
            'Native Instruments, NI 360 -tilaus ja tarpeet, joihin se vastaa.',
    },
    segmentointi: {
        icon: UsersRound,
        description:
            'Neljä toisistaan erottuvaa asiakasryhmää ja niiden kriteerit.',
    },
    asiakaspersoona: {
        icon: UserRound,
        description: 'Aleksi, 38 – elokuva- ja mediasäveltäjä Espoosta.',
    },
    ostopolku: {
        icon: Map,
        description:
            'Tarpeen heräämisestä tilauksen jatkamiseen, askel askeleelta.',
    },
    reflektointi: {
        icon: Sparkles,
        description: 'Mitä opin ja mitä tekisin toisin.',
    },
    tekoaly: {
        icon: Bot,
        description: 'Miten käytin tekoälyä tehtävän tekemisessä.',
    },
    lahteet: {
        icon: BookOpen,
        description: 'Kaikki käytetyt lähteet Haaga-Helian ohjeen mukaan.',
    },
};

const waveBars = Array.from(
    { length: 48 },
    (_, index) => 0.25 + Math.abs(Math.sin(index * 0.55)) * 0.75,
);

export default function Kansi() {
    return (
        <>
            <Head title="Kansi" />

            <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-16 pb-12 sm:px-6 sm:pt-24">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                    <span className="animate-pop rounded-full bg-brand px-3 py-1 text-brand-foreground">
                        Oppimistehtävä 1
                    </span>
                    <span className="animate-pop rounded-full border border-border px-3 py-1 text-muted-foreground [animation-delay:0.1s]">
                        MAR001HH1A-3300 Asiakasymmärrys ja markkinointi
                    </span>
                </div>

                <h1 className="max-w-4xl animate-[fade-up_0.9s_0.1s_both] text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl">
                    Asiakaspersoonan määrittely ja{' '}
                    <span className="animate-shimmer bg-gradient-to-r from-brand via-segment-b to-segment-a bg-[length:200%_auto] bg-clip-text text-transparent">
                        asiakkaan ostopolku
                    </span>
                </h1>

                <p className="max-w-2xl animate-[fade-up_0.9s_0.25s_both] text-xl text-pretty text-muted-foreground">
                    Case:{' '}
                    <strong className="text-foreground">
                        Native Instruments NI 360
                    </strong>{' '}
                    – musiikintekijän ohjelmistotilaus, jolla saa satoja
                    virtuaalisoittimia ja efektejä kuukausimaksua vastaan.
                </p>

                <div
                    className="flex h-24 items-center gap-[3px] sm:gap-1"
                    aria-hidden
                >
                    {waveBars.map((height, index) => (
                        <span
                            key={index}
                            className="flex-1 origin-center animate-wave rounded-full bg-gradient-to-t from-brand to-segment-a opacity-80"
                            style={{
                                height: `${height * 100}%`,
                                animationDelay: `${(index % 12) * 0.09}s`,
                                animationDuration: `${1 + (index % 5) * 0.25}s`,
                            }}
                        />
                    ))}
                </div>

                <dl className="grid animate-[fade-up_0.9s_0.4s_both] gap-4 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur sm:grid-cols-4">
                    <div>
                        <dt className="text-xs text-muted-foreground">
                            Tekijä
                        </dt>
                        <dd className="font-medium">Jesse Hellman</dd>
                    </div>
                    <div>
                        <dt className="text-xs text-muted-foreground">
                            Oppilaitos
                        </dt>
                        <dd className="font-medium">
                            Haaga-Helia ammattikorkeakoulu
                        </dd>
                    </div>
                    <div>
                        <dt className="text-xs text-muted-foreground">
                            Toteutus
                        </dt>
                        <dd className="font-medium">
                            Interaktiivinen web-sovellus
                        </dd>
                    </div>
                    <div>
                        <dt className="text-xs text-muted-foreground">
                            Päivämäärä
                        </dt>
                        <dd className="font-medium">5.11.2026 · versio 1</dd>
                    </div>
                </dl>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
                <h2 className="mb-4 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                    Sisältö
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {sections.slice(1).map((section, index) => {
                        const detail = sectionDetails[section.component];
                        const Icon = detail.icon;

                        return (
                            <Reveal key={section.component} delay={index * 70}>
                                <Link
                                    href={section.href}
                                    prefetch
                                    className="group flex h-full clickable flex-col gap-3 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                            <Icon className="size-5" />
                                        </span>
                                        <span className="text-3xl font-semibold text-muted-foreground/30 tabular-nums">
                                            {section.number}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold">
                                        {section.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {detail.description}
                                    </p>
                                    <span className="mt-auto flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                                        Avaa <ArrowRight className="size-4" />
                                    </span>
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                    Vinkki: kaikki korostuvat ja liikkuvat elementit ovat
                    klikattavia. Lähdeviitteen päälle viemällä näet koko
                    lähteen, ja lähdeluettelo on aina yhden klikkauksen päässä
                    oikeasta yläkulmasta.
                </p>
            </section>
        </>
    );
}
