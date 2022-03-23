<template>
  <div class="box1">
    <!-- خرید و فروش {{ $coinLabel[$route.params.tradeFrom] }} -->
    <div class="tab-group">
      <div class="tabs">
        <div
          :class="!limit ? 'tab-content' : 'tab-content-active'"
          @click.prevent="limit = true"
        >
          سفارش محدود
        </div>
        <div
          :class="limit ? 'tab-content' : 'tab-content-active'"
          @click.prevent="limit = false"
        >
          بازار
        </div>
      </div>
      <div class="tabs">
        <div
          @click.prevent="switchTabBuy(true)"
          :class="[!sell ? 'tab-content' : 'tab-content-active buy-tab']"
        >
          خرید
        </div>
        <div
          @click.prevent="switchTabBuy(false)"
          :class="[sell ? 'tab-content' : 'tab-content-active sell-tab']"
        >
          فروش
        </div>
      </div>
    </div>

    <div class="row no-gutters box2">
      <div class="order-box">
        <div class="setting">
          <div class="myrow">
            <div class="type">
              <label for="type">قیمت واحد</label>
              <input type="number" id="value" />
              <div class="myrow">
                <div class="data">پایین ترین پیشنهاد فروش</div>
                <div class="data">۸۷,۹۱۸,۲۷۳,۹۱۲</div>
              </div>
              <div class="myrow">
                <div class="data">موجودی</div>
                <div class="data">۸۷,۹۱۸,۲۷۳,۹۱۲</div>
              </div>
            </div>
            <div class="value">
              <label for="value">مقدار بیت کوین</label>
              <input type="number" id="value" />
              <div class="calc">
                <div class="percent">۱۰۰٪</div>
                <div class="percent">۷۵٪</div>
                <div class="percent">۵۰٪</div>
                <div class="percent">۲۵٪</div>
              </div>
              <label for="value">تاریخ انقضا</label>
              <date-picker
                popover
                :auto-submit="true"
                width="80%"
                v-model="date"
                type="datetime"
              ></date-picker>
            </div>
          </div>
        </div>
        <div :class="[sell ? 'finish-buy' : 'finish-sell', 'finish']">
          <div class="total">
            <label for="total">مبلغ کل معامله</label>
            <div class="input">
              <input type="number" :class="[!sell ? 'sell-input' : '']" />
              <!-- <select name="" id="">
                <option value="">تومان (IRT)</option>
              </select> -->
            </div>
            <span class="wage">+کارمزد ۸.۰</span>
          </div>
          <div class="submit">
            <button v-if="sell" class="buy-btn">خرید</button>
            <button v-else class="sell-btn">فروش</button>
          </div>
        </div>
      </div>

      <!-- <div class="col-12 col-sm-6 pl-sm-1">
        <buy-crypto
          :cash="buyCredit"
          :wage="state.userInfo.fee"
          :decimal="8"
          :limit="limit"
          :id="1"
          :key="'buy' + limit"
        />
      </div>
      <div class="col-12 col-sm-6 pr-sm-1 mt-2 mt-sm-0">
        <sell-crypto
          :cash="sellCredit"
          :wage="state.userInfo.fee"
          :decimal="8"
          :limit="limit"
          :id="2"
          :key="'sell' + limit"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
// import BuyCrypto from "@/components/trade/BuyCrypto";
// import SellCrypto from "@/components/trade/SellCrypto";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";

export default {
  name: "Shop",
  components: {
    datePicker: VuePersianDatetimePicker,
    // SellCrypto,
    // BuyCrypto,
  },
  props: ["coin"],
  data() {
    return {
      sell: true,
      limit: true,
      sellCredit: 0,
      buyCredit: 0,
      date: "",
    };
  },
  methods: {
    async getWalletCredit() {
      if (this.state.userInfo.authorized) {
        const res = await this.$axios.get("/wallets/customer-addresses", {
          params: {
            coins: `${this.$route.params.tradeFrom},${this.$route.params.tradeTo}`,
          },
        });

        this.sellCredit = res[this.$route.params.tradeFrom].credit || 0;
        this.buyCredit = res[this.$route.params.tradeTo].credit || 0;
      }
    },
    closemodal() {
      this.showmodal = false;
    },
    tuochHandler(e) {
      if (e === "right") {
        this.limit = false;
      } else {
        this.limit = true;
      }
    },
    switchTabBuy(val) {
      if (val) {
        this.sell = true;
      } else {
        this.sell = false;
      }
    },
  },
  created() {
    this.getWalletCredit();
  },
};
</script>

