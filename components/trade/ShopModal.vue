<template>
    <transition name="modal-fade">
        <div id="modal" class="modal-backdrop">
            <over-loading v-if="loading"/>
            <div class="modal"
                 role="dialog"
                 aria-labelledby="WithdrawModal"
                 aria-describedby="WithdrawModal">
                <img
                        src="../../assets/icons/close.svg"
                        class="btn-close"
                        @click="close"
                        aria-label="Close modal"
                        alt=""
                >
                <header class="modal-header">
                    submit
                </header>
                <section class="modal-body" style="direction: rtl">
                    <a class="row justify-content-center" style="font-size: 16px">
                        <a style="font-weight: bold; margin: 0 3px">{{typeLabel[type]}}</a>  
                    </a>
                    <div>
                        <a style="font-weight: bold;font-size: 14px">{{unitPrice}}</a>
                    </div>
                    <div>
                        <a style="font-weight: bold;font-size: 14px">{{amount}}</a>
                    </div>
                    <div>
                        <a style="font-weight: bold;font-size: 14px">{{totalPrice}}</a>
                    </div>
                    <div v-if="date">
                        <a style="font-weight: bold;font-size: 14px;direction: ltr">{{$G2J(date,'faDateTime')}}</a>
                    </div>
                </section>
                <footer class="modal-btn">
                    <button type="button" class="normal-btn" @click="accept">بله</button>
                    <button type="button" class="normal-btn" @click="close">خیر</button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
    import OverLoading from "@/components/Tools/over-loading";

 
    export default {
        name: "ShopModal",
        components: {OverLoading},
        props: ['totalPrice', 'unitPrice', 'amount', 'type', 'date', 'limit'],
        data() {
            return {
                twostepcode: '',
                walletaddress: '',
                typeLabel,
                loading: false,
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            async accept() {
                this.loading = true;
                let orderDetail;
                let marketType = this.$route.params.tradeFrom + '_' + this.$route.params.tradeTo

                if (this.limit) {
                    orderDetail = {
                        marketType: marketType,
                        amount: this.$S2N(this.amount),
                        orderType: `LIMITED_${this.type}`,
                        expiresAt: this.datetime || null,
                        unitPrice: this.$S2N(this.unitPrice),
                        wholePrice: this.$S2N(this.totalPrice),
                    }
                } else {
                    orderDetail = {
                        marketType: marketType,
                        amount: this.$S2N(this.amount),
                        orderType: `MARKET_${this.type}`,
                    }
                }
                try {
                    await this.$axios.post(`/orders/${this.type.toLowerCase()}`, orderDetail)
                    this.loading = false
                    this.$emit('close')
                } catch (error) {
                    this.loading = false
                    this.$emit('close')
                    if (error.response.data.message === "the amount of order is bigger than market liquidity") {
                    }
                }
            },
        },
    }
</script>

<style scoped>

    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--modal-backdrop);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
    }

    .modal {
        position: relative;
        background: var(--box-background-light);
        border-radius: 5px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 531px;
        padding: 20px 35px 30px;
        color: var(--font-light);
    }

    .modal-header {
        font-size: 20px;
        font-weight: bold;
        display: flex;
        justify-content: center;
    }

    .btn-close {
        position: absolute;
        left: 15px;
        top: 15px;
        height: 22px;
        width: 22px;
        transition: 0.5s;
        cursor: pointer;
        z-index: 5;
    }

    .btn-close:hover {
        transform: rotate(180deg);
    }

    .modal-body {
        margin-top: 20px;
        margin-bottom: 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-body div {
        width: 100%;
        max-width: 327px;
        border-bottom: 2px solid var(--border-light);
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-body div:last-of-type {
        border: none;
    }

    .modal-body div:first-of-type {
        margin-top: 15px;
    }

    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .25s ease;
    }


    .modal-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .normal-btn {
        color: var(--font-dark);
        max-width: 150px;
        height: 40px;
        margin: 0 20px 0;
        display: flex;
        padding-right: 20px;
        justify-content: center;
    }

    .normal-btn img {
        margin-left: 10px;
    }

</style>
