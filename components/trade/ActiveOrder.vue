<template>
  <div class="box1">
    <over-loading v-if="loading" />
    <perfect-scrollbar>
      <table>
        <tr class="table-header">
          <td>تاریخ</td>
          <th>بازار</th>
          <th>مقدار</th>
          <th>قیمت واحد ({{ $coinLabel[$route.params.tradeTo] }})</th>
          <th>قیمت کل ({{ $coinLabel[$route.params.tradeTo] }})</th>
          <th>انجام شده</th>
          <th>لغو سفارش</th>
        </tr>
        <tr v-if="!tableContents.length">
          <td colspan="6">
            <p style="color: #f05b47; text-align: center; width: 100%">
              سفارشی ثبت نشده است.
            </p>
          </td>
        </tr>
        <tr
          :style="{
            color: [
              tableContent.type.includes('خرید')
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

          <td>{{ tableContent.load }}%</td>
          <td>
            <img
              @click.prevent="showModal(tableContent)"
              src="../../assets/icons/trash1.svg"
              class="trash"
              :id="'trash' + index"
              alt=""
            />
          </td>
        </tr>
      </table>
    </perfect-scrollbar>
    <transition name="modal-fade">
      <accept-modal
        v-if="modalshow"
        @close="closemodal"
        @remove="removeorder(removeid)"
      />
      <completed-modal
        v-if="completedModal"
        @close="completedModal = false"
        :text="'سفارش شما با موفقیت لغو شد.'"
      />
    </transition>
  </div>
</template>


<script>
import AcceptModal from "@/components/trade/acceptModal";
import OverLoading from "@/components/Tools/over-loading";
import CompletedModal from "@/components/Tools/CompletedModal";

export default {
  name: "ActiveOrder",
  components: { AcceptModal, OverLoading, CompletedModal },
  props: ["base"],
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
          load: 2.723527,
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "حد",
          type: "فروش",
          unitprice: 226900000,
          amount: 5.723527,
          load: 0,
        },
        {
          date: "۹۹/۰۴/۲۸ - ۱۱:۵۱",
          tradefrom: "بیتکوین",
          tradeto: "ریال",
          limit: "بازار",
          type: "خرید",
          unitprice: 226900000,
          amount: 5.723527,
          load: 0,
        },
      ],
      loading: false,
      alive: false,
      loopIsAlive: false,
      completedModal: false,
    };
  },
  methods: {
    closemodal() {
      this.modalshow = false;
    },
    showModal(e) {
      if (!e.executedAmount || e < 0) {
        this.alive = false;
        this.modalshow = true;
        this.removeid = e.id;
      }
    },
    async cancleAllOrders() {
      for (let i = 0; i < this.tableContents.length; i++) {
        if (!this.tableContents[i].executedAmount) {
          await this.removeorder(this.tableContents[i].id);
        }
      }
      this.completedModal = true;
    },
    async removeorder(e) {
      if (e < 0) {
        this.cancleAllOrders();
      } else {
        const res = await this.$axios.delete(`orders/${e}`);
        if (res.message === "deleting of order was successful") {
          this.modalshow = false;
          this.completedModal = true;
          this.alive = true;

          if (!this.loopIsAlive)
            if (this.state.loop) {
              this.loop();
            } else {
              this.getActiveOrders();
            }
        }
      }
    },
    async getActiveOrders() {
      const res = await this.$axios.get("/orders", {
        params: {
          orderStatus: "IS_OPEN",
          market:
            this.$route.params.tradeFrom + "_" + this.$route.params.tradeTo,
        },
      });
      this.tableContents = res.content || [];
      this.$emit("update:activeLength", this.tableContents.length);
    },
    async loop() {
      // this.state.loading = true
      this.loading = true;

      while (this.alive) {
        this.loopIsAlive = true;
        await this.getActiveOrders();
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
    //   await this.getActiveOrders();
    //   this.loading = false;
    // }
  },
  beforeDestroy() {
    // this.alive = false;
  },
};
</script>

<style scoped>
.ps {
  height: 260px;
}

.box1 {
  font-family: IRANSans-Bold, sans-serif;
  width: 100%;
  font-size: 12px;
  height: 290px;
  border-radius: 5px;
  align-items: center;
  direction: ltr;
  position: relative;
  background-color: #fdfdfd;
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
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
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

.table-header > *:first-of-type {
  min-width: 72px;
}

.table-header > *:last-of-type {
  min-width: 72px;
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

.trash {
  vertical-align: middle;
  cursor: pointer;
}
</style>