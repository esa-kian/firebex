<template>
  <div class="box2">
    <over-loading v-if="loading" />
    <table>
      <tr class="table-header">
        <th>بازار</th>
        <th>قیمت</th>
        <th>تغییرات</th>
      </tr>
      <tr v-if="!loading && !tableContents.length">
        <td colspan="3">
          <p style="width: 100%; text-align: center; color: red">
            در حال حاضر بازار فعالی وجود ندارد.
          </p>
        </td>
      </tr>
      <tr
        v-for="(tableContent, index) in tableContents"
        :key="tableContent.price + '' + index"
        class="table-row"
        @click="goto($coin2Snake[tableContent.link])"
      >
        <td class="currency">
          <img height="20px" :src="tableContent.img" alt="" />
          {{ tableContent.cryptoname }}
        </td>
        <td
          :style="{
            color:
              tableContent.change > 0 ? '#03926c' : 'rgb(240, 91, 71)',
          }"
        >
          {{ tableContent.amount }}
        </td>
        <td
          style="direction: ltr"
          :style="{
            color:
              tableContent.change > 0 ? '#03926c' : 'rgb(240, 91, 71)',
          }"
        >
          {{ tableContent.change }}٪
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import OverLoading from "@/components/Tools/over-loading";

export default {
  name: "RealPriceTableToman",
  components: { OverLoading },
  props: {
    tableContents: [],
    toman: {
      default: true,
    },
  },
  data() {
    return {
      alive: false,
      // tableContents: [],
      loading: false,
    };
  },
  watch: {
    toman() {
      this.tab();
    },
  },
  methods: {
    async getPrice() {
      let res;
      if (this.toman) {
        res = await this.$axios.get("/coins/price/usd", {
          params: {
            include24hrChange: true,
            includeWeeklyChange: false,
          },
        });
      } else {
        res = await this.$axios.get("/coins/price/usdt").catch(() => {
          this.loading = false;
          this.alive = false;
        });
      }
      this.tableContents = res;
      this.sort();
    },
    goto(e) {
      this.$router.push(
        "/trade/" + (this.toman ? "TOMAN" : "TETHER") + `/${e}`
      );
    },
    sort() {
      this.tableContents.sort(
        (a, b) =>
          this.$sortCoins.indexOf(a.sourceCoinSymbol) -
          this.$sortCoins.indexOf(b.sourceCoinSymbol)
      );
    },
    async loop() {
      this.loading = true;
      const tab = this.toman;
      while (this.alive && tab === this.toman) {
        await this.getPrice();
        this.loading = false;
        await this.$sleep(5000);
      }
    },
    async tab() {
      this.tableContents = [];
      this.loading = true;
      await this.beforeLoop();
      this.loading = false;
    },
    async beforeLoop() {
      if (this.state.loop) this.loop();
      else {
        this.loading = true;
        await this.getPrice().catch(() => {
          this.loading = false;
        });
        this.loading = false;
      }
    },
  },
  mounted() {
    // this.alive = true;
    // this.beforeLoop();
  },
  beforeDestroy() {
    // this.alive = false;
  },
};
</script>

<style scoped>
.box2 {
  font-family: VistaDev, sans-serif;
  font-size: 12px;
  max-height: 392px;
  display: block;
  direction: rtl;
  background-color: #fdfdfd;
  width: 100%;
  z-index: 100;
}

.dark {
  background-color: #fdfdfd;
}

table {
  position: relative;
  background-color: #fdfdfd;
  width: 100%;
  border-collapse: collapse;
}

.dark table {
  background-color: #fdfdfd;
}

table th {
  height: 30px;
}

tr th:first-child,
td:first-child {
  text-align: right;
  color: #04192d;
}

tr th:last-child,
td:last-child {
  direction: ltr;
  text-align: left;
}
td,
th {
  padding: 5px;
}
.currency {
  display: flex;
  align-items: center;
  gap: 5px;
}
.table-header {
  position: relative;
  top: 0;
  background-color: #fdfdfd;
  text-align: center;
  color: #04192d;
  border-bottom: solid rgba(0, 0, 0, 0.1) 2px;
}

.dark .table-header {
  color: #04192d;
  background-color: #fdfdfd;
}

table td {
  height: 30px;
}

.table-row {
  position: relative;
  text-align: center;
  cursor: pointer;
  border-bottom: solid var(--border-light) 1px;
}

.table-row:last-of-type {
  border-bottom: 0;
}

.table-row:hover {
  background-color: var(--hover-light);
}

.head {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 5px;
  font-size: 14px;
  font-weight: 500;
}
</style>