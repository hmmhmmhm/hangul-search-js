export declare const createSearch: (items: string[]) => (keyword: string, options?: {
    exact?: boolean | undefined;
} | undefined) => string[];
export default createSearch;
