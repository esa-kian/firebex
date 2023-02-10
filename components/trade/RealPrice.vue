<template>
  <div class="desktop box1">
    <div class="box2">
      <real-price-table-tether :tableContents="cryptoTable" />
    </div>
  </div>
</template>

<script>
import RealPriceTableToman from "@/components/trade/RealPriceTableTether";

export default {
  name: "RealPrice",
  components: { RealPriceTableTether },
  props: ["cryptoTable", "teterTable"],
  data() {
    return {
      tether: true,
    };
  },
};
</script>
