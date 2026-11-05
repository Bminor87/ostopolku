import { Head } from '@inertiajs/react';
import {
    BadgeCheck,
    CheckCircle2,
    CreditCard,
    Lightbulb,
    MessagesSquare,
    Scale,
    Search,
    ShieldAlert,
    Sparkles,
    Trophy,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Cite } from '@/components/cite';
import { PageHeader, Section, SectionTitle } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

type Stage = {
    id: string;
    icon: LucideIcon;
    title: string;
    when: string;
    /** Emotional state from -2 (very negative) to 2 (very positive). */
    feeling: number;
    feelingLabel: string;
    does: ReactNode;
    touchpoints: string[];
    thinks: string;
    pain: ReactNode;
    opportunity: ReactNode;
};

const stages: Stage[] = [
    {
        id: 'tarve',
        icon: Lightbulb,
        title: 'Tarpeen tunnistaminen',
        when: 'Syyskuu, viikko 1',
        feeling: 0,
        feelingLabel: 'Innostunut mutta stressaantunut',
        does: (
            <>
                Aleksi saa sopimuksen 8-osaisen rikosdraaman musiikista. Ohjaaja
                toivoo ”tummia jousia, kuoroa ja isoja lyömäsoittimia”.{' '}
                <strong>Sisäinen ärsyke:</strong> vanhat kirjastot kuulostavat
                vanhentuneilta, ja kolmannen osapuolen kirjasto vaatii täyden
                Kontaktin. <strong>Ulkoinen ärsyke:</strong> kollega julkaisee
                Instagramissa kuorodemon, ja NI:n sivuilla on näkyvä ”Try 360 –
                Start your free trial” -painike
                <Cite refs="ni-home" />. Hinta ja monimutkaisuus tarkoittavat,
                että päätös vaatii tiedonhakua
                <Cite refs="hh-ostoprosessi" />.
            </>
        ),
        touchpoints: ['Tuottajan sähköposti', 'Instagram', 'NI:n verkkosivu'],
        thinks: '”Vanhoilla soundeilla en voita tätä. Tarvitsen jotain uutta – nopeasti.”',
        pain: 'Aikaa on kolme viikkoa ensimmäisiin demoihin.',
        opportunity:
            'Uudelleenkohdennettu mainonta ja kuoro- ja jousidemot NI:n somessa juuri tällaisille tilanteille.',
    },
    {
        id: 'tieto',
        icon: Search,
        title: 'Tiedon etsiminen',
        when: 'Syyskuu, viikot 1–2',
        feeling: -1,
        feelingLabel: 'Epävarma, epäluuloinen',
        does: (
            <>
                Aleksi käyttää kaikkia tietolähteiden tyyppejä:{' '}
                <strong>henkilökohtaiset</strong> (kollegat, foorumit),{' '}
                <strong>kaupalliset</strong> (NI:n sivut ja tuki),{' '}
                <strong>julkiset</strong> (MusicTech, CDM) ja{' '}
                <strong>kokemukselliset</strong> (ääninäytteet ja kokeilu)
                <Cite refs="hh-ostoprosessi" />. Foorumeilla tilausta kehutaan
                siitä, että sillä voi vihdoin kokeilla kaikkia kirjastoja, mutta
                myös kritisoidaan: ”Kontakt 7 vain Pro-tasolla 50 dollarilla on
                jotain muuta.”
                <Cite refs={['kvr-2024a', 'kvr-2024b']} /> Uutisista Aleksi
                lukee NI:n maksukyvyttömyydestä ja inMusicin kaupasta
                <Cite refs={['synth-anatomy', 'inmusic']} />.
            </>
        ),
        touchpoints: [
            'Google',
            'VI-Control ja KVR Audio',
            'YouTube-vertailut',
            'NI:n tukisivut',
            'Musiikkiteknologian uutissivut',
        ],
        thinks: '”Onko järkevää sitoutua firmaan, joka juuri meni konkurssiin?”',
        pain: 'Hintoja ei näy ennen kuin tilaustaso on valittu, ja keskustelut ovat ristiriitaisia.',
        opportunity: (
            <>
                Selkeä ja avoin hinnoittelu sekä vakuutus jatkuvuudesta.
                inMusicin viesti ”työkalut toimivat jatkossakin” kannattaa tuoda
                näkyvästi esiin
                <Cite refs={['baer', 'inmusic']} />.
            </>
        ),
    },
    {
        id: 'vertailu',
        icon: Scale,
        title: 'Vaihtoehtojen vertailu',
        when: 'Syyskuu, viikko 2',
        feeling: 0,
        feelingLabel: 'Analyyttinen',
        does: (
            <>
                Kyse on korkean sitoutumisen ostosta: Aleksi käyttää vertailuun
                paljon aikaa, ja ostoon liittyy taloudellisia, laatuun liittyviä
                ja ajankäytöllisiä riskejä
                <Cite refs="hh-ostoprosessi" />. Hän tekee taulukon viidestä
                vaihtoehdosta (alla interaktiivisena).
            </>
        ),
        touchpoints: [
            'Kilpailijoiden sivut',
            'Oma vertailutaulukko',
            'Kollegan mielipide',
        ],
        thinks: '”EastWest on halvempi, mutta se ei toimi Kontaktissa. Spitfiren saisi omaksi…”',
        pain: 'Moottorit eroavat toisistaan (Kontakt, OPUS, Spitfiren oma soitin), joten vaihtaminen on työlästä.',
        opportunity:
            'Vertailusivu ”NI 360 Pro vs. muut”, jossa korostetaan Kontaktin kolmansien osapuolten ekosysteemiä.',
    },
    {
        id: 'paatos',
        icon: CreditCard,
        title: 'Ostopäätös',
        when: 'Syyskuu, viikot 2–4',
        feeling: 2,
        feelingLabel: 'Helpottunut ja innostunut',
        does: (
            <>
                Aleksi aloittaa 14 päivän ilmaisen kokeilun ja asentaa sisällön
                Native Access 2:lla (Pro-taso tarvitsee jopa 1 TB levytilaa).
                Hän tekee ensimmäiset demot oikeasti projektiin. NI lähettää
                muistutuksen kahdeksan päivää ennen kuin maksullinen tilaus
                alkaa, ja Aleksi antaa tilauksen jatkua kuukausilaskutuksella.
                Hän maksaa yrityksen luottokortilla.
                <Cite refs={['ni-360', 'ni-faq']} paragraph />
            </>
        ),
        touchpoints: [
            'NI:n kassa',
            'Native Access 2',
            'Muistutussähköposti',
            'Ohjaajan palaute',
        ],
        thinks: '”Ohjaaja hyväksyi ensimmäisen demon – kuoro kuulostaa juuri siltä mitä hän haki.”',
        pain: 'Satojen gigatavujen lataus vie yön, eikä esiladattuja orkesteripaketteja ole.',
        opportunity:
            'Ammattilaisille suunnattu ”Film scoring starter” -esiasetus, joka lataa ensin orkesterikirjastot.',
    },
    {
        id: 'arviointi',
        icon: BadgeCheck,
        title: 'Oston jälkeinen arviointi',
        when: 'Loka–joulukuu',
        feeling: 1,
        feelingLabel: 'Tyytyväinen, pieni epäilys',
        does: (
            <>
                Aleksi kokee <strong>kognitiivista dissonanssia</strong>: oliko
                ComposerCloud+ sittenkin riittävä murto-osalla hinnasta?
                <Cite refs={['hh-ostoprosessi', 'eastwest']} /> Epäilyä lisäävät
                uutiset iZotopen poistumisesta tilauksesta ja NI:n
                irtisanomisista
                <Cite refs={['ni-included', 'willings-uk']} />. Sarjan
                valmistuttua hän laskee tilauksen Plus-tasolle; muutos tulee
                voimaan laskutuskauden lopussa. Jos tilaus päättyy, instrumentit
                toimivat vielä 15 minuuttia raitojen bouncaamiseksi.
                <Cite refs="ni-faq" paragraph />
            </>
        ),
        touchpoints: [
            'Projektin valmistuminen',
            'NI:n uutiskirje',
            'Foorumikeskustelut',
            'Tilinhallinta',
        ],
        thinks: '”Hyvä työkalu, mutta en halua olla vuokralla, kun projekteja ei ole.”',
        pain: (
            <>
                Ekosysteemi muuttuu maksavien asiakkaiden jalkojen alla
                <Cite refs="lhommedieu" />.
            </>
        ),
        opportunity: (
            <>
                Dissonanssia voi lievittää takuilla, lisäpalveluilla ja tiedolla
                <Cite refs="hh-ostoprosessi" />. Esimerkiksi tauko-ominaisuus
                projektien välille ja selkeä tiekartta tulevasta sisällöstä.
            </>
        ),
    },
];

