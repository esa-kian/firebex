<template>
  <div class="dashboard">
    <div class="attention">
      <div class="icon"></div>
      کاربر گرامی جهت افزایش امنیت حساب، احراز هویت دوعاملی را از طریق این صفحه
      فعال نمایید.
    </div>

    <div class="info">
      <div class="personal">
        <div class="level">
          <div class="now">
            <div class="title">سطح کاربری:</div>
            <div class="badge">نقره ای</div>
            <div class="caption">تراکنش کمتر از 10 میلیون</div>
            <div class="wage">کارمزد: ۰.۳۵٪</div>
          </div>
          <div class="next">
            <div class="title">صعود به سطح بعدی:</div>
            <div class="guide">تکمیل فرآیند احراز هویت</div>
          </div>
        </div>
        <div class="information">
          <div class="details">
            <div class="name">
              <div class="title">نام و نام خانوادگی</div>
              <div class="value">احسان احمدی کیان</div>
            </div>
            <div class="phone">
              <div class="title">شماره تلفن همراه</div>
              <div class="value">۰۹۱۲۹۹۹۸۸۷۷</div>
            </div>
            <div class="email">
              <div class="title">آدرس ایمیل</div>
              <div class="value">user@firebex.com</div>
            </div>
          </div>
          <button @click.prevent="$router.push('/profile')" class="edit">
            <div class="icon"></div>
            ویرایش اطلاعات
          </button>
        </div>
      </div>
      <div class="market">
        <div class="side">
          <div class="title">بازار ها</div>
          <div class="switch">
            <switcher></switcher>
          </div>
        </div>
        <div class="table">
          <table>
            <tr class="line">
              <th>رمز ارز</th>
              <th>آخرین قیمت</th>
              <th>تغییرات</th>
            </tr>

            <tr>
              <td class="crypto">
                <img
                  src="../../assets/icons/BITCOIN.png"
                  width="23"
                  height="23"
                  alt=""
                />
                بیت کوین
              </td>
              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td class="increase">+ ۴/۵ ٪</td>
            </tr>
            <tr>
              <td class="crypto">
                <img
                  src="../../assets/icons/ETHEREUM.png"
                  width="23"
                  height="23"
                  alt=""
                />
                اتریوم
              </td>
              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td>۰ ٪</td>
            </tr>
            <tr>
              <td class="crypto">
                <img
                  src="../../assets/icons/TETHER.png"
                  width="23"
                  height="23"
                  alt=""
                />
                تتر
              </td>
              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td class="increase">+ ۴/۵ ٪</td>
            </tr>
            <tr>
              <td class="crypto">
                <img
                  src="../../assets/icons/DASH.png"
                  width="23"
                  height="23"
                  alt=""
                />
                دش کوین
              </td>
              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td class="increase">+ ۴/۵ ٪</td>
            </tr>
            <tr>
              <td class="crypto">
                <img
                  src="../../assets/icons/RIPPLE.png"
                  width="23"
                  height="23"
                  alt=""
                />
                ریپل
              </td>
              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td class="decrease">- ۴/۵ ٪</td>
            </tr>
            <tr>
              <td class="crypto">
                <img
                  src="../../assets/icons/LITE_COIN.png"
                  width="23"
                  height="23"
                  alt=""
                />
                لایت کوین
              </td>
              <td>۸۷,۹۱۸,۲۷۳,۹۱۲</td>
              <td class="decrease">- ۴/۵ ٪</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="wallet">
        <div class="legends">
          <h3>کیف پول</h3>
          <div class="bitcoin">
            <div class="key">بیت کوین</div>
            <div class="value">۱۶.۶۹۸</div>
          </div>
          <div class="ripple">
            <div class="key">ریپل</div>
            <div class="value">۱۶.۶۹۸</div>
          </div>
          <div class="litecoin">
            <div class="key">لایت کوین</div>
            <div class="value">۱۶.۶۹۸</div>
          </div>
        </div>
        <div class="chart">
          <VueApexCharts
            type="donut"
            width="250"
            height="250"
            :options="chartOptions"
            :series="series"
            :key="series.length"
          />
          <div class="actions">
            <button class="deposit">واریز</button>
            <button class="withdraw">برداشت</button>
          </div>
        </div>
      </div>
    </div>
    <div class="history">
      <div class="tabs">
        <div
          @click.prevent="switchTab"
          :class="[!active ? 'tab-content' : 'tab-content-active']"
        >
          سفارشات باز
        </div>
        <div
          @click.prevent="switchTab"
          :class="[active ? 'tab-content' : 'tab-content-active']"
        >
          تاریخچه
        </div>
      </div>
      <div class="trades">
        <trade-history></trade-history>
      </div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import TradeHistory from "../../components/dashboard/TradeHistory.vue";
