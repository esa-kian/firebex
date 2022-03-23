<template>
  <div class="home">
    <div class="banner">
      <div class="title">
        <h1>خرید و فروش ارز های دیجیتال</h1>
        <h2>خرید و فروش ارز های دیجیتال</h2>
        <button @click.prevent="$router.push('/register')">ثبت نام</button>
      </div>
    </div>
    <div class="desktop statistics">
      <div class="users">
        <span class="title">تعداد کاربران</span>
        <span class="value">{{ users }}</span>
      </div>
      <div class="transactions">
        <span class="title">ارزش معاملات</span>
        <span class="value">{{ transactions }}</span>
      </div>
      <div class="total">
        <span class="title">تعداد کل معاملات</span>
        <span class="value">{{ total }}</span>
      </div>
    </div>
    <crypto-chart style="max-width: 1070px" />
    <div class="mobile statistics">
      <div class="users">
        <span class="title">تعداد کاربران</span>
        <span class="value">{{ users }}</span>
      </div>
      <div class="transactions">
        <span class="title">ارزش معاملات</span>
        <span class="value">{{ transactions }}</span>
      </div>
      <div class="total">
        <span class="title">تعداد کل معاملات</span>
        <span class="value">{{ total }}</span>
      </div>
    </div>
    <div class="benefits">
      <h1>مزایای سایت صرافی</h1>
      <div class="body">
        <div class="support">
          <div class="header">پشتیبانی ۲۴ ساعته</div>
          <div class="icon"></div>
          <div class="caption">
            ما از سرمایه شما به بهترین نحو نگه داری می کنیم
          </div>
        </div>
        <div class="friendly">
          <div class="header">رابط کاربری آسان</div>
          <div class="icon"></div>
          <div class="caption">
            ما از سرمایه شما به بهترین نحو نگه داری می کنیم
          </div>
        </div>
        <div class="security">
          <div class="header">امنیت اموال شما</div>
          <div class="icon"></div>
          <div class="caption">
            ما از سرمایه شما به بهترین نحو نگه داری می کنیم
          </div>
        </div>
        <div class="rapid">
          <div class="header">معاملات سریع</div>
          <div class="icon"></div>
          <div class="caption">
            ما از سرمایه شما به بهترین نحو نگه داری می کنیم
          </div>
        </div>
      </div>
    </div>

    <div class="news">
      <h1>آخرین اخبار ارز دیجیتال</h1>
      <div class="body">
        <hooper
          :centerMode="true"
          :rtl="true"
          :itemsToShow="showItemsInSlider"
          :itemsToSlide="1"
          :infiniteScroll="true"
          :wheelControl="false"
          :autoPlay="true"
          :playSpeed="4000"
        >
          <slide v-for="post in posts" :key="post.id">
            <div class="post">
              <div class="header"></div>
              <div class="footer">
                <div class="title">{{ post.title }}</div>
                <div class="desc">
                  <div class="summary">
                    {{ post.desc.substring(0, 15) + "..." }}
                  </div>
                  <div class="rate">{{ post.rate }}</div>
                  <div class="time">{{ post.time }}</div>
                </div>
              </div>
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoChart from "@/components/trade/CryptoChart";
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Home",
  computed: {
    showItemsInSlider() {
      if (screen.width > 768) {
        return 4;
      } else {
        return 1;
      }
    },
  },
  components: {
    CryptoChart,
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
      users: "237,234",
      transactions: "983,245,515",
      total: "95,425",
      posts: [
        {
          id: 1,
          title: "بررسی علل کاهش قیمت بیت کوین",
          desc: "بررسی علل کاهش قیمت بیت کوین",
          rate: "5",
          time: "11",
        },
        {
          id: 2,
          title: "بررسی علل کاهش قیمت بیت کوین",
          desc: "بررسی علل کاهش قیمت بیت کوین",
          rate: "3.5",
          time: "11",
        },
        {
          id: 3,
          title: "بررسی علل کاهش قیمت بیت کوین",
          desc: "بررسی علل کاهش قیمت بیت کوین",
          rate: "5",
          time: "11",
        },
        {
          id: 4,
          title: "بررسی علل کاهش قیمت بیت کوین",
          desc: "بررسی علل کاهش قیمت بیت کوین",
          rate: "3.5",
          time: "11",
        },
        {
          id: 5,
          title: "بررسی علل کاهش قیمت بیت کوین",
          desc: "بررسی علل کاهش قیمت بیت کوین",
          rate: "4.5",
          time: "11",
        },
        {
          id: 6,
          title: "بررسی علل کاهش قیمت بیت کوین",
          desc: "بررسی علل کاهش قیمت بیت کوین",
          rate: "3.5",
          time: "11",
        },
        {
          id: 7,
          title: "بررسی علل کاهش قیمت بیت کوین",
          desc: "بررسی علل کاهش قیمت بیت کوین",
          rate: "4.5",
          time: "11",
        },
        {
          id: 8,
          title: "بررسی علل کاهش قیمت بیت کوین",
          desc: "بررسی علل کاهش قیمت بیت کوین",
          rate: "4.5",
          time: "11",
        },
      ],
    };
  },
};
</script>
<style scoped>
.mobile {
  display: none;
}
.home {
  height: fit-content;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e5e5e5;
}
.banner {
  background-color: #000000;
  width: 100%;
  background-image: url("../../assets/home/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  max-height: 510px;
}
.banner .title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 100px;
  width: 90%;
  height: 310px;
  background: linear-gradient(
    180.17deg,
    rgba(232, 188, 44, 0.5) 0.15%,
    rgba(200, 185, 227, 0.449591) 91.62%,
    rgba(55, 35, 87, 0.445) 99.96%
  );
  border-radius: 9px;
}
.banner h1 {
  font-size: 30px;
  color: #04192d;
}
.banner h2 {
  font-size: 18px;
  color: #04192d;
}
.banner button {
  font-size: 20px;
  cursor: pointer;
  background-color: #213363;
  border-radius: 5px;
  color: #dddddd;
  border: none;
  outline: none;
  padding: 8px;
  width: 120px;
}
.statistics {
  background-image: url("../../assets/home/crypto.svg"),
    linear-gradient(180deg, #f6e6b3 7.25%, #f0e6c4 33.85%, #e5e5e5 85.83%);
  min-height: 350px;
  height: fit-content;
  width: 100%;
  display: flex;
  /* width: 80%; */
  padding: 0 10%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
}
.statistics div {
  background-image: url("../../assets/home/statistics.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4% 0;
}
.statistics .title,
.statistics .value {
  margin: auto;
  font-family: VistaDev !important;
}
.benefits {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.body {
  display: flex;
  width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
}

.benefits .icon {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 150px;
  height: 150px;
}

.caption {
  display: none;
  width: 150px;
  color: #ffa944;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin: auto;
}

.support,
.rapid,
.security,
.friendly {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 17%;
  justify-content: space-between;
  border-radius: 17px;
  transition: 0.3s ease;
  padding: 20px;
}
.support:hover,
.rapid:hover,
.security:hover,
.friendly:hover {
  transition: 0.3s ease;
  background-color: #121c37;
  opacity: 0.8;
}
.support:hover .icon,
.rapid:hover .icon,
.security:hover .icon,
.friendly:hover .icon {
  opacity: 0.2;
}
.support:hover .header,
.rapid:hover .header,
.security:hover .header,
.friendly:hover .header {
  opacity: 0.2;
  color: rgba(148, 177, 170, 1);
}
.support:hover .caption,
.rapid:hover .caption,
.security:hover .caption,
.friendly:hover .caption {
  display: inline;
  position: absolute;
  z-index: 990;
}

.support .icon {
  background-image: url("../../assets/home/support.svg");
}
.rapid .icon {
  background-image: url("../../assets/home/rapid.svg");
}
.security .icon {
  background-image: url("../../assets/home/security.svg");
}
.friendly .icon {
  background-image: url("../../assets/home/friendly.svg");
}

.benefits h1,
.news h1 {
  margin: 60px 0;
}
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(155, 149, 127, 0) 24.94%,
    #fde7a1 100%
  );
  padding: 30px 5%;
}
.news .body {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
}
.news .post {
  background: rgba(32, 86, 102, 0.81) !important;
  border: 2px solid #133453;
  border-radius: 8px;
  color: #c4c4c4;
  margin: 0 10px;
}
.post .header {
  background-image: url("../../assets/home/news.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px;
}
.post .footer {
  padding: 10px;
}
.post .title {
  font-size: 18px;
  text-align: right;
}
.post .desc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.post .summary {
  font-size: 16px;
}
.post .rate {
  background-image: url("../../assets/home/star.svg");
  background-repeat: no-repeat;
  background-size: 15px;
  background-position-x: left;
  background-position-y: center;
  padding-left: 20px;
  height: 15px;
  color: #ffa944;
}
.post .time {
  background-image: url("../../assets/home/time.svg");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position-x: left;
  background-position-y: center;
  padding-left: 20px;
  margin-left: 5px;
  height: 15px;
  color: #ffa944;
}
.hooper {
  width: 100% !important;
  height: 280px !important;
}

.hooper-pagination {
  bottom: -33px;
}
.mobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .mobile {
    display: flex;
  }

  .desktop {
    display: none;
  }
  .statistics {
    height: 200px;
    padding: 0 3%;
    min-height: 200px;
  }
  .statistics span {
    font-size: 14px;
  }
  .news .post {
    width: 100%;
    margin: 10px 0;
  }
  .benefits h1,
  .news h1 {
    margin: 30px 0;
  }
  .news .body {
    flex-wrap: wrap;
  }
  .support,
  .rapid,
  .security,
  .friendly {
    width: 100%;
  }

  .benefits {
    display: none;
  }
  .banner {
    height: 350px;
  }
  .banner .title {
    margin-top: 20px;
  }
  .statistics div {
    width: 32%;
    height: 136px;
  }
}
</style>
