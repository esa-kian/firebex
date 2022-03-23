<template>
  <div class="wallet">
    <div class="header">
      <div class="title">کیف پول ها</div>
      <div class="total">مجموع دارایی: ۲۳۴,۳۴۵,۸۵۹</div>
    </div>
    <div class="wallets">
      <div class="header">
        <div class="name">نام ارز</div>
        <div class="balance">موجودی</div>
        <div class="actions">عملیات</div>
      </div>
      <div class="body">
        <div class="row">
          <div class="currency">
            <img
              src="../../assets/icons/TOMAN.png"
              width="33"
              height="33"
              alt=""
            />
            <div class="name">تومان</div>
          </div>
          <div class="value">{{ rial }} تومان</div>
          <div class="btns">
            <button @click="deposit_rial = true" class="deposit">واریز</button>
            <button @click="withdraw_rial = true" class="withdraw">
              برداشت
            </button>
          </div>
        </div>
        <div class="row">
          <div class="currency">
            <img
              src="../../assets/icons/BITCOIN.png"
              width="33"
              height="33"
              alt=""
            />

            <div class="name">بیت کوین</div>
          </div>
          <div class="value">{{ bitcoin }} تومان</div>
          <div class="btns">
            <button @click="depositCryptoModal('بیت کوین')" class="deposit">
              واریز
            </button>
            <button @click="withdrawCryptoModal('بیت کوین')" class="withdraw">
              برداشت
            </button>
            <button class="trade">معامله</button>
          </div>
        </div>
        <div class="row">
          <div class="currency">
            <img
              src="../../assets/icons/ETHEREUM.png"
              width="33"
              height="33"
              alt=""
            />

            <div class="name">اتریوم</div>
          </div>
          <div class="value">{{ ether }} تومان</div>
          <div class="btns">
            <button @click="depositCryptoModal('اتریوم')" class="deposit">
              واریز
            </button>
            <button @click="withdrawCryptoModal('اتریوم')" class="withdraw">
              برداشت
            </button>
            <button class="trade">معامله</button>
          </div>
        </div>
        <div class="row">
          <div class="currency">
            <img
              src="../../assets/icons/RIPPLE.png"
              width="33"
              height="33"
              alt=""
            />

            <div class="name">ریپل</div>
          </div>
          <div class="value">{{ ripple }} تومان</div>
          <div class="btns">
            <button @click="depositCryptoModal('ریپل')" class="deposit">
              واریز
            </button>
            <button @click="withdrawCryptoModal('ریپل')" class="withdraw">
              برداشت
            </button>
            <button class="trade">معامله</button>
          </div>
        </div>
        <div class="row">
          <div class="currency">
            <img
              src="../../assets/icons/LITE_COIN.png"
              width="33"
              height="33"
              alt=""
            />

            <div class="name">لایت کوین</div>
          </div>
          <div class="value">{{ lite }} تومان</div>
          <div class="btns">
            <button @click="depositCryptoModal('لایت کوین')" class="deposit">
              واریز
            </button>
            <button @click="withdrawCryptoModal('لایت کوین')" class="withdraw">
              برداشت
            </button>
            <button class="trade">معامله</button>
          </div>
        </div>
        <div class="row">
          <div class="currency">
            <img
              src="../../assets/icons/DASH.png"
              width="33"
              height="33"
              alt=""
            />

            <div class="name">دش کوین</div>
          </div>
          <div class="value">{{ dash }} تومان</div>
          <div class="btns">
            <button @click="depositCryptoModal('دش کوین')" class="deposit">
              واریز
            </button>
            <button @click="withdrawCryptoModal('دش کوین')" class="withdraw">
              برداشت
            </button>
            <button class="trade">معامله</button>
          </div>
        </div>
        <div class="row">
          <div class="currency">
            <img
              src="../../assets/icons/TETHER.png"
              width="33"
              height="33"
              alt=""
            />

            <div class="name">تتر</div>
          </div>
          <div class="value">{{ tether }} تومان</div>
          <div class="btns">
            <button @click="depositCryptoModal('تتر')" class="deposit">
              واریز
            </button>
            <button @click="withdrawCryptoModal('تتر')" class="withdraw">
              برداشت
            </button>
            <button class="trade">معامله</button>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <rial-deposit-modal
        v-if="deposit_rial"
        @deposit_rial="depositRial"
      ></rial-deposit-modal>
    </transition>
    <transition name="fade">
      <rial-withdraw-modal
        v-if="withdraw_rial"
        @withdraw_rial="withdrawRial"
      ></rial-withdraw-modal>
    </transition>
    <transition name="fade">
      <crypto-deposit-modal
        v-if="deposit_crypto"
        @deposit_crypto="depositCrypto"
        :crypto_name="cryptoname"
      ></crypto-deposit-modal>
    </transition>

    <transition name="fade">
      <crypto-withdraw-modal
        v-if="withdraw_crypto"
        @withdraw_crypto="withdrawCrypto"
        :crypto_name="cryptoname"
      ></crypto-withdraw-modal>
    </transition>
  </div>
