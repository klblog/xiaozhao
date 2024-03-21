export interface IhomeOptions {
    title: string;
    description: string;
    tagline: string;
    buttons: {
        text: string;
        link: string;
        type: string;
    }[];
    features: {
        title: string;
        details: string;
    }[];
    content: string;
}
