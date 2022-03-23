<template>
  <div class="modal">
    <div class="content">
      <div class="header">
        <div @click="close" class="close">بستن</div>
        <div class="title">واریز ریال</div>
      </div>
      <div class="body">
        <div class="amount">
          <label for="">مبلغ</label>
          <div class="input">
            <input class="amount" type="text" name="" id="" />
            <div class="label">ریال</div>
          </div>
        </div>
        <div class="gates">
          <div class="gate">
            <input type="radio" class="sb24" name="" id="" />
          </div>
          <div class="gate">
            <input type="radio" class="mellat" name="" id="" />
          </div>
          <div class="gate">
            <input type="radio" class="parsian" name="" id="" />
          </div>
        </div>
      </div>
      <div class="footer">
        <button @click="close">پرداخت</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit("deposit_rial", false);
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.modal {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.3s ease;
  justify-content: center;
  align-items: center;
  background-color: #13345399;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 348px;
  height: 395px;
  background: #efe2f8;
  box-shadow: 0px 3px 11px rgba(138, 138, 138, 0.41);
  border-radius: 13px;
}
.header {
  background: #28b910;
  border-radius: 13px 13px 0px 0px;
  width: 100%;
  color: #f0f0f0;
}
.header .close {
  display: flex;
  margin: 10px 20px 0 0;
  padding-right: 20px;
  background-image: url("../../assets/dashboard/close.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 15px;
  cursor: pointer;
}
.header .title {
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 17px;
}
.body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.amount {
  width: 100%;
}
div.amount label {
  display: flex;
}
.input {
  display: flex;
  position: relative;
  height: 38px;
}
input.amount {
  border: 1px solid #bfb6b6;
  border-radius: 3px;
}
.label {
  position: absolute;
  left: 0;
  background: #c4c4c4;
  border-radius: 3px 0px 0px 3px;
  height: 100%;
  width: 20%;
}
.gates {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.gate {
  border-radius: 8px;
  width: 87px;
  height: 88px;
  margin-top: 20px;
}
.gate input {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  background-size: contain;
}
.gate input.sb24 {
  background-image: url("../../assets/dashboard/sb24.png");
}

.gate input.mellat {
  background-image: url("../../assets/dashboard/bpm.png");
}
.gate input.parsian {
  background-image: url("../../assets/dashboard/parsian.png");
}
button {
  background: #28b910;
  border-radius: 5px;
  cursor: pointer;
  width: 164px;
  height: 34px;
  color: #e6e6e6;
  margin-bottom: 20px;
}
</style>