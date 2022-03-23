<template>
  <div class="main-box">
    <div class="box">
      <div class="tab">
        <div
          :class="[!active ? 'tab-content' : 'tab-content-active']"
          @click.prevent="active = true"
        >
          <img
            src="../../assets/icons/TOMAN.png"
            width="18"
            height="18"
            alt=""
          />
          <a>تومان</a>
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
        <crypto-rial-chart :active="active" />
      </div>
    </div>
  </div>
</template>

<script>
import CryptoRialChart from "@/components/trade/CryptoChartTable";
// import CryptoTeterChart from "@/components/trade/CryptoTeterChart";

export default {
  name: "CryptoChart",
  components: {
    CryptoRialChart,
    // CryptoTeterChart
  },
  watch: {
    active() {
      console.log("l");
    },
  },
  data() {
    return {
      active: true,
    };
  },
};
</script>

<style scoped>
.main-box {
  display: inline-block;
  background-color: transparent;
  text-align: right;
  margin-top: 30px;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 1180px;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
  text-align: right;
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  font-family: IRANSans-Bold, sans-serif;
}

.tab {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  text-align: right;
  width: 100%;
  max-width: 260px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.tab-content {
  height: 30px;
  font-family: IRANSans, sans-serif;
  width: 50%;
  text-align: center;
  box-shadow: inset -2px -2px 7px rgba(54, 51, 51, 0.25);
  display: flex;
  align-items: center;
  transition: 0.3s ease;
}

.tab-content-active {
  height: 30px;
  font-family: IRANSans-Bold, sans-serif;
  width: 50%;
  /* border-bottom: var(--main-color) solid; */
  text-align: center;
  background-color: #efefef;
  display: flex;
  align-items: center;
  transition: 0.3s ease;
}

.box1-irt {
  flex-direction: column;
  border-radius: 8px 0 8px 8px;
  background-image: url("../../assets/home/IRT.svg");
  background-blend-mode: screen;
  background-color: #efefefe5;
  width: 100%;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}
.box1-usdt {
  flex-direction: column;
  border-radius: 8px 0 8px 8px;
  background-image: url("../../assets/home/USDT.svg");
  background-blend-mode: screen;
  background-color: #efefefe5;
  width: 100%;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

.tab-content img {
  filter: grayscale(90%);
  margin: auto 10px;
}

.tab-content-active img {
  margin: auto 10px;
}
</style>