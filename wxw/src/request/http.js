import axios from 'axios';
import store from '../store';

axios.defaults.baseURL = 'http://juliao.wxwerp.com';
axios.defaults.adapter = require('axios/lib/adapters/http');

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response.data;
    },
    err => {
        return Promise.reject(err);
    }
);

function appendAuthorization(config) {
    let token = store.state.token;
    if (token) {
        token = 'Bearer ' + token;
        if (config && config.headers) {
            if (config.headers.Authorization) {
                config.headers.Authorization = token;
            } else {
                config.headers = {
                    Authorization: token,
                };
            }
        } else {
            config = { headers: { Authorization: token } };
        }
    }

    return config;
}

export function post(url, data = {}, config) {
    config = appendAuthorization(config);
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then(
            response => {
                resolve(response);
            },
            err => {
                reject(err);
            }
        );
    });
}

export function send(url, data = {}, config) {
    config = appendAuthorization(config);
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then(
            response => {
                if (response.success) {
                    resolve(response);
                }
            },
            err => {
                reject(err);
            }
        );
    });
}
