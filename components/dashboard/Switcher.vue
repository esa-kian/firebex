<template>
  <div @click.prevent="openClose" class="switcher">
    <div :class="[!open ? 'closed' : '', 'close']" id="close">
      <div>
        <img src="../../assets/icons/TOMAN.png" width="23" height="23" alt="">
      </div>
      <div>تومان</div>
      <div>(IRT)</div>
    </div>
    <div :class="['on', !open ? 'off' : '']" id="on"></div>
    <div class="open" id="open">
      <div>
        <img src="../../assets/icons/TETHER.png" width="23" height="23" alt="">
      </div>
      <div>تتر</div>
      <div>(USDT)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Switcher",
  mounted() {},
  methods: {
    openClose() {
      let change = document.getElementById("on");

      if (this.open) {
        this.open = false;
        change.style.top = "80px";
      } else {
        this.open = true;
        change.style.top = "0px";
      }
    },
  },
  components: {},
  props: {},
  data() {
    return {
      open: true,
    };
  },
};
</script>
<style scoped>
.switcher {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  box-shadow: 0px 0px 5px 3px rgb(38 50 56 / 15%);
  border-radius: 11px;
  border: 1px solid #ffffff;
  color: #fafafa;
  display: flex;
  width: 50px;
  height: 160px;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 15px;
}
.close,
.open {
  width: 50px;
  transition: 0.3s ease;
  z-index: 995;
  cursor: pointer;
}
.open {
  color: #fafafa;
}
.not-open {
  width: 50px;
}
.on {
  z-index: 994;
  box-sizing: border-box;
  border-radius: 11px;
  width: 48px;
  height: 49%;
  top: 0;
  transition: 0.3s ease;
  position: absolute;
}
.off {
  right: 0px;
  top: 50px;
}
.closed {
  width: 50px;
  color: #fafafa;
}

.on {
  background: #25505d;
}
</style>