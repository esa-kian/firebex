import Vue from "vue";
import VueRouter from "vue-router";

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


export default router;
