import { ICreateFileOptions } from 'src/interface/file';
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
    createFolderInjectable(originFolderName: string, folderName: string): Promise<"创建成功" | "删除成功" | "修改成功">;
    createMarkdownFileInjectable(options: ICreateFileOptions): void;
}
