<template>
    <div class="box2">
        <div class="table">
            <div class="table-header">
                <div>وضعیت</div>
                <div>زمان</div>
                <div>آی‌پی</div>
                <div>مرورگر</div>
                <div>پلتفرم</div>
                <div>نوع دستگاه</div>
            </div>
            <div class="table-contents">
                <div v-for="(tableContent,index) in tableContents" :key="index" class="table-row">
                    <a :style="{color:[tableContent.success ? 'green':'red']}">{{tableContent.success}}</a>
                    <a>{{tableContent.time}}</a>
                    <a>{{tableContent.ip}}</a>
                    <a>{{tableContent.browser}}</a>
                    <a>{{tableContent.platform}}</a>
                    <a>{{tableContent.set}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "divtable",
        data() {
            return {
            }
        },

    }
</script>

<style scoped>

    .box2 {
        font-family: VistaDev;
        font-size: 12px;
        height: 392px;
        display: block;
        direction: ltr;
        border-radius: 5px;
        align-items: center;
        background-color: white;
        width: 100%;
        overflow: auto;
        scrollbar-color: #eeeeee transparent;
        scrollbar-width: thin;
    }

    .table {
        direction: ltr;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 5px;
        min-width: 700px;
        width: 100%;
    }

    .table-header {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 0;
        background-color: white;
        width: 100%;
        text-align: center;
        z-index: 1;
    }

    .table-header::after {
        content: '';
        position: absolute;
        background-color: #000000;
        opacity: 0.05;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: -1px;
        height: 2px;
        width: calc(100% - 50px);
    }

    .table-header div {
        min-width: 120px;
    }

    .table-contents {
        height: 392px;
        direction: ltr;
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 100%;
        z-index: 0;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 2.5px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 2.5px;
        background-color: #00000010;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #00000050;
    }

    .table-row {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 0;
        width: 100%;
        text-align: center;
        cursor: default;
    }

    .table-row:hover {
        background-color: #F8B20030;
    }

    .table-row::after {
        content: '';
        position: absolute;
        background-color: #000000;
        opacity: 0.05;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: -1px;
        height: 2px;
        width: calc(100% - 50px);
    }

    .table-row a {
        min-width: 120px;
    }


</style>