<template>
  <div class="nav">
    <ul>
      <li :class="[$route.name == 'Dashboard' ? 'active' : '']">
        <router-link @click.native="closeMenu()" :to="'/dashboard'">
          <div class="dashboard icon"></div>
          داشبورد</router-link
        >
      </li>
      <li :class="[$route.name == 'Wallet' ? 'active' : '']">
        <router-link @click.native="closeMenu()" :to="'/wallet'">
          <div class="wallet icon"></div>

          کیف پول</router-link
        >
      </li>
      <li :class="[$route.name == 'Exchange' ? 'active' : '']">
        <router-link @click.native="closeMenu()" :to="'/exchange'">
          <div class="exchange icon"></div>

          مارکت</router-link
        >
      </li>
      <li :class="[$route.params.tradeTo == 'TOMAN' ? 'active' : '']">
        <router-link @click.native="closeMenu()" :to="'/trade/TOMAN/BITCOIN'">
          <div class="market icon"></div>

          بازار پایه ریال</router-link
        >
      </li>
      <li :class="[$route.params.tradeTo == 'TETHER' ? 'active' : '']">
        <router-link @click.native="closeMenu()" :to="'/trade/TETHER/BITCOIN'">
          <div class="advance icon"></div>

          بازار پایه تتر</router-link
        >
      </li>
      <li :class="[$route.name == 'History' ? 'active' : '']">
        <router-link @click.native="closeMenu()" :to="'/history'">
          <div class="history icon"></div>

          تاریخچه</router-link
        >
      </li>
      <li :class="[$route.name == 'InviteFriends' ? 'active' : '']">
        <router-link @click.native="closeMenu()" :to="'/invite-friends'">
          <div class="invite icon"></div>

          دعوت از دوستان</router-link
        >
      </li>
      <li @click.prevent="logout()">
        <a href="">
          <div class="logout icon"></div>
          خروج از حساب
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    closeMenu() {
      if (screen.width < 768) {
        // let nav = document.getElementById("nav");
        document.getElementById("side").setAttribute("style", "right:-100%");
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == document.getElementById("nav")) {
            document
              .getElementById("side")
              .setAttribute("style", "right:-100%");
          }
        };
      }
    },
    logout() {
      this.closeMenu();
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
ul {
  display: inline-flex;
  list-style: none;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: calc(100vh - 76px) !important;
  max-height: calc(100vh - 76px) !important;
  margin: 0;
}
.nav {
  display: flex;
  padding: 10px 10px 0 0;
  width: 150px;
  position: absolute;
  justify-content: flex-start;
  margin: 0;
  align-items: center;
  background-color: #133453;
}
li {
  padding: 5px 2px;
  border: 2px solid transparent;
  transition: 0.3s ease;
  width: 100%;
  margin: 10px 0;
}
li:hover {
  background: #7c7665;
  border: 2px solid #fe9400;
  border-radius: 5px;
  transition: 0.3s ease;
}
.active {
  background: #7c7665;
  border: 2px solid #fe9400;
  border-radius: 5px;
  transition: 0.3s ease;
}
a {
  color: #efe2f8;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 0.9em;
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
.dashboard {
  background-image: url("../../assets/dashboard/dashboard.svg");
}
.wallet {
  background-image: url("../../assets/dashboard/wallet.svg");
}
.exchange {
  background-image: url("../../assets/dashboard/market.svg");
}
.market {
  background-image: url("../../assets/dashboard/chart.svg");
}
.advance {
  background-image: url("../../assets/dashboard/market.svg");
}
.history {
  background-image: url("../../assets/dashboard/history.svg");
}
.invite {
  background-image: url("../../assets/dashboard/invite.svg");
}
.logout {
  background-image: url("../../assets/dashboard/logout.svg");
}
@media screen and (max-width: 768px) {
  ul {
    display: block;
    text-align: right;
  }
  .nav {
    width: 100%;
    flex-direction: column;
    background-color: #213363b6;
    backdrop-filter: blur(3px);
    margin: 0%;
    align-items: flex-start;
    padding: 20px;
  }
}
</style>
