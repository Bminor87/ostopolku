/**
 * Every source used in the presentation, formatted according to the
 * Haaga-Helia citation guide (libguides.haaga-helia.fi, updated 25.9.2026).
 *
 * - `cite` is the in-text citation without brackets, e.g. "Roche 8.5.2024".
 * - `entry` is the reference-list entry up to (but not including) the link.
 * - Sources with `url` get "Luettavissa: <url>. Luettu: <date>." appended,
 *   Moodle materials get only "Luettu: <date>." as the guide instructs.
 */

export type SourceCategory =
    | 'Kurssimateriaali'
    | 'Native Instruments'
    | 'Kilpailijat'
    | 'Uutiset ja artikkelit'
    | 'Tutkimukset ja tilastot'
    | 'Yhteisöt ja kanavat'
    | 'Ohjeet';

export type Source = {
    id: string;
    cite: string;
    entry: string;
    url?: string;
    accessed: string;
    category: SourceCategory;
};

const READ = '5.11.2026';
const COURSE =
    'MAR001HH1A Asiakasymmärrys ja markkinointi -opintojakson esitysmateriaali Moodlessa. Haaga-Helia ammattikorkeakoulu.';

const list: Source[] = [
    // Kurssimateriaalit (Moodle)
    {
        id: 'hh-markkinointi',
        cite: 'Haaga-Helia ammattikorkeakoulu s.a. a',
        entry: `Haaga-Helia ammattikorkeakoulu s.a. a. Mitä markkinointi on? ${COURSE}`,
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'hh-kehittyminen',
        cite: 'Haaga-Helia ammattikorkeakoulu s.a. b',
        entry: `Haaga-Helia ammattikorkeakoulu s.a. b. Markkinointiajattelun kehittyminen. ${COURSE}`,
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'hh-segmentointi',
        cite: 'Haaga-Helia ammattikorkeakoulu s.a. c',
        entry: `Haaga-Helia ammattikorkeakoulu s.a. c. Segmentointi. ${COURSE}`,
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'hh-asiakasymmarrys',
        cite: 'Haaga-Helia ammattikorkeakoulu s.a. d',
        entry: `Haaga-Helia ammattikorkeakoulu s.a. d. Asiakasymmärrys ja asiakastiedon kerääminen. ${COURSE}`,
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'hh-persoona',
        cite: 'Haaga-Helia ammattikorkeakoulu s.a. e',
        entry: `Haaga-Helia ammattikorkeakoulu s.a. e. Asiakaspersoona. ${COURSE}`,
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'hh-profiilipohja',
        cite: 'Haaga-Helia ammattikorkeakoulu s.a. f',
        entry: 'Haaga-Helia ammattikorkeakoulu s.a. f. Asiakasprofiili-pohja. MAR001HH1A Asiakasymmärrys ja markkinointi -opintojakson mallipohja Moodlessa. Haaga-Helia ammattikorkeakoulu.',
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'hh-ostoprosessi',
        cite: 'Haaga-Helia ammattikorkeakoulu s.a. g',
        entry: `Haaga-Helia ammattikorkeakoulu s.a. g. Kuluttajan ostoprosessi. ${COURSE}`,
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'virta',
        cite: 'Virta s.a.',
        entry: `Virta, M. s.a. Kuluttajan ostokäyttäytymiseen vaikuttavia tekijöitä. ${COURSE}`,
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'selin',
        cite: 'Selin s.a.',
        entry: 'Selin, A.-M. s.a. Oppimistehtävä 1: Asiakaspersoonan määrittely ja asiakkaan ostopolun kuvaus. MAR001HH1A Asiakasymmärrys ja markkinointi -opintojakson tehtävänanto Moodlessa. Haaga-Helia ammattikorkeakoulu.',
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'fonecta',
        cite: 'Fonecta 2016',
        entry: 'Fonecta 2016. Ostokäyttäytymisluokitus. MAR001HH1A Asiakasymmärrys ja markkinointi -opintojakson materiaali Moodlessa. Fonecta Oy.',
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'maki',
        cite: 'Mäki 2024',
        entry: 'Mäki, J. 2024. VF Segmentointimalli, persoonat. Visit Finland. MAR001HH1A Asiakasymmärrys ja markkinointi -opintojakson materiaali Moodlessa.',
        accessed: READ,
        category: 'Kurssimateriaali',
    },
    {
        id: 'growth-tribe',
        cite: 'Growth Tribe 2018',
        entry: 'Growth Tribe 2018. Persona canvas. MAR001HH1A Asiakasymmärrys ja markkinointi -opintojakson mallipohja Moodlessa.',
        accessed: READ,
        category: 'Kurssimateriaali',
    },

    // Native Instruments
    {
        id: 'ni-company',
        cite: 'Native Instruments s.a. a',
        entry: 'Native Instruments s.a. a. Company.',
        url: 'https://www.native-instruments.com/pages/company',
        accessed: READ,
        category: 'Native Instruments',
    },
    {
        id: 'ni-about',
        cite: 'Native Instruments s.a. b',
        entry: 'Native Instruments s.a. b. About us.',
        url: 'https://www.native-instruments.com/pages/about-us',
        accessed: READ,
        category: 'Native Instruments',
    },
    {
        id: 'ni-360',
        cite: 'Native Instruments s.a. c',
        entry: 'Native Instruments s.a. c. 360 subscription.',
        url: 'https://www.native-instruments.com/pages/360-subscription',
        accessed: '6.11.2026',
        category: 'Native Instruments',
    },
    {
        id: 'ni-included',
        cite: 'Native Instruments s.a. d',
        entry: "Native Instruments s.a. d. NI 360 Bundle | What's Included?",
        url: 'https://support.native-instruments.com/support/solutions/articles/69000879201-ni-360-bundle-what-s-included-',
        accessed: READ,
        category: 'Native Instruments',
    },
    {
        id: 'ni-faq',
        cite: 'Native Instruments s.a. e',
        entry: 'Native Instruments s.a. e. Native Instruments | 360 FAQ.',
        url: 'https://support.native-instruments.com/support/solutions/articles/69000879178-native-instruments-360-faq',
        accessed: READ,
        category: 'Native Instruments',
    },
    {
        id: 'ni-edu',
        cite: 'Native Instruments s.a. f',
        entry: 'Native Instruments s.a. f. Native Instruments for students, educators, and institutions.',
        url: 'https://www.native-instruments.com/pages/native-instruments-for-students-and-teachers',
        accessed: READ,
        category: 'Native Instruments',
    },
    {
        id: 'ni-home',
        cite: 'Native Instruments s.a. h',
        entry: 'Native Instruments s.a. h. Native Instruments – Software and hardware for music production and DJing.',
        url: 'https://www.native-instruments.com/',
        accessed: READ,
        category: 'Native Instruments',
    },
    {
        id: 'ni-youtube',
        cite: 'Native Instruments s.a. g',
        entry: 'Native Instruments s.a. g. Native Instruments – YouTube.',
        url: 'https://www.youtube.com/@NativeInstruments',
        accessed: READ,
        category: 'Native Instruments',
    },
    {
        id: 'inmusic',
        cite: 'inMusic Brands 8.5.2026',
        entry: 'inMusic Brands 8.5.2026. inMusic and Native Instruments Unite. Lehdistötiedote.',
        url: 'https://www.inmusicbrands.com/press/inmusic-native/',
        accessed: READ,
        category: 'Native Instruments',
    },

    // Uutiset ja artikkelit
    {
        id: 'sos-2024',
        cite: 'Sound On Sound 8.5.2024',
        entry: 'Sound On Sound 8.5.2024. Native Instruments preview NI 360. Sound On Sound.',
        url: 'https://www.soundonsound.com/news/native-instruments-preview-ni-360',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'roche-2024',
        cite: 'Roche 8.5.2024',
        entry: "Roche, S. 8.5.2024. 'The best-selling tools from Native Instruments, iZotope, and Brainworx': Native Instruments announces tiered NI 360 subscription platform. MusicTech.",
        url: 'https://musictech.com/news/gear/native-instruments-ni-360/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'baizan',
        cite: 'Baizán 8.5.2024',
        entry: 'Baizán, D. 8.5.2024. NI 360: nuevos servicios de suscripción de Native Instruments. Hispasonic.',
        url: 'https://www.hispasonic.com/noticias/360-nuevos-servicios-suscripcion-native-instruments/47817',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'baer',
        cite: 'Baer 3.10.2026',
        entry: 'Baer, C. 3.10.2026. The Cheapest Way to Buy Native Instruments and Komplete 26. Music Manta.',
        url: 'https://www.musicmanta.com/views/the-cheapest-way-to-buy-native-instruments',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'synth-anatomy',
        cite: 'Synth Anatomy 19.3.2026',
        entry: 'Synth Anatomy 19.3.2026. Native Instruments GmbH preliminary insolvency: now in merger & acquisition process. Synth Anatomy.',
        url: 'https://synthanatomy.com/2026/01/native-instruments-gmbh-is-preliminary-insolvency-according-to-official-docs.html',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'fornitani',
        cite: 'Fornitani 11.5.2026',
        entry: 'Fornitani, R. 11.5.2026. Native Instruments acquired by inMusic, owner of Akai and Moog, three months after entering insolvency. Music Business Worldwide.',
        url: 'https://www.musicbusinessworldwide.com/native-instruments-acquired-by-inmusic-owner-of-akai-and-moog-three-months-after-entering-insolvency/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'willings-izotope',
        cite: 'Willings 2.7.2026',
        entry: 'Willings, S. 2.7.2026. iZotope is no longer a Native Instruments brand, as it joins Boris FX. MusicTech.',
        url: 'https://musictech.com/news/industry/izotope-joins-boris-fx-exits-native-instruments/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'kirn',
        cite: 'Kirn 17.7.2026',
        entry: 'Kirn, P. 17.7.2026. NI after NI: which brand is where, and who owns whom. CDM Create Digital Music.',
        url: 'https://cdm.link/ni-after-ni-which-brand-is-where-and-who-owns-whom/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'willings-uk',
        cite: 'Willings 10.8.2026',
        entry: 'Willings, S. 10.8.2026. InMusic has allegedly shut down Native Instruments UK. MusicTech.',
        url: 'https://musictech.com/news/industry/inmusic-shut-down-native-instruments-uk/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'lhommedieu',
        cite: "L'Hommedieu 10.9.2026",
        entry: "L'Hommedieu, R. 10.9.2026. Your Studio Has New Landlords: Native Instruments, iZotope and the Price of Trusting an Ecosystem. Making a Scene.",
        url: 'https://www.makingascene.org/your-studio-has-new-landlords-native-instruments-izotope-and-the-price-of-trusting-an-ecosystem/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'piplica',
        cite: 'Piplica 31.10.2024',
        entry: 'Piplica, T. 31.10.2024. Why Kontakt 8 Is A Step In The Wrong Direction. Blogi.',
        url: 'https://peopleitsa.wordpress.com/2024/10/31/kontakt-8-is-bad/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'roche-spitfire',
        cite: 'Roche 28.4.2025',
        entry: 'Roche, S. 28.4.2025. Splice acquires Spitfire Audio for a reported $50 million. MusicTech.',
        url: 'https://musictech.com/news/industry/splice-acquires-spitfire-audio/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'roberts',
        cite: 'Roberts 22.12.2023',
        entry: 'Roberts, R. 22.12.2023. You can now get the entire Cinesamples catalogue in one plugin with Musio. MusicTech.',
        url: 'https://musictech.com/news/gear/entire-cinesamples-catalogue-in-one-plugin-musio',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'gottsegen',
        cite: 'Gottsegen 21.10.2020',
        entry: 'Gottsegen, G. 21.10.2020. Music Production Software Company Output Announces $45M Series A. Built In.',
        url: 'https://builtin.com/articles/output-raises-45m-series-a',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'douglas',
        cite: 'Douglas 29.12.2023',
        entry: 'Douglas, A. 29.12.2023. Plugin Subscriptions: Why the hate? Should you go perpetual? Gearnews.',
        url: 'https://www.gearnews.com/plugin-subscriptions-why-the-hate-should-you-go-perpetual',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'cooke',
        cite: 'Cooke 28.1.2025',
        entry: 'Cooke, C. 28.1.2025. Composers negotiating in the dark for meagre royalties from TV and movie, says new ECSA report. Complete Music Update.',
        url: 'https://completemusicupdate.com/composers-negotiating-in-the-dark-for-meagre-royalties-from-tv-and-movie-says-new-ecsa-report/',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },
    {
        id: 'hottinen',
        cite: 'Hottinen 2015',
        entry: 'Hottinen, M. 2015. Paying the piper. Finnish Music Quarterly, 3–4.',
        url: 'https://www.fmq.fi/articles/paying-the-piper',
        accessed: READ,
        category: 'Uutiset ja artikkelit',
    },

    // Kilpailijat
    {
        id: 'eastwest',
        cite: 'EastWest s.a.',
        entry: 'EastWest s.a. ComposerCloud+.',
        url: 'https://www.soundsonline.com/composercloud',
        accessed: READ,
        category: 'Kilpailijat',
    },
    {
        id: 'splice-plans',
        cite: 'Splice s.a.',
        entry: 'Splice s.a. Plans.',
        url: 'https://www.splice.com/plans',
        accessed: READ,
        category: 'Kilpailijat',
    },
    {
        id: 'splice-spitfire',
        cite: 'Splice 29.8.2025',
        entry: 'Splice 29.8.2025. All you need to know about Spitfire Audio on Splice Rent-to-Own. Splice Help Center.',
        url: 'https://support.splice.com/en/articles/11880338-all-you-need-to-know-about-spitfire-audio-on-splice-rent-to-own',
        accessed: READ,
        category: 'Kilpailijat',
    },
    {
        id: 'arturia-company',
        cite: 'Arturia s.a. a',
        entry: 'Arturia s.a. a. Discover The Company.',
        url: 'https://www.arturia.com/company',
        accessed: READ,
        category: 'Kilpailijat',
    },
    {
        id: 'arturia-v',
        cite: 'Arturia s.a. b',
        entry: 'Arturia s.a. b. V Collection 11 Pro.',
        url: 'https://www.arturia.com/products/software-instruments/v-collection/overview',
        accessed: READ,
        category: 'Kilpailijat',
    },
    {
        id: 'output-company',
        cite: 'Output s.a.',
        entry: 'Output s.a. Output – Creative tools for musicians, by musicians.',
        url: 'https://output.com/company',
        accessed: READ,
        category: 'Kilpailijat',
    },
    {
        id: 'output-one',
        cite: 'Output 10.8.2026',
        entry: 'Output 10.8.2026. Output One subscription. Output Help Center.',
        url: 'https://support.output.com/en/articles/11554585-output-one',
        accessed: READ,
        category: 'Kilpailijat',
    },
    {
        id: 'spitfire-about',
        cite: 'Spitfire Audio s.a. a',
        entry: 'Spitfire Audio s.a. a. About.',
        url: 'https://www2.spitfireaudio.com/about',
        accessed: READ,
        category: 'Kilpailijat',
    },
    {
        id: 'musictech-spitfire',
        cite: 'MusicTech 19.10.2016',
        entry: 'MusicTech 19.10.2016. Spitfire Audio – The MusicTech Interview – Flying the Flag. MusicTech.',
        url: 'https://musictech.com/features/spitfire-audio-interview/',
        accessed: READ,
        category: 'Kilpailijat',
    },

    // Tutkimukset ja tilastot
    {
        id: 'soundtrack-academy',
        cite: 'Soundtrack Academy s.a.',
        entry: 'Soundtrack Academy s.a. How Much Do Composers Make?',
        url: 'https://soundtrack.academy/how-much-do-composers-make/',
        accessed: READ,
        category: 'Tutkimukset ja tilastot',
    },
    {
        id: 'ses',
        cite: 'Suomen elokuvasäätiö 2026',
        entry: 'Suomen elokuvasäätiö 2026. Elokuvavuosi 2025 – Facts & Figures. Suomen elokuvasäätiö. Helsinki.',
        url: 'https://www.ses.fi/wp-content/uploads/SES-elokuvavuosi-2025-facts-and-figures.pdf',
        accessed: READ,
        category: 'Tutkimukset ja tilastot',
    },
    {
        id: 'teosto',
        cite: 'Teosto 20.3.2026',
        entry: 'Teosto 20.3.2026. Teosto in 2025: The copyright revenue for music represented by Teosto exceeded EUR 90 million for the first time. Lehdistötiedote.',
        url: 'https://www.teosto.fi/en/teosto-in-2025-the-copyright-revenue-for-music-represented-by-teosto-exceeded-eur-90-million-for-the-first-time/',
        accessed: READ,
        category: 'Tutkimukset ja tilastot',
    },
    {
        id: 'byshonkov',
        cite: 'Byshonkov 17.9.2025',
        entry: 'Byshonkov, D. 17.9.2025. Neogames: Finnish Game Industry in 2025. GameDev Reports.',
        url: 'https://gamedevreports.substack.com/p/neogames-finnish-game-industry-in',
        accessed: READ,
        category: 'Tutkimukset ja tilastot',
    },
    {
        id: 'mulligan',
        cite: 'Mulligan 6.10.2022',
        entry: "Mulligan, M. 6.10.2022. The creator economy's post-lockdown growth. MIDiA Research.",
        url: 'https://www.midiaresearch.com/blog/the-creator-economys-post-lockdown-growth',
        accessed: READ,
        category: 'Tutkimukset ja tilastot',
    },
    {
        id: 'deloitte',
        cite: 'Deloitte 2026',
        entry: 'Deloitte 2026. Digital media monitor. Deloitte Insights.',
        url: 'https://www.deloitte.com/us/en/insights/industry/technology/digital-media-trends-consumption-habits-survey/2025/digital-media-monitor-dashboard.html',
        accessed: READ,
        category: 'Tutkimukset ja tilastot',
    },
    {
        id: 'pop-pankki',
        cite: 'POP Pankki 16.1.2026',
        entry: 'POP Pankki 16.1.2026. Tutkimus: joka neljäs suomalainen on luopunut suoratoistopalveluista säästöjen vuoksi. STT Info.',
        url: 'https://www.sttinfo.fi/tiedote/71740356/tutkimus-joka-neljas-suomalainen-on-luopunut-suoratoistopalveluista-saastojen-vuoksi?lang=fi',
        accessed: READ,
        category: 'Tutkimukset ja tilastot',
    },
    {
        id: 'rodgers',
        cite: 'Rodgers 2025',
        entry: 'Rodgers, J. 2025. DAW Survey 2025: Pro Tools Still Leads, But For How Long? Production Expert.',
        url: 'https://www.production-expert.com/production-expert-1/2025-daw-survey-the-results',
        accessed: READ,
        category: 'Tutkimukset ja tilastot',
    },

    // Yhteisöt ja kanavat
    {
        id: 'kvr-2024a',
        cite: 'KVR Audio 7.5.2024',
        entry: 'KVR Audio 7.5.2024. Native Instruments Komplete 360 subscription. Keskusteluketju.',
        url: 'https://www.kvraudio.com/forum/viewtopic.php?t=610017',
        accessed: READ,
        category: 'Yhteisöt ja kanavat',
    },
    {
        id: 'kvr-2024b',
        cite: 'KVR Audio 12.7.2024',
        entry: 'KVR Audio 12.7.2024. New native instruments 360 subscription. Keskusteluketju.',
        url: 'https://www.kvraudio.com/forum/viewtopic.php?t=612376',
        accessed: READ,
        category: 'Yhteisöt ja kanavat',
    },
    {
        id: 'thinkspace',
        cite: 'ThinkSpace Education s.a.',
        entry: 'ThinkSpace Education s.a. ThinkSpace Education – YouTube.',
        url: 'https://www.youtube.com/@ThinkSpaceEducation',
        accessed: READ,
        category: 'Yhteisöt ja kanavat',
    },
    {
        id: 'spitfire-youtube',
        cite: 'Spitfire Audio s.a. b',
        entry: 'Spitfire Audio s.a. b. Spitfire Audio – YouTube.',
        url: 'https://www.youtube.com/channel/UCJ7QbJQgJSSdd_v-VxdO6Gg',
        accessed: READ,
        category: 'Yhteisöt ja kanavat',
    },
    {
        id: 'goss',
        cite: 'Orchestration Online s.a.',
        entry: 'Orchestration Online s.a. Orchestration Online (Thomas Goss) – YouTube.',
        url: 'https://www.youtube.com/@OrchestrationOnline',
        accessed: READ,
        category: 'Yhteisöt ja kanavat',
    },

    // Ohjeet
    {
        id: 'hh-libguide',
        cite: 'Haaga-Helia ammattikorkeakoulu 2026',
        entry: 'Haaga-Helia ammattikorkeakoulu 2026. Lähdeviittaamisen tueksi: Tekstiviitteet ja lähdeluettelo.',
        url: 'https://libguides.haaga-helia.fi/lahdeviittaamisen-tueksi/tekstiviitteet-ja-lahdeluettelo',
        accessed: READ,
        category: 'Ohjeet',
    },
    {
        id: 'hh-tekoaly',
        cite: 'Haaga-Helia ammattikorkeakoulu 2024',
        entry: 'Haaga-Helia ammattikorkeakoulu 2024. Tekoälyn käyttöohjeistus Haaga-Helia ammattikorkeakoulussa.',
        url: 'https://www.haaga-helia.fi/fi/opiskelu/tekoalyn-kayttoohjeistus-haaga-helia-ammattikorkeakoulussa',
        accessed: READ,
        category: 'Ohjeet',
    },
];

/**
 * Sources sorted alphabetically by the start of the entry, as the guide
 * requires. Finnish collation keeps å, ä and ö at the end of the alphabet.
 */
export const sources: Source[] = [...list].sort((first, second) =>
    first.entry.localeCompare(second.entry, 'fi', { sensitivity: 'base' }),
);

const byId = new Map(list.map((source) => [source.id, source]));

export function getSource(id: string): Source {
    const source = byId.get(id);

    if (!source) {
        throw new Error(`Unknown source "${id}"`);
    }

    return source;
}

export const sourceCategories: SourceCategory[] = [
    'Kurssimateriaali',
    'Native Instruments',
    'Kilpailijat',
    'Uutiset ja artikkelit',
    'Tutkimukset ja tilastot',
    'Yhteisöt ja kanavat',
    'Ohjeet',
];
