import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Check,
    Clapperboard,
    Headphones,
    Music2,
    Piano,
    X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Cite } from '@/components/cite';
import { PageHeader, Section, SectionTitle } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';
import { asiakaspersoona } from '@/routes';

type CriterionKey =
    | 'demographic'
    | 'geographic'
    | 'psychographic'
    | 'behavioural';

const criteria: { key: CriterionKey; label: string; description: string }[] = [
    {
        key: 'demographic',
        label: 'Demografiset',
        description: 'Ikä, ammatti, koulutus, tulot ja elämänvaihe.',
    },
    {
        key: 'geographic',
        label: 'Maantieteelliset',
        description: 'Asuinpaikka, kaupunki vs. maaseutu, kieli ja kulttuuri.',
    },
    {
        key: 'psychographic',
        label: 'Psykografiset',
        description: 'Arvot, asenteet, elämäntyyli ja persoonallisuus.',
    },
    {
        key: 'behavioural',
        label: 'Käyttäytyminen',
        description:
            'Käyttötiheys, ostotapa, hintaherkkyys ja asiakassuhteen vaihe.',
    },
];

type Segment = {
    id: string;
    name: string;
    icon: LucideIcon;
    colour: string;
    tier: string;
    tagline: string;
    /** Position on the segment map: willingness to pay and professional orientation, 0–100. */
    position: { x: number; y: number };
    profile: Record<CriterionKey, string>;
    fonecta: string;
    relationship: string;
    marketing: string;
};

