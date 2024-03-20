export interface ICreateFileOptions {
    title: string;
    tags: string[];
    date: string;
    content: string;
    categories: string;
}
export interface ICreateFolderOptions {
    originName: string | null;
    newName: string;
}
