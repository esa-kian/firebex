<template>
  <div class="desktop box1">
    <OverLoading v-if="loading" />
    <div class="head">
      <select name="" id="">
        <option value="">همه</option>
        <option value="">خرید</option>
        <option value="">فروش</option>
      </select>
      <span> آخرین معاملات </span>
    </div>
    <div class="box2">
      <perfect-scrollbar>
        <table>
          <tr class="table-header">
            <td>مقدار</td>
            <td>قیمت واحد</td>
            <td>قیمت کل</td>
            <td>زمان</td>
          </tr>
          <tr v-if="!tableContents.length">
            <td colspan="4">
              <p style="width: 100%; text-align: center">
                .در حال حاضر اطلاعاتی وجود ندارد
              </p>
            </td>
          </tr>
          <tr
            v-else
            :style="{
              color: [
                tableContent.type.includes('Buy')
                  ? '#03926c'
                  : 'rgb(240, 91, 71)',
              ],
            }"
            v-for="(tableContent, index) in tableContents"
            :key="index"
            class="table-row"
          >
            <td>{{ tableContent.amount }}</td>
            <td>{{ tableContent.unitprice }}</td>
            <td>{{ tableContent.totalprice }}</td>
            <td>{{ tableContent.time }}</td>
          </tr>
        </table>
      </perfect-scrollbar>
    </div>
  </div>
</template>


<script>
import OverLoading from "@/components/Tools/over-loading";

export default {
  name: "LastTrade",
  components: { OverLoading },
  props: {
    // tableContents: [],
  },
  data() {
    return {
      // tableContents: [
      // ],
      tableContents: [
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

      loading: false,
      alive: true,
    };
  },
  methods: {
    async getLastTrades() {
      const res = await this.$axios.get("/trades/last-trades", {
        params: {
          marketType:
            this.$route.params.tradeFrom + "_" + this.$route.params.tradeTo,
          size: 20,
        },
      });
      this.tableContents = res.content;
      this.loading = false;
    },
    async loop() {
      this.state.loading = true;
      this.loading = true;

      while (this.alive) {
        await this.getLastTrades();
        this.loading = false;
        await this.$sleep(5000);
      }
    },
  },
  mounted() {
    // this.alive = true;
    // if (this.state.loop) {
    //   this.loop();
    // } else {
    //   this.getLastTrades();
    // }
  },
  beforeDestroy() {
    // this.alive = false;
  },
};
</script>

<style lang="scss" scoped>
.ps {
  height: 100%;
}

.dashboard .ps {
  height: 100%;
}

.box2 {
  height: calc(100% - 25px);
  background-color: #fdfdfd;
  color: #04192d;
  max-height: 410px;
  overflow-y: scroll;
}

.box1 {
  font-family: IRANSans-Bold, sans-serif;
  width: 100%;
  font-size: 12px;
  min-height: 200px;
  max-height: 400px;
  display: block;
  direction: ltr;
  border-radius: 5px;
  margin-top: 10px;
  flex-grow: 1;
  position: relative;
}

.box1 a {
  font-family: VistaDev, sans-serif;
}

table {
  font-family: VistaDev, sans-serif;
  border-radius: 5px;
  width: 100%;
  min-width: 220px;
  border-collapse: collapse;
  direction: rtl;
}

.table-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: var(--box-background-light);
  text-align: center;
  z-index: 1;
  height: 35px;
  > * {
    &:first-of-type {
      padding-right: 10px;
    }
    &:last-of-type {
      padding-left: 10px;
    }
  }
}

.dark .table-header {
  background-color: #fdfdfd;
  color: #04192d;
}

.dark a {
  color: var(--font-dark);
}

.table-row {
  position: relative;
  width: 100%;
  text-align: center;
  cursor: default;
  height: 35px;
  > * {
    &:first-of-type {
      padding-right: 10px;
    }
    &:last-of-type {
      padding-left: 10px;
    }
  }
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
  background-color: #133453;
}
select {
  border: 1px solid #fdfdfd;
  padding: 5px;
  border-radius: 2px;
  color: #fdfdfd;
  background-color: #133453;
  padding-left: 30px;
  background-image: url("../../assets/icons/down.svg");
  background-position-x: 5px;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 20px;
}
@media screen and (max-width: 768px) {
  .desktop {
    display: none;
  }
}
</style>