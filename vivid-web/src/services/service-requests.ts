import { APIRequest, Pager } from './request';
import { APIResponse } from './response';

export class ServiceRequests {

    public url: string = "";
    public token: string;
    public error: string = "";

    constructor(token: string, rootURL: string) {
        this.token = token;
        this.url = rootURL;
    }

    public sendRequest<T>(req: APIRequest): Promise<APIResponse<T>> {
        let url = this.url + req.url
        let headers = new Headers();
        let data: RequestInit = {}
        let queryStringParts = []

        // headers.set("Token", this.token)

        for (let key in req.getData) {
            queryStringParts.push(key + "=" + encodeURIComponent(req.getData[key]))
        }
        if (req.method.toLowerCase() != "get") {
            data.method = req.method;
            headers.set("Content-Type", "application/json");
            headers.set("Username", "user"); //just need a header
            headers.set("Referrer-Policy", "origin-when-cross-origin");
            data.body = JSON.stringify(req.postData);
        }
        if (req.pager !== undefined) {
            queryStringParts.push("page=" + req.pager.page)
            queryStringParts.push("perPage=" + req.pager.perPage)
        }
        if (queryStringParts.length > 0) {
            url += "?" + queryStringParts.join("&")
        }
        data.headers = headers;

        return fetch(url, data).then(response => {
            return Promise.resolve<APIResponse<T>>(response).then(response => { return response.json(); });
        }).catch(err => {
            return Promise.reject<APIResponse<T>>(err).then(err => { this.error = "Error" + err; });
        });
    }
}