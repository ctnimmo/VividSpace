export interface APIResponse<T> {
    head: APIResponseHead;
    content: T;
}

export interface APIResponseHead {
    page: number;
    pageCount: number;
    totalRows: number;
}