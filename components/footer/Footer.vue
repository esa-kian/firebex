<template>
  <div
    v-if="!['Login', 'Register', 'Forgot'].includes($route.name)"
    v-show="!logedin || home"
    class="footer"
  >
    <div class="footer-content row ml-2 mr-2">
      <div class="col-sm-3 col-6">
        <img src="../../assets/vistalogo.png" alt="logo" />
      </div>
      <div class="footer-list col-sm-3 col-6 pr-3 pr-md-5">
        <div>
          <a>درباره</a>
          <ul>
            <li><a @click="$router.push('about-us')">درباره ما</a></li>
            <!-- <li><a @click="$router.push('wage')">کارمزدها</a></li> -->
            <li>
              <a @click="$router.push('privacy-policy')">قوانین و مقررات</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-list col-sm-3 col-6">
        <div>
          <a>راهنما</a>
          <ul>
            <li><a @click="$router.push('faq')">راهنمای استفاده</a></li>
            <!-- <li><a @click="$router.push('faq')">سوالات متداول</a></li> -->
            <li><a href="/blog">بلاگ</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-list col-sm-3 col-6">
        <div style="width: 100%">
          <a>اطلاعات تماس</a>
          <ul>
            <li class="address">
              <a>آدرس : {{ info.address }}</a>
            </li>
            <li class="phone">
              <a>تلفن : {{ info.number }}</a>
            </li>
            <li class="email">
              <a>ایمیل : {{ info.email }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-social">
      <div class="row m-2 no-gutters">
        <div
          class="
            col-md-6 col-12
            justify-content-center justify-content-md-start
          "
          style="cursor: default; display: flex"
        >
          کلیه حقوق این سایت متعلق به شرکت ویستا می‌باشد.
          <span>
            طراحی شده توسط شرکت
            <a href="https://vistaapp.ir">ویستا</a>
          </span>
        </div>
        <div
          class="
            col-md-6 col-12
            social
            justify-content-md-end justify-content-center
            row
            no-gutters
            m-0
          "
        >
          <a class="col-12 col-md-4"> شبکه های اجتماعی:</a>
          <div
            class="
              social
              col-6 col-md-4
              justify-content-around justify-content-sm-between
            "
          >
            <a
              :href="
                info.twitter.includes('http')
                  ? info.twitter
                  : `https://twitter.com/${info.twitter}`
              "
              target="_blank"
              ><img src="../../assets/icons/Twitter.svg" alt="Twitter"
            /></a>
            <a
              :href="
                info.telegram.includes('http')
                  ? info.telegram
                  : `https://telegram.org/${info.telegram}`
              "
              target="_blank"
              ><img src="../../assets/icons/Telegram.svg" alt="Telegram"
            /></a>
            <a
              :href="
                info.linkedin.includes('http')
                  ? info.linkedin
                  : `https://linkedin.com/${info.linkedin}`
              "
              target="_blank"
              ><img src="../../assets/icons/LinkedIn.svg" alt="LinkedIn"
            /></a>
            <a
              :href="
                info.instagram.includes('http')
                  ? info.instagram
                  : `https://instagram.com/${info.instagram}`
              "
              target="_blank"
              ><img src="../../assets/icons/Instagram.svg" alt="Instagram"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      home: true,
      logedin: false,
      info: {
        address: "",
        appAndroid: "",
        appIOS: "",
        email: "",
        instagram: "",
        linkedin: "",
        number: "",
        telegram: "",
        twitter: "",
      },
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      const res = await this.$axios.get("/exchange-info");
      this.info = res.baseDTO || {
        address: "",
        appAndroid: "",
        appIOS: "",
        email: "",
        instagram: "",
        linkedin: "",
        number: "",
        telegram: "",
        twitter: "",
      };
      // this.state.appAndroid = this.info.appAndroid
      // this.state.appIOS = this.info.appIOS
      // .catch(err=>{
      //     console.log(err);
      // })
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  // color: var(--font-dark);
  color: #fdfdfd;
  &:hover {
    color: var(--main-color);
  }
}

.footer {
  display: flex;
  flex-direction: column;
  background-color: #25505d;
  // background-color: var(--main-dark);
  /*background-color: var(--font-dark);*/
  align-items: center;
}

.footer-content {
  position: relative;
  width: 100%;
  max-width: 1180px;
  margin-top: 50px;
  padding-bottom: 50px;
}

.footer-content::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
  background-color: var(--border-dark);
  opacity: 0.5;
  width: 98%;
  height: 1px;
}

.footer-content img {
  width: 50%;
  margin-right: 5px;
  display: flex;
  justify-self: right;
}

.footer-list {
  color: var(--font-dark);
  /*color: var(--font-light);*/
  text-align: right;
  display: flex;
}

.footer-list a {
  font-size: 21px;
  // color: var(--font-dark);
  /*color: var(--font-light);*/
  color: #fdfdfd;
  cursor: default;
}

ul {
  margin-top: 20px;
}

li {
  list-style: none;
  line-height: 1.79;
  margin-bottom: 15px;
}

li a {
  font-size: 14px !important;
  font-weight: 500;
  opacity: 0.8;
  cursor: pointer !important;
}

li a:hover {
  color: var(--main-color);
}

.footer-list:last-of-type li a:hover {
  color: var(--main-color);
  cursor: text !important;
}

.footer-social {
  width: 100%;
  max-width: 1180px;
  opacity: 0.8;
  font-family: IRANSans, sans-serif;
  font-size: 14px;
  font-weight: 500;
  // color: var(--font-dark);
  color: #fdfdfd;
  /*color: var(--font-light);*/
  justify-content: center;
}

.social {
  display: flex;
}

.social a {
  // color: var(--font-dark);
  color: #fdfdfd;
  /*color: var(--font-light);*/
  cursor: default;
  vertical-align: super;
}

.social img {
  cursor: pointer;
  transition: 0.5s;
  /*filter:invert(100%)*/
}

.social img:hover {
  filter: invert(10%) sepia(16%) saturate(5963%) hue-rotate(353deg)
    brightness(100%) contrast(104%);
  transform: rotate(360deg);
}
li.address {
  background-image: url("../../assets/home/address.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 15px;
  padding-right: 25px;
  width: 100%;
}
li.phone {
  background-image: url("../../assets/home/phone.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 15px;
  padding-right: 25px;
}
li.email {
  background-image: url("../../assets/home/email.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 15px;
  padding-right: 25px;
}
@media screen and (max-width: 768px) {
  .footer-content {
    padding: 15px;
  }
  .footer-social {
    padding: 10px 10px 50px;
  }
  .footer {
    height: 550px;
  }
}
</style>