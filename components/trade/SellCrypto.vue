<template>
    <div class="main">
        <form @input="calculate">
            <div class="row no-gutters">
               
                <input
                        @input="unitPrice = $toLocal(unitPrice)"
                        :style="{borderColor:(danger?'red':'')}"
                        class="col-7 col-sm-12 col-md-7"
                        type="text"
                        v-model="unitPrice"
                        :id="'unitprice'+id"
                        :readonly="!limit"
                        :placeholder="!limit? 'market' : ''"
                >
            </div>
            <div class="row no-gutters">
                <label
                        class="col-5 col-sm-12 col-md-5"
                        :for="'amount'+id">
                    
                    {{$coinLabel[$route.params.tradeFrom]}}
                </label>
                <input
                        class="col-7 col-sm-12 col-md-7"
                        @input="amount = $toLocal(amount)"
                        type="text"
                        v-model="amount"
                        :id="'amount'+id"
                >
                <over-loading v-if="getAmount" style="margin:0"/>
            </div>
            <div class="row no-gutters">
                <div class="col-7 offset-5 col-sm-12 offset-sm-0 col-md-7 offset-md-5 row mt-0 mb-0" id="btn">
                    <div class="percent-btn col m-0 ml-1" :class="'m'+([1,0.25].includes(n)?'l':'x')+'-1'"
                         v-for="n in [1,0.75,0.5,0.25]" :key="n">
                        <input @input="putcash(decimal,n)" type="radio"
                               :id="'dot-'+n+'-'+id" :value="n" v-model="percent">
                        <label :for="'dot-'+n+'-'+id" @click="limit ? putcash(decimal,n) : getAmountFromServer(decimal,n)">{{n*100}}٪</label>
                    </div>
                </div>
            </div>
            <div class="row no-gutters" style="position: relative">
              
                <input class="col-7 col-sm-12 col-md-7" type="text" v-model="totalPrice" :id="'totalprice'+id"
                       readonly :placeholder="!limit? 'market' : ''">
                <over-loading v-if="calculating" style="margin:0"/>
            </div>
            <div v-if="limit" class="row no-gutters">
                
                <date-picker id="exp" type="datetime" v-model="eDate"
                             color="#efb90a"
                             :format="$dateFormat['en']"
                             :display-format="$dateFormat['faDateTime']"
                             :min="now"
                             clearable
                             class="col-7 col-sm-12 col-md-7 m-0"/>
            </div>
            <div class="footer">
                
                <a class="link" @click="putcash(decimal,1)">{{$toLocal(cash.toFixed(decimal))}}
                    {{$coinUnit[$route.params.tradeFrom]}}</a>
            </div>
            <div class="footer" v-if="limit">
                
                <a style="text-align: left" class="link" @click="setMin">{{$toLocal(state.shopInfo.maxBuy)}}
                    {{$coinUnit[$route.params.tradeTo]}}</a>
            </div>
            <div class="footer">
                
                <a>٪ {{wage}}</a>
            </div>
            <button
                    v-if="state.userInfo.authorized || state.userInfo.supervisor"
                    @click.prevent="showmodal"
                    class="btn"
                    :disabled="readonly"
            >
                 {{$coinLabel[$route.params.tradeFrom]}}
            </button>
            <button
                    @click.prevent=""
                    class="btn"
                    v-else-if="state.userInfo.pending"
            >
                
            </button>
            <button
                    @click.prevent="$router.push('/useraccount')"
                    class="btn"
                    v-else
            >
            </button>
        </form>
        <shop-modal v-if="show" @close="show = false" :unitPrice="unitPrice" :totalPrice="totalPrice"
                    :amount="amount" type="SELL" :date="eDate" :limit="limit" @accept="show = false"/>
    </div>
</template>

<script>
    import '@/style/dateTimePicker.scss'
    import ShopModal from "@/components/trade/ShopModal";
    import OverLoading from "@/components/Tools/over-loading";

    export default {
        name: "SellCrypto",
        props: ['cash', 'wage', 'decimal', 'limit', 'id'],
        components: {OverLoading, ShopModal},
        data() {
            return {
                eDate: '',
                percent: '',
                unitPrice: '',
                amount: '',
                totalPrice: '',
                danger: false,
                danger1: false,
                danger2: false,
                show: false,
                value: '',
                checked: '',
                calculating: false,
                getAmount: false,
                amountTemp: '',
                count: 0
            }
        },
        watch: {
            'limit'() {
                this.eDate = ''
                this.percent = ''
                this.unitPrice = ''
                this.amount = ''
                this.totalPrice = ''
                this.danger = false
                this.danger1 = false
                this.danger2 = false
                this.show = false
                this.value = ''
                this.checked = ''
                this.calculating = false
                this.getAmount = false
            }
        },
        computed: {
            now() {
                return this.$jmoment().add(5, 'minute').format(this.$dateFormat['en'])
            },
            readonly(){
                return (this.limit && !this.$S2N(this.unitPrice)) || !this.$S2N(this.amount) || (this.value > 1 && !this.state.userInfo.supervisor) || this.load || (!this.limit && this.state.userInfo.supervisor)
            },
            load(){
                return this.calculating || this.getAmount
            }
        },
        methods: {
            putcash(a, p) {
                this.percent = p
                let e = this.percent * this.cash
                this.amount = this.$toLocal(e.toFixed(a))
                this.calculate()
            },
            setMin() {
                if (this.limit) {
                    this.unitPrice = this.$toLocal(this.state.shopInfo.maxBuy)
                    this.danger = false
                    this.calculate()
                }
            },
            localCalculate() {
                const up = this.$S2N(this.unitPrice)
                const a = this.$S2N(this.amount)
                this.totalPrice = this.$toLocal(up * a)
                this.value = this.$S2N(this.amount) / this.cash
            },
            async serverCalculate() {
                this.calculating = true
                const a = this.amount
                const temp = ++this.count
                await this.$sleep(500)

                if (a) {
                    while (a && a === this.amount && temp === this.count) {
                        try {
                            await this.getPriceFromServer()
                            this.calculating = false
                            await this.$sleep(5000)
                        } catch (e) {
                            this.calculating = false
                            break
                        }
                    }
                } else {
                    this.calculating = false
                }


            },
            async getPriceFromServer() {
                let amount = this.$S2N(this.amount);
                if (amount) {
                    const res = await this.$axios.get('/orders/market-buy-sell-whole', {
                        params: {
                            amount: amount,
                            marketType: this.$route.params.tradeFrom + '_' + this.$route.params.tradeTo,
                            orderType: 'MARKET_SELL'
                        }
                    })
                    let price = res.baseDTO.wholePrice;
                    this.totalPrice = this.$toLocal(price);
                    this.unitPrice = this.$toLocal((this.$S2N(this.totalPrice) / amount).toFixed(0));
                    this.value = this.$S2N(this.amount) / this.cash
                }
            },
            calculate() {
                if (this.limit && this.unitPrice && this.amount) {
                    this.localCalculate()
                } else if (!this.limit) {
                    this.serverCalculate()
                }
            },
            showmodal() {
                if (!(!this.limit || this.$S2N(this.unitPrice))) {
                    this.danger = true
                    this.danger1 = false
                    this.danger2 = false
                } else if (!this.$S2N(this.amount)) {
                    this.danger1 = true
                    this.danger2 = false
                    this.danger = false
                } else if (this.value > 1 && !this.state.userInfo.supervisor) {
                    this.danger2 = true
                    this.danger1 = false
                    this.danger = false
                } else {
                    this.show = true
                    this.danger = false
                    this.danger1 = false
                    this.danger2 = false
                }
            }
        }
    }
</script>