const curveLabels = ['Tarve', 'Tiedonhaku', 'Vertailu', 'Päätös', 'Arviointi'];

const searches = [
    'best orchestral sample library 2026',
    'NI 360 Pro whats included',
    'Symphony Series strings review',
    'Native Instruments insolvency what happens to my licenses',
    'NI 360 vs ComposerCloud',
    'NI 360 cancel do my projects still open',
];

function TypingSearch() {
    const [searchIndex, setSearchIndex] = useState(0);
    const [length, setLength] = useState(0);
    const current = searches[searchIndex];

    useEffect(() => {
        if (length < current.length) {
            const timer = setTimeout(() => setLength((value) => value + 1), 45);

            return () => clearTimeout(timer);
        }

        const pause = setTimeout(() => {
            setLength(0);
            setSearchIndex((index) => (index + 1) % searches.length);
        }, 1600);

        return () => clearTimeout(pause);
    }, [length, current]);

    return (
        <div className="rounded-2xl border border-border bg-card/80 p-4">
            <div className="flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 shadow-inner">
                <Search className="size-4 text-muted-foreground" />
                <span className="font-mono text-sm">
                    {current.slice(0, length)}
                    <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-brand align-middle" />
                </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
                {searches.map((search, index) => (
                    <button
                        key={search}
                        type="button"
                        onClick={() => {
                            setSearchIndex(index);
                            setLength(0);
                        }}
                        className={cn(
                            'cursor-pointer rounded-full border border-border px-3 py-1 text-xs transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand',
                            index === searchIndex &&
                                'border-brand bg-brand/10 text-brand',
                        )}
                    >
                        {search}
                    </button>
                ))}
            </div>
        </div>
    );
}

