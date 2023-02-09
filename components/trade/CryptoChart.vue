<template>
  <div class="main-box">
    <div class="box">
      <div class="tab">
        <div
          :class="[!active ? 'tab-content' : 'tab-content-active']"
          @click.prevent="active = true"
        >
          <img
            src="../../assets/icons/EUR.png"
            width="18"
            height="18"
            alt=""
          />
       
        </div>
        <div
          :class="[active ? 'tab-content' : 'tab-content-active']"
          @click.prevent="active = false"
        >
          <img
            src="../../assets/icons/TETHER.png"
            width="18"
            height="18"
            alt=""
          />

          <a>تتر</a>
        </div>
      </div>
      <div :class="[active ? 'box1-irt' : 'box1-usdt']">
        <crypto-chart :active="active" />
      </div>
    </div>
  </div>
</template>

<script>
import CryptoChart from "@/components/trade/CryptoChartTable";

export default {
  name: "CryptoChart",
  components: {
    CryptoChart,
  },
  data() {
    return {
      active: true,
    };
  },
};
</script>
