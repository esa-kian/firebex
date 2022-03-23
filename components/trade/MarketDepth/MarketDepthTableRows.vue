<template>
    <tbody>
    <tr style="height: 40px" v-if="data.length === 0">
        <td colspan="3">
            <p style="color:red;text-align:center;width:100%">
                در حال حاضر اطلاعات فروشی وجود ندارد
            </p>
        </td>
    </tr>
    <tr v-else v-for="(tableContent,index) in data" :key="index+'sell'"
        class="table-row red-percent"
        :style="{
                textDecoration: tableContent.myOrder? 'underline' : '',
                backgroundImage: 'linear-gradient(90deg, transparent '+ (100 - tableContent.executedPercent) +'%'+', '+percentColor+' 0%)'
            }"
        :title="tableContent.myOrder ? 'این سفارش متعلق به شماست' : ''">
        <td>{{$toLocal(tableContent.volume - tableContent.executedAmount)}}</td>
        <td>{{$toLocal(tableContent.unitPrice)}}</td>
        <td :style="{color:color}">
            {{$toLocal(((tableContent.volume -
            tableContent.executedAmount)*tableContent.unitPrice).toFixed(0))}}
        </td>
    </tr>
    </tbody>
</template>

<script>
    export default {
        name: "MarketDepthTableRows",
        props:['data','percentColor','color'],
    }
</script>

<style scoped>

    .table-row {
        height: 30px;
        text-align: center;
        cursor: default;
        color: var(--font-light);

        > *:first-of-type {
            padding-right: 10px;
            text-align: right;
        }

        > *:last-of-type {
            padding-left: 10px;
            text-align: left;
        }

        &.red-percent {
            background-image: linear-gradient(90deg, var(--main-red-hover) 100%, transparent 0%);
            background-position: left;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }

    .dark .table-row {
        color: var(--font-dark);
    }

    .table-header th:first-of-type, .table-row td:first-of-type {
        text-align: right;
        padding-right: 10px
    }

    .table-header th:last-of-type, .table-row td:last-of-type {
        text-align: left;
        padding-left: 10px
    }

    .table-row:hover {
        background-color: var(--hover-light);
    }

    .table-row:last-of-type::after {
        content: none
    }

</style>