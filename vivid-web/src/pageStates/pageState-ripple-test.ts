// FILEPATH: src/pageStates/pageState-ripple-test.ts

import * as React from "react";
import { decorate, observable, action } from "mobx";
import { RippleAPI } from '../../services/ripple/api'
import { IRippleTestPageProp } from '../../pages/page-ripple-test';

// import * as ripple from "../services/ripple_v2/ripple-latest";

import ripple = require("../services/ripple_v2/ripple-latest");

export class RippleTestPageState implements IRippleTestPageProp {

    // from prop
    classes: any;
    server_info: any;

    constructor() { }

    GetRippleInfo() {
        // console.log(ripple);
        // var api = new ripple.RippleAPI({server:'wss://s1.ripple.com/'});
        var api = new ripple.RippleAPI({ server: 'wss://s1.ripple.com/' });
        var server_info = api.connect()
            .then(() => {
                return api.getServerInfo();
            })
            .then((x) => {
                this.server_info = x;
            });
    }
}

decorate(RippleTestPageState, {
    server_info: observable,
    GetRippleInfo: action.bound
});

export default RippleTestPageState;
