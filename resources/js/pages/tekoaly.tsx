import { Head } from '@inertiajs/react';
import {
    Bot,
    BookOpenCheck,
    Code2,
    PenLine,
    Search,
    ShieldCheck,
    UserRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Cite } from '@/components/cite';
import { PageHeader, Section, SectionTitle } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

type Task = {
    icon: LucideIcon;
    title: string;
    /** Share of the work done by the author, 0–100. */
    author: number;
    authorDid: string;
    aiDid: string;
};

const tasks: Task[] = [
    {
        icon: UserRound,
        title: 'Yrityksen, tuotteen ja persoonan valinta',
        author: 100,
        authorDid:
            'Valitsin Native Instrumentsin ja NI 360:n omien kiinnostuksen kohteideni perusteella ja päätin tarkastella elokuvasäveltäjiä.',
        aiDid: '—',
    },
    {
        icon: PenLine,
        title: 'Tarpeet ja segmentit',
        author: 70,
        authorDid:
            'Kirjoitin muistiinpanoihini kolme tarvetta, segmentointistrategian ja neljä segmenttiä.',
        aiDid: 'Laajensi segmentit neljällä kriteerillä, liitti ne Fonectan luokkiin ja ehdotti arviointitaulukkoa.',
    },
    {
        icon: Search,
        title: 'Tiedonhaku ja lähteet',
        author: 30,
        authorDid:
            'Keräsin ensimmäiset kuusi verkkolähdettä ja kurssimateriaalit.',
        aiDid: 'Luki kurssimateriaalit, tarkisti lähteeni ja haki verkosta uusia lähteitä, esimerkiksi NI:n omistajanvaihdoksen, kilpailijoiden hinnat ja Elokuvasäätiön tilastot.',
    },
    {
        icon: BookOpenCheck,
        title: 'Persoona ja ostopolku',
        author: 35,
        authorDid:
            'Määritin, että persoona on ammattilainen elokuvasäveltäjä, ja perustelin valinnan.',
        aiDid: 'Luonnosteli Aleksin taustan, empatiakartan, ostopolun vaiheet ja hakusanat lähteiden pohjalta.',
    },
    {
        icon: Code2,
        title: 'Web-sovelluksen toteutus',
        author: 25,
        authorDid:
            'Hankin luvan toteuttaa työ web-sovelluksena ja määritin vaatimukset: animaatiot, korostukset ja lähdeluettelo yhden klikkauksen päässä. Loin Laravel-projektin pohjan, konfiguroin versionhallinnan sekä asensin sovelluksen palvelimelle ja julkaisin sen verkkoon.',
        aiDid: 'Ohjelmoi sovelluksen (Laravel, React, Inertia), animaatiot ja interaktiiviset osat sekä piirsi persoonan SVG-kuvituksen.',
    },
    {
        icon: ShieldCheck,
        title: 'Tarkistus ja vastuu',
        author: 100,
        authorDid:
            'Luen ja tarkistan sisällön sekä muokkaan sitä ennen palautusta. Vastaan työn oikeellisuudesta.',
        aiDid: '—',
    },
];