function EmotionCurve({
    activeIndex,
    onSelect,
}: {
    activeIndex: number;
    onSelect: (index: number) => void;
}) {
    const width = 1000;
    const height = 220;
    const padding = 60;
    const points = stages.map((stage, index) => ({
        x: padding + (index * (width - padding * 2)) / (stages.length - 1),
        y: height / 2 - stage.feeling * 40,
    }));
    const path = points
        .map((point, index) => {
            if (index === 0) {
                return `M ${point.x} ${point.y}`;
            }

            const previous = points[index - 1];
            const midX = (previous.x + point.x) / 2;

            return `C ${midX} ${previous.y}, ${midX} ${point.y}, ${point.x} ${point.y}`;
        })
        .join(' ');

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full"
            role="img"
            aria-label="Aleksin tunnekäyrä ostopolun aikana"
        >
            <defs>
                <linearGradient id="emotion-gradient" x1="0" x2="1">
                    <stop offset="0%" stopColor="var(--segment-a)" />
                    <stop offset="50%" stopColor="var(--segment-b)" />
                    <stop offset="100%" stopColor="var(--brand)" />
                </linearGradient>
            </defs>
            <line
                x1={padding / 2}
                x2={width - padding / 2}
                y1={height / 2}
                y2={height / 2}
                stroke="var(--border)"
                strokeDasharray="6 6"
            />
            <text
                x={8}
                y={30}
                fontSize="22"
                fill="currentColor"
                className="text-muted-foreground"
            >
                😀
            </text>
            <text
                x={8}
                y={height - 48}
                fontSize="22"
                fill="currentColor"
                className="text-muted-foreground"
            >
                😟
            </text>
            <path
                d={path}
                fill="none"
                stroke="url(#emotion-gradient)"
                strokeWidth="5"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="1"
                className="animate-draw"
            />
            {points.map((point, index) => (
                <g
                    key={stages[index].id}
                    className="cursor-pointer"
                    onClick={() => onSelect(index)}
                >
                    <circle
                        cx={point.x}
                        cy={point.y}
                        r={28}
                        fill="transparent"
                    />
                    <circle
                        cx={point.x}
                        cy={point.y}
                        r={index === activeIndex ? 16 : 11}
                        fill={
                            index === activeIndex
                                ? 'var(--brand)'
                                : 'var(--background)'
                        }
                        stroke="var(--brand)"
                        strokeWidth="4"
                        className="transition-all duration-300 hover:fill-[var(--brand)]"
                    />
                    <text
                        x={point.x}
                        y={height - 6}
                        textAnchor="middle"
                        fontSize="15"
                        fill="currentColor"
                        className="font-medium"
                    >
                        {index + 1}. {curveLabels[index]}
                    </text>
                </g>
            ))}
        </svg>
    );
}

