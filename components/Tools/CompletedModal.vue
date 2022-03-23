<template>
    <transition name="modal-fade">
        <div @click="close" id="modal" class="modal-backdrop" :style="{backgroundColor : [theme==='dark'? 'rgba(255,255,255,0.3)' : '' ]}">
            <div class="modal"
                 role="dialog"
                 aria-labelledby="WithdrawModal"
                 aria-describedby="WithdrawModal">
                <section class="modal-body" style="direction: rtl">
                    <img width="125px" src="../../assets/icons/completed.svg">
                    <div class="row justify-content-center" style="font-size: 16px;color:#000">
                        {{text}}
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "CompletedModal",
        props:['text','theme'],
        data() {
            return {
            }
        },
        methods: {
            close() {
                this.$emit('close');
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
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: blur(1px);
        color: var(--font-color);
    }
    .dark{
        background-color: rgba(255 , 255 , 255 , 0.3) !important;
    }

    .modal {
        position: relative;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: blur(1px);
        border-radius: 5px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        padding: 10px 10px;
    }

    .modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*margin-top: 20px;*/
        position: relative;
        background-color: white;
        border-radius: 5px;
        padding: 50px 30px 30px;
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


</style>
