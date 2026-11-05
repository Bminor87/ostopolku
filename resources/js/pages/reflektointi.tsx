import { Head, Link } from '@inertiajs/react';
import {
    Check,
    Compass,
    Eye,
    GraduationCap,
    Repeat,
    Scale,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Cite } from '@/components/cite';
import { PageHeader, Section, SectionTitle } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';
import {
    asiakaspersoona,
    home,
    lahteet,
    ostopolku,
    segmentointi,
    tekoaly,
    yritys,
} from '@/routes';

const perspectives: { icon: LucideIcon; title: string; body: ReactNode }[] = [
    {
        icon: Eye,
        title: 'Asiakkaan näkökulma',
        body: (
            <>
                Tilaus madaltaa kynnystä, mutta tilausväsymys on todellinen.
                Suomessa joka neljäs on luopunut vähintään yhdestä
                suoratoistopalvelusta säästösyistä, ja 18–34-vuotiaista jopa 37
                %
                <Cite refs="pop-pankki" />. Yhdysvalloissa lähes kaksi
                kolmasosaa kuluttajista on turhautunut tilausten
                hinnankorotuksiin
                <Cite refs="deloitte" />.
            </>
        ),
    },
    {
        icon: Scale,
        title: 'Yrityksen näkökulma',
        body: (
            <>
                Tekijätyökalujen markkina on suuri: MIDiA Researchin mukaan
                tyypillinen tekijä käyttää työkaluihin yli 600 dollaria
                vuodessa, ja 83 % kokee, että opittavaa on vielä paljon
                <Cite refs="mulligan" />. Kuukausitulot tasoittavat NI:n
                kassavirtaa, mikä on ymmärrettävää yhtiön taloustilanteessa.
            </>
        ),
    },
    {
        icon: Compass,
        title: 'Säveltäjän ammatin näkökulma',
        body: (
            <>
                Säveltäjien tulot ovat olleet Suomessa pitkään pieniä: vuonna
                2014 yli kolme neljäsosaa Teoston jäsenistä sai tilityksiä alle
                1 000 euroa
                <Cite refs="hottinen" />. Lisäksi buyout-sopimukset heikentävät
                jälkikäteisiä tuloja
                <Cite refs="cooke" />. Tämä selittää, miksi kuukausimaksu voi
                olla persoonalle järkevämpi kuin suuri kertaostos.
            </>
        ),
    },
];

type Requirement = {
    title: string;
    detail: string;
    href: string;
    section: string;
};

