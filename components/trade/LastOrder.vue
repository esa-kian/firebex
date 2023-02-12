<template>
  <div class="box1">
    <over-loading v-if="loading" />
    <perfect-scrollbar>
      <table>
        <tr
          v-else
          :style="{
            color: [
              tableContent.type === 'buy'
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
              >success</a
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
              >fail</a
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

