/**
 * @file   store
 * @author zhykirby
 * @date   2021-06-03
 */
import {makeAutoObservable} from 'mobx';
import {AUTH_TYPE} from './config';

// todo: 数据多以后再拆分
class Auth {
    auth = sessionStorage.getItem('auth') || AUTH_TYPE.visitor

    constructor() {
        makeAutoObservable(this)
    }

    changeAuthState(state) {
        this.auth = state;
        sessionStorage.setItem('auth', state);
    }

};

export default new Auth();
