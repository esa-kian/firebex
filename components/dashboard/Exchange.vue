<template>
  <div class="exchange">
    <div class="charts">
      <div class="trading-view">
        <div class="order-first order-sm-12" style="padding: 0px">
          <vue-trading-view
            :key="'BTC'"
            style="height: 360px; width: 100%"
            :options="{
              autosize: true,
              symbol: 'BINANCE:' + 'BTC' + 'USDT',
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
          <!-- <shop class="box" /> -->
        </div>
      </div>
      <div class="prices">
        <table>
          <tr class="header">
            <th>رمز ارز</th>
            <th>قیمت فروش</th>
            <th>قیمت خرید</th>
            <th>تغییرات هفتگی</th>
          </tr>
          <tr>
            <td>
              <div class="currency">
                <img
                  src="../../assets/icons/BITCOIN.png"
                  width="23"
                  height="23"
                  alt=""
                />
                بیت کوین
              </div>
            </td>
            <td class="decrease">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="decrease">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="decrease">- ۴/۵ ٪</td>
          </tr>
          <tr>
            <td>
              <div class="currency">
                <img
                  src="../../assets/icons/ETHEREUM.png"
                  width="23"
                  height="23"
                  alt=""
                />
                اتریوم
              </div>
            </td>
            <td class="increase">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="increase">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="increase">+ ۴/۵ ٪</td>
          </tr>
          <tr>
            <td>
              <div class="currency">
                <img
                  src="../../assets/icons/LITE_COIN.png"
                  width="23"
                  height="23"
                  alt=""
                />
                لایت کوین
              </div>
            </td>
            <td class="increase">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="increase">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="increase">+ ۴/۵ ٪</td>
          </tr>
          <tr>
            <td>
              <div class="currency">
                <img
                  src="../../assets/icons/TETHER.png"
                  width="23"
                  height="23"
                  alt=""
                />

                تتر
              </div>
            </td>
            <td class="decrease">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="decrease">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="decrease">- ۴/۵ ٪</td>
          </tr>
          <tr>
            <td>
              <div class="currency">
                <img
                  src="../../assets/icons/DASH.png"
                  width="23"
                  height="23"
                  alt=""
                />
                دش کوین
              </div>
            </td>
            <td class="increase">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="increase">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="increase">+ ۴/۵ ٪</td>
          </tr>
          <tr>
            <td>
              <div class="currency">
                <img
                  src="../../assets/icons/RIPPLE.png"
                  width="23"
                  height="23"
                  alt=""
                />
                ریپل
              </div>
            </td>
            <td class="decrease">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="decrease">۸۷,۹۱۸,۲۷۳,۹۱۲</td>
            <td class="decrease">- ۴/۵ ٪</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="order">
      <div class="trade">
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
        <div class="order-box">
          <div class="setting">
            <div class="myrow">
              <div class="type">
                <label for="type">نوع ارز</label>
                <select name="type" id="type">
                  <option value="">بیت کوین (BTC)</option>
                  <option value="">اتریوم (ETH)</option>
                  <option value="">تتر (TETH)</option>
                </select>
              </div>
              <div class="value">
                <label for="value">مقدار مورد نظر</label>
                <input type="number" id="value" placeholder="حداقل ۱۰۰۰۰۰۰۰۰" />
              </div>
            </div>
            <div class="myrow">
              <div class="wallet">
                <label for="wallet">آدرس کیف پول</label>
                <select name="wallet" id="wallet">
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>
          <div :class="[sell ? 'finish-buy' : 'finish-sell', 'finish']">
            <div class="total">
              <label for="total">مبلغ کل معامله</label>
              <div class="input">
                <input type="number" :class="[!sell ? 'sell-input' : '']" />
                <select name="" id="">
                  <option value="">تومان (IRT)</option>
                </select>
              </div>
              <span class="wage">+کارمزد ۸.۰</span>
            </div>
            <div class="submit">
              <button v-if="sell" class="buy-btn">خرید از صرافی</button>
              <button v-else class="sell-btn">فروش به صرافی</button>
            </div>
          </div>
        </div>
      </div>
      <div class="orders">
        <div class="tabs">
          <div
            @click.prevent="switchTabOrders(true)"
            :class="[open ? 'tab-content-active' : 'tab-content']"
          >
            سفارشات باز
          </div>
          <div
            @click.prevent="switchTabOrders(false)"
            :class="[!open ? 'tab-content-active' : 'tab-content']"
          >
            سفارشات قبلی
          </div>
        </div>
        <div class="open-orders">
          <table>
            <tr class="header">
              <th>رمز ارز</th>
              <th>مقدار</th>
              <th>مبلغ معامله</th>
              <th>زمان</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <div class="currency">
                  <img
                    src="../../assets/icons/BITCOIN.png"
                    width="23"
                    height="23"
                    alt=""
                  />
                  بیت کوین
                </div>
              </td>
              <td>۰.۰۰۰۴</td>
              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td>۰۹:۳۶:۳۰</td>
              <td>
                <button class="delete"></button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="currency">
                  <img
                    src="../../assets/icons/ETHEREUM.png"
                    width="23"
                    height="23"
                    alt=""
                  />
                  اتریوم
                </div>
              </td>
              <td>۰.۰۰۰۴</td>

              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td>۰۹:۳۶:۳۰</td>
              <td>
                <button class="delete"></button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="currency">
                  <img
                    src="../../assets/icons/LITE_COIN.png"
                    width="23"
                    height="23"
                    alt=""
                  />
                  لایت کوین
                </div>
              </td>
              <td>۰.۰۰۰۴</td>

              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td>۰۹:۳۶:۳۰</td>
              <td>
                <button class="delete"></button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="currency">
                  <img
                    src="../../assets/icons/TETHER.png"
                    width="23"
                    height="23"
                    alt=""
                  />

                  تتر
                </div>
              </td>
              <td>۰.۰۰۰۴</td>

              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td>۰۹:۳۶:۳۰</td>
              <td>
                <button class="delete"></button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="currency">
                  <img
                    src="../../assets/icons/DASH.png"
                    width="23"
                    height="23"
                    alt=""
                  />
                  دش کوین
                </div>
              </td>
              <td>۰.۰۰۰۴</td>

              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td>۰۹:۳۶:۳۰</td>
              <td>
                <button class="delete"></button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueTradingView from "vue-trading-view";
