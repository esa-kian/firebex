<template>
  <div class="box2">
    <over-loading width="70" v-if="loading" />
    <perfect-scrollbar>
      <table>
      
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
                  ($marketType2relatedCoin(tableContent.marketType)) +
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
      this.$router.push("/Trade/" + this.$coin2Snake[e]);
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

