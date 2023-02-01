import { URL } from 'url';

export default interface Project {
    id: string;
    name: string;
    full_name: string;
    updated_at: string;
    description: string;
    website?: string;
    html_url: URL;
    language: string;
};
