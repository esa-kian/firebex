<template>
  <div class="box2">
    <over-loading width="70" v-if="loading" />
    <perfect-scrollbar>
      <table>
        <tr class="table-header">
          <th>نام</th>
          <th>آخرین قیمت</th>
          <th>تغییرات 24 ساعت اخیر</th>
          <th>حجم 24 ساعت اخیر</th>
          <th>نمودار هفتگی</th>
        </tr>
        <tr v-if="!tableContents.length">
          <td colspan="5" style="text-align: center; padding: 15px">
            در حال حاضر بازار فعالی وجود ندارد.
          </td>
        </tr>
        <tr
          v-else
          v-for="(tableContent, index) in tableContents"
          :key="index"
          class="table-row"
          @click.prevent="routing(tableContent.relatedCoin)"
        >
          <td>
            <img
              width="30px"
              :src="
                require('@/assets/icons/' +
                  ($marketType2relatedCoin(tableContent.marketType) ||
                    'TOMAN') +
                  '.png')
              "
              alt="crypto"
            />
            <a>{{ $coinLabel[tableContent.relatedCoin] }}</a>
          </td>
          <td
            :style="{
              color: [tableContent.last24HourChange > 0 ? 'green' : 'red'],
            }"
          >
            {{ $toLocal(tableContent.lastPrice) }}
          </td>
          <td
            :style="{
              color: [tableContent.last24HourChange > 0 ? 'green' : 'red'],
            }"
          >
            {{ $toLocal(tableContent.last24HourChange.toFixed(2)) }} %
          </td>
          <td
            :style="{
              color: [tableContent.last24HourChange > 0 ? 'green' : 'red'],
            }"
          >
            {{ $toLocal(tableContent.last24HourVolume.toFixed(0)) }}
          </td>
          <td class="bitcoin-price">
            <svg
              style="width: 0; height: 0; position: absolute"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="btcFill" x1="1" x2="1" y1="0" y2="1">
                  <stop offset="0%" stop-color="var(--main-color)" />
                  <stop offset="100%" stop-color="#ffffff00" />
                </linearGradient>
              </defs>
            </svg>
            <trend-chart
              :datasets="[
                {
                  data: chartData(tableContent),
                  fill: true,
                  className: 'curve-btc',
                },
              ]"
            />
          </td>
        </tr>
      </table>
    </perfect-scrollbar>
  </div>
</template>

<script>
import OverLoading from "@/components/OverLoading";

export default {
  name: "CryptoRialChart",
  components: { OverLoading },
  props: {
    max: {
      default: 11,
    },
    active: {},
  },
  data() {
    return {
      tableContents: [],
      TomanCoin:
        "market_type=BITCOIN_TOMAN" +
        "&market_type=BITCOIN_CASH_TOMAN" +
        "&market_type=ETHEREUM_TOMAN" +
        "&market_type=CLASSIC_ETHEREUM_TOMAN" +
        "&market_type=LITE_COIN_TOMAN" +
        "&market_type=BINANCE_COIN_TOMAN" +
        "&market_type=EOS_TOMAN" +
        "&market_type=STELLAR_TOMAN" +
        "&market_type=TRON_TOMAN" +
        "&market_type=DASH_TOMAN" +
        "&market_type=RIPPLE_TOMAN" +
        "&market_type=DOGE_COIN_TOMAN" +
        "&market_type=TETHER_TOMAN",
      TetherCoin:
        "market_type=BITCOIN_TETHER" +
        "&market_type=BITCOIN_CASH_TETHER" +
        "&market_type=ETHEREUM_TETHER" +
        "&market_type=CLASSIC_ETHEREUM_TETHER" +
        "&market_type=LITE_COIN_TETHER" +
        "&market_type=BINANCE_COIN_TETHER" +
        "&market_type=EOS_TETHER" +
        "&market_type=STELLAR_TETHER" +
        "&market_type=TRON_TETHER" +
        "&market_type=RIPPLE_TETHER" +
        "&market_type=DOGE_COIN_TETHER" +
        "&market_type=DASH_TETHER",
      alive: true,
      loading: false,
    };
  },
  watch: {
    active() {
      this.tab();
    },
  },
  computed: {
    chartData() {
      return (e) =>
        e.lastWeekData
          ? e.lastWeekData.length > 2
            ? e.lastWeekData
            : [0, 0]
          : [0, 1, 0, 1];
    },
  },
  methods: {
    routing(e) {
      this.$router.push("/Trade/TOMAN/" + this.$coin2Snake[e]);
    },
    async setData() {
      const res = await this.$axios.get(
        "/trades/market-info?" +
          (this.active ? this.TomanCoin : this.TetherCoin),
        {
          params: {
            weeklyDataIncluded: true,
            // marketType: this.active ? this.TomanCoin : this.TetherCoin
          },
        }
      );
      console.log(res);
      this.tableContents = res.data.content;
      this.$emit("get-data", res.data.content);
    },
    async loop() {
      this.loading = true;
      const active = this.active;
      while (this.alive && active === this.active) {
        await this.setData();
        this.loading = false;
        await this.$sleep(5000);
      }
    },
    async tab() {
      this.tableContents = [];
      this.loading = true;
      await this.setData();
      this.loading = false;
    },
  },
  mounted() {
    // this.state.loading = true
    this.loop();
  },
  beforeDestroy() {
    this.alive = false;
  },
};
</script>

