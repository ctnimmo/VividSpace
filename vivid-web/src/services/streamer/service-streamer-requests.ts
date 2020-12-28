import { APIRequest, Pager } from '../request';
import { APIResponse } from '../response';
import { Streamer, StreamerItems } from '../../models/streamer'
import { ServiceRequests } from '../service-requests';

export interface IStreamerServiceRequests {

    // [Get] /api/Streamer
    fetchStreamerList(searchText?: string, pager?: Pager): Promise<APIResponse<Array<Streamer>>>;

    // [Get] /api/Streamer/{StreamerRef}
    fetchStreamer(StreamerRef: string, pager?: Pager): Promise<APIResponse<StreamerItems>>;
}

export class StreamerServiceRequests implements IStreamerServiceRequests {

    private sReq: ServiceRequests;

    constructor(token: string, rootURL: string) {
        this.sReq = new ServiceRequests(token, rootURL);
    }

    // [Get] /api/Streamer
    public fetchStreamerList(searchText?: string, pager?: Pager): Promise<APIResponse<Array<Streamer>>> {
        let req: APIRequest = {
            url: "/api/Streamer",
            method: "get",
            pager: pager,
            getData: {}
        }
        if(searchText) {
            req.getData.searchText = searchText
        }
        return this.sReq.sendRequest<Array<Streamer>>(req)
    }

    // [Get] /api/Streamer/{StreamerRef}
    public fetchStreamer(streamerRef: string, pager?: Pager): Promise<APIResponse<StreamerItems>> {
        let req: APIRequest = {
            url: "/api/Streamer/" + streamerRef,
            method: "get",
            pager: pager,
        }
        return this.sReq.sendRequest<StreamerItems>(req)
    }
}
