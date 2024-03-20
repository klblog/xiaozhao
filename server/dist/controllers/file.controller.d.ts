import { Request } from 'express';
import { FileService } from '../services/file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    getFile(req: Request): Promise<{
        name: string;
        children: {
            title: any;
            tags: any;
            author: any;
            date: any;
            content: string;
            categories: string;
        }[];
    }[]>;
    createFolder(body: any, req: Request): Promise<"创建成功" | "删除成功" | "修改成功">;
    updateFile(body: any, req: Request): Promise<string>;
}
