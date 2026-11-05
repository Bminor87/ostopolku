import { Head } from '@inertiajs/react';
import {
    Baby,
    Car,
    Clapperboard,
    Coffee,
    Eye,
    Film,
    Gamepad2,
    Hand,
    HeartCrack,
    Home,
    Lightbulb,
    MessageSquareQuote,
    Mic2,
    Music,
    Sparkles,
    Target,
    Timer,
    Trees,
    Waves,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Cite } from '@/components/cite';
import { PageHeader, Section, SectionTitle } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const tabs = [
    'Profiili',
    'Empatiakartta',
    'Persoonallisuus',
    'Kanavat',
    'Asiakasprofiili',
] as const;
type Tab = (typeof tabs)[number];

export default function Asiakaspersoona() {
    const [activeTab, setActiveTab] = useState<Tab>('Profiili');

    return (
        <>
            <Head title="Asiakaspersoona" />
            <PageHeader
                number="3"
                title="Asiakaspersoona: Aleksi, elokuva- ja mediasäveltäjä"
            >
                Asiakaspersoona on esimerkki tyypillisestä kohderyhmään
                kuuluvasta asiakkaasta. Se perustuu dataan ja tutkimuksiin
                asiakkaiden käyttäytymisestä, tarpeista, motiiveista ja
                haasteista, ja sen pohjana ovat demografiat, joita täydennetään
                psykologisilla, sosiaalisilla ja ostokäyttäytymisen tekijöillä.
                <Cite refs="hh-persoona" paragraph /> Tarkempaan tarkasteluun
                valitsin segmentin <strong>elokuva- ja mediasäveltäjät</strong>.
            </PageHeader>

            <Section className="pt-0">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
                    <PersonaCard />
                    <div>
                        <div
                            className="mb-4 flex flex-wrap gap-2"
                            role="tablist"
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        'clickable rounded-full border border-border px-4 py-2 text-sm font-medium',
                                        activeTab === tab &&
                                            'border-brand bg-brand text-brand-foreground',
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div key={activeTab} className="animate-pop">
                            {activeTab === 'Profiili' && <ProfileTab />}
                            {activeTab === 'Empatiakartta' && <EmpathyTab />}
                            {activeTab === 'Persoonallisuus' && (
                                <PersonalityTab />
                            )}
                            {activeTab === 'Kanavat' && <ChannelsTab />}
                            {activeTab === 'Asiakasprofiili' && (
                                <CustomerProfileTab />
                            )}
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionTitle kicker="Kuvakollaasi">
                    Aleksin elämä kuvina
                </SectionTitle>
                <p className="mb-4 max-w-3xl text-muted-foreground">
                    Visit Finlandin segmenttipersoonissa tiivistä
                    profiilikorttia täydentää visuaalinen ”mood board”
                    -tyyppinen aktiviteettikollaasi
                    <Cite refs="maki" />. Sama rakenne on käytössä tässä:
                    profiilikortti yllä ja kollaasi alla.
                </p>
                <MoodBoard />
            </Section>

            <Section>
                <SectionTitle kicker="Tutkimustieto">
                    Miksi Aleksi on juuri tällainen?
                </SectionTitle>
                <Justification />
            </Section>
        </>
    );
}

