<template>
  <div class="desktop box1">
    <div class="head">قیمت لحظه ای</div>
    <!-- <div class="tab">
                <div :class="[!toman ? 'tab-content' : 'tab-content-active']"
                     @click.prevent="toman=true">
                    <a>تومان</a>
                </div>
                <div :class="[toman ? 'tab-content' : 'tab-content-active']"
                     @click.prevent="toman=false">
                    <a>تتر</a>
                </div>
            </div> -->
    <div class="box2">
      <real-price-table-toman :tableContents="tomanTable" />
    </div>
  </div>
</template>

<script>
import RealPriceTableToman from "@/components/trade/RealPriceTableToman";

export default {
  name: "RealPrice",
  components: { RealPriceTableToman },
  props: ["tomanTable", "teterTable"],
  data() {
    return {
      toman: true,
    };
  },
};
</script>

<style scoped>
.box1 {
  font-family: IRANSans-Bold, sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--box-background-light);
  text-align: right;
  padding: 0px;
  border-radius: 5px;
  font-size: 12px;
  margin-bottom: 10px;
  position: relative;
}
.dark .box1 {
  /* background-color: var(--box-background-dark); */
  background-color: #fdfdfd;
}
.dark a {
  color: var(--font-dark);
}

.tab {
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: 100%;
  max-width: 200px;
  cursor: pointer;
  margin-top: 10px;
}

.tab-content {
  height: 30px;
  font-family: IRANSans, sans-serif;
  width: 50%;
  border-bottom: var(--border-light) solid;
  text-align: center;
}

.tab-content-active {
  height: 30px;
  font-family: IRANSans-Bold, sans-serif;
  width: 50%;
  border-bottom: var(--main-color) solid;
  text-align: center;
}

.box2 {
  flex-direction: column;
  /* margin-top: 10px; */
  background-color: var(--box-background-light);
  width: 100%;
}
.dark .box2 {
  background-color: var(--box-background-dark);
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
@media screen and (max-width: 768px) {
  .desktop {
    display: none;
  }
}
</style>