<template>
  <transition name="modal-fade">
    <div id="modal" class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="WithdrawModal"
        aria-describedby="WithdrawModal"
      >
        <img
          src="../../assets/icons/close.svg"
          class="btn-close"
          @click="close"
          aria-label="Close modal"
          alt=""
        />
        <header class="modal-header">برداشت تومانی</header>
        <section class="modal-body" style="direction: rtl">
          <form @submit.prevent="withdraw">
            <div class="row no-gutters input">
              <label class="col-md-3" for="amount">مبلغ برداشت (تومان)</label>
              <input
                class="col-md-5"
                type="text"
                @input="amount = $toLocal(amount)"
                v-model="amount"
                name="amount"
                id="amount"
              />
              <div class="row col-md-5 col-xs-12 offset-md-3 no-gutters">
                <a class="col-7">موجودی قابل برداشت:</a>
                <div class="col-5 lefttext">
                  <a @click.prevent="amount = cash">{{
                    $toLocal($S2N(cash).toFixed(0))
                  }}</a>
                  (تومان)
                </div>
              </div>
            </div>
            <div class="row no-gutters input">
              <label class="col-md-3" for="walletaddress"
                >آدرس کیف‌پول مقصد</label
              >
              <div class="select col-md-9">
                <select
                  class="col-12"
                  v-model="walletAddress"
                  id="walletaddress"
                  :style="{ color: [walletAddress ? '' : '#00544f90'] }"
                >
                  <option value="" disabled selected>شماره کارت مقصد</option>
                  <option
                    v-for="(Bank, index) in Banks"
                    :key="index"
                    :value="Bank.cardNumber"
                  >
                    {{ Bank.cardNumber }}
                  </option>
                </select>
                <a>&nbsp;</a>
              </div>
              <div
                class="col-md-9 offset-md-3 link"
                @click="$router.push('/useraccount')"
              >
                افزودن حساب جدید
              </div>
            </div>
            <button
              :disabled="
                !amount ||
                !walletAddress ||
                $S2N(amount) > $S2N(cash) ||
                $S2N(amount) < 5000
              "
              hidden
              type="submit"
            />
          </form>
        </section>
        <footer class="modal-btn">
          <button
            :disabled="disabled"
            type="button"
            class="normal-btn"
            @click="withdraw"
            aria-label="Close modal"
          >
            برداشت از حساب
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "WithdrawModalRial",
  props: {
    relatedCoin: {
      default: "",
    },
    cash: {
      default: 0,
    },
  },
  data() {
    return {
      amount: "",
      Banks: [],
      walletAddress: "",
    };
  },
  computed: {
    disabled() {
      return (
        !this.amount ||
        !this.walletAddress ||
        this.$S2N(this.amount) > this.$S2N(this.cash) ||
        this.amount == 0 ||
        Number(this.$S2N(this.amount)) < 5000
      );
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async getData() {
      this.state.loading = true;
      const res = await this.$axios.get("/users/verified-bank-accounts");
      this.Banks = res.content;
    },
    async withdraw() {
      this.state.loading = true;

      const transaction = {
        amount: this.$S2N(this.amount),
        destinationWalletAddress: this.walletAddress,
        relatedCoin: "TOMAN",
      };

      const res = await this.$axios.post("/users/send-code");
      if (res.message === "code sent successfully.") {
        this.$emit("two-fa", [
          transaction,
          res.baseDTO.towStepAuthenticationType,
        ]);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--modal-backdrop);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.modal {
  position: relative;
  background: var(--box-background-light);
  border-radius: 5px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  padding: 20px 35px;
  color: var(--font-light);
}

.modal-header {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
}

.btn-close {
  position: absolute;
  left: 15px;
  top: 15px;
  height: 22px;
  width: 22px;
  transition: 0.5s;
  cursor: pointer;
  z-index: 5;
}

.btn-close:hover {
  transform: rotate(180deg);
}

.modal-body {
  position: relative;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

form {
  font-family: VistaDev, sans-serif;
  margin: 20px 0;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
}

.input {
  margin-bottom: 20px;
  justify-content: flex-start;
}

label {
  font-size: 16px;
  margin-top: auto;
  margin-bottom: auto;
}

input {
  border: solid rgba(54, 52, 53, 0.15) 0.5px;
  height: 39px;
  border-radius: 5px;
  padding: 2px 5px !important;
  color: var(--font-light);
}

input:hover {
  border: solid rgba(54, 52, 53, 0.3) 0.5px;
}

input:focus {
  border: solid rgba(54, 52, 53, 0.5) 0.5px;
}

.modal-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.normal-btn {
  color: var(--font-dark);
  max-width: 150px;
  margin: 0;
}

.lefttext {
  text-align: left;
  direction: ltr;
}

.lefttext a {
  text-decoration: underline;
  cursor: pointer;
}
.link {
  text-decoration: underline;
  cursor: pointer;
}
select {
  border: solid rgba(54, 52, 53, 0.15) 0.5px;
  height: 39px;
  border-radius: 5px;
  padding: 2px 5px !important;
  font-size: 16px;
}

.select {
  overflow: hidden;
  position: relative;
}

.select a {
  position: absolute;
  top: 50%;
  left: 15px;
  width: 11px;
  height: 11px;
  border-left: black solid 4px;
  border-radius: 1px;
  border-bottom: black solid 4px;
  transform: translate(0, -65%) rotate(-45deg);
  transition: 0.25s;
}
</style>