// import Shop from "@/components/trade/Shop";

export default {
  methods: {
    switchTabBuy(val) {
      if (val) {
        this.sell = true;
      } else {
        this.sell = false;
      }
    },
    switchTabOrders(val) {
      if (val) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
  },
  data() {
    return {
      sell: true,
      open: true,
    };
  },
  components: {
    VueTradingView,
    // Shop,
  },
};
</script>
<style scoped>
.exchange {
  background-color: #efe2f8;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 160px 10px 20px;
  font-size: 0.8em;
}
.charts {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.trading-view {
  width: 55%;
  min-width: 55%;
  max-width: 750px;
  height: 300px;
}
.prices {
  overflow: hidden;
  border-radius: 5px 5px 0px 0px;
  width: 44%;
}
table {
  width: 100%;
  border-collapse: collapse;
  background: #f9f9f9;
  border-radius: 0px 0px 5px 5px;
  font-size: 0.8em;
  height: 300px;
}
th {
  background: #041e36;
  border: 0;
  margin: 0%;
  color: #ffffff;
  text-align: right;
  padding: 0 23px;
}
td {
  padding: 5px 0px;
  height: 30px;
}

.increase {
  color: #03926c;
}
.decrease {
  color: #f05b47;
}
img {
  margin: 0 5px;
}
.currency {
  display: flex;
  align-items: center;
}
.order {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.trade {
  width: 55%;
}
.tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #95999a;
  text-align: center;
  width: 100%;
  max-width: 260px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  font-weight: 500;
  font-size: 15px;
}

.tab-content {
  height: 40px;
  font-family: IRANSans, sans-serif;
  width: 50%;
  cursor: pointer;
  text-align: center;
  box-shadow: inset -2px -2px 7px rgba(54, 51, 51, 0.25);
  background: #cccaca;
  color: #525252;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
}

.tab-content-active {
  height: 40px;
  font-family: IRANSans-Bold, sans-serif;
  width: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
}
.orders .tab-content-active {
  background-color: #041e36;
  color: rgba(239, 226, 248, 1);
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
.order-box {
  display: flex;
  width: 100%;
  min-height: 300px;
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
}
select {
  border-radius: 3px;
  padding: 10px;
  width: 176px;
  border: 1px solid #bfb6b6;
  background-image: url("../../assets/dashboard/arrow_down.svg");
  background-position-x: 10px;
  background-position-y: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.type,
.value {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 49%;
}
.wallet {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.wallet select {
  width: 100%;
}
input[type="number"] {
  border: 1px solid #bfb6b6;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
}
.sell-input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cd0f0f !important;
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
  width: 60%;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #03926c;
  border-left: 3px solid transparent;
}
.total .input {
  width: 100%;
  display: flex;
}
.total select {
  background: #50788f;
  border-radius: 5px 0px 0px 5px;
  color: #efe2f8;
  width: 40%;
}
.submit button {
  border-radius: 3px;
  width: 250px;
  padding: 10px;
  color: #ffffff;
  width: 100%;
}
.buy-btn {
  background-color: #03926c;
  box-shadow: 0px 3px 11px rgba(138, 138, 138, 0.41);
}
.sell-btn {
  background-color: #cd0f0f;
  box-shadow: 0px 3px 11px rgba(138, 138, 138, 0.41);
}

.orders {
  width: 44%;
  display: flex;
  flex-direction: column;
}
.open-orders {
  overflow: hidden;
  border-radius: 5px 0px 0px 0px;
  width: 100%;
  font-size: 12px;
}
.open-orders .currency {
  display: flex;
  align-items: center;
}
.delete {
  background-image: url("../../assets/dashboard/trash.svg");
  background-size: 20px;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.wage {
  margin-right: auto;
  font-size: 13px;
  line-height: 20px;
  color: #818181;
}
.header {
  height: 20px;
  font-size: 12px;
}
@media screen and (max-width: 768px) {
  .exchange {
    padding: 15px 20px 60px 20px;
  }

  .charts {
    flex-direction: column;
  }

  .prices {
    width: 100%;
    overflow-x: scroll;
  }

  .order {
    flex-direction: column;
  }

  .trade {
    width: 100%;
  }

  .order-box {
    flex-direction: column;
  }

  .setting {
    width: 100%;
  }

  .finish {
    width: 100%;
  }

  .myrow {
    flex-direction: column;
  }

  select {
    width: 100%;
  }

  .type,
  .value {
    width: 100%;
  }

  .orders {
    width: 100%;
  }

  .trading-view {
    width: 100%;
    height: 380px;
  }
}
</style>