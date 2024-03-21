import { Request } from 'express';
import { ReleaseService } from 'src/services/release.service';
export declare class ReleaseController {
    private readonly releaseService;
    constructor(releaseService: ReleaseService);
    releaseVuepress(req: Request): Promise<string>;
}
