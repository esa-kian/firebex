<template>
  <div class="nav">
    <button class="close" @click="closeMenu"></button>

    <ul>
      <li>
        <router-link @click="closeMenu" :to="'/'">
          <img
            src="../../assets/logo.png"
            alt="firebex"
            width="125"
            height="47"
            class="logo"
          />
        </router-link>
      </li>
      <li>
        <div class="wallet">
          <div class="icon"></div>
          <div class="balance">موجودی شما: ۲۳۴,۳۴۵,۸۵۹</div>
          <div class="buy"></div>
          <div class="sell"></div>
        </div>
      </li>
    </ul>
    <ul class="left-side">
      <li class="time">{{ now }}</li>
      <li>
        <router-link @click.native="closeMenu" :to="'/notifications'">
          <div
            :class="[
              ['Notifications'].includes($route.name)
                ? 'notification_active'
                : 'notification',
            ]"
          ></div>
        </router-link>
      </li>
      <li>
        <router-link @click.native="closeMenu" :to="'/settings'">
          <div
            :class="[
              ['Settings'].includes($route.name)
                ? 'settings_active'
                : 'settings',
            ]"
          ></div>
        </router-link>
      </li>
      <li class="profile_btn">
        <router-link @click.native="closeMenu" :to="'/profile'">
          <div
            :class="[
              ['Profile'].includes($route.name) ? 'profile_active' : 'profile',
            ]"
          ></div>
          <span class="title_profile"> احراز هویت </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import momentj from "jalali-moment";

export default {
  name: "Home",
  components: {},
  mounted() {
    window.setInterval(() => {
      this.now = momentj().locale("fa").format("HH:mm:ss jYYYY/jMM/jDD");
    }, 1000);
    window.clearInterval();
  },
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
  },
  data() {
    return {
      now: "",
      momentj: momentj,
    };
  },
};
</script>
<style scoped>
.close {
  display: none;
}
ul {
  display: inline-flex;
  list-style: none;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin: 0;
}
.nav {
  display: flex;
  position: relative;
  width: 100%;
  height: 66px;
  justify-content: space-between;
  align-items: center;
  background-color: #133453;
  z-index: 999;
}
a {
  padding: 0px 20px;
  color: #efe2f8;
}
img.logo {
  margin: 20px;
}
.wallet {
  background-color: rgba(58, 110, 140, 0.77);
  border-radius: 3px;
  width: 350px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #efe2f8;
  padding: 0 10px;
}
.wallet .icon {
  background-image: url("../../assets/dashboard/small_wallet.svg");
  width: 23px;
  height: 23px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 23px;
}
.buy {
  background-image: url("../../assets/dashboard/buy.svg");
  width: 40px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 23px;
  background-color: #dfffda;
  border-radius: 2px;
  cursor: pointer;
}
.sell {
  background-image: url("../../assets/dashboard/sell.svg");
  width: 40px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 23px;
  background-color: #ffe1e1;
  border-radius: 2px;
  cursor: pointer;
}
ul.left-side {
  justify-content: space-between;
  width: 25%;
  margin-left: 20px;
}
li.time {
  color: #e0e0e0;
}
.notification {
  background-image: url("../../assets/dashboard/notifications.svg");
  width: 30px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  cursor: pointer;
}
.notification_active {
  background-image: url("../../assets/dashboard/notifications_active.svg");
  width: 30px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  cursor: pointer;
}
.settings {
  background-image: url("../../assets/dashboard/settings.svg");
  width: 26px;
  height: 26px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  cursor: pointer;
}
.settings_active {
  background-image: url("../../assets/dashboard/settings_active.svg");
  width: 26px;
  height: 26px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  cursor: pointer;
}
.profile {
  background-image: url("../../assets/dashboard/profile.svg");
  width: 65px;
  height: 26px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  cursor: pointer;
}
.profile_active {
  background-image: url("../../assets/dashboard/profile_active.svg");
  width: 65px;
  height: 26px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  cursor: pointer;
}

span.title_profile {
  display: none;
}

@media screen and (max-width: 768px) {
  span.title_profile {
    display: unset;
    color: #f05b47;
  }

  ul {
    display: block;
    text-align: right;
  }
  .nav {
    width: 100%;
    height: 212px;
    justify-content: space-between;
    flex-direction: column;
    background-color: #213363b6;
    backdrop-filter: blur(3px);
    margin: 0%;
    align-items: flex-start;
    padding: 0px;
  }
  .close {
    display: initial;
    background-image: url("../../assets/icons/close-red.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
    margin: 15px;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0%;
  }
  ul.left-side {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 5px;
  }

  ul.left-side li{
    width: 25%;
  }
  ul,
  li,
  .wallet {
    width: 100%;
  }

  li.profile_btn{
    width: 100px !important;
  }
}
</style>