import Switcher from "../../components/dashboard/Switcher.vue";

export default {
  components: {
    VueApexCharts,
    TradeHistory,
    Switcher,
  },
  mounted() {
    this.chart();
  },
  methods: {
    switchTab() {
      this.active = !this.active;
    },
    chart() {
      const vm = this;
      let sortedData = "";
      sortedData = vm.wallets;
      sortedData.sort((a, b) =>
        a.price < b.price ? 1 : b.price < a.price ? -1 : 0
      );
      let index = 0;
      sortedData.map((e) => {
        if (e.cash != 0) {
          vm.chartOptions.labels[index] = {
            name: e.name,
            value: e.cash,
          };
          vm.series[index] = e.price;
          index++;
        }
      });
    },
  },
  data() {
    return {
      active: true,
      wallets: [
        {
          name: "تومان",
          cash: 157000000,
          unit: "",
          unitPrice: 1,
          price: 157000000,
          benefit: "",
          benefitPercent: "",
        },
        {
          name: "بیتکوین",
          cash: 15.7,
          unit: "BTC",
          unitPrice: 157000000,
          price: 120000000,
          benefit: 1234837,
          benefitPercent: 8.7,
          wage: "0.2",
        },
        {
          name: "اتریوم",
          cash: 5.2,
          unit: "ETH",
          unitPrice: 157000000,
          price: 100000000,
          benefit: -1234837,
          benefitPercent: -8.7,
          wage: "0.2",
        },
        {
          name: "کاردانو",
          cash: 10,
          unit: "ADA",
          unitPrice: 157000000,
          price: 100000000,
          benefit: 1234837,
          benefitPercent: 8.7,
          wage: "0.2",
        },
        {
          name: "ترون",
          cash: 5.2,
          unit: "TRX",
          unitPrice: 157000000,
          price: 80000000,
          benefit: -1234837,
          benefitPercent: -8.7,
          wage: "0.2",
        },
        {
          name: "بایننس کوین",
          cash: 5.2,
          unit: "BNB",
          unitPrice: 157000000,
          price: 20000000,
          benefit: 1234837,
          benefitPercent: 8.7,
          wage: "0.2",
        },
        {
          name: "مونرو",
          cash: 0,
          unit: "XMR",
          unitPrice: 157000000,
          price: 0,
          benefit: 1234837,
          benefitPercent: 8.7,
          wage: "0.2",
        },
        {
          name: "لینک",
          cash: 0,
          unit: "LINK",
          unitPrice: 157000000,
          price: 0,
          benefit: -1234837,
          benefitPercent: -8.7,
          wage: "0.2",
        },
        {
          name: "تزوس",
          cash: 0,
          unit: "XTZ",
          unitPrice: 157000000,
          price: 0,
          benefit: -1234837,
          benefitPercent: -8.7,
          wage: "0.2",
        },
        {
          name: "بیتکوین کش",
          cash: 0,
          unit: "BCH",
          unitPrice: 157000000,
          price: 0,
          benefit: -1234837,
          benefitPercent: -8.7,
          wage: "0.2",
        },
        {
          name: "ریپل",
          cash: 0,
          unit: "XRP",
          unitPrice: 157000000,
          price: 0,
          benefit: -1234837,
          benefitPercent: -8.7,
          wage: "0.2",
        },
        {
          name: "تتر",
          cash: 0,
          unit: "USDT",
          unitPrice: 157000000,
          price: 0,
          benefit: -1234837,
          benefitPercent: -8.7,
          wage: "0.2",
        },
      ],
      cashes: [157000000, 15.7, 10, 5.2, 5.2],
      chartOptions: {
        chart: {
          width: "20px",
          fontFamily: "Yekan",
        },
        colors: [
          "#3f51b5",
          "#03a9f4",
          "#4caf50",
          "#f9ce1d",
          "#FF9800",
          "#00E396",
          "#FF4560",
          "#775DD0",
          "#5C4742",
          "#2b908f",
          "#A300D6",
          "#C5D86D",
        ],
        theme: {
          mode: "light",
          palette: "palette2",
        },
        stroke: {
          width: 1,
          colors: undefined,
        },
        labels: [],
        dataLabels: {
          style: {
            fontFamily: "Yekan",
          },
        },
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            offsetX: 0,
            offsetY: 0,
            donut: {
              size: "70%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "22px",
                  fontFamily: "Yekan",
                  fontWeight: 600,
                  color: "var(--tooDark)",
                  offsetY: -17,
                  formatter: function (val) {
                    if (val.name) return val.name;
                    else return val;
                  },
                },
                value: {
                  show: true,
                  fontSize: "16px",
                  fontFamily: "Yekan",
                  fontWeight: 400,
                  color: "var(--tooDark)",
                  offsetY: 10,
                  formatter: function (val) {
                    return `${Number(val).toLocaleString()} تومان`;
                  },
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: "ارزش موجودی کل",
                  fontSize: "16px",
                  fontFamily: "Yekan",
                  fontWeight: 600,
                  color: "var(--tooDark)",
                  formatter: function (w) {
                    w = w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                    return w.toLocaleString() + "\n" + "تومان";
                  },
                },
              },
            },
          },
        },
        tooltip: {
          enabled: true,
          fillSeriesColor: true,
          custom: function ({ seriesIndex, w }) {
            return ` ${w.globals.seriesNames[
              seriesIndex
            ].value.toLocaleString()} ${
              w.globals.seriesNames[seriesIndex].name
            } `;
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.dashboard {
  background-color: #efe2f8;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 160px 10px 20px;
  font-size: 0.7em;
}
.attention {
  background-color: #cd0f0f;
  border-radius: 5px;
  color: #efebeb;
  width: fit-content;
  height: fit-content;
  text-align: right;
  padding: 10px;
  display: flex;
  font-size: 16px;
  align-items: center;
}
.attention .icon {
  background-image: url("../../assets/dashboard/attention.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 30px;
  width: 30px;
  height: 30px;
  margin: 0 10px;
}
.info {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
  color: #ebebeb;
  padding-top: 10px;
  height: 310px;
}
.personal {
  display: flex;
  width: 35%;
  height: 100%;
  min-height: 310px;
  min-width: 310px;
  font-size: 14px;
}
.personal .level {
  background-color: #133453;
  border-radius: 0px 6px 6px 0px;
  height: 100%;
  width: 40%;
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  justify-content: space-between;
}
.now .caption {
  font-size: 10px;
}
.now .badge {
  width: 88px;
  color: #f9f9f9;
  font-weight: bold;
  background-color: #c4c4c4;
  border-radius: 3px;
  padding: 3px;
  margin: 10px auto;
}
.now .wage {
  font-weight: bold;
}
.next .guide {
  color: #f5b300;
  font-size: 9px;
}
.information {
  background-color: #efefef;
  box-shadow: -3px 4px 9px rgba(79, 71, 71, 0.12);
  border-radius: 8px 0 0 8px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}
.details {
  background-color: #133453;
  border-radius: 5px;
  height: 245px;
  width: 90%;
  padding: 10px;
}
.info .title {
  font-size: 12px;
  width: 100%;
  text-align: right;
}
.info .value {
  width: 100%;
  text-align: left;
}
.name .value {
  background-image: url("../../assets/dashboard/card.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 20px;
}
.phone .value {
  background-image: url("../../assets/dashboard/phone.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 20px;
}
.email .value {
  background-image: url("../../assets/dashboard/email.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 20px;
}
button.edit {
  background-color: #033125de;
  box-shadow: -3px 4px 10px rgba(84, 78, 78, 0.63);
  border-radius: 5px;
  width: 90%;
  height: 34px;
  color: #eee5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
}
button.edit:hover {
  background-color: #033125;
  transition: 0.3s ease;
}
button.edit .icon {
  background-image: url("../../assets/dashboard/edit.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 20px;
  width: 20px;
  height: 20px;
  margin: 0 0 0 10px;
}
.market {
  display: flex;
  width: 35%;
  height: 310px;
}
.market .side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  background-color: #133453;
  border-radius: 0px 6px 6px 0px;
  width: 100px;
}
.market .side .title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.table {
  background: #efefef;
  border-radius: 11px 0px 0px 11px;
  width: 70%;
}
table {
  color: #04192d;
  width: 100%;
  font-size: 14px;
  padding: 5px;
}
td{
  margin: 5px 0
}
th {
  border-bottom: 1px solid #04192d;
  border-collapse: collapse;
  font-weight: normal;
}
td.crypto {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
.increase {
  color: #03926c;
}
.decrease {
  color: #f05b47;
}

.wallet {
  width: 30%;
  display: flex;
}
.wallet .legends {
  background-color: #133453;
  width: 25%;
  border-radius: 0px 6px 6px 0px;
  padding: 10px 0;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
.legends div {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  text-align: center;
  font-size: 0.8em;
}
.bitcoin,
.litecoin,
.ripple {
  border-radius: 2px;
  padding: 3px;
}
.bitcoin {
  background: rgba(254, 148, 0, 0.66);
}
.litecoin {
  background: #c4c4c4;
}
.ripple {
  background: rgba(115, 155, 238, 0.65);
}
.chart {
  background: #efefef;
  border-radius: 11px 0px 0px 11px;
}
.actions {
  width: 90%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  gap: 10px;
}
.actions button {
  color: #e6e6e6;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 74px;
  height: 34px;
}
button.deposit {
  background: #28b910;
}
button.withdraw {
  background: #f05b47;
}
.tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #95999a;
  text-align: center;
  width: 100%;
  max-width: 360px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  font-size: 18px;
  margin-top: 40px;
}
.history {
  width: 100%;
  height: auto;
}
.tab-content {
  height: 40px;
  font-family: IRANSans, sans-serif;
  width: 50%;
  cursor: pointer;
  text-align: center;
  box-shadow: inset 0px -3px 15px rgba(37, 80, 93, 0.61);
  color: #efe2f8;
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
  text-align: center;
  color: #efe2f8;
  background-color: #25505d;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
}
.trades {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
img {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .dashboard {
    padding: 15px 20px 60px 20px;
    display: block;
  }
  .info {
    flex-direction: column;
    display: block;
  }
  .personal,
  .wallet,
  .market {
    display: flex;
    width: 100%;
    height: 320px;
    margin-bottom: 10px;
    /* display: block; */
    /* position: absolute; */
  }

  .attention .icon {
    width: 70px;
  }

  .info {
    height: fit-content;
  }

  .table {
    width: 100%;
  }

  .wallet .legends {
    width: 100px;
  }

  .chart {
    width: 100%;
  }
}
</style>