function PersonaCard() {
    return (
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-segment-a/10">
                <div className="relative bg-gradient-to-br from-segment-a/80 via-segment-a/50 to-brand/60 p-6 pb-0">
                    <PersonaDrawing />
                </div>
                <div className="flex flex-col gap-3 p-6">
                    <div>
                        <h2 className="text-2xl font-semibold">
                            Aleksi Varis, 38
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Elokuva- ja mediasäveltäjä (yrittäjä), Espoo
                        </p>
                    </div>
                    <blockquote className="rounded-xl border-l-4 border-brand bg-brand/10 p-3 text-sm italic">
                        ”Ohjaaja kuulee demoni ennen kuin hän kuulee yhtään
                        oikeaa soittajaa – sen on kuulostettava valmiilta.”
                    </blockquote>
                    <dl className="grid grid-cols-2 gap-2 text-sm">
                        {[
                            ['Perhe', 'Puoliso Laura (36), lapset 5 v ja 2 v'],
                            ['Asuminen', 'Paritalo Leppävaarassa, kotistudio'],
                            ['Koulutus', 'Musiikin maisteri, sävellys'],
                            ['Nyt käytössä', 'Vanha Komplete-lisenssi'],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-lg bg-muted/60 p-2"
                            >
                                <dt className="text-xs text-muted-foreground">
                                    {label}
                                </dt>
                                <dd className="font-medium">{value}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="text-xs text-muted-foreground">
                        Kuvitteellinen henkilö. Kuva: piirros tuotettu
                        Claude-tekoälyllä (SVG-koodi).
                    </p>
                </div>
            </div>
        </Reveal>
    );
}

function PersonaDrawing() {
    return (
        <svg
            viewBox="0 0 320 220"
            className="mx-auto w-full max-w-xs"
            role="img"
            aria-label="Piirros Aleksista studiossaan"
        >
            <rect
                x="20"
                y="150"
                width="280"
                height="14"
                rx="4"
                fill="currentColor"
                className="text-foreground/70"
            />
            <rect x="40" y="70" width="110" height="70" rx="6" fill="#0f172a" />
            <rect
                x="170"
                y="70"
                width="110"
                height="70"
                rx="6"
                fill="#0f172a"
            />
            {Array.from({ length: 12 }, (_, index) => (
                <rect
                    key={index}
                    x={52 + index * 8}
                    y={95}
                    width="4"
                    height="30"
                    rx="2"
                    fill="var(--brand)"
                    className="origin-bottom animate-wave"
                    style={{
                        animationDelay: `${index * 0.1}s`,
                        transformBox: 'fill-box',
                    }}
                />
            ))}
            <path
                d="M180 120 C 200 80, 220 130, 240 95 S 270 110, 272 88"
                fill="none"
                stroke="var(--segment-a)"
                strokeWidth="3"
            />
            <rect
                x="60"
                y="164"
                width="200"
                height="16"
                rx="3"
                fill="#f8fafc"
            />
            {Array.from({ length: 14 }, (_, index) => (
                <rect
                    key={index}
                    x={66 + index * 14}
                    y="164"
                    width="6"
                    height="10"
                    fill="#0f172a"
                />
            ))}
            <g className="animate-float">
                <ellipse cx="160" cy="210" rx="52" ry="34" fill="#1e293b" />
                <circle cx="160" cy="150" r="26" fill="#f1c7a6" />
                <path
                    d="M134 146 C 136 120, 186 118, 186 146 C 180 134, 142 132, 134 146 Z"
                    fill="#5b3a29"
                />
                <path
                    d="M136 150 C 132 130, 188 130, 184 150"
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="5"
                />
                <rect
                    x="128"
                    y="146"
                    width="10"
                    height="16"
                    rx="4"
                    fill="#0f172a"
                />
                <rect
                    x="182"
                    y="146"
                    width="10"
                    height="16"
                    rx="4"
                    fill="#0f172a"
                />
            </g>
            <text
                x="250"
                y="45"
                fontSize="22"
                fill="var(--brand)"
                className="animate-float"
                style={{ animationDelay: '1s' }}
            >
                ♪
            </text>
            <text
                x="60"
                y="50"
                fontSize="18"
                fill="var(--segment-a)"
                className="animate-float"
                style={{ animationDelay: '2s' }}
            >
                ♫
            </text>
        </svg>
    );
}

function InfoBlock({
    icon: Icon,
    title,
    children,
}: {
    icon: LucideIcon;
    title: string;
    children: ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-lg">
            <div className="mb-2 flex items-center gap-2 font-semibold">
                <Icon className="size-5 text-brand" />
                {title}
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground">
                {children}
            </div>
        </div>
    );
}

function ProfileTab() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <InfoBlock icon={Clapperboard} title="Työ ja talous">
                Aleksi säveltää toiminimellä musiikkia kotimaisiin
                tv-draamoihin, dokumentteihin ja pelistudioiden mobiilipeleihin.
                Tulot vaihtelevat projekteittain: tv-elokuvasta maksetaan
                tyypillisesti noin 10 000–30 000 puntaa ja 30 minuutin
                tv-jaksosta 1 000–10 000 puntaa
                <Cite refs="soundtrack-academy" />. Kotitalouden tulotaso on
                hyvä, koska Lauralla on vakituinen työ.
            </InfoBlock>
            <InfoBlock icon={Home} title="Elämäntyyli">
                Ruuhkavuodet: päiväkotiaamut, iltaisin kotistudio.
                Viikonloppuisin perhe ulkoilee Nuuksiossa, ja Aleksi käy
                Musiikkitalossa kuuntelemassa orkesterikonsertteja aina kun
                ehtii. Arvostaa laatua ja tunnettuja brändejä.
            </InfoBlock>
            <InfoBlock icon={Target} title="Tarpeet ja tavoitteet">
                <ul className="list-disc space-y-1 pl-4">
                    <li>Realistiset orkesteridemot ohjaajalle nopeasti</li>
                    <li>
                        Ennustettavat kulut epäsäännöllisten tulojen rinnalla
                    </li>
                    <li>
                        Uudet, inspiroivat soundit, jotta musiikki ei kuulosta
                        samalta kuin kilpailijoilla
                    </li>
                    <li>
                        Unelma: kokonaisen kotimaisen pitkän elokuvan musiikki
                    </li>
                </ul>
            </InfoBlock>
            <InfoBlock icon={HeartCrack} title="Haasteet ja pelot">
                <ul className="list-disc space-y-1 pl-4">
                    <li>
                        Tiukat deadlinet ja pienet budjetit: oikeaan orkesteriin
                        ei ole varaa
                    </li>
                    <li>
                        Tuottajat painostavat kertakorvaukseen perustuviin
                        buyout-sopimuksiin
                    </li>
                    <li>Vanhat projektit eivät aukea, jos tilaus loppuu</li>
                    <li>
                        NI:n konkurssi ja omistajanvaihdos: kestääkö
                        ekosysteemi?
                    </li>
                </ul>
                <Cite refs={['cooke', 'ni-faq']} />
            </InfoBlock>
            <InfoBlock icon={Music} title="Nykyiset työkalut ja käyttäytyminen">
                Työskentelee Cubasella ja Kontaktilla, soittaa
                NKS-yhteensopivalla Komplete Kontrol -koskettimistolla.
                Production Expertin DAW-kyselyn mukaan Pro Tools johtaa, mutta
                Logic ja Cubase ovat vahvoja säveltäjien keskuudessa
                <Cite refs="rodgers" />. Omistaa vanhan Komplete-kokoelman ja
                muutamia orkesterikirjastoja. NI 360:n Essentials- ja
                Plus-tasoissa on vain Kontakt Player, eikä niissä ole laajoja
                orkesterikirjastoja, joten ne eivät riitä hänen työhönsä
                <Cite refs="ni-included" />.
            </InfoBlock>
            <InfoBlock icon={Lightbulb} title="Suhtautuminen uutuuksiin">
                Aleksi kuuluu <strong>varhaiseen enemmistöön</strong>: häntä
                kiinnostavat uutuudet, mutta hän tarvitsee todisteita,
                vertailuja ja referenssejä ennen ostoa
                <Cite refs="virta" />.
            </InfoBlock>
        </div>
    );
}

