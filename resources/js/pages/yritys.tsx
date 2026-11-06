import { Head } from '@inertiajs/react';
import { Brain, Check, Heart, Scale, Users, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Cite } from '@/components/cite';
import { PageHeader, Section, SectionTitle } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

type Milestone = { year: string; title: string; body: ReactNode };

const milestones: Milestone[] = [
    {
        year: '25+ v.',
        title: 'Berliiniläinen pioneeri',
        body: (
            <>
                NI:n mukaan se on ollut musiikin innovaatioiden eturintamassa
                yli 25 vuoden ajan
                <Cite refs="ni-about" />. Yhtiön kotipaikka on Berliini
                <Cite refs="fornitani" />.
            </>
        ),
    },
    {
        year: '2021–2022',
        title: 'Pääomasijoittaja ja Soundwide',
        body: (
            <>
                Yhdysvaltalainen sijoitusyhtiö Francisco Partners hankki
                enemmistöosuuden NI:stä vuonna 2021. Samana vuonna NI ja iZotope
                muodostivat yhteisen konsernin, joka nimettiin vuonna 2022
                Soundwideksi Brainworxin ja Plugin Alliancen liityttyä siihen.
                Kesäkuussa 2023 Soundwide-nimestä luovuttiin Native
                Instrumentsin hyväksi.
                <Cite refs={['fornitani', 'willings-izotope']} paragraph />
            </>
        ),
    },
    {
        year: '5/2024',
        title: 'NI 360 julkaistaan',
        body: (
            <>
                NI 360 korvasi aiemman Komplete Now -tilauksen. Julkaisu alkoi
                toukokuussa 2024 rajatulle käyttäjäjoukolle, ja laajempi
                julkaisu ajoitettiin myöhemmäksi samana vuonna.
                <Cite refs={['roche-2024', 'sos-2024']} paragraph />
            </>
        ),
    },
    {
        year: '1/2026',
        title: 'Esiselvitys- ja maksukyvyttömyysmenettely',
        body: (
            <>
                Native Instruments GmbH haki tammikuussa 2026 alustavaa
                maksukyvyttömyysmenettelyä. Yhtiön mukaan tuotteet, lataukset ja
                tuki jatkuivat normaalisti yritysjärjestelyn ajan.
                <Cite refs="synth-anatomy" paragraph />
            </>
        ),
    },
    {
        year: '5/2026',
        title: 'inMusic ostaa NI:n',
        body: (
            <>
                Akai- ja Moog-brändejä omistava inMusic sopi Native
                Instrumentsin ostamisesta. inMusicin toimitusjohtajan mukaan
                asiakkaiden työkalut toimivat jatkossakin. NI:llä on yli 25
                miljoonaa rekisteröitynyttä käyttäjää.
                <Cite refs={['inmusic', 'fornitani']} paragraph />
            </>
        ),
    },
    {
        year: '7–8/2026',
        title: 'Brändit hajautuvat',
        body: (
            <>
                iZotope siirtyi Boris FX:lle, ja Plugin Alliance sekä Brainworx
                palasivat perustajansa omistukseen. Lisäksi on raportoitu
                irtisanomisista ja Iso-Britannian toimiston sulkemisesta, mitä
                inMusic ei ole vahvistanut.
                <Cite
                    refs={['willings-izotope', 'kirn', 'willings-uk']}
                    paragraph
                />
            </>
        ),
    },
];

type Tier = {
    name: string;
    price: string;
    plugins: string;
    instruments: string;
    sounds: string;
    kontakt: string;
    orchestral: string;
    highlights: string[];
    fits: string;
};

