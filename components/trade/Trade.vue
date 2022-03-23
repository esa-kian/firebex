<template>
  <div class="main dark">
    <div class="trade-body">
      <div class="trading">
        <trade-header :realprice="maintable" />
        <div
          class="order-first order-sm-12"
          style="padding: 10px 0; width: 100%"
        >
          <vue-trading-view
            :key="$coinUnit[$route.params.tradeFrom]"
            style="height: 377px"
            :options="{
              autosize: true,
              symbol: 'BINANCE:' + $coinUnit[$route.params.tradeFrom] + 'USDT',
              timezone: 'Asia/Tehran',
              theme: 'light',
              style: '1',
              theme: 'light',
              locale: 'fa_IR',
              enable_publishing: true,
              withdateranges: true,
              range: 'ytd',
              hide_side_toolbar: false,
              allow_symbol_change: true,
              enabled_features: ['header_fullscreen_button'],
              disabled_features: [
                'border_around_the_chart',
                'remove_library_container_border',
              ],
              loading_screen: {
                backgroundColor: '#ffffff',
                foregroundColor: '#000000',
              },
              overrides: {
                background: '#256',
              },
            }"
          />
          <shop />
        </div>
      </div>

      <div class="trade-left">
        <real-price
          :tomanTable="realpricetoman"
          :teterTable="realpriceteter"
          class="box"
        />
        <last-trade class="box" />
      </div>
    </div>

    <div class="depth">
      <!-- <market-depth class="box" /> -->
      <buy-depth :table-contents="depthTableBuy"></buy-depth>
      <sell-depth :table-contents="depthTableSell"></sell-depth>
    </div>

    <div class="orders-btm">
      <div class="tabs">
        <div
          @click.prevent="switchTab(true)"
          :class="[!active ? 'tab-content' : 'tab-content-active buy-tab']"
        >
          سفارشات فعال من
        </div>
        <div
          @click.prevent="switchTab(false)"
          :class="[active ? 'tab-content' : 'tab-content-active sell-tab']"
        >
          آخرین سفارشات من
        </div>
      </div>
      <active-order
        v-if="active"
        class="box"
        style="
          flex-basis: 300px;
          flex-grow: 1;
          width: 100%;
          background-color: #fdfdfd;
          height: auto;
          overflow-x: scroll;
          direction: rtl;
        "
      />
      <last-order
        v-else
        class="box"
        style="
          flex-basis: 300px;
          flex-grow: 1;
          width: 100%;
          background-color: #fdfdfd;
          height: auto;
          overflow-x: scroll;
          direction: rtl;
        "
      />
    </div>
  </div>
</template>

<script>
import RealPrice from "@/components/trade/RealPrice";
import LastTrade from "@/components/trade/LastTrade";
import LastOrder from "@/components/trade/LastOrder";
import ActiveOrder from "@/components/trade/ActiveOrder";
// import MarketDepth from "@/components/trade/MarketDepth/MarketDepth";
import TradeHeader from "@/components/trade/TradeHeader";
import Shop from "@/components/trade/Shop";
import VueTradingView from "vue-trading-view";
import BuyDepth from "./MarketDepth/BuyDepth.vue";
import SellDepth from "./MarketDepth/SellDepth.vue";

