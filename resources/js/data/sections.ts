import {
    asiakaspersoona,
    home,
    lahteet,
    ostopolku,
    reflektointi,
    segmentointi,
    tekoaly,
    yritys,
} from '@/routes';

export type Section = {
    number: string;
    title: string;
    shortTitle: string;
    component: string;
    href: string;
};

export const sections: Section[] = [
    {
        number: '0',
        title: 'Kansi',
        shortTitle: 'Kansi',
        component: 'kansi',
        href: home.url(),
    },
    {
        number: '1',
        title: 'Yritys, tuote ja asiakkaiden tarpeet',
        shortTitle: 'Yritys',
        component: 'yritys',
        href: yritys.url(),
    },
    {
        number: '2',
        title: 'Segmentointi',
        shortTitle: 'Segmentit',
        component: 'segmentointi',
        href: segmentointi.url(),
    },
    {
        number: '3',
        title: 'Asiakaspersoona',
        shortTitle: 'Persoona',
        component: 'asiakaspersoona',
        href: asiakaspersoona.url(),
    },
    {
        number: '4',
        title: 'Asiakaspersoonan ostopolku',
        shortTitle: 'Ostopolku',
        component: 'ostopolku',
        href: ostopolku.url(),
    },
    {
        number: '5',
        title: 'Reflektointi',
        shortTitle: 'Reflektointi',
        component: 'reflektointi',
        href: reflektointi.url(),
    },
    {
        number: '6',
        title: 'Tekoälyn käyttö',
        shortTitle: 'Tekoäly',
        component: 'tekoaly',
        href: tekoaly.url(),
    },
    {
        number: '7',
        title: 'Lähteet',
        shortTitle: 'Lähteet',
        component: 'lahteet',
        href: lahteet.url(),
    },
];