<style scoped>
.box1 {
  font-family: IRANSans-Bold, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--box-background-light); */
  text-align: center;
  /* padding: 10px 5px 0 5px; */
  border-radius: 5px;
  font-size: 12px;
  direction: rtl;
  /* min-height: 443px; */
  margin-top: 20px;
}

.dark .box1 {
  background-color: transparent;
  display: flex;
  align-items: flex-start;
}
.tab-group {
  display: flex;
  width: 91%;
  justify-content: space-between;
  justify-items: flex-start;
}
.tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #95999a;
  text-align: center;
  width: 30%;
  /* max-width: 260px; */
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background: #e0e0e0;
}

.tab-content {
  height: 40px;
  font-family: IRANSans, sans-serif;
  width: 50%;
  cursor: pointer;
  text-align: center;
  color: #a6a1a1;
  background: #cccaca;
  box-shadow: inset -2px -2px 7px rgba(54, 51, 51, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  color: #8b8b8b;
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

.buy-tab {
  background-color: #c7f8f0;
  border-bottom: 4px solid #31ad8c;
  color: #08392c;
}
.sell-tab {
  background-color: #ffe6e6;
  border-bottom: 4px solid #cd0f0f;
  color: #342a2a;
}

.box2 {
  /* padding: 10px 10px; */
  width: 100%;
  height: 100%;
  /* min-height: 375px; */
  display: flex;
  align-items: center;
  background-color: #fdfdfd;
}

.dark a {
  color: var(--font-dark);
}

.order-box {
  display: flex;
  width: 100%;
}
.setting {
  display: flex;
  width: 70%;
  align-items: flex-start;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 0px 0px 5px 0px;
}
.myrow {
  display: flex;
  width: 100%;
  justify-content: space-between;
  line-height: 30px;
}

.wallet {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.type,
.value {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 49%;
}

input[type="number"] {
  border: 1px solid #bfb6b6;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
}
.finish {
  width: 40%;
  border-radius: 5px 0px 0px 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.finish-buy {
  background-color: rgba(235, 249, 245, 0.95);
}
.finish-sell {
  background-color: #fcf3f3;
}
.total {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.total input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #03926c;
}

.sell-input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cd0f0f !important;
}
.total .input {
  display: flex;
  width: 100%;
}
.total select {
  background: #50788f;
  border-radius: 5px 0px 0px 5px;
  color: #efe2f8;
  width: 40%;
}
.submit {
  width: 100%;
}
.submit button {
  border-radius: 3px;
  /* width: 250px; */
  width: 100%;
  padding: 10px;
  color: #ffffff;
}
.buy-btn {
  background-color: #03926c;
  box-shadow: 0px 3px 11px rgba(138, 138, 138, 0.41);
}
.sell-btn {
  background-color: #cd0f0f;
  box-shadow: 0px 3px 11px rgba(138, 138, 138, 0.41);
}
.calc {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.percent {
  border: 1px solid #bfb6b6;
  padding: 5px;
  border-radius: 2px;
  margin: 5px 0;
  width: 22.5%;
}

input[type="datetime-local"] {
  border: 1px solid #bfb6b6;
  padding: 5px;
  border-radius: 3px;
}
.vpd-is-popover {
  width: 100%;
}
.vpd-input-group input {
  width: 100%;
}
.wage {
  margin-right: auto;
  font-size: 12px;
}
@media screen and (max-width: 768px) {
  .order-box {
    flex-direction: column;
  }
  .input {
    width: 100%;
  }
  .finish {
    width: 100%;
  }

  .tabs {
    width: 45%;
  }

  .setting {
    width: 100%;
  }
  .myrow {
    flex-direction: column;
  }
  .type,
  .value {
    width: 100%;
  }
}
</style>