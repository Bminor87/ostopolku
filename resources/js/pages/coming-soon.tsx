import { Head } from '@inertiajs/react';

const journeySteps = [
    'Tarpeen tunnistaminen',
    'Tiedonhaku',
    'Vaihtoehtojen vertailu',
    'Ostopäätös',
    'Oston jälkeinen arviointi',
];

export default function ComingSoon() {
    return (
        <>
            <Head title="Tulossa pian" />
            <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-[-20rem] mx-auto size-[40rem] rounded-full bg-gradient-to-br from-amber-200/40 via-rose-200/30 to-transparent blur-3xl dark:from-amber-500/10 dark:via-rose-500/10"
                />

                <header className="relative mx-auto w-full max-w-5xl px-6 py-8">
                    <span className="text-sm font-semibold tracking-tight">
                        Ostopolku
                    </span>
                </header>

                <main className="relative mx-auto flex w-full max-w-5xl grow flex-col justify-center gap-12 px-6 pb-24 transition-opacity duration-700 starting:opacity-0">
                    <div className="flex max-w-2xl flex-col gap-6">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                            <span className="size-1.5 animate-pulse rounded-full bg-amber-500" />
                            Tulossa pian
                        </span>
                        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                            Ymmärrä asiakkaasi koko ostopolun matkalta.
                        </h1>
                        <p className="max-w-xl text-lg text-pretty text-muted-foreground">
                            Rakennamme työkalua asiakasymmärryksen,
                            asiakaspersoonien ja kuluttajan ostoprosessin
                            hahmottamiseen. Palaa pian takaisin.
                        </p>
                    </div>

                    <ol className="grid gap-3 sm:grid-cols-5">
                        {journeySteps.map((step, index) => (
                            <li
                                key={step}
                                className="flex flex-col gap-2 rounded-lg border border-border bg-card/60 p-4 backdrop-blur-sm"
                            >
                                <span className="text-xs font-medium text-muted-foreground tabular-nums">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-sm font-medium">
                                    {step}
                                </span>
                            </li>
                        ))}
                    </ol>
                </main>

                <footer className="relative mx-auto w-full max-w-5xl px-6 py-8 text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Ostopolku
                </footer>
            </div>
        </>
    );
}
