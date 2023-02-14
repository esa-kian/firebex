<template>
  <div class="history">
    <div class="trades">
      
      <trade-history></trade-history>
    </div>

    <div class="transactions">
      
      <div class="tabs">
        <div
          @click.prevent="switchTab"
          :class="[!active ? 'tab-content' : 'tab-content-active']"
        >
        </div>
        <div
          @click.prevent="switchTab"
          :class="[active ? 'tab-content' : 'tab-content-active']"
        >
        </div>
      </div>
      <div class="wallets">
        <table>
          <tr>
            <th>
              <select name="" id="">
               
              </select>
            </th>
            <th>
              <select class="type" name="" id="">
              
              </select>
            </th>
       
            <th>
              <select name="" id="">
              
              </select>
            </th>
         
          </tr>

          <tr v-for="transaction in transactions" :key="transaction.id">
            <td v-if="transaction.type == 'sell'" class="sell"></td>
            <td v-if="transaction.type == 'buy'" class="buy"></td>

            <td v-if="transaction.currency == 'bitcoin'">
              <div class="currency">
                <img
                  src="../../assets/icons/BITCOIN.png"
                  width="23"
                  height="23"
                  alt=""
                />
              </div>
            </td>
            <td v-if="transaction.currency == 'ether'">
              <div class="currency">
                <img
                  src="../../assets/icons/ETHEREUM.png"
                  width="23"
                  height="23"
                  alt=""
                />
                
              </div>
            </td>
            <td v-if="transaction.currency == 'tether'">
              <div class="currency">
                <img
                  src="../../assets/icons/TETHER.png"
                  width="23"
                  height="23"
                  alt=""
                />
                
              </div>
            </td>
            <td v-if="transaction.currency == 'dash'">
              <div class="currency">
                <img
                  src="../../assets/icons/DASH.png"
                  width="23"
                  height="23"
                  alt=""
                />
              </div>
            </td>
            <td v-if="transaction.currency == 'ripple'">
              <div class="currency">
                <img
                  src="../../assets/icons/RIPPLE.png"
                  width="23"
                  height="23"
                  alt=""
                />
                
              </div>
            </td>
            <td v-if="transaction.currency == 'litecoin'">
              <div class="currency">
                <img
                  src="../../assets/icons/LITE_COIN.png"
                  width="23"
                  height="23"
                  alt=""
                />
              </div>
            </td>

            <td>{{ transaction.value }}</td>
            <td>{{ transaction.address }}</td>
            <td>{{ transaction.date }}</td>

            <td v-if="transaction.status == 'pending'" class="buy">
            </td>
            <td>
              <img
                src="../../assets/dashboard/tracking.svg"
                width="23"
                height="23"
                alt=""
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import TradeHistory from "../../components/dashboard/TradeHistory.vue";

export default {
  components: {
    TradeHistory,
  },
  methods: {
    switchTab() {
      this.active = !this.active;
    },
  },
  data() {
    return {
      transactions: [
        {
          id: 1,
          fact_numb: 223134,
          type: "sell",
          convert_type: "exchange",
          currency: "bitcoin",
          value: 0.004,
          address: "a1075db55d416d3cf302fc80e9d5fbf5d48d",
        },
        {
          id: 2,
          fact_numb: 223136,
          type: "sell",
          convert_type: "exchange",
          currency: "ether",
          value: 0.05,
          address: "a1075db55d416d3cf302fc80e9d5fbf5d48d",
        },
        {
          id: 3,
          fact_numb: 223139,
          type: "buy",
          convert_type: "market",
          currency: "tether",
          value: 12,
          address: "a1075db55d416d3cf302fc80e9d5fbf5d48d",

        },
        {
          id: 4,
          fact_numb: 223131,
          type: "buy",
          convert_type: "market",
          currency: "dash",
          value: 14,
          address: "a1075db55d416d3cf302fc80e9d5fbf5d48d",

        },
        {
          id: 5,
          fact_numb: 223141,
          type: "sell",
          convert_type: "exchange",
          currency: "ripple",
          value: 34,
          address: "a1075db55d416d3cf302fc80e9d5fbf5d48d",

        },
        {
          id: 6,
          fact_numb: 223145,
          type: "buy",
          convert_type: "market",
          currency: "litecoin",
          value: 64,
          address: "a1075db55d416d3cf302fc80e9d5fbf5d48d",

        },
      ],
      active: true,
    };
  },
};
</script>
<style scoped>
.history {
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
.tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #95999a;
  text-align: center;
  width: 100%;
  max-width: 360px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.tab-content {
  height: 40px;
  font-family: IRANSans, sans-serif;
  width: 50%;
  cursor: pointer;
  text-align: center;
  box-shadow: inset 0px -3px 12px rgba(37, 80, 93, 0.18);
  color: #efe2f8;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-content-active {
  height: 40px;
  font-family: IRANSans-Bold, sans-serif;
  width: 50%;
  cursor: pointer;
  text-align: center;
  color: #efe2f8;
  background-color: #25505d;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
}
.trades {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.transactions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
  overflow-x: scroll;
}

.sell {
  color: #f05b47;
}
.buy {
  color: #28b910;
}
.pending {
  color: #9c880c;
}
select {
  color: #efe2f8;
  font-size: 16px;
  height: 100%;
  background-color: #25505d;
}
select.type {
  width: 100%;
}
img {
  margin: 0 0 0 4px;
}
.tracking {
  width: 3% !important;
}
table {
  border-collapse: collapse;
  overflow-x: scroll;
}
table th {
  background-color: #25505d;
  box-shadow: -5px 0px 12px rgba(104, 116, 120, 0.32);
  color: #efe2f8;
  height: 61px;
  padding: 10px;
}

table td {
  padding: 10px;
  background: #efefef;
  border-bottom: 1px solid #c0c0c0;
  transition: 0.3s ease;
  font-size: 12px;
}
select {
  border: 1px solid #fdfdfd;
  padding: 5px;
  border-radius: 4px;
  color: #fdfdfd;
  background-color: #25505d;
  padding-left: 30px;
  background-image: url("../../assets/icons/down.svg");
  background-position-x: 6px;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 20px;
  font-weight: bold;
  line-height: 30px;
}

.currency {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .history {
    padding: 15px 20px 60px 20px;
  }
}
</style>
