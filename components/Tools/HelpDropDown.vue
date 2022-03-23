<template>
    <div class="main-dropbox" :id="dropid">
        <div :style="{color: primary}" class="drop_btn" @mouseover="toggle()" :id="dropid">
            {{dropname}}
            <img class="arrow" :style="{transform: 'rotate('+ deg +'deg)'}" src="../../assets/icon/ArrowLeft.svg">
        </div>
        <div v-show="dropshow" class="dropbox" :id="dropid">
            <div class="dropbox1" :id="dropid">
                <div v-for="(content,index) in contents"
                     :key="index"
                     class="dropbox-contents"
                     @click="Route(content.link)"
                     :id="dropid">
                    <div class="contents" :id="dropid">{{content.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelpDropDown",
        props: ['route', 'contents', 'dropname', 'dropid'],
        data() {
            return {
                dropshow: false,
                deg: -90,
                primary: '',
            }
        },
        methods: {
            toggle() {
                this.dropshow = true
                this.deg = 90
            },
            Route(e) {
                this.$router.push(e)
            }
        },
        created: function () {
            var vm = this;
            document.addEventListener('mouseover', (e) => {
                if (e.target.id !== this.dropid) {
                    vm.dropshow = false;
                    vm.deg = -90;
                    vm.primary = ''
                } else {
                    if (vm.dropshow) {
                        vm.primary = '#ffdb00'
                    } else {
                        vm.primary = ''
                    }
                }
            });
        },
    }
</script>

<style scoped>
    .main-dropbox {
        position: relative;
    }

    .drop_btn {
        cursor: pointer;
    }

    .drop_btn:hover {
        color: #F8B200;
    }

    .drop_btn a {
        color: white;
    }

    .dropbox {
        padding-top: 19px;
        font-size: 14px;
        position: absolute;
        z-index: 15;
        display: block;
        right: 50%;
        transform: translate(50%, 0)
    }
    .dropbox1 {
        color: #000000;
        background-color: white;
        text-align: right;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        transition: 0.5s;
        z-index: 15;
    }

    .dropbox-contents {
        padding: 8px 8px;
        padding-left: 10px;
        transition: 0.3s;
        cursor: pointer;
        position: relative;

    }

    .contents {
        width: max-content;
    }

    .dropbox-contents:hover {
        background-color: #F8B20030;
    }

    .dropbox-contents::after {
        content: '';
        position: absolute;
        margin-top: 8px;
        right: 0;
        background-color: #000000;
        height: 2px;
        width: 100%;
        opacity: 0.1;
    }

    .arrow {
        margin-right: 5px;
        transition: 0.25s;
    }


    .selected {
        color: #f8b200;
        border-bottom: #f8b200 solid 2px;
        cursor: default;
    }
</style>