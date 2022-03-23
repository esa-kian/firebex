<template>
  <div id="app">
    <div class="hamburger-btn">
      <button @click="showMenu" class="menu"></button>
      <div
        class="shortcuts"
        v-if="
          ![
            'Login',
            'Register',
            'Forgot',
            'Home',
            'About',
            'Policy',
            'Contact',
            'Faq',
          ].includes($route.name)
        "
      >
        <ul class="navbar">
          <li :class="[$route.name == 'Wallet' ? 'active_nav' : '']">
            <router-link :to="'/wallet'">
              <div class="wallet_nav icon"></div>

              کیف پول</router-link
            >
          </li>
          <li :class="[$route.name == 'Exchange' ? 'active_nav' : '']">
            <router-link :to="'/exchange'">
              <div class="exchange_nav icon"></div>

              مارکت</router-link
            >
          </li>
          <li :class="[$route.params.tradeTo == 'TOMAN' ? 'active_nav' : '']">
            <router-link :to="'/trade/TOMAN/BITCOIN'">
              <div class="market icon"></div>

              بازار پایه ریال</router-link
            >
          </li>
          <li :class="[$route.params.tradeTo == 'TETHER' ? 'active_nav' : '']">
            <router-link :to="'/trade/TETHER/BITCOIN'">
              <div class="advance icon"></div>

              بازار پایه تتر</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="
        [
          'Login',
          'Register',
          'Forgot',
          'Home',
          'About',
          'Policy',
          'Contact',
          'Faq',
        ].includes($route.name)
      "
      id="nav"
    >
      <navbar></navbar>
    </div>
    <div
      v-if="
        ![
          'Login',
          'Register',
          'Forgot',
          'Home',
          'About',
          'Policy',
          'Contact',
          'Faq',
        ].includes($route.name)
      "
      id="side"
    >
      <navbar-dashboard></navbar-dashboard>
      <sidebar></sidebar>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
    <div
      v-if="
        [
          'Login',
          'Register',
          'Forgot',
          'Home',
          'About',
          'Policy',
          'Contact',
          'Faq',
        ].includes($route.name)
      "
      id="footer"
    >
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/nav/Navbar.vue";
import Footer from "./components/footer/Footer.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
import NavbarDashboard from "./components/nav/NavbarDashboard.vue";

export default {
  components: {
    Navbar,
    Footer,
    Sidebar,
    NavbarDashboard,
  },
  methods: {
    showMenu() {
      if (
        [
          "Login",
          "Register",
          "Forgot",
          "Home",
          "About",
          "Policy",
          "Contact",
          "Faq",
        ].includes(this.$route.name)
      ) {
        document.getElementById("nav").setAttribute("style", "right:0%");
      } else if (
        ![
          "Login",
          "Register",
          "Forgot",
          "Home",
          "About",
          "Policy",
          "Contact",
          "Faq",
        ].includes(this.$route.name)
      ) {
        document.getElementById("side").setAttribute("style", "right:0%");
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  direction: rtl;
  max-width: 1920px;
  margin: auto;
}
.hamburger-btn {
  display: none;
}
body {
  margin: 0;
}
#nav {
  position: fixed;
  width: 100%;
  right: 0%;
  background-color: transparent;
  background-image: linear-gradient(#000, transparent);
  z-index: 999;
}

a {
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#side {
  display: inline-block;
  flex-direction: column;
  position: absolute;
  width: 100%;
  right: 0;
}
label ~ input[type="checkbox"] {
  cursor: pointer;
}
input[type="checkbox"] {
  border: 1.5px solid #04192d;
  border-radius: 3px;
  width: 22px;
  height: 22px;
  transition: 0.3s ease;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  border: 1.5px solid #a35801;
  background-color: #c97704;
  transform: rotate(90deg);
  transition: 0.3s ease;
  background-clip: content-box;
}
.icon {
  background-position-x: right;
  background-position-y: center;
  background-size: contain;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  margin: 0 0 0 10px;
}
.wallet_nav {
  background-image: url("assets/dashboard/wallet.svg");
}
.exchange_nav {
  background-image: url("assets/dashboard/market.svg");
}
.market {
  background-image: url("assets/dashboard/chart.svg");
}
.advance {
  background-image: url("assets/dashboard/market.svg");
}

li.active_nav a{
  color: #fe9400 !important;

}
ul.navbar {
  display: flex;
  list-style: none;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}
.shortcuts {
  width: 100%;
  padding: 0 10px;
}
ul.navbar a {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: aliceblue;
}
@media screen and (max-width: 768px) {
  #app {
    max-width: 768px;
  }
  #nav {
    position: absolute;
    width: 100%;
    right: -100%;
    z-index: 999;
    transition: 0.3s ease-in;
  }

  #side {
    position: fixed;
    width: 100%;
    right: -100%;
    z-index: 999;
    transition: 0.3s ease-in;
  }

  .hamburger-btn {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: flex-start;
    z-index: 999;
    bottom: 0%;
    width: 100%;
    height: 50px;
    right: 0%;
    background-color: #133453;
  }
  .menu {
    background-image: url("./assets/home/menu.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 20px;
    margin: auto 5px;
    cursor: pointer;
  }
}
</style>
