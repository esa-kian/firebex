<template>
  <div class="wallets">
    <table>
      <tr>
        <th>شماره فاکتور</th>
        <th>
          <select name="" id="">
            <option value="">نوع</option>
            <option value="">خرید</option>
            <option value="">فروش</option>
          </select>
        </th>

        <th>
          <select name="" id="">
            <option value="">نوع تبدیل</option>
            <option value="">بازار</option>
            <option value="">صرافی</option>
          </select>
        </th>
        <th>
          <select class="type" name="" id="">
            <option value="">نوع ارز</option>
            <option value="">بیت کوین</option>
            <option value="">اتریوم</option>
            <option value="">ریپل</option>
            <option value="">لایت کوین</option>
            <option value="">دش کوین</option>
            <option value="">تتر</option>
          </select>
        </th>
        <th>تعداد</th>
        <th>قیمت واحد</th>
        <th>قیمت کل</th>
        <th>تاریخ</th>
        <th>وضعیت</th>
      </tr>

      <tr v-for="trade in trades" :key="trade.id">
        <td>{{ trade.fact_numb }}</td>

        <td class="sell" v-if="trade.type == 'sell'">فروش</td>
        <td class="buy" v-if="trade.type == 'buy'">خرید</td>

        <td v-if="trade.convert_type == 'market'">بازار</td>
        <td v-if="trade.convert_type == 'exchange'">صرافی</td>

        <td v-if="trade.currency == 'bitcoin'">
          <div class="currency">
            <img
              src="../../assets/icons/BITCOIN.png"
              width="23"
              height="23"
              alt=""
            />
            بیت کوین
          </div>
        </td>
        <td v-if="trade.currency == 'ether'">
          <div class="currency">
            <img
              src="../../assets/icons/ETHEREUM.png"
              width="23"
              height="23"
              alt=""
            />
            اتریوم
          </div>
        </td>
        <td v-if="trade.currency == 'tether'">
          <div class="currency">
            <img
              src="../../assets/icons/TETHER.png"
              width="23"
              height="23"
              alt=""
            />
            تتر
          </div>
        </td>
        <td v-if="trade.currency == 'dash'">
          <div class="currency">
            <img
              src="../../assets/icons/DASH.png"
              width="23"
              height="23"
              alt=""
            />
            دش کوین
          </div>
        </td>
        <td v-if="trade.currency == 'ripple'">
          <div class="currency">
            <img
              src="../../assets/icons/RIPPLE.png"
              width="23"
              height="23"
              alt=""
            />
            ریپل
          </div>
        </td>
        <td v-if="trade.currency == 'litecoin'">
          <div class="currency">
            <img
              src="../../assets/icons/LITE_COIN.png"
              width="23"
              height="23"
              alt=""
            />
            لایت کوین
          </div>
        </td>

        <td>{{ trade.value }}</td>

        <td>{{ trade.unit }}</td>

        <td>{{ trade.total }}</td>

        <td>{{ trade.date }}</td>

        <td v-if="trade.status == 'pending'" class="pending">در حال بررسی</td>

        <td v-else :class="[trade.type == 'sell' ? 'sell' : 'buy']">
          {{ trade.status }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      trades: [
        {
          id: 1,
          fact_numb: 223134,
          type: "sell",
          convert_type: "exchange",
          currency: "bitcoin",
          value: 0.004,
          unit: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          total: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          date: "۹۹/۹/۹ - ۲۳:۱۲",
          status: "۶۰٪",
        },
        {
          id: 2,
          fact_numb: 223136,
          type: "sell",
          convert_type: "exchange",
          currency: "ether",
          value: 0.05,
          unit: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          total: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          date: "۹۹/۹/۹ - ۲۳:۱۲",
          status: "pending",
        },
        {
          id: 3,
          fact_numb: 223139,
          type: "buy",
          convert_type: "market",
          currency: "tether",
          value: 12,
          unit: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          total: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          date: "۹۹/۹/۹ - ۲۳:۱۲",
          status: "pending",
        },
        {
          id: 4,
          fact_numb: 223131,
          type: "buy",
          convert_type: "market",
          currency: "dash",
          value: 14,
          unit: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          total: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          date: "۹۹/۹/۹ - ۲۳:۱۲",
          status: "۲۰٪",
        },
        {
          id: 5,
          fact_numb: 223141,
          type: "sell",
          convert_type: "exchange",
          currency: "ripple",
          value: 34,
          unit: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          total: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          date: "۹۹/۹/۹ - ۲۳:۱۲",
          status: "pending",
        },
        {
          id: 6,
          fact_numb: 223145,
          type: "buy",
          convert_type: "market",
          currency: "litecoin",
          value: 64,
          unit: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          total: "۱۲,۳۴۳,۵۷۶,۱۳۳",
          date: "۹۹/۹/۹ - ۲۳:۱۲",
          status: "۰٪",
        },
      ],
    };
  },
};
</script>

<style scoped>
.transactions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
  font-weight: normal;
  font-size: 16px;
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
  font-weight: normal;
  font-size: 0.9em;
  line-height: 30px;
}
select.type {
  width: 100%;
}
.currency {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

@media screen and(max-width: 768px) {
  .wallets {
    display: block;
    position: absolute;
  }
}
</style>
