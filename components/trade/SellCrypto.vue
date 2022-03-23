<template>
    <div class="main">
        <form @input="calculate">
            <div class="row no-gutters">
                <label
                        class="col-5 col-sm-12 col-md-5"
                        :for="'unitprice'+id">
                    قیمت واحد
                    ({{$coinLabel[$route.params.tradeTo]}})
                </label>
                <input
                        @input="unitPrice = $toLocal(unitPrice)"
                        :style="{borderColor:(danger?'red':'')}"
                        class="col-7 col-sm-12 col-md-7"
                        type="text"
                        v-model="unitPrice"
                        :id="'unitprice'+id"
                        :readonly="!limit"
                        :placeholder="!limit? 'بازار' : ''"
                >
            </div>
            <div class="row no-gutters">
                <label
                        class="col-5 col-sm-12 col-md-5"
                        :for="'amount'+id">
                    مقدار
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
                <label class="col-5 col-sm-12 col-md-5" :for="'totalprice'+id">قیمت کل
                    ({{$coinLabel[$route.params.tradeTo]}})</label>
                <input class="col-7 col-sm-12 col-md-7" type="text" v-model="totalPrice" :id="'totalprice'+id"
                       readonly :placeholder="!limit? 'بازار' : ''">
                <over-loading v-if="calculating" style="margin:0"/>
            </div>
            <div v-if="limit" class="row no-gutters">
                <label class="col-5 col-sm-12 col-md-5">تاریخ انقضا</label>
                <date-picker id="exp" type="datetime" v-model="eDate"
                             color="#efb90a"
                             :format="$dateFormat['en']"
                             :display-format="$dateFormat['faDateTime']"
                             :min="now"
                             clearable
                             class="col-7 col-sm-12 col-md-7 m-0"/>
            </div>
            <div class="footer">
                <a>موجودی</a>
                <a class="link" @click="putcash(decimal,1)">{{$toLocal(cash.toFixed(decimal))}}
                    {{$coinUnit[$route.params.tradeFrom]}}</a>
            </div>
            <div class="footer" v-if="limit">
                <a style="text-align: right">بالا ترین پیشنهاد خرید</a>
                <a style="text-align: left" class="link" @click="setMin">{{$toLocal(state.shopInfo.maxBuy)}}
                    {{$coinUnit[$route.params.tradeTo]}}</a>
            </div>
            <div class="footer">
                <a>میزان کارمزد فعلی</a>
                <a>٪ {{wage}}</a>
            </div>
            <button
                    v-if="state.userInfo.authorized || state.userInfo.supervisor"
                    @click.prevent="showmodal"
                    class="btn"
                    :disabled="readonly"
            >
                فروش {{$coinLabel[$route.params.tradeFrom]}}
            </button>
            <button
                    @click.prevent=""
                    class="btn"
                    v-else-if="state.userInfo.pending"
            >
                حساب تایید نشده
            </button>
            <button
                    @click.prevent="$router.push('/useraccount')"
                    class="btn"
                    v-else
            >
                تکمیل حساب
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

<style lang="scss" scoped>
    .main {
        font-family: VistaDev, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 5px;
        border: var(--border-light) solid 1px;
        padding-top: 10px;
    }

    .dark .main {
        border: var(--border-dark) solid 2px;
    }

    form {
        width: 100%;
    }

    form div:not(.btn) {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 20px;
    }

    label {
        text-align: right;
    }

    input {
        font-family: VistaDev, sans-serif;
        border: solid rgba(54, 52, 53, 0.15) 0.5px;
        height: 30px;
        border-radius: 10px;
        padding: 0 5px !important;
        text-align: center;
        color: var(--font-light);
    }

    .dark input {
        border-color: rgba(255, 255, 255, 0.3);
        color: var(--font-dark);
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    input:hover {
        border: solid rgba(54, 52, 53, 0.3) 0.5px;
    }

    .dark input:hover {
        border: solid rgba(255, 255, 255, 0.6) 0.5px;
    }

    input:focus {
        border: solid rgba(54, 52, 53, 0.5) 0.5px;
    }

    .dark input:focus {
        border: solid rgba(255, 255, 255, 0.8) 0.5px;
    }

    input:read-only {
        background-color: rgba(0, 0, 0, 0.1);
        border: none;
    }

    .dark input:read-only {
        background-color: rgba(255, 255, 255, 0.3);
        border: none;
    }

    .percent-btn {
        padding: 0;
    }

    .percent-btn label {
        font-family: VistaDev, sans-serif;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        background-color: transparent;
        border: solid 1px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 100%;
        height: 30px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .dark .percent-btn label {
        border-color: rgba(255, 255, 255, 0.3);;
    }

    .percent-btn label:hover {
        border: solid 1px #36343570
    }

    .dark .percent-btn label:hover {
        border-color: rgba(255, 255, 255, 0.5);
    }

    input[type=radio] {
        display: none;
    }

    input:checked ~ label {
        border: solid 1px #36343570
    }

    .link {
        text-decoration: underline;
    }

    .footer {
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    .btn {
        font-family: VistaDev, sans-serif;
        font-size: 14px;
        background-color: var(--main-red);
        height: 40px;
        width: 100%;
        border: none;
        border-bottom-left-radius: 2.5px;
        border-bottom-right-radius: 2.5px;
        color: var(--font-dark);
        cursor: pointer;
        &:disabled {
            opacity: 0.5;
            cursor: default;
        }
    }

    .dark a {
        color: var(--font-dark);
    }

</style>