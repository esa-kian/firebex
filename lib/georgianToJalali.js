// import Vue from "vue";
// import jmoment from 'moment-jalaali'

// let that = Vue.prototype

// that.$dateFormat = {
//     fa: 'dddd jDD jMMMM jYYYY',
//     en: 'YYYY-MM-DDTHH:mm:ss',
//     faBlog:'jDD jMMMM jYYYY',
//     faDate: 'jYYYY/jM/jD',
//     faDateTime: 'jYYYY/jM/jD - HH:mm',
//     enDate: 'YYYY-MM-DD',
//     fullTime:'HH:mm:ss',
//     time:'HH:mm'
// }

// jmoment.loadPersian({dialect: 'persian-modern'})

// that.$G2J = (e,toType='faDateTime',fromType='en') => {
//     return jmoment(e, that.$dateFormat[fromType]).format(that.$dateFormat[toType])
// }
// that.$J2G = (e,toType='en',fromType='faDate') => {
//     return jmoment(e, that.$dateFormat[fromType]).format(that.$dateFormat[toType])
// }

// Vue.prototype.$jmoment = jmoment
// export default jmoment