<style scoped>
.ps {
  width: 100%;
}

.box2 {
  font-family: VistaDev, sans-serif;
  font-size: 12px;
  display: block;
  /* direction: ltr; */
  border-radius: 5px;
  border: none;
  /* background-color: var(--box-background-light); */
  width: 100%;
  position: relative;
}

table {
  direction: rtl;
  /* background-color: var(--box-background-light); */
  width: 100%;
  min-width: 530px;
  border-collapse: collapse;
}

table th {
  height: 40px;
}

.table-header {
  top: 0;
  /* background-color: var(--box-background-light); */
  text-align: center;
  z-index: 1;
}

.table-header th:first-of-type {
  text-align: right;
  padding-right: 4%;
}

.table-header th:last-of-type {
  text-align: center;
  padding-left: 3%;
  max-width: 35%;
  width: 200px;
}

.table-header {
  border-bottom: 2px var(--border-light) solid;
}

.table-row {
  /* border-bottom: 2px var(--border-light) solid; */
}

.table-row td:first-of-type {
  padding-right: 10%;
  text-align: right;
  direction: rtl;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.table-row td:last-of-type {
  /* padding-right: 10%; */
  text-align: left;
  direction: ltr;
  /* display: flex;
        flex-direction: row; */
  align-items: center;
  padding-left: 3%;
  /* max-width: 75%; */
}

.table-row td:first-of-type a {
  margin-right: 5px;
}

.table-row td {
  height: 63px;
  direction: ltr;
}

.table-row {
  position: relative;
  text-align: center;
  cursor: default;
}

.table-row:hover {
  background-color: var(--hover-light);
}

table tr:last-of-type::after {
  display: none;
  height: 0;
}

@media screen and (max-width: 768px) {
  .box2 {
    overflow-x: scroll;
  }
}
</style>

<style>
.bitcoin-price .vtc * {
  height: 100%;
  font-size: 12px;
  width: 70%;
}

@media (min-width: 699px) {
  .bitcoin-price .vtc {
    height: 60%;
  }
}

.bitcoin-price .grid line,
.bitcoin-price .labels line {
  stroke: rgba(246, 145, 25, 0.5);
}

.bitcoin-price .x-labels .label text {
  display: none;
}

.bitcoin-price .x-labels .label line {
  opacity: 0.3;
}

.bitcoin-price .x-labels .label:nth-child(6n + 1) text,
.bitcoin-price .x-labels .label:first-child text {
  display: block;
}

.bitcoin-price .x-labels .label:nth-child(6n + 1) line,
.bitcoin-price .x-labels .label:first-child line {
  opacity: 1;
}

.bitcoin-price .curve-btc .stroke {
  stroke: var(--main-color);
  stroke-width: 2;
}

.bitcoin-price .curve-btc .fill {
  fill: url(#btcFill);
  fill-opacity: 0.5;
}
</style>