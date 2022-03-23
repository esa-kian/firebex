import Vue from "vue";
import VueRouter from "vue-router";

// const that = Vue.prototype;

import Home from "@/components/home/Home";
import About from "@/components/home/About";
import Policy from "@/components/home/Policy";
import Contact from "@/components/home/Contact";
import Faq from "@/components/home/Faq";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Forgot from "@/components/auth/Forgot";
import Dashboard from "@/components/dashboard/Dashboard";
import Notifications from "@/components/dashboard/Notifications";
import Settings from "@/components/dashboard/Settings";
import Profile from "@/components/dashboard/Profile";
import InviteFriends from "@/components/dashboard/InviteFriends";
import Wallet from "@/components/dashboard/Wallet";
import History from "@/components/dashboard/History";
import Exchange from "@/components/dashboard/Exchange";
import Trade from "@/components/trade/Trade";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  linkActiveClass: "active-tab",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about-us",
      name: "About",
      component: About
    },
    {
      path: "/privacy-policy",
      name: "Policy",
      component: Policy
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: Contact
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/forgot-password",
      name: "Forgot",
      component: Forgot
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/notifications",
      name: "Notifications",
      component: Notifications
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/invite-friends",
      name: "InviteFriends",
      component: InviteFriends
    },
    {
      path: "/wallet",
      name: "Wallet",
      component: Wallet
    },
    {
      path: "/history",
      name: "History",
      component: History
    },
    {
      path: "/exchange",
      name: "Exchange",
      component: Exchange
    },
    {
      path: "/trade/TETHER/TOMAN",
      redirect: "/trade/TOMAN/TETHER"
    },
    {
      path: "/trade/:tradeTo/:tradeFrom",
      name: "Trade",
      component: Trade,
      props: true
    },
    {
      path: "/trade",
      redirect: "/trade/TOMAN/BITCOIN"
    },
    {
      path: "*",
      redirect: "/"
    }
  ],

  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return new Promise(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, 500);
    });
  }
});

// const forLogin = [
//   "History",
//   "Dashboard",
//   "Wallet",
//   "Setting",
//   "Messages",
//   "Profile",
//   "Orders",
//   "Trade"
// ];
// const unAuthorUser = ["History", "Dashboard", "Wallet", "Orders"];
// const otp = ["TwoStep", "ResetPass"];
// const auth = ["Login", "Register", "ForgetPass"];

// router.beforeEach(async (to, from, next) => {

//     that.state.loading = true
//     if (that.state.token) {

//         if (!that.state.gotten) {
//             await that.$getuserInfo()
//             await that.$getFees()
//         }

//         that.state.loading = true

//         if (from.name === 'Trade' || from.name === 'Blog') {
//             await window.open(to.fullPath, '_self')
//         } else if (otp.includes(to.name) || auth.includes(to.name)) {
//             next({name: 'Home'})
//         } else if (to.name === 'Trade') {
//             try {
//                 that.state.loading = true
//                 await that.$axios(`/markets/${to.params.tradeFrom}_${to.params.tradeTo}`)
//                 next()
//             } catch (e) {
//                 if (e.response.data.message === "MARKET_IS_NOT_ACTIVE") {
//                     if (otp.includes(from.name)) {
//                         next({name: 'Home'})
//                     } else {
//                         await that.$error('بازار غیرفعال است')
//                         next(from)
//                     }
//                 }
//             }
//         } else {
//             if (that.state.userInfo.authorized) {
//                 next()
//             } else {
//                 if (otp.includes(from.name) && to.name !== 'userAccount') {
//                     next({name : 'userAccount'})
//                 } else if (unAuthorUser.includes(to.name)) {
//                     that.state.loading = false
//                     const res = await that.$error('عدم دسترسی', 'برای دسترسی به این بخش نیاز است ابتدا حساب شما تکمیل و تایید شود', 'error', 'حساب کاربری')
//                     if (res.isConfirmed) {
//                         next('/useraccount')
//                     } else {
//                         next(from)
//                     }
//                 } else next()
//             }
//         }
//     } else {
//         if ((otp.includes(to.name) && !Vue.$cookies.isKey('username')) || forLogin.includes(to.name))
//             next({name: 'Login'})
//         else {
//             next()
//         }
//     }
//     that.state.loading = false
// })
// // router.afterEach((to, from) => {
// //     if (from.name === 'Trade') {
// //         location.reload()
// //     }
// // })

export default router;
