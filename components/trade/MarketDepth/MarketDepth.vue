<template>
    <div class="box1">
        عمق بازار
        <!-- <over-loading v-if="loading" style="height:65%"/> -->
        <table class="table">
            <tr class="table-header">
                <th>مقدار</th>
                <th>قیمت واحد</th>
                <th>قیمت کل</th>
            </tr>

            <market-depth-table-rows :data="tableContentsSell" color="var(--main-red)"
                                     percent-color="var(--main-red-hover)"/>

            <tr class="realprice">
                <td colspan="3">
                    <p :style="{color: (state.shopInfo.change24>0 ? 'var(--main-green)' : state.shopInfo.change24<0? 'var(--main-red)':'')}">
                        <svg
                                :style="{
                            transform: 'rotate(' + (state.shopInfo.change24>0? '-90deg)' : '90deg)'),
                            fill:(state.shopInfo.change24>0 ? 'var(--main-green)' : state.shopInfo.change24<0? 'var(--main-red)':''),
                            height: state.shopInfo.change24===0 ? '0px' : '',
                            }"
                                id="Layer"
                                enable-background="new 0 0 64 64" viewBox="0 0 64 64"
                                width="16px" xmlns="http://www.w3.org/2000/svg">
                            <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342
                             14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069
                              2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759
                               1.172-2.828s-.416-2.073-1.207-2.862z"/>
                        </svg>
                        {{$toLocal(state.shopInfo.lastPrice) || 0}}
                    </p>
                </td>
            </tr>

            <market-depth-table-rows :data="tableContentsBuy" color="var(--main-green)"
                                     percent-color="var(--main-green-hover)"/>

        </table>
    </div>
</template>


<script>
    // import OverLoading from "@/components/Tools/over-loading";
    import MarketDepthTableRows from "@/components/trade/MarketDepth/MarketDepthTableRows";

    export default {
        name: "MarketDepth",
        components: {MarketDepthTableRows, 
        // OverLoading
        },
        data() {
            return {
                tableContentsSell: [],
                tableContentsBuy: [],
                loading: false,
                settings: {
                    suppressScrollX: true
                }
            }
        },
        methods: {
            async getMarketDepth() {
                const res = await this.$axios.get('/orders/order-book', {
                    params: {
                        marketType: this.$route.params.tradeFrom + '_' + this.$route.params.tradeTo
                    }
                })

                this.tableContentsSell = res.sellOrderBook.slice(0, 11)
                this.tableContentsBuy = res.buyOrderBook.slice(0, 11)
                this.state.shopInfo.minSell = res.sellOrderBook.length ? res.sellOrderBook[0].unitPrice : 0
                this.state.shopInfo.maxBuy = res.buyOrderBook.length ? res.buyOrderBook[0].unitPrice : 0

                this.loading = false
            },
            async loop() {
                this.state.loading = true
                this.loading = true

                while (this.alive) {
                    await this.getMarketDepth()
                    this.loading = false
                    await this.$sleep(5000)
                }
            }
        },
        mounted() {
            this.alive = true
            if (this.state.loop) {
                this.loop()
            } else {
                this.getMarketDepth()
            }
        },
        beforeDestroy() {
            this.alive = false
        },

    }
</script>

<style lang="scss" scoped>

    .box1 {
        font-family: IRANSans-Bold, sans-serif;
        flex-direction: column;
        font-size: 12px;
        display: flex;
        border-radius: 5px;
        align-items: center;
        height: 840px;
        padding-top: 10px;
        overflow-y: hidden;
    }

    .box1 a {
        font-family: VistaDev, sans-serif;
    }

    .table {
        width: 100%;
        font-family: VistaDev, sans-serif;
        align-items: center;
        border-radius: 5px;
        margin-top: 10px;
        color: var(--font-light);
        border-collapse: collapse;
        table-layout: fixed;

        p {
            margin: 0;
        }
    }

    .dark .table {
        color: var(--font-dark);
    }

    .table-header {
        height: 40px;
        width: 100%;
        text-align: center;
        padding: 0 10px;
        z-index: 1;
    }

    .table-header th:first-of-type, .table-row td:first-of-type {
        text-align: right;
        padding-right: 10px
    }

    .table-header th:last-of-type, .table-row td:last-of-type {
        text-align: left;
        padding-left: 10px
    }

    .realprice {
        font-size: 14px;
        height: 40px;
        border-bottom: solid 2px var(--main-color);
        border-top: solid 2px var(--main-color);

        svg {
            transition: 0.3s;
            position: absolute;
            right: -25px;
            top: 2px;
        }

        p {
            width: max-content;
            position: relative;
            margin: auto;
        }
    }

    .table-row div,
    .table-header div {
        min-width: 55px;
    }


</style>