const requirements: Requirement[] = [
    {
        title: 'Yritys esitelty ja valinta perusteltu',
        detail: 'NI:n historia, valinnan perustelut ja kilpailijat',
        href: yritys.url(),
        section: '1',
    },
    {
        title: 'Tuotekategoria tai tuote esitelty',
        detail: 'NI 360 ja kolme tasoa interaktiivisena vertailuna',
        href: yritys.url(),
        section: '1',
    },
    {
        title: 'Tarpeet lähdemateriaalin tarveluokittelun avulla',
        detail: 'Toiminnalliset, tunnepohjaiset ja sosiaaliset tarpeet sekä ostomotiivit',
        href: yritys.url(),
        section: '1',
    },
    {
        title: 'Segmentoinnin määritelmä ja rooli',
        detail: 'Määritelmä, rooli ryhmittelyssä ja kohdennetussa strategiassa',
        href: segmentointi.url(),
        section: '2',
    },
    {
        title: 'Segmentointikriteerit valittu',
        detail: 'Demografiset, maantieteelliset, psykografiset ja käyttäytymiseen perustuvat kriteerit',
        href: segmentointi.url(),
        section: '2',
    },
    {
        title: 'Neljä toisistaan erottuvaa asiakasryhmää',
        detail: 'Neljä segmenttiä, segmenttikartta ja arviointi',
        href: segmentointi.url(),
        section: '2',
    },
    {
        title: 'Yksi ryhmä valittu tarkempaan tarkasteluun',
        detail: 'Elokuva- ja mediasäveltäjät',
        href: asiakaspersoona.url(),
        section: '3',
    },
    {
        title: 'Persoona kuvattu (piirros, kuvakollaasi)',
        detail: 'Piirros, profiilikortti ja kuvakollaasi',
        href: asiakaspersoona.url(),
        section: '3',
    },
    {
        title: 'Elämäntyyli, tarpeet, arvot ja ajatukset konkreettisesti',
        detail: 'Profiili, empatiakartta, persoonallisuus, kanavat ja asiakasprofiilipohja',
        href: asiakaspersoona.url(),
        section: '3',
    },
    {
        title: 'Tutkimustietoa hyödynnetty, esim. Fonecta',
        detail: 'Fonectan luokka 9, Elokuvasäätiö, Teosto, Neogames',
        href: asiakaspersoona.url(),
        section: '3',
    },
    {
        title: 'Persoonan valinta perusteltu',
        detail: 'Miksi tämä persoona edustaa kohdeyleisöä',
        href: asiakaspersoona.url(),
        section: '3',
    },
    {
        title: 'Ostopolku visuaalisesti ja sanallisesti',
        detail: 'Tunnekäyrä ja viisi vaihetta Journey Map -rakenteella',
        href: ostopolku.url(),
        section: '4',
    },
    {
        title: 'Konkreettiset sivut ja haut',
        detail: 'Hakusanat, foorumit, YouTube-kanavat ja NI:n sivut',
        href: ostopolku.url(),
        section: '4',
    },
    {
        title: 'Syyt, miksi persoona ostaa',
        detail: 'Kuusi syytä ja vertailutyökalu',
        href: ostopolku.url(),
        section: '4',
    },
    {
        title: 'Reflektointi',
        detail: 'Tämä sivu',
        href: '#reflektointi',
        section: '5',
    },
    {
        title: 'Tekijän nimi kansilehdellä',
        detail: 'Jesse Hellman',
        href: home.url(),
        section: '0',
    },
    {
        title: 'Lähteet sekä dioissa että lähdeluettelossa',
        detail: 'Tekstiviitteet ja lähdeluettelo Haaga-Helian ohjeen mukaan',
        href: lahteet.url(),
        section: '7',
    },
    {
        title: 'Tekoälyn käytön kuvaus',
        detail: 'Oma osio',
        href: tekoaly.url(),
        section: '6',
    },
];

