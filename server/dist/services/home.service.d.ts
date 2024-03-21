import { IhomeOptions } from 'src/interface/home';
export declare class HomeService {
    getHomeDetailMd(): {
        title: any;
        description: any;
        tagline: any;
        buttons: any;
        features: any;
        content: string;
    };
    seetHomeDetailMd(options: IhomeOptions): void;
}
