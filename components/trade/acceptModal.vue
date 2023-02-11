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
             
                <section class="modal-body" style="direction: rtl">
                    <img width="150px" src="../../assets/warning.svg">
                 
                </section>
                <footer class="modal-btn">
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "acceptModal",
        data() {
            return {
                amount: '',
                twostepcode: '',
                walletaddress: '0x40beE7b4e50d756C57B4e59693905D36B9cCD1B6',
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            remove(){
                this.$emit('remove');
                this.$emit('close');
            }
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
        margin-top: 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-body div {
        margin: 20px 0;
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
