import { Request } from 'express';
import { HomeService } from 'src/services/home.service';
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    getDetail(req: Request): Promise<{
        title: any;
        description: any;
        tagline: any;
        buttons: any;
        features: any;
        content: string;
    }>;
}
