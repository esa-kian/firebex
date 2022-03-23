import Vue from 'vue';

// Vue.use(require('vue-cookies'))

const that = Vue.prototype

const state = Vue.observable({
    // token: localStorage.token || Vue.$cookies.get('--abcd14589') || false,
    loading: false,
    gotten: false,
    loop: true,

    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        remember: false,
        towStepAuthenticationType: '',
        authenticationType: '',
        authorized: false,
        pending: false,
        supervisor: false,
        userAccountLevel: '',
        totalTradesVolume: 0,
        fee: 0.4,
    },
    shopInfo: {
        minSell: 0,
        maxBuy: 0,
        lastPrice: 0,
    }
})

that.state = state
export default state