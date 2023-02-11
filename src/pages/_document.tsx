import { Html, Head, Main, NextScript } from 'next/document';

export default function Document () {
    return (
        <Html lang="en">
            <Head title="Drew Herrington | Personal Portfolio">
                <meta name="description" content="Drew Herrington personal portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body className="antialiased leading-normal bg-white text-gray-600">
                <header>
                    <nav className="bg-gray-900">
                        <div className="container mx-auto px-4 sm:px-6">
                            <div className="flex items-center justify-between h-12">
                                <a href="/drew-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-300 hover:text-gray-100 focus:text-gray-100 active:text-gray-300">
                                    <span className="font-semibold text-sm">
                                        Resumé
                                    </span>

                                    <span className="ml-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>

                                <a target="_blank" href="https://github.com/drewherrington" className="text-gray-300 hover:text-gray-100 focus:text-gray-100 active:text-gray-300" rel="noreferrer">
                                    <span>
                                        <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>

                <Main />

                <footer className="py-8 bg-gray-100">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex items-center justify-center text-center">
                            <span className="text-xs text-gray-500">
                                &copy; {(new Date()).getFullYear()} Drew Herrington
                            </span>
                        </div>
                    </div>
                </footer>

                <NextScript />
            </body>
        </Html>
    );
}