</template>
<script>
import RialDepositModal from "../../components/dashboard/RialDepositModal.vue";
import RialWithdrawModal from "../../components/dashboard/RialWithdrawModal.vue";
import CryptoWithdrawModal from "../../components/dashboard/CryptoWithdrawModal.vue";
import CryptoDepositModal from "../../components/dashboard/CryptoDepositModal.vue";

export default {
  components: {
    RialWithdrawModal,
    RialDepositModal,
    CryptoWithdrawModal,
    CryptoDepositModal,
  },
  methods: {
    depositRial(val) {
      this.deposit_rial = val;
    },
    withdrawRial(val) {
      this.withdraw_rial = val;
    },
    depositCrypto(val) {
      this.deposit_crypto = val;
    },
    withdrawCrypto(val) {
      this.withdraw_crypto = val;
    },
    depositCryptoModal(val) {
      this.deposit_crypto = true;
      this.cryptoname = val;
    },
    withdrawCryptoModal(val) {
      this.withdraw_crypto = true;
      this.cryptoname = val;
    },
  },
  data() {
    return {
      deposit_rial: false,
      withdraw_rial: false,
      deposit_crypto: false,
      withdraw_crypto: false,
      cryptoname: "",
      rial: "۲۳۴,۳۴۵,۸۵۹",
      bitcoin: "0",
      ether: "0",
      ripple: "0",
      lite: "0",
      dash: "0",
      tether: "0",
    };
  },
};
</script>
<style scoped>
.wallet {
  background-color: #efe2f8;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 160px 10px 20px;
}
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.wallets {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
}
.wallets .header {
  background-color: #133453;
  border-radius: 8px 8px 0px 0px;
  color: #efe2f8;
  height: 61px;
  padding: 10px;
}
.wallets .header div {
  text-align: right;
  width: 20%;
}
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #f2f1f1;
  box-shadow: 0px 8px 18px rgba(163, 163, 163, 0.25);
  border-radius: 8px;
  height: 61px;
  margin-top: 15px;
  opacity: 0.8;
  transition: 0.3s ease;
}
.row:hover {
  opacity: 1;
  box-shadow: 0px 8px 18px rgba(163, 163, 163, 0.452);
  transition: 0.3s ease;
  transform: scale(2px);
}
.currency {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
}
.value {
  display: flex;
  justify-content: flex-start;
  width: 20%;
}
.btns {
  display: flex;
  width: 40%;
  justify-content: flex-start;
}
button {
  width: 28%;
  height: 34px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  padding: 0 10px;
  color: #e6e6e6;
}
button.deposit {
  background-color: #28b910;
}
button.withdraw {
  background-color: #f05b47;
}
button.trade {
  background-color: #133453;
}
img {
  margin: 0 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 768px) {
  .wallet {
    padding: 15px 20px 60px 20px;
    gap: 10px;
  }
  .btns {
    width: auto;
  }
  button {
    width: 80px;
  }
  .row {
    height: 100px;
  }
  .value {
    width: auto;
    padding: 0 5px;
  }
}
</style>