const tiers: Tier[] = [
    {
        name: 'Essentials',
        price: '15 €/kk tai 150 €/v',
        plugins: '60+',
        instruments: '40+',
        sounds: '9 000+',
        kontakt: 'Kontakt Player',
        orchestral: 'Ei orkesterikirjastoja',
        highlights: [
            'Massive X ja 12/32 laajennusta',
            'Battery 4, 24K Drums, 24K Keys',
            'Guitar Rig 7 LE ja 19 efektiä',
        ],
        fits: 'Biisi- ja beattuottajat sekä aloittelijat',
    },
    {
        name: 'Plus',
        price: '25 €/kk tai 250 €/v',
        plugins: '110+',
        instruments: '90+',
        sounds: '18 000+',
        kontakt: 'Kontakt Player',
        orchestral: 'Valikoidut orkesterikirjastot (Symphony Essentials)',
        highlights: [
            'Absynth 6, Una Corda, The Grandeur, Noire',
            'Session Strings Pro 2, Session Horns Pro',
            'Guitar Rig 7 Pro ja miksaustyökaluja',
        ],
        fits: 'Vakavasti harrastavat ja monityyliset tuottajat',
    },
    {
        name: 'Pro',
        price: '55 €/kk tai 550 €/v',
        plugins: '150+',
        instruments: '120+',
        sounds: '24 000+',
        kontakt: 'Täysi Kontakt 8',
        orchestral: 'Premium-orkesterikirjastot',
        highlights: [
            'Koko Symphony Series (jouset, puupuhaltimet, vaskit, lyömäsoittimet)',
            'Action Strikes, Action Strings 2, Choir Omnia, Emotive Strings',
            'Stradivari- ja Guarneri-soolosoittimet',
        ],
        fits: 'Elokuva-, tv- ja pelimusiikin säveltäjät',
    },
];

type Need = { icon: LucideIcon; title: string; short: string; detail: string };

const needs: Need[] = [
    {
        icon: Wrench,
        title: 'Toiminnallinen tarve',
        short: 'Tietynlainen soundi työn valmistumiseksi.',
        detail: 'Musiikkituottaja tai säveltäjä tarvitsee tietynlaisen soundin – esimerkiksi uskottavan jousiorkesterin tai kuoron – saadakseen kappaleen tai tilaustyön valmiiksi. Tilauksesta löytyy valmis työkalu nopeasti ilman erillisiä hankintoja.',
    },
    {
        icon: Heart,
        title: 'Tunnepohjainen tarve',
        short: 'Uudet soundit tuovat iloa ja intoa.',
        detail: 'Uudet soundit tuovat iloa ja uutta intoa esimerkiksi syntikan soittamiseen. Inspiraatio ja luomisen ilo ovat musiikintekijälle usein yhtä tärkeitä kuin itse lopputulos.',
    },
    {
        icon: Users,
        title: 'Sosiaalinen tarve',
        short: 'Identiteetti ja hyväksyntä muusikkoyhteisössä.',
        detail: 'Muusikoiden yhteisössä ammattilaistyökalut rakentavat identiteettiä ja hyväksyntää. NI:n mukaan sen soundeja on kahdeksassa kymmenestä Billboard Top 100 -kappaleesta – samoja työkaluja käyttämällä tekijä samaistuu ammattilaisiin.',
    },
];

