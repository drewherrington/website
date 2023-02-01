import Project from '@/contracts/project';
import moment from 'moment';
import Link from 'next/link';

type Prop = {
    project: Project;
};

export default function Card ({ project }: Prop) {
    return (
        <>
            <div className="rounded-xl shadow overflow-hidden flex flex-col flex-1 justify-between">
                <div className="px-4 py-5 sm:px-6 bg-white flex flex-col flex-1 justify-between">
                    <div>
                        <div>
                            <h6 className="font-semibold text-base text-gray-800">{project.full_name}</h6>

                            <span className="block text-xs text-gray-500">
                                Last updated {moment(project.updated_at).fromNow()}
                            </span>
                        </div>

                        <p className="mt-4 text-sm text-gray-600">{project.description}</p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <Link target="_blank" className="inline-flex items-center text-xs font-medium text-blue-500 hover:text-blue-600 focus:text-blue-600 active:text-blue-700" href={project.html_url}>
                            <span>View project</span>

                            <span className="ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Link>

                        <span className="text-xs font-medium rounded-full py-1 px-2 bg-blue-100 text-blue-800 capitalize">
                            {(project.language || 'Markdown').toLowerCase()}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