type Option = {
    name: string;
    price: string;
    scores: Record<CriterionKey, number>;
    note: ReactNode;
};
type CriterionKey =
    | 'price'
    | 'kontakt'
    | 'orchestra'
    | 'ownership'
    | 'workflow';

const decisionCriteria: { key: CriterionKey; label: string }[] = [
    { key: 'price', label: 'Edullisuus' },
    { key: 'kontakt', label: 'Kontakt-yhteensopivuus' },
    { key: 'orchestra', label: 'Orkesterin laatu ja laajuus' },
    { key: 'ownership', label: 'Omistus' },
    { key: 'workflow', label: 'Tuttu työnkulku (NKS)' },
];

const options: Option[] = [
    {
        name: 'NI 360 Pro',
        price: '50 €/kk (julkaisuhinta)',
        scores: {
            price: 2,
            kontakt: 5,
            orchestra: 4,
            ownership: 1,
            workflow: 5,
        },
        note: (
            <>
                Täysi Kontakt 8 ja koko Symphony Series
                <Cite refs={['baizan', 'ni-included']} />.
            </>
        ),
    },
    {
        name: 'EastWest ComposerCloud+',
        price: '19,99 $/kk tai 99 $/v',
        scores: {
            price: 5,
            kontakt: 1,
            orchestra: 5,
            ownership: 1,
            workflow: 2,
        },
        note: (
            <>
                Yli 43 000 instrumenttia, mutta oma OPUS-moottori
                <Cite refs="eastwest" />.
            </>
        ),
    },
    {
        name: 'Spitfire (Splice Rent-to-Own)',
        price: 'Kuukausierät, lopuksi oma',
        scores: {
            price: 3,
            kontakt: 2,
            orchestra: 5,
            ownership: 5,
            workflow: 2,
        },
        note: (
            <>
                Esim. BBC Symphony Orchestra Professional; Splice-sovellus
                avattava 3 päivän välein
                <Cite refs="splice-spitfire" />.
            </>
        ),
    },
    {
        name: 'Komplete 26 Ultimate',
        price: '1 249 $ kertaostona',
        scores: {
            price: 1,
            kontakt: 5,
            orchestra: 3,
            ownership: 5,
            workflow: 5,
        },
        note: (
            <>
                Pysyvä lisenssi, suuri kertakustannus
                <Cite refs="baer" />.
            </>
        ),
    },
    {
        name: 'Cinesamples Musio',
        price: '9,99 $/kk',
        scores: {
            price: 5,
            kontakt: 1,
            orchestra: 3,
            ownership: 1,
            workflow: 2,
        },
        note: (
            <>
                Koko Cinesamples-katalogi omassa soittimessa
                <Cite refs="roberts" />.
            </>
        ),
    },
];