type EmpathyQuadrant = { icon: LucideIcon; title: string; items: string[] };

const empathy: EmpathyQuadrant[] = [
    {
        icon: Mic2,
        title: 'Mitä Aleksi kuulee?',
        items: [
            'Kollegat VI-Control-foorumilla: ”Symphony Series kuulostaa yllättävän hyvältä hintaansa nähden.”',
            'Ohjaajat: ”Voisiko tämä kuulostaa enemmän Hans Zimmeriltä?”',
            'Uutisia NI:n konkurssista ja inMusicin kaupasta',
        ],
    },
    {
        icon: Eye,
        title: 'Mitä Aleksi näkee?',
        items: [
            'YouTube-vertailuja orkesterikirjastoista',
            'NI:n kampanjat ja 14 päivän ilmaisen kokeilun tarjouksen',
            'Kilpailijoiden halvemmat tilaukset, kuten EastWest ComposerCloud+',
        ],
    },
    {
        icon: Sparkles,
        title: 'Mitä hän ajattelee ja tuntee?',
        items: [
            'Innostusta: ”Kaikki soittimet yhden tilauksen takana!”',
            'Epävarmuutta: ”Olenko jumissa vuokralla loppuelämäni?”',
            'Stressiä deadlinesta ja huolta kassavirrasta',
        ],
    },
    {
        icon: MessageSquareQuote,
        title: 'Mitä hän sanoo?',
        items: [
            '”50 euroa kuussa on halvempaa kuin yksikin uusi kirjasto.”',
            '”Tilaan Pron vain tämän sarjan ajaksi.”',
        ],
    },
    {
        icon: Hand,
        title: 'Mitä hän tekee?',
        items: [
            'Vertailee taulukossa tilauksia ja pysyviä lisenssejä',
            'Testaa kirjastot kokeilujaksolla oikeassa projektissa',
            'Kysyy mielipiteitä kollegoilta',
        ],
    },
    {
        icon: Target,
        title: 'Kipupisteet ja toiveet',
        items: [
            'Kipu: levytila (Pro jopa 1 TB), kuukausikulut, epävarma omistus',
            'Toive: luotettava, ammattilaistason orkesteri ja sujuva työnkulku, joka säästää aikaa',
        ],
    },
];

