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
}