function RequirementChecklist() {
    const [checked, setChecked] = useState<number>(0);

    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                <button
                    type="button"
                    onClick={() =>
                        setChecked(
                            checked === requirements.length
                                ? 0
                                : requirements.length,
                        )
                    }
                    className="clickable rounded-full border border-brand bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground"
                >
                    {checked === requirements.length
                        ? 'Tyhjennä'
                        : 'Tarkista kaikki vaatimukset'}
                </button>
                <span className="text-sm text-muted-foreground tabular-nums">
                    {checked} / {requirements.length} täytetty
                </span>
            </div>
            <div className="mb-4 h-2 overflow-hidden rounded-full bg-muted">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-segment-c to-brand transition-all duration-1000"
                    style={{
                        width: `${(checked / requirements.length) * 100}%`,
                    }}
                />
            </div>
            <ul className="grid gap-2 md:grid-cols-2">
                {requirements.map((requirement, index) => {
                    const isChecked = index < checked;

                    return (
                        <li key={requirement.title}>
                            <Link
                                href={requirement.href}
                                className="flex clickable items-start gap-3 rounded-xl border border-border bg-card/70 p-3"
                            >
                                <span
                                    className={cn(
                                        'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500',
                                        isChecked
                                            ? 'scale-110 border-segment-c bg-segment-c text-white'
                                            : 'border-muted-foreground/40',
                                    )}
                                    style={{
                                        transitionDelay: isChecked
                                            ? `${index * 60}ms`
                                            : '0ms',
                                    }}
                                >
                                    {isChecked && <Check className="size-4" />}
                                </span>
                                <span className="flex-1">
                                    <span className="block text-sm font-medium">
                                        {requirement.title}
                                    </span>
                                    <span className="block text-xs text-muted-foreground">
                                        Osio {requirement.section} ·{' '}
                                        {requirement.detail}
                                    </span>
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
                Vaatimukset perustuvat tehtävänantoon
                <Cite refs="selin" />. Klikkaa riviä siirtyäksesi osioon.
            </p>
        </div>
    );
}

export default function Reflektointi() {
    return (
        <>
            <Head title="Reflektointi" />
            <PageHeader number="5" title="Reflektointi">
                Tein tehtävän yksin, joten tiimityön arvioinnin sijaan arvioin
                omaa oppimistani, työskentelyäni ja sitä, miten teoria näkyi
                käytännössä.
            </PageHeader>

            <Section className="pt-0">
                <div id="reflektointi" className="grid gap-4 lg:grid-cols-2">
                    {[
                        {
                            icon: GraduationCap,
                            title: 'Mitä opin',
                            body: 'Segmentointi ja persoona eivät ole irrallisia malleja: NI 360:n kolme tasoa ovat käytännössä segmentointia, joka on rakennettu suoraan tuotteeseen. Kun vertasin Plus- ja Pro-tason sisältöä, ymmärsin, että kalleimman tason sisältö kertoo, ketä yritys pitää arvokkaimpana asiakkaanaan.',
                        },
                        {
                            icon: Repeat,
                            title: 'Mikä yllätti',
                            body: 'Lähtöoletukseni yrityksestä vanhentuivat tiedonhaun aikana: NI meni konkurssiin, inMusic osti sen ja iZotope poistui tilauksesta. Asiakasymmärrys pitää päivittää jatkuvasti, ja persoonaankin piti lisätä luottamukseen liittyvä huoli, jota en alun perin osannut ajatella.',
                        },
                        {
                            icon: Compass,
                            title: 'Mitä tekisin toisin',
                            body: 'Persoona perustuu nyt julkiseen tietoon, foorumikeskusteluihin ja omaan kokemukseeni. Seuraavaksi haastattelisin 3–5 oikeaa mediasäveltäjää ja validoisin persoonan ja ostopolun heidän avullaan, kuten persoonan laatimisprosessissa suositellaan.',
                        },
                        {
                            icon: Scale,
                            title: 'Oma työskentely',
                            body: 'Tein yrityksen ja tuotteen valinnan, alustavan tarveanalyysin, segmentit ja persoonan valinnan itse. Toteutin työn interaktiivisena web-sovelluksena, ja tekoäly oli siinä merkittävä apu. Sen käytön kuvaan avoimesti omassa osiossaan.',
                        },
                    ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Reveal
                                key={item.title}
                                delay={index * 90}
                                className="rounded-2xl border border-border bg-card/70 p-6"
                            >
                                <div className="mb-2 flex items-center gap-2 font-semibold">
                                    <Icon className="size-5 text-brand" />
                                    {item.title}
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.body}
                                    {item.title === 'Mitä tekisin toisin' && (
                                        <Cite
                                            refs={[
                                                'hh-persoona',
                                                'hh-asiakasymmarrys',
                                            ]}
                                        />
                                    )}
                                </p>
                            </Reveal>
                        );
                    })}
                </div>
            </Section>

            <Section>
                <SectionTitle kicker="Eri näkökulmat">
                    Onko tilausmalli hyvä asia?
                </SectionTitle>
                <div className="grid gap-4 lg:grid-cols-3">
                    {perspectives.map((perspective, index) => {
                        const Icon = perspective.icon;

                        return (
                            <Reveal
                                key={perspective.title}
                                delay={index * 100}
                                className="rounded-2xl border border-border bg-card/70 p-6"
                            >
                                <div className="mb-2 flex items-center gap-2 font-semibold">
                                    <Icon className="size-5 text-brand" />
                                    {perspective.title}
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {perspective.body}
                                </p>
                            </Reveal>
                        );
                    })}
                </div>
                <p className="mt-4 max-w-3xl text-muted-foreground">
                    Johtopäätökseni: tilausmalli toimii parhaiten silloin, kun
                    asiakas voi säätää sitä elämäntilanteensa mukaan. Tätä
                    teemaa jatkan oppimistehtävässä 2, jossa käsitellään
                    markkinointimixiä (7P)
                    <Cite refs="hh-markkinointi" />.
                </p>
            </Section>

            <Section>
                <SectionTitle kicker="Tarkistuslista">
                    Täyttääkö työ tehtävänannon?
                </SectionTitle>
                <RequirementChecklist />
            </Section>
        </>
    );
}
