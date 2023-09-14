export default interface ProjectInterface {
    id: string;
    title: string;
    description: string;
    body: string;
    from?: string;
    to?: string;
    repo?: string;
    website?: string;
    tags: string[];
    images: string[];
}