const segments: Segment[] = [
    {
        id: 'a',
        name: 'Elokuva- ja mediasäveltäjät',
        icon: Clapperboard,
        colour: 'var(--segment-a)',
        tier: 'Pro',
        tagline: 'Orkesterisoundit deadlinea vastaan',
        position: { x: 82, y: 88 },
        profile: {
            demographic:
                '28–55-vuotiaat, korkeasti koulutetut säveltäjät; usein yrittäjiä tai freelancereita. Tulot vaihtelevat projekteittain.',
            geographic:
                'Kasvukeskukset ja erityisesti pääkaupunkiseutu, jossa tuotantoyhtiöt, Yle ja suurin osa pelistudioista toimivat.',
            psychographic:
                'Perfektionistisia ja laatutietoisia. Ammatti-identiteetti on vahva, ja realistinen orkesterisoundi on ammattitaidon näyte ohjaajalle.',
            behavioural:
                'Käyttää työkaluja päivittäin. Tarvitsee orkesteri- ja kuorokirjastoja sekä täyden Kontaktin. Ostaa harkiten, mutta paljon.',
        },
        fonecta: '9 Laatukeskeiset uraperheet',
        relationship: 'Kanta- ja avainasiakkaat',
        marketing:
            'Ammattimaiset demot, vertailut ja kokeilu oikeassa projektissa. Viesti: ”valmiina seuraavaan tilaustyöhön”.',
    },
    {
        id: 'b',
        name: 'Pop- ja hiphop-tuottajat',
        icon: Headphones,
        colour: 'var(--segment-b)',
        tier: 'Essentials',
        tagline: 'Nopeasti trendikkääseen biittiin',
        position: { x: 30, y: 55 },
        profile: {
            demographic:
                'Noin 18–30-vuotiaat opiskelijat ja nuoret työssäkävijät; pienet tulot.',
            geographic: 'Suuret ja keskisuuret kaupungit, opiskelijakaupungit.',
            psychographic:
                'Trendi- ja yhteisötietoisia. Somen ja vaikuttajien suositukset ohjaavat valintoja. Spontaaneja.',
            behavioural:
                'Tekee biittejä illalla ja viikonloppuisin. Essentials riittää yleensä: rummut, syntikat ja loopit ovat tärkeimpiä. Ostaa verkosta impulsiivisesti.',
        },
        fonecta: '1 Impulsiiviset nuoret aikuiset',
        relationship: 'Prospektit ja ensiostajat',
        marketing:
            'TikTok- ja YouTube-sisältö, tuottajavaikuttajat, opiskelija-alennus ja ilmainen kokeilu.',
    },
    {
        id: 'c',
        name: 'Budjetissa olevat harrastajat',
        icon: Piano,
        colour: 'var(--segment-c)',
        tier: 'Essentials / Plus',
        tagline: 'Omaksi ilokseen soittamista',
        position: { x: 18, y: 18 },
        profile: {
            demographic:
                '30–45-vuotiaat lapsiperheiden vanhemmat; keskituloisia työntekijöitä ja toimihenkilöitä.',
            geographic:
                'Koko Suomi; asuvat usein omakoti- tai rivitalossa kaupunkien ulkopuolella.',
            psychographic:
                'Musiikki on rentoutumista ja omaa aikaa. Suhtautuvat uuteen myönteisesti, mutta raha on tiukalla.',
            behavioural:
                'Soittaa syntikkaa tai pianoa satunnaisesti. Hintaherkkä: tilaa Plussan, jos rahat riittävät, muuten Essentialsin. Voi tilata kuukaudeksi kerrallaan.',
        },
        fonecta: '6 Ruuhkavuosien suorittajat',
        relationship: 'Satunnaisasiakkaat',
        marketing:
            'Kausikampanjat ja alennukset, helppous, ”soita heti” -esimerkit ja aloittelijoille suunnattu blogisisältö.',
    },
    {
        id: 'd',
        name: 'Tosissaan olevat ja ammattilaistuottajat',
        icon: Music2,
        colour: 'var(--segment-d)',
        tier: 'Plus / Pro',
        tagline: 'Monityylinen studiotyö',
        position: { x: 65, y: 70 },
        profile: {
            demographic:
                '25–40-vuotiaat artistituottajat, miksaajat ja studioyrittäjät; korkeakoulutettuja tai alalla pitkään toimineita.',
            geographic:
                'Suuret kaupungit, joissa studiot, artistit ja levy-yhtiöt ovat lähellä.',
            psychographic:
                'Sosiaalisesti aktiivisia, verkostoituvia ja elämyshakuisia. Haluavat erottua ja kokeilla uutta, eivät ole merkkiuskollisia.',
            behavioural:
                'Vertailee paljon. Valitsee Plussan tai Pron musiikkityylin mukaan. Käyttää NKS-ohjaimia ja Maschinea.',
        },
        fonecta: '4 Itsenäistyvät elämystenmetsästäjät',
        relationship: 'Kanta-asiakkaat ja suosittelijat',
        marketing:
            'Artistiyhteistyöt, ammattilaisfoorumit, NKS-ekosysteemi ja päivitys Plussasta Prohon projektin mukaan.',
    },
];

const evaluationCriteria = [
    {
        label: 'Selvitettävissä',
        detail: 'Segmentin ominaisuudet on oltava selvitettävissä, jotta ryhmä voidaan muodostaa.',
    },
    {
        label: 'Riittävän suuri',
        detail: 'Segmentin on oltava liiketoiminnan kannalta riittävän suuri ja kasvava.',
    },
    {
        label: 'Keskenään erilaisia',
        detail: 'Segmenttien on oltava keskenään erilaisia, mutta segmentin sisällä ostajien on käyttäydyttävä samankaltaisesti.',
    },
    {
        label: 'Tavoitettavissa',
        detail: 'Segmentti on pystyttävä tavoittamaan kannattavasti esimerkiksi mediavalinnoilla ja jakelulla.',
    },
];

/** How well each segment meets each evaluation criterion (own assessment). */
const evaluationScores: Record<string, boolean[]> = {
    a: [true, true, true, true],
    b: [true, true, true, true],
    c: [true, true, true, false],
    d: [true, true, true, true],
};