function EmpathyTab() {
    const [highlighted, setHighlighted] = useState<number | null>(null);

    return (
        <div>
            <p className="mb-4 text-sm text-muted-foreground">
                Empatiakartan avulla asetutaan asiakkaan asemaan ja ymmärretään
                hänen kokemuksiaan, tunteitaan ja näkökulmaansa
                <Cite refs="hh-persoona" />. Vie hiiri ruudun päälle.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {empathy.map((quadrant, index) => {
                    const Icon = quadrant.icon;

                    return (
                        <div
                            key={quadrant.title}
                            onMouseEnter={() => setHighlighted(index)}
                            onMouseLeave={() => setHighlighted(null)}
                            className={cn(
                                'rounded-2xl border border-border bg-card/70 p-4 transition-all duration-300',
                                highlighted === index &&
                                    'scale-[1.03] border-brand shadow-xl shadow-brand/20',
                                highlighted !== null &&
                                    highlighted !== index &&
                                    'scale-[0.98] opacity-50',
                            )}
                        >
                            <div className="mb-2 flex items-center gap-2 font-semibold">
                                <Icon className="size-5 text-brand" />
                                {quadrant.title}
                            </div>
                            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                                {quadrant.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
                Levytilavaatimus <Cite refs="ni-360" />; kilpailijan hinta{' '}
                <Cite refs="eastwest" />.
            </p>
        </div>
    );
}

const personality = [
    {
        trait: 'Avoimuus',
        low: 'Perinteinen',
        high: 'Mielikuvituksellinen',
        value: 88,
    },
    {
        trait: 'Tunnollisuus',
        low: 'Spontaani',
        high: 'Järjestelmällinen',
        value: 74,
    },
    {
        trait: 'Ulospäinsuuntautuneisuus',
        low: 'Omissa oloissaan',
        high: 'Seurallinen',
        value: 34,
    },
    {
        trait: 'Sovinnollisuus',
        low: 'Kilpailuhenkinen',
        high: 'Luottavainen',
        value: 62,
    },
    {
        trait: 'Neuroottisuus',
        low: 'Tunne-elämältään vakaa',
        high: 'Stressiherkkä',
        value: 58,
    },
];

function PersonalityTab() {
    const { ref, isInView } = useInView<HTMLDivElement>(0.2);

    return (
        <div
            ref={ref}
            className="rounded-2xl border border-border bg-card/70 p-5"
        >
            <p className="mb-5 text-sm text-muted-foreground">
                Growth Tribe -persoonapohjan mukaisesti persoonallisuus kuvataan
                viiden piirteen (Big Five) avulla
                <Cite refs="growth-tribe" />. Aleksi on luova ja tarkka, mutta
                deadlinet stressaavat häntä.
            </p>
            <div className="flex flex-col gap-5">
                {personality.map((item, index) => (
                    <div key={item.trait} className="group">
                        <div className="mb-1 flex justify-between text-sm">
                            <span className="font-medium">{item.trait}</span>
                            <span className="text-muted-foreground tabular-nums">
                                {item.value} / 100
                            </span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-muted">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-segment-a to-brand transition-all duration-1000 ease-out group-hover:brightness-125"
                                style={{
                                    width: isInView ? `${item.value}%` : '0%',
                                    transitionDelay: `${index * 120}ms`,
                                }}
                            />
                        </div>
                        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                            <span>{item.low}</span>
                            <span>{item.high}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const channels = {
    online: [
        {
            name: 'VI-Control',
            detail: 'Virtuaali-instrumentteja käyttävien säveltäjien ja kehittäjien foorumi',
        },
        {
            name: 'KVR Audio',
            detail: 'Lisäosauutiset ja keskustelut NI 360:sta',
            ref: 'kvr-2024a',
        },
        {
            name: 'ThinkSpace Education (YouTube)',
            detail: 'Guy Michelmoren elokuvamusiikkikanava, 410 000 tilaajaa',
            ref: 'thinkspace',
        },
        {
            name: 'Orchestration Online (YouTube)',
            detail: 'Thomas Gossin orkestraatio-opetus, 90 200 tilaajaa',
            ref: 'goss',
        },
        {
            name: 'Native Instruments (YouTube)',
            detail: 'Tuote-esittelyt, 714 000 tilaajaa',
            ref: 'ni-youtube',
        },
        {
            name: 'Spitfire Audio (YouTube)',
            detail: 'Kilpailijan kirjastoesittelyt, 232 000 tilaajaa',
            ref: 'spitfire-youtube',
        },
        {
            name: 'Instagram ja Yle Areena',
            detail: 'Seuraa kollegoita ja katsoo kotimaisia sarjoja – myös työn vuoksi',
        },
    ],
    offline: [
        {
            name: 'Kotistudio Leppävaarassa',
            detail: 'Tärkein ”paikka”: täällä ostopäätös testataan käytännössä',
        },
        {
            name: 'Musiikkitalo',
            detail: 'Orkesterikonsertit inspiraationa ja korvan kalibrointina',
        },
        {
            name: 'Kuvaus- ja leikkausstudiot',
            detail: 'Palaverit ohjaajien ja tuottajien kanssa',
        },
        {
            name: 'Alan tapahtumat ja festivaalit',
            detail: 'Verkostoituminen muiden säveltäjien kanssa',
        },
    ],
};

function ChannelsTab() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {(['online', 'offline'] as const).map((type) => (
                <div
                    key={type}
                    className="rounded-2xl border border-border bg-card/70 p-5"
                >
                    <h3 className="mb-3 font-semibold">
                        {type === 'online' ? 'Verkossa' : 'Verkon ulkopuolella'}
                    </h3>
                    <ul className="flex flex-col gap-2">
                        {channels[type].map((channel, index) => (
                            <li
                                key={channel.name}
                                className="animate-[fade-up_0.5s_both] rounded-xl bg-muted/50 p-3 text-sm transition-all duration-300 hover:translate-x-1 hover:bg-brand/10"
                                style={{ animationDelay: `${index * 70}ms` }}
                            >
                                <span className="font-medium">
                                    {channel.name}
                                </span>
                                <span className="block text-muted-foreground">
                                    {channel.detail}
                                    {'ref' in channel && channel.ref && (
                                        <Cite refs={channel.ref} />
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

const profileQuestions: { question: string; answer: string }[] = [
    {
        question: 'Mitä he haluavat elämässä?',
        answer: 'Elättää perheensä musiikilla ja saada nimensä isoon kotimaiseen elokuvaan.',
    },
    {
        question: 'Mitkä asiat heitä määrittävät?',
        answer: 'Ammattitaito, laatu ja se, että musiikki palvelee tarinaa.',
    },
    {
        question: 'Mitä autoa he ajavat ja miksi?',
        answer: 'Täyssähköistä farmaria: perheen tarpeet, ympäristö ja hiljainen auto, jossa voi kuunnella miksauksia.',
    },
    {
        question: 'Miksi he ostavat?',
        answer: 'Säästääkseen aikaa ja saadakseen kilpailukykyisen soundin ilman kymmenien tuhansien eurojen orkesteriäänitystä.',
    },
    {
        question: 'Miksi he ostavat juuri täältä?',
        answer: 'Kontakt on hänen työnkulkunsa keskiössä, ja NKS-koskettimisto toimii suoraan NI:n soittimien kanssa.',
    },
    {
        question: 'Mistä muualta he ostavat?',
        answer: 'Spitfire Audio (nyt Splicen omistama), EastWest, Orchestral Tools ja satunnaiset alennusmyynnit.',
    },
    {
        question: 'Mikä heitä estää ostamasta?',
        answer: 'Tilausväsymys, epävarma omistus ja huoli siitä, että sisältö muuttuu kesken tilauksen.',
    },
    {
        question: 'Mitä brändejä he ihailevat, mutta eivät välttämättä osta?',
        answer: 'Ison studion äänitettyjä premium-kirjastoja, joiden hinnat ovat tuhansia euroja.',
    },
    {
        question: 'Kuinka paljon he tuovat rahaa?',
        answer: 'Pro-tason julkaisuhinnalla 50 €/kk eli noin 600 €/vuosi kuukausilaskutuksella.',
    },
];

function CustomerProfileTab() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(0);

    return (
        <div>
            <p className="mb-4 text-sm text-muted-foreground">
                Kurssin asiakasprofiilipohjan kysymykset Aleksin näkökulmasta
                <Cite refs="hh-profiilipohja" />. Klikkaa kysymystä.
            </p>
            <div className="flex flex-col gap-2">
                {profileQuestions.map((item, index) => (
                    <button
                        key={item.question}
                        type="button"
                        onClick={() =>
                            setOpenQuestion(
                                openQuestion === index ? null : index,
                            )
                        }
                        aria-expanded={openQuestion === index}
                        className={cn(
                            'clickable rounded-xl border border-border bg-card/70 px-4 py-3 text-left',
                            openQuestion === index && 'border-brand',
                        )}
                    >
                        <span className="flex items-center justify-between font-medium">
                            {item.question}
                            <span
                                className={cn(
                                    'text-brand transition-transform duration-300',
                                    openQuestion === index && 'rotate-45',
                                )}
                            >
                                +
                            </span>
                        </span>
                        <span
                            className={cn(
                                'grid transition-all duration-500',
                                openQuestion === index
                                    ? 'mt-2 grid-rows-[1fr] opacity-100'
                                    : 'grid-rows-[0fr] opacity-0',
                            )}
                        >
                            <span className="overflow-hidden text-sm text-muted-foreground">
                                {item.answer}
                            </span>
                        </span>
                    </button>
                ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
                Spitfire Audion omistus <Cite refs="roche-spitfire" />;
                julkaisuhinta <Cite refs="baizan" />.
            </p>
        </div>
    );
}

const moodTiles: { icon: LucideIcon; label: string; className: string }[] = [
    {
        icon: Film,
        label: 'Tv-draama deadline perjantaina',
        className: 'sm:col-span-2 sm:row-span-2 bg-segment-a/20',
    },
    { icon: Baby, label: 'Päiväkotiaamut', className: 'bg-segment-b/20' },
    { icon: Coffee, label: 'Neljäs kuppi', className: 'bg-brand/20' },
    {
        icon: Waves,
        label: 'Jousimatot ja kuorot',
        className: 'bg-segment-d/20',
    },
    {
        icon: Gamepad2,
        label: 'Mobiilipelin teema',
        className: 'bg-segment-c/20',
    },
    {
        icon: Trees,
        label: 'Nuuksion lenkit',
        className: 'sm:col-span-2 bg-segment-c/20',
    },
    {
        icon: Timer,
        label: 'Ilta-sessiot klo 21–01',
        className: 'bg-segment-b/20',
    },
    { icon: Car, label: 'Sähköfarmari', className: 'bg-segment-d/20' },
];

function MoodBoard() {
    return (
        <div className="grid auto-rows-[7.5rem] grid-cols-2 gap-3 sm:grid-cols-4">
            {moodTiles.map((tile, index) => {
                const Icon = tile.icon;

                return (
                    <Reveal
                        key={tile.label}
                        delay={index * 60}
                        className={cn(
                            'group',
                            tile.className.includes('row-span-2') &&
                                'sm:row-span-2',
                            tile.className.includes('col-span-2') &&
                                'sm:col-span-2',
                        )}
                    >
                        <div
                            className={cn(
                                'flex h-full flex-col justify-between rounded-2xl border border-border p-4 transition-all duration-500 group-hover:scale-[1.03] group-hover:-rotate-1 group-hover:shadow-xl',
                                tile.className.replace(
                                    /sm:(col|row)-span-2/g,
                                    '',
                                ),
                            )}
                        >
                            <Icon className="size-8 text-foreground/70 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
                            <span className="font-medium">{tile.label}</span>
                        </div>
                    </Reveal>
                );
            })}
        </div>
    );
}

function Justification() {
    return (
        <div className="grid gap-4 lg:grid-cols-3">
            <Reveal className="rounded-2xl border border-border bg-card/70 p-6">
                <h3 className="mb-2 font-semibold">Miksi tämä segmentti?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Kun Pro- ja Plus-tasoja vertaa, suurin ero on
                    instrumenteissa, jotka kiinnostavat elokuvamusiikin ja
                    klassisen musiikin säveltäjiä: koko Symphony Series,
                    Action-sarja, Choir Omnia ja soolojouset
                    <Cite refs="ni-included" />. NI siis rakentaa kalleimman
                    tasonsa juuri näille asiakkaille, ja heiltä tulee suurin
                    tulo asiakasta kohden. Lisäksi minua kiinnostaa itseäni
                    elokuvamusiikin säveltäminen, ja haluan ymmärtää, miksi nämä
                    soittimet ovat niin arvokkaita.
                </p>
            </Reveal>
            <Reveal
                delay={100}
                className="rounded-2xl border border-border bg-card/70 p-6"
            >
                <h3 className="mb-2 font-semibold">
                    Fonectan luokka 9: Laatukeskeiset uraperheet
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Luokka koostuu 30–50-vuotiaista, korkeasti koulutetuista ja
                    hyvätuloisista perheellisistä, jotka asuvat usein
                    pääkaupunkiseudulla uusissa pientaloissa. Brändeillä on
                    heille vahva vaikutus, tekniikka on tärkeä osa elämää ja
                    verkkokauppa on yleistä.
                    <Cite refs="fonecta" paragraph /> Oma pohdinta: Aleksi sopii
                    luokkaan muuten hyvin, mutta yrittäjänä hänen tulonsa
                    vaihtelevat enemmän kuin luokan tyypillisellä ylemmällä
                    toimihenkilöllä. Siksi kassavirran ennustettavuus on hänelle
                    tärkeää.
                </p>
            </Reveal>
            <Reveal
                delay={200}
                className="rounded-2xl border border-border bg-card/70 p-6"
            >
                <h3 className="mb-2 font-semibold">
                    Miksi virtuaaliorkesteri?
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Vuonna 2025 ensi-iltansa saaneista 19:stä Elokuvasäätiön
                    tukemasta pitkästä fiktioelokuvasta 13:n budjetti oli 1–2
                    miljoonaa euroa
                    <Cite refs="ses" />. Tällaisilla budjeteilla oikean
                    orkesterin äänittäminen on harvoin mahdollista. Televisio on
                    Teoston suurin tulolähde, 22,3 miljoonaa euroa vuonna 2025
                    <Cite refs="teosto" />. Suomessa toimi vuoden 2024 lopussa
                    270 pelistudiota
                    <Cite refs="byshonkov" />. Mediasävellystyötä siis on, mutta
                    budjetit ovat pieniä, ja siksi virtuaalisoittimet ovat
                    välttämättömiä.
                </p>
            </Reveal>
        </div>
    );
}
