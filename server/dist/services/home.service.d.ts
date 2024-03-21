import { IHomeNavigationOptions, IhomeOptions } from 'src/interface/home';
export declare class HomeService {
    getHomeDetailMd(): {
        title: any;
        description: any;
        tagline: any;
        buttons: any;
        features: any;
        content: string;
    };
    setHomeDetailMd(options: IhomeOptions): string;
    getHomeNavItem(): any;
    setHomeNavItem(options: IHomeNavigationOptions): string;
}
