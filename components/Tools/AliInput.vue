<template>
    <div class="main-input">
        <div class="input" :class="{invalid : errortext.length,valid : value,readonly:readonly}">
            <img @click.prevent="toggle('text')" v-show="value && type==='password' && type1==='password'"
                 src="../../assets/icon/eye.svg" alt="">
            <img @click.prevent="toggle('password')" v-show="value && type==='password' && type1==='text'"
                 src="../../assets/icon/hide.svg" alt="">
            <input @input="sendData" :value="value" :required="required" :type="type1" :name="name" :readonly="readonly">
            <label>{{faname}}</label>
            <div class="bottom-border"/>
        </div>
        <div class="invalid-alert">
            {{errortext}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "AliInput",
        props: ['type', 'name', 'errortext', 'faname','value','readonly','required'],
        data() {
            return {
                type1: this.type
            }
        },
        methods: {
            toggle(e) {
                this.type1 = e
            },
            sendData(e){
                this.$emit('update:value',e.target.value);
            }
        }

    }
</script>

<style scoped>
    .main-input {
        width: 100%;
        margin-top:30px;
    }

    .input {
        position: relative;
    }

    .input input {
        direction: ltr;
        text-align: left;
        width: 100%;
        padding: 10px 35px 10px 10px;
        font-size: 18px;
        color: var(--font-light);
        border-bottom: 1px solid var(--border-light);
        background: transparent;
    }

    .input .bottom-border {
        content: '';
        width: 0;
        height: 2px;
        background-color: var(--main-color);
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translate(50%);
        transition: 0.25s;
    }

    label {
        position: absolute;
        padding: 10px 0;
        top: 0;
        right: 0;
        font-size: 16px;
        color: var(--font-light);
        pointer-events: none;
        transition: 0.23s;
    }


    .input input:focus ~ label,
    .valid label {
        top: -20px;
        right: 0;
        font-size: 14px;
    }

    .input input:focus ~ .bottom-border,
    .valid .bottom-border {
        width: 100%;
    }

    .invalid {
        color: var(--main-red);
    }

    .invalid input,
    .invalid label {
        color:var(--main-red);
        border-color: var(--main-red) !important;
    }

    .readonly{
        opacity: 0.5;
    }

    .invalid .bottom-border {
        background-color: var(--main-red);
    }

    .invalid-alert {
        margin-top: 5px;
        font-size: 10px;
        transition: 0.3s;
        color: var(--main-red);
    }

    .input img {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 5;
        cursor: pointer;
    }
</style>