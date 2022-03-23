<template>
    <transition name="modal-fade">
        <div id="modal" class="modal-backdrop">
            <div class="modal"
                 role="dialog"
                 aria-labelledby="WithdrawModal"
                 aria-describedby="WithdrawModal">
                <img
                        src="../../assets/icons/close.svg"
                        class="btn-close"
                        @click="close"
                        aria-label="Close modal" alt="">
                <header class="modal-header">
                    واریز {{$coinLabel[relatedCoin]}}
                </header>
                <section class="modal-body" style="direction: rtl">
                    <div class="row justify-content-center" style="font-size: 16px">
                        آدرس کیف پول شما در زیر قابل مشاهده است. برای واریز ارزهای دیجیتال به این کیف، می‌توانید از این
                        آدرس استفاده کنید.
                    </div>
                    <div>{{address}}</div>
                    <img width="200px" style="margin-top: 20px" :src="'data:image/png;base64,'+qrCode" alt="">
                </section>
                <footer class="modal-btn">
                    <button
                            type="button"
                            class="normal-btn"
                            @click="Copy(address)">
                        <img src="../../assets/icons/copy.svg" alt="">
                        کپی آدرس
                    </button>
                    <button
                        type="button"
                        class="normal-btn"
                        @click.prevent="checkWallet">
                    بررسی واریز
                </button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "DepositModal",
         props: {
            relatedCoin: {
                default: ''
            }
        },
        data() {
            return {
                amount: '',
                address: '',
                qrCode: '',
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            Copy(e) {
                navigator.clipboard.writeText(e)
                alert('آدرس کپی شد')
            },
            async checkWallet(){
                this.state.loading = true
                const res = await this.$axios.get(`/wallets/check-confirmed-transaction?relatedCoin=${this.relatedCoin[0]}`)
                let text
                if(res.baseDTO.amount){
                    text = `مقدار ${this.$toLocal(res.baseDTO.amount) || 0} ${this.$coinLabel[this.relatedCoin[0]]} واریز شده و تایید ${res.baseDTO.transactionIsDone ? 'شده' : 'نشده'}`
                }else{
                    text = 'مقدار واریزی شناسایی نشد'
                }
                this.$error('',text,res.baseDTO.transactionIsDone? 'success' : 'info')
            },
            async getQR() {
                this.state.loading = true
                console.log(this.relatedCoin);
                const res = await this.$axios(`/wallets/customer/wallet-address?relatedCoin=${this.relatedCoin[0]}`).catch(()=>{this.close()})
                if(res){
                    this.address = res.baseDTO.address
                    this.qrCode = res.baseDTO.qrCode
                }
            }
        },
        mounted() {
            this.getQR()
        }
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
        flex-direction: column;
        overflow: auto;
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
        max-width: 700px;
        padding: 20px 35px;
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
        margin: 20px 0;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-body div:last-of-type {
        margin: 30px 0;
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
        flex-wrap: wrap;
    }

    .normal-btn {
        color: var(--font-dark);
        max-width: 150px;
        height: 40px;
        margin: 10px 5px 0;
        display: flex;
        padding-right: 20px;
        display: flex;
        justify-content: center;
    }

    .normal-btn img {
        margin-left: 10px;
    }

</style>

<style scoped>
    /* @media screen and (max-width:768px){
        .modal-backdrop{
            position: absolute;
            width: 100vw;
            height: 100vh;
        }
        .modal{
            /* position: absolute; */
            /* top: 10px; */
            /* transform: translateY(0%); */
        /* } */
    /* } */
</style>
