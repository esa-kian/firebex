import Vue from 'vue'

// axios
import axios from 'axios'
// import router from "@/router";

const that = Vue.prototype

// if (that.state.token) {
//     // console.log('I have token : ', that.state.token)
//     axios.defaults.headers.common['Authorization'] = that.state.token
// }
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers.common['access-control-allow-origin'] = "*"
axios.defaults.headers.common['Access-Control-Allow-Headers'] = "*"
axios.defaults.baseURL = 'https://itarz.net/api'

// // axios.interceptors.request.use(
// //     (res)=>{
// //         console.log(res)
// //         that.state.loading = true
// //     }
// // )

// axios.interceptors.response.use(
//     (res) => {
//         that.state.loading = false

//         // console.log('result : ', res)

//         return res.data;
//     },
//     (err) => {
//         that.state.loading = false

//         const res = err.response || err.toJSON()
//         // console.log(err.response.data);
//         if (err.response) if (res.data.message) if (res.data.message.includes('JWT') || res.data.message.includes('Invalid Token')) {
//             that.$logout()
//             return Promise.reject(err);
//         } else if (err.response.data.message.includes('ShebaCode')) {
//             that.$error('شماره شبا یا کارت تکراری است.', '')
//             return Promise.reject(err);
//         } else if (err.response.data.message.includes('GOOGLE_FAILURE')) {
//             return Promise.reject(err);
//         } else if (err.response.data.message === "USER_IDENTITY_DATA") {
//             // console.log('in USER_IDENTITY_DATA');
//             const a = {
//                 MOBILE_IS_INCORRECT: 'شماره همراه تکراری میباشد.',
//                 NATIONAL_CODE_IS_INCORRECT: 'کد ملی تکراری میباشد.',
//                 TELEPHONE_IS_INCORRECT: 'شماره تلفن تکراری میباشد.',
//             }
//             let uniqueErrors = '';
//             for (let i = 0; i < err.response.data.errors.length; i++) {
//                 uniqueErrors = uniqueErrors + (a[err.response.data.errors[i]] || err.response.data.errors[i]) + '\n'
//             }
//             that.$error('اطلاعات تکراری میباشد', uniqueErrors);
//             return Promise.reject(err);
//         } else if (err.response.data.status === 'BAD_REQUEST') {
//             let a = err.response.data.errors[0]
//             // a = JSON.parse(a.match(/\[(.*?)\]/)[1])
//             const codeError = {
//                 'invalid otp or mobile' : 'کد وارد شده اشتباه است',
//                 'otp used before' : 'کد منقضی شده است',
//             }
//             const finoError = {
//                 'nid is not valid' : 'کد ملی صحیح نیست',
//                 'mobile is not valid' : 'شماره همراه صحیح نیست',
//                 'nid and mobile is not match' : 'شماره همراه شما با کد ملی مطابقت ندارد',
//             }
//             if (finoError[a]) {
//                 that.$error('خطای احراز هویت', codeError[a] || finoError[a]);
//                 if(finoError[a]){
//                     router.push({name:'userAccount'})
//                 }
//                 return Promise.reject(err);
//             }
//         }

//         // if (err.response ? ['UNAUTHORIZED'].includes(res.data.status) : false) {
//         //     return Promise.reject(err);
//         // }

//         const text = err.response ?
//             that.$errorHandeling[err.response.data.message]
//             || that.$errorHandeling[err.response.data.status]
//             || res.data.errors
//             || res.data.error
//             : res.message

//         that.$swal({
//             icon: 'error',
//             title: err.request.status,
//             text: text,
//             confirmButtonText: 'متوجه شدم',
//             customClass: {
//                 confirmButton: 'btn-success',
//             },
//         })

//         return Promise.reject(err);
//     },);


that.$axios = axios

export default axios