function DecisionTool() {
    const [weights, setWeights] = useState<Record<CriterionKey, number>>({
        price: 2,
        kontakt: 5,
        orchestra: 4,
        ownership: 2,
        workflow: 4,
    });

    const ranked = useMemo(() => {
        const maxScore =
            Object.values(weights).reduce(
                (sum, weight) => sum + weight * 5,
                0,
            ) || 1;

        return options
            .map((option) => ({
                ...option,
                total:
                    decisionCriteria.reduce(
                        (sum, criterion) =>
                            sum +
                            option.scores[criterion.key] *
                                weights[criterion.key],
                        0,
                    ) / maxScore,
            }))
            .sort((first, second) => second.total - first.total);
    }, [weights]);

    return (
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="rounded-2xl border border-border bg-card/70 p-5">
                <h3 className="mb-1 font-semibold">Aleksin painotukset</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                    Säädä, kuinka tärkeä kukin kriteeri on (0–5). Järjestys
                    päivittyy heti.
                </p>
                <div className="flex flex-col gap-4">
                    {decisionCriteria.map((criterion) => (
                        <label
                            key={criterion.key}
                            className="flex flex-col gap-1 text-sm"
                        >
                            <span className="flex justify-between font-medium">
                                {criterion.label}
                                <span className="text-brand tabular-nums">
                                    {weights[criterion.key]}
                                </span>
                            </span>
                            <input
                                type="range"
                                min={0}
                                max={5}
                                value={weights[criterion.key]}
                                onChange={(event) =>
                                    setWeights((current) => ({
                                        ...current,
                                        [criterion.key]: Number(
                                            event.target.value,
                                        ),
                                    }))
                                }
                                className="cursor-pointer accent-[var(--brand)]"
                            />
                        </label>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {ranked.map((option, index) => (
                    <div
                        key={option.name}
                        className={cn(
                            'relative overflow-hidden rounded-2xl border border-border bg-card/70 p-4 transition-all duration-500',
                            index === 0 &&
                                'border-brand shadow-lg shadow-brand/20',
                        )}
                    >
                        <div
                            className="absolute inset-y-0 left-0 bg-brand/10 transition-all duration-700 ease-out"
                            style={{
                                width: `${Math.round(option.total * 100)}%`,
                            }}
                        />
                        <div className="relative flex items-start gap-3">
                            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                                {index === 0 ? (
                                    <Trophy className="size-4 text-brand" />
                                ) : (
                                    index + 1
                                )}
                            </span>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <span className="font-semibold">
                                        {option.name}
                                    </span>
                                    <span className="text-sm text-brand tabular-nums">
                                        {Math.round(option.total * 100)} %
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {option.price} · {option.note}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <p className="text-xs text-muted-foreground">
                    Pisteytys 1–5 on oma arvioni hankittujen tietojen
                    perusteella.
                </p>
            </div>
        </div>
    );
}

const reasons: { icon: LucideIcon; title: string; body: ReactNode }[] = [
    {
        icon: Sparkles,
        title: 'Kaikki yhdessä paketissa',
        body: (
            <>
                Täysi Kontakt 8 ja premium-orkesterikirjastot samassa
                tilauksessa
                <Cite refs="ni-included" />.
            </>
        ),
    },
    {
        icon: CheckCircle2,
        title: 'Riskitön kokeilu',
        body: (
            <>
                14 päivän ilmainen kokeilu oikeassa projektissa ennen maksua
                <Cite refs="ni-360" />.
            </>
        ),
    },
    {
        icon: CreditCard,
        title: 'Kassavirta',
        body: (
            <>
                Kuukausimaksu sopii epäsäännöllisiin tuloihin paremmin kuin 1
                249 dollarin kertaosto
                <Cite refs="baer" />.
            </>
        ),
    },
    {
        icon: MessagesSquare,
        title: 'Tuttu työnkulku',
        body: 'Vaihtaminen toiseen moottoriin ja ohjaimeen maksaisi aikaa – NKS ja Kontakt ovat jo käytössä.',
    },
    {
        icon: Scale,
        title: 'Joustavuus',
        body: (
            <>
                Tason voi nostaa, laskea tai perua milloin tahansa projektien
                mukaan
                <Cite refs="ni-faq" />.
            </>
        ),
    },
    {
        icon: ShieldAlert,
        title: 'Jatkuvuuden lupaus',
        body: (
            <>
                inMusicin viesti siitä, että työkalut toimivat jatkossakin,
                hälventää konkurssihuolta
                <Cite refs="inmusic" />.
            </>
        ),
    },
];

export default function Ostopolku() {
    const [activeIndex, setActiveIndex] = useState(0);
    const stage = stages[activeIndex];
    const StageIcon = stage.icon;

    return (
        <>
            <Head title="Ostopolku" />
            <PageHeader
                number="4"
                title="Aleksin ostopolku NI 360 Pro -tilaukseen"
            >
                Kuluttajan ostoprosessi etenee tarpeen tunnistamisesta tiedon
                etsimiseen, vaihtoehtojen vertailuun, ostopäätökseen ja oston
                jälkeiseen arviointiin
                <Cite refs="hh-ostoprosessi" />. Ostopolku on kuvattu Journey
                Map -mallin tapaan: mitä Aleksi tekee, missä kosketuspisteissä,
                mitä hän ajattelee ja tuntee, ja mitä mahdollisuuksia NI:llä on.
                Klikkaa vaihetta tai tunnekäyrän pistettä.
            </PageHeader>

            <Section className="pt-0">
                <Reveal className="rounded-3xl border border-border bg-card/70 p-4 sm:p-6">
                    <EmotionCurve
                        activeIndex={activeIndex}
                        onSelect={setActiveIndex}
                    />
                </Reveal>

                <div className="mt-6 grid grid-cols-5 gap-2">
                    {stages.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    'flex clickable flex-col items-center gap-2 rounded-2xl border border-border bg-card/70 p-3 text-center',
                                    index === activeIndex &&
                                        'border-brand bg-brand/10',
                                )}
                            >
                                <span
                                    className={cn(
                                        'flex size-10 items-center justify-center rounded-full transition-all duration-300',
                                        index === activeIndex
                                            ? 'scale-110 bg-brand text-brand-foreground'
                                            : 'bg-muted text-muted-foreground',
                                    )}
                                >
                                    <Icon className="size-5" />
                                </span>
                                <span className="hidden text-xs font-medium sm:block">
                                    {item.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div
                    key={stage.id}
                    className="mt-4 grid animate-pop gap-4 lg:grid-cols-3"
                >
                    <div className="rounded-3xl border border-brand/60 bg-card/80 p-6 lg:col-span-2">
                        <div className="mb-3 flex items-center gap-3">
                            <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                                <StageIcon className="size-6" />
                            </span>
                            <div>
                                <p className="text-xs font-semibold tracking-widest text-brand uppercase">
                                    Vaihe {activeIndex + 1} · {stage.when}
                                </p>
                                <h2 className="text-2xl font-semibold">
                                    {stage.title}
                                </h2>
                            </div>
                        </div>
                        <h3 className="mt-4 mb-1 text-sm font-semibold">
                            Mitä Aleksi tekee
                        </h3>
                        <p className="leading-relaxed text-muted-foreground">
                            {stage.does}
                        </p>
                        <h3 className="mt-4 mb-2 text-sm font-semibold">
                            Kosketuspisteet
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {stage.touchpoints.map((touchpoint, index) => (
                                <span
                                    key={touchpoint}
                                    className="animate-pop rounded-full bg-muted px-3 py-1 text-xs font-medium"
                                    style={{
                                        animationDelay: `${index * 80}ms`,
                                    }}
                                >
                                    {touchpoint}
                                </span>
                            ))}
                        </div>
                        {stage.id === 'tieto' && (
                            <div className="mt-5">
                                <h3 className="mb-2 text-sm font-semibold">
                                    Aleksin hakusanat
                                </h3>
                                <TypingSearch />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="rounded-2xl border border-border bg-card/70 p-5">
                            <h3 className="text-sm font-semibold">Ajattelee</h3>
                            <p className="mt-1 italic">{stage.thinks}</p>
                            <h3 className="mt-3 text-sm font-semibold">
                                Tuntee
                            </h3>
                            <p className="mt-1 text-muted-foreground">
                                {stage.feelingLabel}
                            </p>
                        </div>
                        <div className="rounded-2xl border border-segment-b/50 bg-segment-b/10 p-5">
                            <h3 className="text-sm font-semibold">Kipupiste</h3>
                            <p className="mt-1 text-sm">{stage.pain}</p>
                        </div>
                        <div className="rounded-2xl border border-segment-c/50 bg-segment-c/10 p-5">
                            <h3 className="text-sm font-semibold">
                                NI:n mahdollisuus
                            </h3>
                            <p className="mt-1 text-sm">{stage.opportunity}</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionTitle kicker="Vaihe 3 tarkemmin">
                    Vertaile kuten Aleksi
                </SectionTitle>
                <DecisionTool />
            </Section>

            <Section>
                <SectionTitle kicker="Yhteenveto">
                    Miksi Aleksi päätyy ostamaan NI 360 Pron?
                </SectionTitle>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <Reveal key={reason.title} delay={index * 80}>
                                <div className="group h-full rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/15">
                                    <Icon className="mb-3 size-7 text-brand transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12" />
                                    <h3 className="font-semibold">
                                        {reason.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {reason.body}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
                <p className="mt-6 max-w-3xl text-muted-foreground">
                    Ratkaisevaa ei ole halvin hinta vaan{' '}
                    <strong>ajan säästö ja riskin pienuus</strong>: Aleksin aika
                    on hänen kallein resurssinsa, ja tuttu Kontakt-ekosysteemi
                    ja kokeilujakso poistavat suurimman riskin eli sen, että
                    uusi työkalu hidastaisi deadlinea. Toisaalta tilausväsymys
                    on todellinen: Gearnewsin epävirallisessa lukijakyselyssä
                    valtaosa suosi pysyviä lisenssejä, ja vain kourallinen
                    käytti tilauksia.
                    <Cite refs="douglas" paragraph /> Siksi NI:n kannattaa
                    panostaa joustavuuteen, kuten tasojen vaihtoon projektien
                    välillä.
                </p>
            </Section>
        </>
    );
}
