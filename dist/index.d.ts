export declare const createSearch: (items: string[]) => (keyword: string, options?: {
    exact?: boolean | undefined;
    order?: boolean | undefined;
} | undefined) => string[];
export default createSearch;
