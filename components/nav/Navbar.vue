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
          />
        </router-link>
      </li>
      <li>
        <router-link @click.native="closeMenu()" :to="'/'"
          >صفحه اصلی</router-link
        >
      </li>
      <li>
        <router-link @click.native="closeMenu()" :to="'/about-us'"
          >درباره ما</router-link
        >
      </li>
      <li>
        <router-link @click.native="closeMenu()" :to="'/privacy-policy'"
          >قوانین و مقررات</router-link
        >
      </li>
      <li>
        <router-link @click.native="closeMenu()" :to="'/faq'"
          >راهنما</router-link
        >
      </li>
      <li>
        <router-link @click.native="closeMenu()" :to="'/blog'"
          >بلاگ</router-link
        >
      </li>
      <li>
        <router-link @click.native="closeMenu()" :to="'/contact-us'"
          >تماس با ما</router-link
        >
      </li>
    </ul>

    <div
      class="registration"
      v-if="!['Login', 'Register', 'Forgot'].includes($route.name)"
    >
      <router-link :to="'/login'" @click.native="closeMenu()">
        <button>ورود</button>
      </router-link>
      <router-link :to="'/register'" @click.native="closeMenu()">
        <button>ثبت نام</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    closeMenu() {
      // let nav = document.getElementById("nav");
      if (screen.width < 768) {
        document.getElementById("nav").setAttribute("style", "right:-100%");

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == document.getElementById("nav")) {
            document.getElementById("nav").setAttribute("style", "right:-100%");
          }
        };
      }
    },
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
  width: 100%;
  margin: 0;
}
.nav {
  display: flex;
  margin: 10px 72px;
  position: relative;
  border-bottom: 1px solid #efe2f8;
  width: 90%;
  /* max-width: 1200px; */
  justify-content: center;
  align-items: center;
}
a {
  padding: 0px 20px;
  color: #efe2f8;
}
.registration {
  display: flex;
  width: 15%;
  justify-content: space-between;
}
.registration button {
  font-size: 16px;
  width: 75px;
  background-color: transparent;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  color: #efe2f8;
  border-radius: 3px;
  transition: 0.3s ease;
  height: 40px;
}
.registration button:hover {
  color: #fe9400;
  border: 1px solid #efe2f8;
  transition: 0.3s ease;
}
.dont-show {
  display: none;
}
@media screen and (max-width: 768px) {
  ul {
    display: block;
    text-align: right;
  }
  .nav {
    position: fixed;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background-color: #213363b6;
    backdrop-filter: blur(3px);
    margin: 0%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
  }
  .registration {
    flex-direction: column;
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
}
</style>