export default {
  name: "Trade",
  methods: {
    switchTab(val) {
      if (val) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
  data() {
    return {
      active: true,
      realpricetoman: [
        {
          img: require("../../assets/Coins/bitcoin.svg"),
          cryptoname: "بیت کوین",
          amount: "16,600,900",
          change: 0.47,
          link: "/Trade/adv/0/0",
        },
        {
          img: require("../../assets/Coins/ethereum.svg"),
          cryptoname: "اتریوم",
          amount: "16,600,900",
          change: -0.47,
          link: "/Trade/adv/0/1",
        },
        {
          img: require("../../assets/Coins/TRX.png"),
          cryptoname: "ترون",
          amount: "16,600,900",
          change: 0.47,
          link: "/Trade/adv/0/3",
        },
        {
          img: require("../../assets/Coins/BNB.png"),
          cryptoname: "بایننس کوین",
          amount: "16,600,900",
          change: -0.47,
          link: "/Trade/adv/0/4",
        },
        {
          img: require("../../assets/Coins/bitcoincache.svg"),
          cryptoname: "بیتکوین کش",
          amount: "16,600,900",
          change: 0.47,
          link: "/Trade/adv/0/8",
        },
        {
          img: require("../../assets/Coins/RIPPLE.png"),
          cryptoname: "ریپل",
          amount: "16,600,900",
          change: 0.47,
          link: "/Trade/adv/0/9",
        },
        {
          img: require("../../assets/Coins/Teter.svg"),
          cryptoname: "تتر",
          amount: "16,600,900",
          change: -0.47,
        },
      ],
      realpriceteter: [
        {
          cryptoname: "بیت کوین",
          amount: 500,
          change: 0.47,
          link: "/Trade/adv/0/0",
        },
        {
          cryptoname: "اتریوم",
          amount: 500,
          change: -0.47,
          link: "/Trade/adv/0/1",
        },
        {
          cryptoname: "کاردانو",
          amount: 500,
          change: -0.47,
          link: "/Trade/adv/0/2",
        },
        {
          cryptoname: "ترون",
          amount: 500,
          change: 0.47,
          link: "/Trade/adv/0/3",
        },
        {
          cryptoname: "بایننس کوین",
          amount: 500,
          change: -0.47,
          link: "/Trade/adv/0/4",
        },
        {
          cryptoname: "مونرو",
          amount: 500,
          change: -0.47,
          link: "/Trade/adv/0/5",
        },
        {
          cryptoname: "چین لینک",
          amount: 500,
          change: -0.47,
          link: "/Trade/adv/0/6",
        },
        {
          cryptoname: "تزوس",
          amount: 500,
          change: 0.47,
          link: "/Trade/adv/0/7",
        },
        {
          cryptoname: "بیتکوین کش",
          amount: 500,
          change: 0.47,
          link: "/Trade/adv/0/8",
        },
        {
          cryptoname: "ریپل",
          amount: 500,
          change: 0.47,
          link: "/Trade/adv/0/9",
        },
        {
          cryptoname: "هزار تومان",
          amount: "500",
          change: -0.47,
        },
      ],
      lasttradetable: [
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Sell",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 99600,
          time: "16 : 15",
          type: "Buy",
        },
      ],
      depthTableSell: [
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 16200000,
          type: "Sell",
          percent: 10,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 16200000,
          type: "Sell",
          percent: 80,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 16100000,
          type: "Sell",
          percent: 90,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 16000000,
          type: "Sell",
          percent: 70,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 15900000,
          type: "Sell",
          percent: 20,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 15800000,
          type: "Sell",
          percent: 80,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 15700000,
          type: "Sell",
          percent: 75,
        },
        // {
        //     amount: 0.000632,
        //     unitprice: 16600900,
        //     totalprice: 15680100,
        //     type: 'Sell',
        //     percent: 0
        // },
        // {
        //     amount: 0.000632,
        //     unitprice: 16600900,
        //     totalprice: 15650100,
        //     type: 'Sell',
        //     percent: 0
        // },
      ],
      depthTableBuy: [
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 15630100,
          type: "Buy",
          percent: 50,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 15700000,
          type: "Buy",
          percent: 30,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 15800000,
          type: "Buy",
          percent: 50,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 15900000,
          type: "Buy",
          percent: 20,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 16000000,
          type: "Buy",
          percent: 90,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 16100000,
          type: "Buy",
          percent: 60,
        },
        {
          amount: 0.000632,
          unitprice: 16600900,
          totalprice: 16230100,
          type: "Buy",
          percent: 70,
        },
        // {
        //     amount: 0.000632,
        //     unitprice: 16600900,
        //     totalprice: 16330100,
        //     type: 'Buy',
        //     percent: 0
        // },
        // {
        //     amount: 0.000632,
        //     unitprice: 16600900,
        //     totalprice: 16430100,
        //     type: 'Buy',
        //     percent: 0
        // },
      ],
      maintable: {
        top: 16299900,
        down: 16299900,
        last: 16299900,
        vol: 16299900,
        change: 0.47,
      },
      tradefrom: [
        "بیت کوین",
        "اتریوم",
        "کاردانو",
        "ترون",
        "بایننس کوین",
        "مونرو",
        "چین لینک",
        "تزوس",
        "بیتکوین کش",
        "ریپل",
        "تتر",
        "تومان",
      ],
      tradeto: ["تومان", "تتر"],
    };
  },
  components: {
    Shop,
    TradeHeader,
    // MarketDepth,
    ActiveOrder,
    LastOrder,
    LastTrade,
    RealPrice,
    VueTradingView,
    BuyDepth,
    SellDepth,
  },
};
</script>

<style scoped>
.main {
  background-color: #efe2f8;
  width: 100%;
  /* max-width: 1440px; */
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 160px 10px 10px;
}
.trade-body {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.trade-left {
  padding: 0px;
  display: flex;
  flex-direction: column;
  max-height: 963px;
  width: 19%;
}
.trading {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.pad {
  padding: 10px;
}

.box {
  background-color: var(--box-background-light);
  border: var(--border-light) solid 1px;
  border-radius: 5px;
}

.dark .box {
  background-color: #133453;
  color: #fdfdfd;
}

.chart-page #widget-container {
  border-radius: 50px !important;
  border: var(--border-light) solid 1px !important;
}

.chart-page {
  background-color: transparent !important;
}

.tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #95999a;
  text-align: center;
  width: 100%;
  max-width: 290px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  font-size: 0.9em;
}

.tab-content {
  height: 40px;
  font-family: IRANSans, sans-serif;
  width: 50%;
  cursor: pointer;
  text-align: center;
  background: #e0e0e0;
  box-shadow: inset -2px -2px 7px rgba(54, 51, 51, 0.25);
  color: #a4a4a4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}

.tab-content-active {
  height: 40px;
  font-family: IRANSans-Bold, sans-serif;
  width: 50%;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  background-color: #f9f9f9;
  border-bottom: 4px solid #133453;
}
.depth {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: baseline;
}
.orders-btm {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .main {
    overflow-x: hidden;
    margin: 0;
    padding: 15px 10px 60px;
  }
  .trade-body {
    flex-direction: column;
  }
  .trade-left {
    width: 100%;
  }
  .trading {
    width: 100%;
    flex-direction: column-reverse;
  }
  .dark .box {
    width: 100%;
  }
}
</style>