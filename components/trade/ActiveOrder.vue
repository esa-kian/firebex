<template>
  <div class="box1">
    <over-loading v-if="loading" />
    <perfect-scrollbar>
      <table>
        <tr
          :style="{
            color: [
              tableContent.type.includes('buy')
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
    </transition>
  </div>
</template>


<script>
import AcceptModal from "@/components/trade/acceptModal";
import OverLoading from "@/components/Tools/over-loading";

export default {
  name: "ActiveOrder",
  components: { AcceptModal, OverLoading, CompletedModal },
  props: ["base"],
  data() {
    return {
      modalshow: false,
      removeid: 0,
      tableContents: [
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

