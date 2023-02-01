import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import profilePic from '@/assets/images/profile-photo.jpg';
import Project from '@/contracts/project';
import Card from '@/components/card';

const inter = Inter({ subsets: ['latin'] });

export default function Home ({ projects }: any) {
    return (
        <>
            <Head>
                <title>Drew Herrington | Personal Portfolio</title>
                <meta name="description" content="Drew Herrington personal portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="lg:grid lg:grid-cols-12 gap-6">
                        <div className="col-span-full">
                            <div className="md:flex items-start justify-center max-w-3xl mx-auto">
                                <div className="h-32 w-32 mx-auto md:m-0 rounded-full overflow-hidden">
                                    <Image className="h-32 w-32" src={profilePic} alt="Drew-Herrington" />
                                </div>

                                <div className="mt-10 md:mt-0 md:ml-10 flex-1 items-center text-center md:text-left">
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-2xl">
                                            <span>&#128075;</span> Hi there!
                                        </h4>

                                        <p className="mt-4 leading-relaxed text-lg">
                                            I am <a target="_blank" className="text-blue-500 hover:text-blue-600 focus:text-blue-600 active:text-blue-700" href="https://www.facebook.com/drew.herrington.1" rel="noreferrer">@drewherrington</a>, a driven software engineer with 2+ years of experience designing and developing innovative solutions. Proficient in PHP, Python, and TypeScript, experienced in Agile methodology and proficient in developing high-performance, scalable applications. A problem-solver at heart with a passion for delivering quality software products to clients. Always eager to learn and adapt to new technologies to improve efficiency and effectiveness.
                                        </p>

                                        <div className="mt-10 flex justify-center md:justify-start space-x-6 text-sm">
                                            <a className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-50 text-white font-semibold h-12 px-6 rounded-full w-full flex items-center justify-center sm:w-auto dark:bg-blue-500 dark:highlight-white/20 dark:hover:bg-blue-400" href="mailto:drewherrington@hotmail.co.uk">
                                                <span>Contact me</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="mb-6 lg:grid lg:grid-cols-12 gap-6">
                        <div className="col-span-full md:col-span-6">
                            <div>
                                <h5 className="font-bold text-xl text-gray-800">
                                    Personal Projects
                                </h5>

                                <p className="mt-3 max-w-md text-sm text-gray-500 leading-relaxed">
                                    A list of personal projects now hosted as open source projects or as templates on GitHub pulled in live using <span className="font-bold">GitHub API</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 gap-6">
                        {projects.map((project: Project) => (
                            <div key={project.id} className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col">
                                <Card project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps () {
    const apiUrl = process.env.GITHUB_API_URL;
    const token = process.env.GITHUB_API_KEY;
    const username = process.env.GITHUB_API_USERNAME;

    try {
        const response = await fetch(`${apiUrl}/users/${username}/repos`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const projects = await response.json();

        return { props: { projects } };
    } catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: '/404',
            },
        };
    }
}
