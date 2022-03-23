import Vue from "vue";
import router from '../router'

let that = Vue.prototype

that.$sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)))

that.$p2e = string => string.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

that.$toLocal = (number) => {
    //purify number
    number = number + ''
    if (number === '.') {
        return '0.'
    }

    if(number.startsWith('-'))
        return 0

    if (number.includes('E')) {
        if (parseFloat(number) < 1.0e-7) {
            //zero numbers
            return 0
        } else
            number = parseFloat(number) + ''
    }

    number = that.$p2e(number).replace(/[^\d.]|\.{2}|,/ig, '')
    if (number.includes('.')) {
        number = number.split('.')[0] + '.' + (number.split('.')[1] || '')
    }

    if (parseFloat(number)) {
        //separate number
        const int = parseFloat(number.split('.')[0]).toLocaleString()
        if (number.includes('.')) {
            return int + '.' + (number.split('.')[1].slice(0, 8) || '')
        } else {
            return int
        }
    } else {
        return number
    }

}

that.$S2N = string => parseFloat((string + '').replace(/,/g, ''))
that.$A2N = string => (string + '').replace(/[^\d]/ig, '')

const faString = '[\\w!#^+=?*&@.$%{}\\[\\]\'\\\\\\-,\\(\\):;`|<>/~"]|\\s{2}'
const faRegex = new RegExp(faString, "ig")
that.$S2Fa = string => (string + '').replace(faRegex, '')

that.$marketType2relatedCoin = marketType => marketType.replace(/_TOMAN|_TETHER/, '')

// eslint-disable-next-line no-useless-escape
that.$separator = (target, repeatCount = 4, separator = '-', type = 'd', regString = "\\d{1,4}") => {
    //make filter regex
    let replaceString = '[^\\d]'
    replaceString = replaceString.replace(/d/ig, type)
    const regex1 = new RegExp(replaceString, "g")

    //filter target
    target = target + ''
    target = target.replace(regex1, '')

    if (target) {
        //make separator regex
        regString = regString.replace(/d/ig, type)
        regString = regString.replace(/4/g, repeatCount)
        const regex = new RegExp(regString, "g");

        //separate
        return target.match(regex).join(separator)
    }
}

that.$toSnakeCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toUpperCase())
        .join('_');

that.$getuserInfo = async () => {
    that.state.loading = true
    const res = await that.$axios.get('/users/account')
    const baseDTO = res.baseDTO

    that.state.userInfo.firstName = baseDTO.firstName
    that.state.userInfo.email = baseDTO.email
    that.state.userInfo.authenticationType = baseDTO.authenticationType
    that.state.userInfo.towStepAuthenticationType = baseDTO.towStepAuthenticationType
    that.state.userInfo.userAccountLevel = baseDTO.userAccountLevel
    that.state.userInfo.totalTradesVolume = baseDTO.totalTradesVolume || 0
    that.state.userInfo.authorized = baseDTO.authenticationType === "AUTHORIZED"
    that.state.userInfo.pending = baseDTO.authenticationType === "PENDING"
    that.state.userInfo.supervisor = baseDTO.supervisor

    that.state.gotten = true
}

that.$getFees = async () => {
    let a;
    that.$accountLevel = await that.$axios('/users/account-levels')
    a = that.$accountLevel.filter(i => i.name === that.state.userInfo.userAccountLevel)
    that.state.userInfo.fee = a.length ? a[0].wagePercent : 0
}

that.$logout = () => {
    localStorage.clear('token')
    Vue.$cookies.remove('--abcd14589')
    that.state.token = ''
    that.state.gotten = false
    that.$axios.defaults.headers.common['Authorization'] = that.state.token
    try {
        router.push('/sign-in')
    } catch (e) {
        location.reload()
    }
}

that.$setToken = (token, remember = true) => {
    if (remember) {
        localStorage.token = 'Bearer ' + token
        that.state.token = localStorage.token
    } else {
        Vue.$cookies.set('--abcd14589', 'Bearer ' + token, 'session')
        that.state.token = Vue.$cookies.get('--abcd14589')
    }
    that.state.gotten = false
    that.$axios.defaults.headers.common['Authorization'] = that.state.token

}

that.$error = async (title, text, icon = 'error', button = 'متوجه شدم') => {
    return await that.$swal({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: button,
        customClass: {
            confirmButton: 'btn-success',
        },
    })
}

that.$validPass = (password) => {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    return re.test(password);
}

that.$validEmail = (email) => {
    var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

// that.$faValidate = (data) => {
//     return data.replace(/[\w!#^+=?*&@.$%\\\-,():;`]|{2}/ig,'')
// }

that.$detectOs = () => {
    let Name = "Unknown OS";
    if (navigator.userAgent.indexOf("Win") > -1) Name =
        "WINDOWS";
    if (navigator.userAgent.indexOf("Mac") > -1) Name =
        "MACINTOSH";
    if (navigator.userAgent.indexOf("Linux") > -1) Name =
        "LINUX";
    if (navigator.userAgent.indexOf("Android") > -1) Name =
        "ANDROID";
    if (navigator.userAgent.indexOf("like Mac") > -1) Name = "IOS";
    // console.log('Your OS: ' + name);
    return Name
}
that.$detectBrowser = () => {
    // Opera 8.0+
    let browserType
    let isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if (isOpera) {
        browserType = 'OPERA'
    }

    // Firefox 1.0+
    let isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
        browserType = 'FIREFOX'
    }

    // Safari 3.0+ "[object HTMLElementConstructor]"
    let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
    if (isSafari) {
        browserType = 'SAFARI'
    }
    // Internet Explorer 6-11
    let isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE) {
        browserType = 'IE'
    }
    // Edge 20+
    let isEdge = !isIE && !!window.StyleMedia;
    if (isEdge) {
        browserType = 'EDGE'
    }
    // Chrome 1 - 79
    let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    if (isChrome) {
        browserType = 'CHROME'
    }
    // Edge (based on chromium) detection
    let isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
    if (isEdgeChromium) {
        browserType = 'EDGECHROMIUM'
    }
    // console.log('browserType : ' + browserType)
    return browserType
}
that.$detectDevice = () => {
    let deviceType
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        deviceType = 'TABLET'
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        deviceType = 'MOBILE'
    } else {
        deviceType = 'DESKTOP'
    }
    // console.log(deviceType)
    return deviceType
}

that.$test = (e) => {
    console.log('event : ', e)
}

import './georgianToJalali'