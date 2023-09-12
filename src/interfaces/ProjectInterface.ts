export default interface ProjectInterface {
    id: string;
    title: string;
    body: string;
    from?: string;
    to?: string;
    tags: string[];
}