export declare class FileService {
    getFileInjectable(): {
        name: string;
        children: {
            title: any;
            tags: any;
            author: any;
            date: any;
            content: string;
            categories: string;
        }[];
    }[];
    private getMarkdownFiles;
}
