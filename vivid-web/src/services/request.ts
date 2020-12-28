export interface Pager {
    page: number;
    perPage: number;
}

export interface APIRequest {
    url: string;
    pager?: Pager;
    method: string;
    postData?: any;
    getData?: any;
}