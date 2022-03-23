<template>
  <div class="box1">
    <div class="content">
      <select name="" id="">
        <option value="">
          بازار {{ $coinLabel[$route.params.tradeFrom] }} -
          {{ $coinLabel[$route.params.tradeTo] }}
        </option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
    <div class="main-content">
      <a>بیشترین</a>
      <a class="content" style="color: #00af8d"
        >{{ realprice.top.toLocaleString("en-US")
        }}<a style="color: #00af8d">{{
          $coinLabel[$route.params.tradeTo]
        }}</a></a
      >
    </div>
    <div class="main-content">
      <a>کمترین</a>
      <a class="content" style="color: #f5484f"
        >{{ realprice.down.toLocaleString("en-US") }}
        <a style="color: #f5484f">{{ $coinLabel[$route.params.tradeTo] }}</a></a
      >
    </div>
    <div class="main-content">
      <a>آخرین</a>
      <a class="content"
        >{{ realprice.last.toLocaleString("en-US")
        }}<a>{{ $coinLabel[$route.params.tradeTo] }}</a></a
      >
    </div>
    <div class="main-content">
      <a>حجم</a>
      <a class="content"
        >{{ realprice.vol.toLocaleString("en-US") }}
        <a>{{ $coinLabel[$route.params.tradeTo] }}</a></a
      >
    </div>
    <div class="main-content">
      <a>تغییرات</a>
      <a
        class="content"
        :style="{
          color: [
            realprice.change > 0
              ? 'var(--main-green)'
              : realprice.change < 0
              ? 'var(--main-red)'
              : '',
          ],
        }"
      >
        {{ realprice.change }}٪
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TradeHeader",
  props: {
    realprice: [],
  },
  data() {
    return {
      loading: false,
      alive: false,
      data: {
        maxPrice: 0,
        minPrice: 0,
        lastPrice: 0,
        last24HourVolume: 0,
        last24HourChange: 0,
      },
    };
  },
  methods: {
    async getTradeHeader() {
      const res = await this.$axios.get("/trades/market-info", {
        params: {
          weeklyDataIncluded: false,
          market_type:
            this.$route.params.tradeFrom + "_" + this.$route.params.tradeTo,
        },
      });
      this.data = res.content[0] || this.data;
      this.state.shopInfo.lastPrice = this.data.lastPrice;
      this.state.shopInfo.change24 = this.data.last24HourChange;
    },
    async loop() {
      this.state.loading = true;
      this.loading = true;
      const a = this.$route.params.tradeTo + this.$route.params.tradeFrom;

      while (
        this.alive &&
        a === this.$route.params.tradeTo + this.$route.params.tradeFrom
      ) {
        await this.getTradeHeader();
        this.loading = false;
        await this.$sleep(5000);
      }
    },
  },
  mounted() {
    this.alive = true;
    if (this.state.loop) {
      this.loop();
    } else {
      this.getTradeHeader();
    }
  },
  beforeDestroy() {
    this.alive = false;
  },
};
</script>

<style scoped>
.box1 {
  font-family: VistaDev, sans-serif;
  background-color: var(--box-background-light);
  direction: rtl;
  text-align: right;
  border-radius: 5px;
  box-shadow: 0 2px 12px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
}

.dark .box1 {
  background-color: #fdfdfd;
  color: #3f3d3d;
}

.dark a {
  color: #3f3d3d;
}

.box div {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  align-items: center;
  align-content: center;
  justify-content: center;
  vertical-align: center;
}

a {
  display: flex;
  align-items: center;
}

.box div a a {
  font-size: 14px;
  align-self: center;
}

.main-content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
h1 {
  font-size: 22px;
}
.content {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  /* min-width: 125px; */
}
select {
  font-size: 16px;
  cursor: pointer;
  background-color: #386b89;
  background-image: url("../../assets/icons/down.svg");
  background-repeat: no-repeat;
  background-size: 24px;
  background-position-y: center;
  background-position-x: left;
  padding-left: 26px;
  padding-right: 5px;
  width: 100%;
  height: 100%;
  color: #f3f3f3;
}
@media (min-width: 768px) {
  .content:last-of-type {
    min-width: 60px;
  }
}

.content a {
  font-size: 12px;
  margin-right: 5px;
}

@media screen and (max-width: 768px) {
  .box1 {
    flex-direction: column;
  }

  .content {
    font-size: 14px;
    /* min-width: 125px; */
  }

  .dark a {
    font-size: 14px;
  }
  .main-content {
    flex-direction: row;
  }
  h1 {
    font-size: 16px;
  }
}
</style>