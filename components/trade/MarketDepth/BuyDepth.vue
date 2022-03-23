<template>
  <tbody>
    <div class="head">خریداران</div>

    <tr class="table-header">
      <th>قیمت</th>
      <th>مقدار</th>
      <th class="desktop">
        مجموع <a style="font-size: 10px">({{ to }})</a>
      </th>
    </tr>
    <tr
      v-for="(tableContent, index) in tableContents"
      :key="-(index + 1)"
      class="table-row"
    >
      <td style="color: var(--buy)">{{ tableContent.totalprice }}</td>
      <td>{{ tableContent.unitprice }}</td>
      <td class="desktop">{{ tableContent.amount }}</td>
      <span
        :style="{ width: tableContent.percent + '%' }"
        class="percent1"
      ></span>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "BuyDepth",
  props: ["base", "to", "tableContents"],
  data() {
    return {};
  },
  created() {
    for (let i = 0; i < this.tableContents.length; i++) {
      this.tableContents[i].unitprice =
        this.tableContents[i].unitprice.toLocaleString("en-US");
      this.tableContents[i].totalprice =
        this.tableContents[i].totalprice.toLocaleString("en-US");
    }
  },
};
</script>

<style scoped>
.box1 {
  font-size: 12px;
  height: 100%;
}

a {
  color: white;
}

/*.dark a{*/
/*    color: white;*/
/*}*/

table {
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 5px;
  border-collapse: collapse;
}

.table-header {
  position: relative;
  align-items: center;
  height: 30px;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #fdfdfd;
  font-size: 14px;
  line-height: 22px;
  padding: 0 7px;
  font-weight: normal;
}

/*.table-header::after {*/
/*    content: '';*/
/*    position: absolute;*/
/*    background-color: #000000;*/
/*    opacity: 0.05;*/
/*    left: 50%;*/
/*    bottom: 0;*/
/*    transform: translate(-50%, 0);*/
/*    height: 2px;*/
/*    width: calc(100%);*/
/*}*/

.table-row {
  /*position: relative;*/
  transform: scale(1);
  -ms-transform: scale(1);
  -moz-transform: scale(1);
  -webkit-transform: scale(1);
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #fdfdfd;
  font-size: 12px;
}

.table-header th:first-of-type,
.table-row td:first-of-type {
  text-align: right;
  padding-right: 10px;
}

.table-header th:last-of-type,
.table-row td:last-of-type {
  text-align: left;
  padding-left: 10px;
}

.table-row td {
  /*color: black;*/
  opacity: 0.7;
  align-items: center;
  height: 20px;
  text-align: center;
  padding: 0 7px;
  cursor: default;
}

.realprice {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 14px;
  display: flex;
  height: 25px;
  justify-content: center;
  align-items: center;
  color: var(--buy);
  background-color: rgba(255, 255, 255, 0.05);
}

.realprice svg {
  fill: var(--buy);
  transform: rotate(90deg);
}

.percent1 {
  position: absolute;
  background-color: #03926c;
  right: 0;
  opacity: 0.1;
  top: 50%;
  transform: translatey(-50%);
  bottom: 0;
  width: 0;
  height: 100%;
}

.percent2 {
  position: absolute;
  background-color: var(--buy);
  right: 0;
  opacity: 0.1;
  top: 50%;
  transform: translatey(-50%);
  bottom: 0;
  width: 0;
  height: 16px;
}

.active {
  color: var(--buy);
}

.active svg {
  fill: var(--buy);
  transform: rotate(-90deg);
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: #03926c;
  border-radius: 3px 3px 0px 0px;
  width: 100%;
  color: #fdfdfd;
  height: 35px;
}

tbody {
  width: 50%;
}

@media screen and (max-width: 768px) {
  tbody {
    margin-top: 0px;
    width: 50%;
    overflow-x: scroll;
  }

  .table-header th:first-of-type,
  .table-row td:first-of-type {
    margin-left: 10px;
    font-size: 12px;
  }

  .table-header th:last-of-type,
  .table-row td:last-of-type {
    font-size: 12px;
    margin-right: 10px;
  }
  .table-header {
    font-size: 12px;
  }
  .desktop {
    display: none;
  }
  .head {
    font-size: 14px;
  }
}
</style>