export default function Yritys() {
    const [activeMilestone, setActiveMilestone] = useState(2);
    const [activeTier, setActiveTier] = useState(2);
    const [openNeed, setOpenNeed] = useState<number | null>(null);
    const tier = tiers[activeTier];

    return (
        <>
            <Head title="Yritys, tuote ja tarpeet" />
            <PageHeader number="1" title="Yritys, tuote ja asiakkaiden tarpeet">
                Native Instruments (NI) kuvaa itseään johtavaksi
                tietokonepohjaisen musiikkituotannon ja DJ-toiminnan
                ohjelmistojen ja laitteiden valmistajaksi
                <Cite refs="ni-company" />. NI:n tuotteita käyttää sen mukaan
                yli 1,5 miljoonaa tekijää kuukausittain, ja tunnetuimpia
                tuotemerkkejä ovat Komplete, Kontakt, Maschine ja Traktor
                <Cite refs="ni-about" />.
            </PageHeader>

            <Section>
                <SectionTitle kicker="Yritys">
                    Native Instrumentsin vaiheet
                </SectionTitle>
                <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                    <ol className="relative flex flex-col gap-2 border-l-2 border-border pl-6">
                        {milestones.map((milestone, index) => (
                            <li key={milestone.year}>
                                <button
                                    type="button"
                                    onClick={() => setActiveMilestone(index)}
                                    className={cn(
                                        'relative flex w-full clickable items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-left',
                                        activeMilestone === index &&
                                            'border-brand bg-brand/10',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'absolute -left-[33px] size-4 rounded-full border-2 border-background transition-all duration-300',
                                            activeMilestone === index
                                                ? 'scale-125 bg-brand ring-4 ring-brand/30'
                                                : 'bg-muted-foreground/40',
                                        )}
                                    />
                                    <span className="w-20 shrink-0 font-semibold text-brand tabular-nums">
                                        {milestone.year}
                                    </span>
                                    <span className="font-medium">
                                        {milestone.title}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ol>
                    <div
                        key={activeMilestone}
                        className="animate-pop self-start rounded-2xl border border-border bg-card/80 p-6 shadow-xl shadow-brand/5 backdrop-blur"
                    >
                        <p className="text-5xl font-semibold text-brand/80 tabular-nums">
                            {milestones[activeMilestone].year}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold">
                            {milestones[activeMilestone].title}
                        </h3>
                        <p className="mt-3 leading-relaxed">
                            {milestones[activeMilestone].body}
                        </p>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid gap-6 lg:grid-cols-2">
                    <Reveal className="rounded-2xl border border-border bg-card/70 p-6">
                        <SectionTitle kicker="Miksi juuri NI?">
                            Valinnan perustelut
                        </SectionTitle>
                        <ul className="flex flex-col gap-3">
                            {[
                                'Yritys on minulle tuttu, ja valinta perustuu omiin intohimoihini musiikin tekemiseen.',
                                'NI:n tuotteet eivät ole jokapäiväisiä ostoksia: tilaus on pitkäaikainen sitoumus ja jopa satojen eurojen vuosittainen kustannus, joten ostaja vertailee ja hakee tietoa huolellisesti.',
                                'Kuluttajamarkkina (B2C): ostajina ovat yksittäiset harrastajat ja ammattilaiset, eivät organisaatiot.',
                                'Ajankohtainen kiinnostava tilanne: omistajanvaihdos ja tilauksen sisällön muutokset vaikuttavat suoraan asiakkaiden luottamukseen.',
                            ].map((reason, index) => (
                                <li key={index} className="flex gap-3">
                                    <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                                    <span>{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal
                        delay={120}
                        className="rounded-2xl border border-border bg-card/70 p-6"
                    >
                        <SectionTitle kicker="Tuotekategoria">
                            NI 360 -tilaus lyhyesti
                        </SectionTitle>
                        <p className="leading-relaxed">
                            NI 360 on kuukausi- tai vuosimaksullinen tilaus,
                            jolla saa käyttöönsä jopa tuhansien eurojen arvosta
                            virtuaali-instrumentteja ja efektejä. Tasoja on
                            kolme: Essentials, Plus ja Pro. Tilauksen voi
                            peruuttaa, nostaa tai laskea milloin tahansa, ja
                            sitä voi kokeilla ilmaiseksi 14 päivän ajan.
                            <Cite refs="ni-360" paragraph /> Vertailun vuoksi
                            Komplete 26 -kokoelman ostaminen pysyvällä
                            lisenssillä maksaa 549–1 949 dollaria
                            <Cite refs="baer" />.
                        </p>
                    </Reveal>
                </div>
            </Section>

            <Section>
                <SectionTitle kicker="Tuote">
                    Kolme tasoa – klikkaa ja vertaile
                </SectionTitle>
                <div className="grid gap-3 sm:grid-cols-3">
                    {tiers.map((item, index) => (
                        <button
                            key={item.name}
                            type="button"
                            onClick={() => setActiveTier(index)}
                            className={cn(
                                'relative clickable overflow-hidden rounded-2xl border border-border bg-card/70 p-5 text-left',
                                activeTier === index &&
                                    'border-brand bg-brand/10',
                            )}
                        >
                            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                                NI 360
                            </span>
                            <span className="mt-1 block text-2xl font-semibold">
                                {item.name}
                            </span>
                            <span className="mt-2 block text-sm text-muted-foreground">
                                {item.price}
                            </span>
                            <span
                                className={cn(
                                    'absolute right-0 bottom-0 left-0 h-1 origin-left bg-brand transition-transform duration-500',
                                    activeTier === index
                                        ? 'scale-x-100'
                                        : 'scale-x-0',
                                )}
                            />
                        </button>
                    ))}
                </div>

                <div
                    key={tier.name}
                    className="mt-4 grid animate-pop gap-4 rounded-2xl border border-border bg-card/80 p-6 lg:grid-cols-[1fr_1.3fr]"
                >
                    <dl className="grid grid-cols-2 gap-4">
                        {[
                            ['Lisäosia', tier.plugins],
                            ['Instrumentteja', tier.instruments],
                            ['Looppeja ja soundeja', tier.sounds],
                            ['Kontakt', tier.kontakt],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-xl bg-muted/60 p-3"
                            >
                                <dt className="text-xs text-muted-foreground">
                                    {label}
                                </dt>
                                <dd className="text-xl font-semibold">
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-brand">
                            {tier.orchestral}
                        </p>
                        <ul className="flex flex-col gap-2">
                            {tier.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-2">
                                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-auto rounded-xl bg-brand/10 p-3 text-sm">
                            <strong>Sopii erityisesti:</strong> {tier.fits}
                        </p>
                    </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Tasojen sisältö ja hinnat
                    <Cite refs={['ni-360', 'ni-included']} />. Vuositilaus
                    maksaa kymmenen kuukauden hinnan, ja tilausta voi kokeilla
                    14 päivää ilmaiseksi
                    <Cite refs="ni-360" />. Julkaisun aikaan vuonna 2024
                    Pro-taso maksoi 50 €/kk
                    <Cite refs="baizan" />, joten sen hinta on noussut.
                    Pro-tason 44 lisäinstrumenttia ovat pääosin orkesteri- ja
                    elokuvamusiikkikirjastoja, ja vain Pro sisältää täyden
                    Kontakt 8:n, jota tarvitaan monien kolmansien osapuolten
                    kirjastojen avaamiseen. Tuotteita voi käyttää kolmella
                    tietokoneella ja ilman verkkoyhteyttä, kunhan tilaus
                    tarkistetaan kerran kuukaudessa.
                    <Cite refs="ni-faq" paragraph /> Opiskelijat saavat Plus- ja
                    Pro-tason puoleen hintaan (125 tai 250 USD/vuosi)
                    <Cite refs="ni-edu" />. Huom! iZotope-tuotteet eivät enää
                    kuulu 1.8.2026 jälkeen aloitettuihin tilauksiin
                    <Cite refs="ni-included" />.
                </p>
            </Section>

            <Section>
                <SectionTitle kicker="Asiakkaiden tarpeet">
                    Mihin tarpeisiin NI 360 vastaa?
                </SectionTitle>
                <p className="mb-6 max-w-3xl text-muted-foreground">
                    Kuluttajan tarpeet voidaan jakaa toiminnallisiin,
                    tunnepohjaisiin ja sosiaalisiin tarpeisiin, ja ostomotiivit
                    järkiperäisiin ja tunneperäisiin
                    <Cite refs="virta" />. Klikkaa korttia nähdäksesi, miten
                    tarve näkyy NI 360:n kohdalla.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                    {needs.map((need, index) => {
                        const Icon = need.icon;
                        const isOpen = openNeed === index;

                        return (
                            <Reveal key={need.title} delay={index * 100}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenNeed(isOpen ? null : index)
                                    }
                                    aria-expanded={isOpen}
                                    className={cn(
                                        'flex h-full w-full clickable flex-col gap-3 rounded-2xl border border-border bg-card/70 p-6 text-left',
                                        isOpen && 'border-brand',
                                    )}
                                >
                                    <span className="flex size-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                                        <Icon
                                            className={cn(
                                                'size-6 transition-transform duration-500',
                                                isOpen && 'scale-125 rotate-12',
                                            )}
                                        />
                                    </span>
                                    <span className="text-lg font-semibold">
                                        {need.title}
                                    </span>
                                    <span className="text-muted-foreground">
                                        {need.short}
                                    </span>
                                    <span
                                        className={cn(
                                            'grid transition-all duration-500',
                                            isOpen
                                                ? 'grid-rows-[1fr] opacity-100'
                                                : 'grid-rows-[0fr] opacity-0',
                                        )}
                                    >
                                        <span className="overflow-hidden text-sm leading-relaxed">
                                            {need.detail}
                                        </span>
                                    </span>
                                    <span className="mt-auto text-sm font-medium text-brand">
                                        {isOpen ? 'Sulje' : 'Lue lisää +'}
                                    </span>
                                </button>
                            </Reveal>
                        );
                    })}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <Reveal className="rounded-2xl border border-border bg-card/70 p-6">
                        <div className="mb-3 flex items-center gap-2 font-semibold">
                            <Brain className="size-5 text-brand" />{' '}
                            Järkiperäiset ostomotiivit
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Pieni kuukausimaksu suuren kertaoston sijaan, laaja
                            valikoima yhdellä tilauksella, kokeilujakso ja
                            mahdollisuus pitää tilaus vain projektin ajan.
                        </p>
                    </Reveal>
                    <Reveal
                        delay={100}
                        className="rounded-2xl border border-border bg-card/70 p-6"
                    >
                        <div className="mb-3 flex items-center gap-2 font-semibold">
                            <Heart className="size-5 text-brand" />{' '}
                            Tunneperäiset ostomotiivit
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Inspiraatio, ammattilaisidentiteetti, ”kaikki
                            soundit käden ulottuvilla” -tunne ja pelko jäädä
                            jälkeen kilpailijoista. Motiivikonflikti syntyy, kun
                            halu kaikkiin soundeihin kohtaa järjen: ”tarvitsenko
                            oikeasti kaikkea tätä?”
                            <Cite refs="virta" />
                        </p>
                    </Reveal>
                </div>
            </Section>

            <Section>
                <ValueBalance />
            </Section>

            <Section>
                <SectionTitle kicker="Kilpailu">
                    Keitä vastaan NI 360 kilpailee?
                </SectionTitle>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            name: 'EastWest ComposerCloud+',
                            body: 'Yli 43 000 instrumenttia, kaikki uudet julkaisut ja rojaltivapaa käyttö 19,99 $/kk tai 99 $/vuosi. Toimii omalla OPUS-moottorillaan.',
                            refs: ['eastwest'],
                        },
                        {
                            name: 'Spitfire Audio ja Splice',
                            body: 'Säveltäjien Christian Hensonin ja Paul Thomsonin vuonna 2007 perustama orkesterikirjastojen valmistaja siirtyi Splicelle huhtikuussa 2025. Splicen Rent-to-Own-mallissa kirjaston saa kuukausierien jälkeen omaksi.',
                            refs: [
                                'spitfire-about',
                                'musictech-spitfire',
                                'roche-spitfire',
                                'splice-plans',
                            ],
                        },
                        {
                            name: 'Arturia',
                            body: 'Grenoblelainen yritys, jonka V Collection 11 Pro sisältää 45 klassisten syntetisaattorien mallinnusta 699 dollarin kertahintaan.',
                            refs: ['arturia-company', 'arturia-v'],
                        },
                        {
                            name: 'Output',
                            body: 'Säveltäjä Gregg Lehrmanin vuonna 2013 perustama yritys. Output One -tilaus maksaa 14,99 $/kk, eikä se sisällä Kontakt-instrumentteja.',
                            refs: ['output-company', 'gottsegen', 'output-one'],
                        },
                    ].map((competitor, index) => (
                        <Reveal
                            key={competitor.name}
                            delay={index * 80}
                            className="h-full"
                        >
                            <div className="h-full rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-lg">
                                <h3 className="font-semibold">
                                    {competitor.name}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {competitor.body}
                                    <Cite refs={competitor.refs} />
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                    Oma pohdinta: NI:n kilpailuetu on Kontakt-alusta, jolle myös
                    monet kolmannet osapuolet tekevät kirjastoja, kun taas
                    kilpailijat ovat siirtyneet omiin soittimiinsa. Jo pelkkä
                    Pro-tason täysi Kontakt 8 tekee tilauksesta houkuttelevan
                    niille, joilla on jo muiden valmistajien kirjastoja.
                    Kriitikoiden mielestä Pron noin 500 dollarin vuosihinta on
                    kuitenkin liian korkea
                    <Cite refs="piplica" />.
                </p>
            </Section>
        </>
    );
}

function ValueBalance() {
    const [benefitsWeight, setBenefitsWeight] = useState(65);
    const tilt = (benefitsWeight - 50) / 3;

    return (
        <Reveal className="rounded-3xl border border-border bg-card/70 p-6 sm:p-8">
            <SectionTitle kicker="Asiakasarvo">
                Hyödyt vs. uhraukset
            </SectionTitle>
            <p className="max-w-3xl text-muted-foreground">
                Asiakkaan tulee kokea saavansa arvoa enemmän kuin hän joutuu
                uhraamaan, ja tarjooman arvon pitää olla suurempi kuin
                kilpailijan tarjooman
                <Cite refs="hh-markkinointi" />. Markkinointiajattelu on
                kehittynyt yhteisölliseen suuntaan, jossa asiakkaat ovat
                aktiivisia osallistujia ja viestivät keskenään
                <Cite refs="hh-kehittyminen" />. Liikuta liukusäädintä ja katso,
                miten vaaka kallistuu.
            </p>

            <div className="mt-8 flex flex-col items-center gap-6">
                <div className="relative h-40 w-full max-w-xl">
                    <div className="absolute bottom-0 left-1/2 h-24 w-2 -translate-x-1/2 rounded-full bg-muted-foreground/40" />
                    <div
                        className="absolute top-8 right-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        style={{ transform: `rotate(${-tilt}deg)` }}
                    >
                        <div className="h-1.5 w-full rounded-full bg-foreground/70" />
                        <div className="absolute -top-2 left-0 flex -translate-x-1/4 flex-col items-center">
                            <Scale className="size-5 text-segment-c" />
                            <div className="mt-1 rounded-xl bg-segment-c/15 px-3 py-2 text-center text-xs font-medium sm:text-sm">
                                Hyödyt
                                <br />
                                <span className="text-muted-foreground">
                                    soundit · säästö · helppous
                                </span>
                            </div>
                        </div>
                        <div className="absolute -top-2 right-0 flex translate-x-1/4 flex-col items-center">
                            <Scale className="size-5 text-segment-b" />
                            <div className="mt-1 rounded-xl bg-segment-b/15 px-3 py-2 text-center text-xs font-medium sm:text-sm">
                                Uhraukset
                                <br />
                                <span className="text-muted-foreground">
                                    hinta · aika · opettelu
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <label className="flex w-full max-w-xl flex-col gap-2 text-sm">
                    <span className="flex justify-between font-medium">
                        <span>Uhraukset painavat</span>
                        <span>Hyödyt painavat</span>
                    </span>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={benefitsWeight}
                        onChange={(event) =>
                            setBenefitsWeight(Number(event.target.value))
                        }
                        className="w-full cursor-pointer accent-[var(--brand)]"
                    />
                </label>
                <p
                    key={benefitsWeight > 50 ? 'buy' : 'skip'}
                    className="animate-pop text-center text-lg font-semibold"
                >
                    {benefitsWeight > 50
                        ? '✅ Asiakas kokee arvon riittäväksi – tilaus syntyy.'
                        : '❌ Uhraukset painavat enemmän – asiakas jättää tilaamatta.'}
                </p>
            </div>
        </Reveal>
    );
}
