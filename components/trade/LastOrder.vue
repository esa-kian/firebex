<template>
  <div class="box1">
    <over-loading v-if="loading" />
    <perfect-scrollbar>
      <table>
        <tr class="table-header">
          <td>تاریخ</td>
          <td>بازار</td>
          <td>مقدار</td>
          <td>قیمت واحد ({{ $coinLabel[$route.params.tradeTo] }})</td>
          <td>قیمت کل ({{ $coinLabel[$route.params.tradeTo] }})</td>
          <td>وضعیت</td>
        </tr>

        <tr v-if="!tableContents.length">
          <td colspan="6">
            <p style="color: #f05b47; text-align: center; width: 100%">
              .سفارشی ثبت نشده است
            </p>
          </td>
        </tr>

        <tr
          v-else
          :style="{
            color: [
              tableContent.type === 'خرید'
                ? '#03926c'
                : '#f05b47',
            ],
          }"
          v-for="(tableContent, index) in tableContents"
          :key="index"
          class="table-row"
        >
          <td>{{ tableContent.date }}</td>

          <td>
            {{ tableContent.tradefrom + " - " + tableContent.tradeto }}
          </td>
          <td>{{ tableContent.amount }}</td>
          <td>{{ tableContent.unitprice }}</td>
          <td>
            {{
              parseInt(tableContent.amount) * parseInt(tableContent.unitprice)
            }}
          </td>

          <td class="situation">
            <img
              v-if="tableContent.situation === 'FINISHED'"
              src="../../assets/icons/correct.svg"
              alt="successful"
            />
            <a
              class="placeholder"
              style="color: var(--main-green)"
              v-if="tableContent.situation === 'FINISHED'"
              >انجام شده</a
            >
            <img
              v-if="tableContent.situation !== 'FINISHED'"
              src="../../assets/icons/close-red.svg"
              alt="unsuccessful"
            />
            <a
              class="placeholder"
              style="color: var(--main-red)"
              v-if="tableContent.situation !== 'FINISHED'"
              >انجام نشده</a
            >
          </td>
        </tr>
      </table>
    </perfect-scrollbar>
  </div>
</template>


<script>
import OverLoading from "@/components/Tools/over-loading";

export default {
  name: "LastOrder",
  components: { OverLoading },
  data() {
    return {
      modalshow: false,
      removeid: 0,
      tableContents: [
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "FINISHED",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "فروش",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "بازار",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "FINISHED",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "فروش",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "بازار",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "FINISHED",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "فروش",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "بازار",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "FINISHED",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "فروش",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "بازار",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "FINISHED",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "فروش",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "بازار",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          situation: "لغو شده",
        },
      ],
      settings: {
        suppressScrollX: false,
      },
      loading: false,
      alive: false,
      loopIsAlive: false,
    };
  },
  methods: {
    async getLastOrders() {
      let res = await this.$axios.get("/orders", {
        params: {
          market:
            this.$route.params.tradeFrom + "_" + this.$route.params.tradeTo,
          page: 1,
          size: 20,
        },
      });
      if (res.content)
        res.content = res.content.filter((i) => i.orderStatus !== "IS_OPEN");
      this.tableContents = res.content || [];
    },
    async loop() {
      // this.state.loading = true
      this.loading = true;

      while (this.alive) {
        this.loopIsAlive = true;
        await this.getLastOrders();
        this.loading = false;
        await this.$sleep(5000);
      }
      this.loopIsAlive = false;
    },
  },
  async mounted() {
    // this.alive = true;
    // this.loading = true;
    // if (this.state.loop) {
    //   this.loop();
    // } else {
    //   await this.getLastOrders();
    //   this.loading = false;
    // }
  },
  beforeDestroy() {
    // this.alive = false;
  },
};
</script>

<style lang="scss" scoped>
.ps {
  height: 260px;
}

.box1 {
  font-family: IRANSans-Bold, sans-serif;
  width: 100%;
  font-size: 12px;
  height: 290px;
  display: block;
  direction: ltr;
  border-radius: 5px;
  align-items: center;
  position: relative;
}

.table-header {
  color: #000;
}

@media (max-width: 992px) {
  
  .ps {
    height: calc(260px + (455px - 290px));
  }

  .box1 {
    height: 455px;
  }
}

.box1 a {
  font-family: VistaDev, sans-serif;
}

table {
  font-family: VistaDev, sans-serif;
  border-radius: 5px;
  width: 100%;
  min-width: 400px;
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
}

.dark .table-header {
  background-color: var(--box-background-dark);
}

.table-row {
  text-align: center;
  cursor: default;
  transition: 0.25s;
  height: 35px;
  background-color: transparent;
}

.table-row:hover {
  background-color: var(--hover-light);
}

.placeholder {
  width: 75px;
  bottom: 0;
  background-color: transparent;
  display: none;
  text-align: center;
  margin: auto;
}

.situation {
  img {
    width: 75px;
    height: 20px;
    padding: 5px 0;
  }
  &:hover {
    img {
      display: none;
    }

    .placeholder {
      display: block;
      visibility: visible;
    }
  }
}
</style>