export default function Tekoaly() {
    const [activeTask, setActiveTask] = useState(0);
    const task = tasks[activeTask];
    const TaskIcon = task.icon;

    return (
        <>
            <Head title="Tekoälyn käyttö" />
            <PageHeader number="6" title="Miten käytin tekoälyä">
                Haaga-Helian ohjeen mukaan tekoälyn tuottaman sisällön käyttö on
                aina mainittava, ja tekstin oikeellisuudesta vastaa aina sen
                kirjoittanut ihminen
                <Cite refs="hh-tekoaly" />. Tekoälyä ei voi käyttää lähteenä,
                joten sitä ei ole merkitty lähdeluetteloon. Sen tuottama tieto
                on tarkistettu alkuperäisistä lähteistä, ja viittaukset on tehty
                niihin.
                <Cite refs="hh-libguide" paragraph />
            </PageHeader>

            <Section className="pt-0">
                <Reveal className="flex flex-col gap-4 rounded-3xl border border-border bg-card/70 p-6 sm:flex-row sm:items-center">
                    <span className="flex size-16 shrink-0 animate-float items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-segment-a text-white shadow-lg">
                        <Bot className="size-8" />
                    </span>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Työkalu: Claude Code (Anthropic), kielimalli Claude
                            Opus 5.5
                        </h2>
                        <p className="mt-1 text-muted-foreground">
                            Käytin Claude Codea Visual Studio Code -editorin
                            laajennuksena 5.11.2026. Tekoäly pystyi lukemaan
                            projektikansion tiedostot (kurssimateriaalit ja
                            muistiinpanoni), hakemaan tietoa verkosta ja
                            kirjoittamaan sovelluksen ohjelmakoodin.
                        </p>
                    </div>
                </Reveal>
            </Section>

            <Section>
                <SectionTitle kicker="Työnjako">
                    Mitä tein itse, mitä tekoäly teki?
                </SectionTitle>
                <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                    <div className="flex flex-col gap-2">
                        {tasks.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.title}
                                    type="button"
                                    onClick={() => setActiveTask(index)}
                                    onMouseEnter={() => setActiveTask(index)}
                                    className={cn(
                                        'clickable rounded-xl border border-border bg-card/70 p-3 text-left',
                                        activeTask === index &&
                                            'border-brand bg-brand/10',
                                    )}
                                >
                                    <span className="flex items-center gap-2 text-sm font-medium">
                                        <Icon className="size-4 text-brand" />
                                        {item.title}
                                    </span>
                                    <span className="mt-2 flex h-2 overflow-hidden rounded-full bg-muted">
                                        <span
                                            className="bg-segment-c transition-all duration-700"
                                            style={{ width: `${item.author}%` }}
                                        />
                                        <span
                                            className="bg-segment-a transition-all duration-700"
                                            style={{
                                                width: `${100 - item.author}%`,
                                            }}
                                        />
                                    </span>
                                </button>
                            );
                        })}
                        <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <span className="size-3 rounded-full bg-segment-c" />{' '}
                                Minä
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="size-3 rounded-full bg-segment-a" />{' '}
                                Tekoäly
                            </span>
                            <span>(arvio työmäärästä)</span>
                        </div>
                    </div>
                    <div
                        key={activeTask}
                        className="flex animate-pop flex-col gap-4 self-start rounded-3xl border border-border bg-card/80 p-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex size-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                                <TaskIcon className="size-6" />
                            </span>
                            <h3 className="text-xl font-semibold">
                                {task.title}
                            </h3>
                        </div>
                        <div className="rounded-2xl bg-segment-c/10 p-4">
                            <p className="text-xs font-semibold tracking-widest text-segment-c uppercase">
                                Minä
                            </p>
                            <p className="mt-1">{task.authorDid}</p>
                        </div>
                        <div className="rounded-2xl bg-segment-a/10 p-4">
                            <p className="text-xs font-semibold tracking-widest text-segment-a uppercase">
                                Tekoäly
                            </p>
                            <p className="mt-1">{task.aiDid}</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionTitle kicker="Syötteet">
                    Tärkeimmät syötteet
                </SectionTitle>
                <div className="flex flex-col gap-4">
                    <Reveal className="rounded-2xl border-l-4 border-brand bg-card/70 p-5">
                        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                            Ensimmäinen syöte (tiivistetty)
                        </p>
                        <p className="mt-2 italic">
                            ”Lue materiaali/-kansiosta oppimistehtava1.docx ja
                            Oppimistehtava 1_Asiakasymmärrys.pdf. – – käytä
                            materiaali-kansion muita lähteitä, docx-tiedostossa
                            mainittuja lähteitä ja muita internetistä löytyviä
                            lähteitä (laita ne kaikki ylös!) – – Tee
                            sovellukseen yhden klikkauksen päässä oleva
                            täydellinen lähdeluettelo – – Toteuta ensimmäinen
                            versio interaktiivisesta asiakaspersoonan
                            määrittelystä ja asiakkaan ostopolun kuvauksesta,
                            kun kyseessä on Native Instrumentsin NI 360
                            -tilausta ostavat asiakkaat. Käytä paljon
                            animaatioita ja korosta asioita, joita voi klikata –
                            – Tehtävässä tulee myös kertoa tekoälyn käytöstä.”
                        </p>
                    </Reveal>
                    <Reveal
                        delay={100}
                        className="rounded-2xl border border-border bg-card/70 p-5 text-sm leading-relaxed text-muted-foreground"
                    >
                        Tekoäly teki työn useassa vaiheessa: se luki ensin
                        tehtävänannon ja muistiinpanoni, sitten
                        kurssimateriaalit (Fonectan luokitus, persoona- ja
                        ostoprosessimateriaalit), käynnisti rinnakkaiset
                        tiedonhaut ja rakensi lopuksi sovelluksen. Joitakin
                        sivustoja (esimerkiksi VI-Control, Reddit ja Gearspace)
                        se ei päässyt lukemaan. Niihin perustuvia väitteitä ei
                        ole käytetty, eikä NI 360:n nykyisiä normaalihintoja
                        voitu tarkistaa, koska ne näkyvät vasta kirjautumisen
                        jälkeen. Siksi esityksessä käytetään vuoden 2024
                        julkaisuhintoja.
                    </Reveal>
                </div>
            </Section>
        </>
    );
}
