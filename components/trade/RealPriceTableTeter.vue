<template>
    <div class="box2">
        <table>
            <over-loading v-if="loading"/>
            <tr class="table-header">
                <th>بازار</th>
                <th>قیمت</th>
                <th>تغییرات</th>
            </tr>
            <tr v-if="!loading && !tableContents.length">
                <td >
                    <p style="width:100%;text-align:center;color:red">در حال حاضر بازار فعالی وجود ندارد.</p>
                </td>
            </tr>            
            <tr v-for="tableContent in tableContents" :key="tableContent.price" class="table-row" 
            @click="goto($coin2Snake[tableContent.sourceCoinSymbol])">
               <td>{{$coinLabel[tableContent.sourceCoinSymbol]}}</td>
                <td :style="{color:[(tableContent.price24hrChangePercent>0)?'var(--main-green)':'var(--main-red)']}">
                    {{$toLocal(Number(tableContent.price).toFixed(0))}}
                </td>
                <td style="direction: ltr"
                    :style="{color:[(tableContent.price24hrChangePercent>0)?'var(--main-green)':'var(--main-red)']}">
                    {{Number(tableContent.price24hrChangePercent).toFixed(2)}}٪
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import OverLoading from "@/components/Tools/over-loading";
    export default {
        name: "RealPriceTableTeter",
        props:['toman'],
        data() {
            return {
                tableContents:[],
                loading:false,
                alive:false
            }
        },
        components: {OverLoading},
        methods:{
            async getTetherRealPrice(){
                const res = await this.$axios.get('/coins/price/usdt')
                // console.log(res);
                this.tableContents = res
            },
            goto(e){
                this.tableContents[e].sourceCoinSymbol = this.tableContents[e].sourceCoinSymbol.replace(/-/ig, '_')
                this.$router.push(`/trade/TETHER/${this.$unitToCoin[this.tableContents[e].sourceCoinSymbol]}`)
            },
            async loop() {
                // this.state.loading = true
                this.loading = true

                while (this.alive) {
                    this.loopIsAlive = true
                    await this.getTetherRealPrice()
                    this.loading = false
                    await this.$sleep(5000)
                }
                this.loopIsAlive = false
            },
        },
        async mounted() {
            this.alive = true
            this.loading = true
            if (this.state.loop) {
                this.loop()
            } else {
                await this.getTetherRealPrice()
                this.loading = false
            }
        },
        beforeDestroy() {
            this.alive = false
        }

    }
</script>

<style scoped>

    .box2 {
        font-family: VistaDev,sans-serif;
        font-size: 12px;
        max-height: 392px;
        display: block;
        direction: rtl;
        background-color: var(--box-background-light);
        width: 100%;
        z-index: 100;
    }
    .dark{
        background-color: var(--box-background-dark);
    }

    table {
        position: relative;
        background-color: var(--box-background-light);
        width: 100%;
        border-collapse: collapse;
    }
    .dark table{
        background-color: var(--box-background-dark);
    }

    table th {
        height: 30px;
    }

    tr th:first-child , td:first-child{
        text-align: right;
    }
    tr th:last-child , td:last-child{
        direction: ltr;
        text-align: left;
    }

    .table-header{
        position: relative;
        top: 0;
        background-color: var(--box-background-light);
        text-align: center;
        border-bottom: solid rgba(0,0,0,0.1) 2px;
    }
    .dark .table-header{
        background-color: var(--box-background-dark);
    }

    table td {
        height: 30px;

    }

    .table-row {
        position: relative;
        text-align: center;
        cursor: pointer;
        border-bottom: solid var(--border-light) 1px;
    }

    .table-row:last-of-type {
        border-bottom: 0
    }

    .table-row:hover {
        background-color: var(--hover-light);
    }



</style>