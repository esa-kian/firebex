<template>
    <div class="main-dropbox" :id="dropid">
        <div :style="{color: primary}" class="drop_btn" @mouseover="toggle()" :dropid="dropid">
            بازار ها
            <svg class="arrow" :style="{transform: 'rotate('+ deg +'deg)',fill:primary}" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="8px" viewBox="0 0 292.362 292.362" :id="dropid"
                 style="enable-background:new 0 0 292.362 292.362;"
                 xml:space="preserve">
                <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </svg>
        </div>
        <div v-show="dropshow" class="dropbox" :id="dropid">
            <div class="dropbox1" :id="dropid">
                <div class="dropbox-contents" @mouseover="[dropshow1=!dropshow1,dropshow2=false,deg1+=180,deg2=0]">
                    ریال -- IRR
                    <img class="arrow-sub" :style="{transform: 'rotate('+ deg1 +'deg)'}" :id="dropid"
                         src="../../assets/icon/ArrowLeftblack.svg">
                </div>
                <div v-show="dropshow1" class="dropbox-sub" :id="dropid">
                    <ul>
                        <li>بیتکوین - ریال</li>
                        <li>اتریوم - ریال</li>
                        <li>اتریوم - ریال</li>
                        <li>اتریوم - ریال</li>
                        <li>اتریوم - ریال</li>
                    </ul>
                </div>
                <div class="dropbox-contents" @mouseover="[dropshow2=!dropshow2,dropshow1=false,deg2+=180,deg1=0]"
                     :id="dropid">
                    تتر - USDT
                    <img class="arrow-sub" :style="{transform: 'rotate('+ deg2 +'deg)'}" :id="dropid"
                         src="../../assets/icon/ArrowLeftblack.svg">
                </div>
                <div v-show="dropshow2" class="dropbox-sub" :id="dropid">
                    <ul>
                        <li>بیتکوین - تتر</li>
                        <li>اتریوم - تتر</li>
                        <li>اتریوم - تتر</li>
                        <li>اتریوم - تتر</li>
                        <li>اتریوم - تتر</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dropdown",
        props: ['route', 'dropid'],
        data() {
            return {
                dropshow: false,
                dropshow1: false,
                dropshow2: false,
                deg: 0,
                deg1: 0,
                deg2: 0,
                primary: '',
            }
        },
        methods: {
            toggle() {
                this.dropshow = true
                this.dropshow1 = false
                this.dropshow2 = false
                this.deg = 180
                this.deg1 = 0;
                this.deg2 = 0;
            }
        },
        created: function () {
            var vm = this;
            document.addEventListener('mouseover', (e) => {
                if ((e.target.className !== 'drop_btn') && (e.target.className !== 'dropbox-contents')) {
                    vm.dropshow = false;
                    vm.dropshow1 = false;
                    vm.dropshow2 = false;
                    vm.deg = 0;
                    vm.deg1 = 0;
                    vm.deg2 = 0;
                    vm.primary = ''
                } else {
                    if (vm.dropshow) {
                        vm.primary = '#ffdb00'
                    } else {
                        vm.primary = ''
                    }
                }
            });
            // document.addEventListener('mouseover', function (e) {
            //     console.log(e.target.id)
            // })
        },
    }
</script>

<style scoped>
    .drop_btn {
        cursor: pointer;
    }

    .drop_btn:hover {
        color: #ffbf00;
    }

    .drop_btn a {
        color: white;
    }

    .dropbox {
        margin-top: 5px;
        width: 110px;
        color: #000000;
        font-size: 14px;
        position: absolute;
        display: block;
        background-color: white;
        text-align: right;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        transition: 0.5s;
        z-index: 5;
    }

    .dropbox-contents {
        padding: 8px 8px;
        transition: 0.3s;
    }

    .dropbox-contents:hover {
        background-color: #ffbf0030;
    }

    .dropbox-contents:before {
        content: url("/ArrowLeft.svg");
    }

    .dropbox-contents:first-child::after {
        content: '';
        position: absolute;
        margin-top: 29px;
        right: 0;
        background-color: #000000;
        height: 2px;
        width: 100%;
        opacity: 0.1;
    }

    .dropbox-sub {
        position: absolute;
        background-color: white;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
        border-radius: 5px;
        transition: 0.25s;
        width: 120px;
        margin-right: 115px;
        margin-top: -38px;
        z-index: 5;
    }

    .dropbox ul {
        list-style-type: none;
        font-size: 14px;
    }

    .dropbox li {
        padding: 10px 12px;
        transition: 0.3s;
    }

    .dropbox li:hover {
        background-color: #ffbf0030;
    }

    .dropbox li::after {
        content: '';
        position: absolute;
        margin-top: 31px;
        right: 0;
        background-color: #000000;
        height: 2px;
        width: 100%;
        opacity: 0.1;
    }

    .dropbox li:last-child::after {
        content: none;
    }

    .arrow {
        margin-right: 5px;
        transition: 0.25s;
        fill: white;
    }

    .arrow:hover {
        fill: #ffbf00;
    }

    .drop_btn:hover + .arrow {
        fill: #ffbf00;
    }

    .arrow-sub {
        position: relative;
        right: 10px;
        transition: 0.25s;
    }

    .selected {
        color: #f8b200;
        border-bottom: #f8b200 solid 2px;
        cursor: default;
    }
</style>