export default function Segmentointi() {
    const [activeCriterion, setActiveCriterion] = useState<CriterionKey | null>(
        null,
    );
    const [selectedSegment, setSelectedSegment] = useState('a');
    const [openEvaluation, setOpenEvaluation] = useState<number | null>(null);
    const segment =
        segments.find((item) => item.id === selectedSegment) ?? segments[0];
    const SegmentIcon = segment.icon;

    return (
        <>
            <Head title="Segmentointi" />
            <PageHeader number="2" title="Segmentointi">
                Segmentointi on epäyhtenäisten markkinoiden jakamista toisistaan
                erottuviin ostajaryhmiin. Niistä yritys valitsee oman
                kohderyhmänsä, jolle se suunnittelee ryhmän tarpeita ja
                toimintatapoja vastaavan markkinointiohjelman. Lähtökohtana on,
                että eri asiakasryhmillä on erilaiset tarpeet ja ostoperusteet:
                kun yrität tarjota kaikkea kaikille, et tarjoa kenellekään
                mitään.
                <Cite refs="hh-segmentointi" paragraph />
            </PageHeader>

            <Section>
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        {
                            title: 'Rooli ryhmittelyssä',
                            body: 'Asiakastiedon pohjalta kuluttajat ryhmitellään. Segmentti on asiakasryhmä, jonka ostajilla on vähintään yksi ostamiseen liittyvä yhteinen piirre.',
                            refs: ['hh-asiakasymmarrys', 'hh-segmentointi'],
                        },
                        {
                            title: 'Rooli kohdennetussa strategiassa',
                            body: 'Markkinoinnin kohdistaminen ja eriyttäminen eri ryhmille on taloudellisempaa ja tuloksellisempaa kuin kaikille samalla tavalla markkinoiminen.',
                            refs: ['hh-segmentointi'],
                        },
                        {
                            title: 'NI 360:n strategia',
                            body: 'NI käyttää selektiivistä eli eriytettyä strategiaa: kolme eri hintaista tasoa on rakennettu eri asiakasryhmille, ja kullekin ryhmälle viestitään omalla tavallaan.',
                            refs: ['ni-360'],
                        },
                    ].map((card, index) => (
                        <Reveal
                            key={card.title}
                            delay={index * 100}
                            className="rounded-2xl border border-border bg-card/70 p-6"
                        >
                            <h3 className="mb-2 font-semibold">{card.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {card.body}
                                <Cite refs={card.refs} />
                            </p>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionTitle kicker="Kriteerit">
                    Valitse segmentointikriteeri
                </SectionTitle>
                <p className="mb-4 max-w-3xl text-muted-foreground">
                    Kuluttajamarkkinoilla voidaan käyttää esimerkiksi
                    demografisia, maantieteellisiä, psykografisia ja
                    käyttäytymiseen perustuvia kriteerejä sekä asiakassuhteen
                    vaihetta
                    <Cite refs="hh-segmentointi" />. Segmentit rakennettiin
                    yhdistelemällä kaikkia neljää. Klikkaa kriteeriä, niin
                    segmenttikorteista korostetaan sitä koskeva tieto.
                </p>
                <div className="flex flex-wrap gap-2">
                    {criteria.map((criterion) => (
                        <button
                            key={criterion.key}
                            type="button"
                            onClick={() =>
                                setActiveCriterion(
                                    activeCriterion === criterion.key
                                        ? null
                                        : criterion.key,
                                )
                            }
                            className={cn(
                                'clickable rounded-full border border-border px-4 py-2 text-sm font-medium',
                                activeCriterion === criterion.key &&
                                    'border-brand bg-brand text-brand-foreground',
                            )}
                        >
                            {criterion.label}
                        </button>
                    ))}
                </div>
                {activeCriterion && (
                    <p
                        key={activeCriterion}
                        className="mt-3 animate-pop text-sm text-muted-foreground"
                    >
                        {
                            criteria.find(
                                (criterion) =>
                                    criterion.key === activeCriterion,
                            )?.description
                        }
                    </p>
                )}

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {segments.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Reveal key={item.id} delay={index * 90}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedSegment(item.id);
                                        document
                                            .getElementById('segmenttikartta')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                    }}
                                    className="group flex h-full w-full clickable flex-col gap-3 rounded-2xl border border-border bg-card/70 p-5 text-left"
                                    style={{
                                        borderTopColor: item.colour,
                                        borderTopWidth: 4,
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="flex size-11 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                                            style={{
                                                backgroundColor: item.colour,
                                            }}
                                        >
                                            <Icon className="size-5" />
                                        </span>
                                        <div>
                                            <h3 className="font-semibold">
                                                {item.name}
                                            </h3>
                                            <p className="text-xs text-muted-foreground">
                                                {item.tagline}
                                            </p>
                                        </div>
                                        <span className="ml-auto rounded-full bg-muted px-2.5 py-1 text-xs font-semibold">
                                            {item.tier}
                                        </span>
                                    </div>
                                    <dl className="flex flex-col gap-1.5 text-sm">
                                        {criteria.map((criterion) => (
                                            <div
                                                key={criterion.key}
                                                className={cn(
                                                    'rounded-lg px-2 py-1 transition-all duration-300',
                                                    activeCriterion ===
                                                        criterion.key &&
                                                        'scale-[1.02] bg-brand/15 ring-1 ring-brand',
                                                    activeCriterion &&
                                                        activeCriterion !==
                                                            criterion.key &&
                                                        'opacity-40',
                                                )}
                                            >
                                                <dt className="inline font-medium">
                                                    {criterion.label}:{' '}
                                                </dt>
                                                <dd className="inline text-muted-foreground">
                                                    {
                                                        item.profile[
                                                            criterion.key
                                                        ]
                                                    }
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </button>
                            </Reveal>
                        );
                    })}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                    Segmenttien tasosuositukset perustuvat tilaustasojen
                    sisältöön
                    <Cite refs="ni-included" />. Demografiset ja
                    elämäntyylikuvaukset on peilattu Fonectan
                    ostokäyttäytymisluokkiin
                    <Cite refs="fonecta" />, ja pelistudioiden sijoittuminen
                    Suomen pelialan tilastoihin
                    <Cite refs="byshonkov" />.
                </p>
            </Section>

            <Section>
                <div id="segmenttikartta" className="scroll-mt-24">
                    <SectionTitle kicker="Segmenttikartta">
                        Maksuhalukkuus × ammattimaisuus
                    </SectionTitle>
                </div>
                <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                    <Reveal className="relative aspect-square w-full rounded-3xl border border-border bg-card/70 p-6 sm:aspect-[4/3]">
                        <div className="absolute inset-6 border-b-2 border-l-2 border-muted-foreground/30">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:25%_25%] opacity-60" />
                            {segments.map((item) => {
                                const Icon = item.icon;
                                const isSelected = item.id === selectedSegment;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() =>
                                            setSelectedSegment(item.id)
                                        }
                                        aria-label={item.name}
                                        className="group absolute -translate-x-1/2 translate-y-1/2 cursor-pointer"
                                        style={{
                                            left: `${item.position.x}%`,
                                            bottom: `${item.position.y}%`,
                                        }}
                                    >
                                        <span
                                            className={cn(
                                                'absolute inset-0 rounded-full opacity-40',
                                                isSelected && 'animate-ping',
                                            )}
                                            style={{
                                                backgroundColor: item.colour,
                                            }}
                                        />
                                        <span
                                            className={cn(
                                                'relative flex size-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 group-hover:scale-125 sm:size-14',
                                                isSelected &&
                                                    'scale-125 ring-4 ring-background',
                                            )}
                                            style={{
                                                backgroundColor: item.colour,
                                            }}
                                        >
                                            <Icon className="size-5 sm:size-6" />
                                        </span>
                                        <span className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-md bg-popover px-2 py-1 text-xs font-medium whitespace-nowrap opacity-0 shadow transition-opacity group-hover:opacity-100">
                                            {item.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                            Maksuhalukkuus →
                        </span>
                        <span className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
                            Ammattimaisuus →
                        </span>
                    </Reveal>

                    <div
                        key={segment.id}
                        className="flex animate-pop flex-col gap-4 rounded-3xl border border-border bg-card/80 p-6"
                        style={{ borderColor: segment.colour }}
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className="flex size-12 items-center justify-center rounded-2xl text-white"
                                style={{ backgroundColor: segment.colour }}
                            >
                                <SegmentIcon className="size-6" />
                            </span>
                            <div>
                                <h3 className="text-xl font-semibold">
                                    {segment.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Sopivin taso: NI 360 {segment.tier}
                                </p>
                            </div>
                        </div>
                        <dl className="grid gap-3 text-sm">
                            <div>
                                <dt className="font-medium">
                                    Fonectan ostokäyttäytymisluokka
                                </dt>
                                <dd className="text-muted-foreground">
                                    {segment.fonecta}
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium">
                                    Asiakassuhteen vaihe
                                </dt>
                                <dd className="text-muted-foreground">
                                    {segment.relationship}
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium">
                                    Miten tavoitetaan
                                </dt>
                                <dd className="text-muted-foreground">
                                    {segment.marketing}
                                </dd>
                            </div>
                        </dl>
                        {segment.id === 'a' && (
                            <Link
                                href={asiakaspersoona.url()}
                                className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 font-semibold text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
                            >
                                Valittu tarkempaan tarkasteluun – tutustu
                                persoonaan <ArrowRight className="size-4" />
                            </Link>
                        )}
                    </div>
                </div>
            </Section>

            <Section>
                <SectionTitle kicker="Arviointi">
                    Ovatko segmentit käyttökelpoisia?
                </SectionTitle>
                <p className="mb-6 max-w-3xl text-muted-foreground">
                    Segmenttejä arvioidaan neljällä kriteerillä
                    <Cite refs="hh-segmentointi" />. Klikkaa kriteeriä
                    nähdäksesi selityksen. Taulukko on oma arvioni.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-border bg-card/70">
                    <table className="w-full min-w-[640px] text-sm">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="p-3 text-left font-medium text-muted-foreground">
                                    Kriteeri
                                </th>
                                {segments.map((item) => (
                                    <th
                                        key={item.id}
                                        className="p-3 text-center font-medium"
                                        style={{ color: item.colour }}
                                    >
                                        {item.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {evaluationCriteria.map((criterion, rowIndex) => (
                                <tr
                                    key={criterion.label}
                                    className="border-b border-border last:border-0"
                                >
                                    <td className="p-3">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenEvaluation(
                                                    openEvaluation === rowIndex
                                                        ? null
                                                        : rowIndex,
                                                )
                                            }
                                            className="cursor-pointer text-left font-medium underline decoration-brand/40 decoration-dotted underline-offset-4 transition-colors hover:text-brand"
                                        >
                                            {criterion.label}
                                        </button>
                                        {openEvaluation === rowIndex && (
                                            <p className="mt-1 animate-pop text-xs text-muted-foreground">
                                                {criterion.detail}
                                            </p>
                                        )}
                                    </td>
                                    {segments.map((item) => (
                                        <td
                                            key={item.id}
                                            className="p-3 text-center"
                                        >
                                            {evaluationScores[item.id][
                                                rowIndex
                                            ] ? (
                                                <Check className="mx-auto size-5 text-segment-c" />
                                            ) : (
                                                <X className="mx-auto size-5 text-segment-b" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                    Budjettiharrastajat ovat hajallaan eri puolilla Suomea, eikä
                    heillä ole yhtä yhteistä kanavaa, joten heidän kannattava
                    tavoittamisensa on vaikeinta. Elokuva- ja mediasäveltäjät
                    ovat lukumäärältään pienin ryhmä, mutta he maksavat
                    kalleimman tason ja ovat siksi arvokkaita.
                </p>
            </Section>
        </>
    );
}
