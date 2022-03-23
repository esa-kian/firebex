<template>
    <div class="main-dropbox">
        <div class="drop_btn">
            بازار ها
            <svg :style="{fill: name.includes(route) ? 'var(--main-color)' : '' }" class="arrow" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="8px"
                 viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </svg>
        </div>
        <div class="dropbox" :style="{paddingTop: name.includes(route)? '23px' : '' }">
            <div class="dropbox1">
                <div class="dropbox-contents">
                    <div class="contents">
                        <div class="contents-name">
                            <a>تومان</a>
                            <a>IRT</a>
                        </div>
                        <svg class="arrow-sub" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="8px" viewBox="0 0 292.362 292.362"
                             style="enable-background:new 0 0 292.362 292.362;"
                             xml:space="preserve">
                        <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                        C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                        s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
                    </svg>
                    </div>
                    <div class="dropbox-sub">
                        <div class="dropbox-sub1">
                            <ul>
                                <li v-for="market in tomanTable" :key="market.marketType"
                                    @click="$router.push('/trade/TOMAN/'+market.destinationCoin)">
                                    {{$coinLabel[market.destinationCoin]}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="dropbox-contents">
                    <div class="contents">
                        <div class="contents-name">
                            <a>تتر</a>
                            <a>USDT</a>
                        </div>
                        <svg class="arrow-sub" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="8px"
                             viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;"
                             xml:space="preserve">
                        <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                        C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                        s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
                    </svg>
                    </div>
                    <div class="dropbox-sub">
                        <div class="dropbox-sub1">
                            <ul>
                                <li v-for="market in tetherTable" :key="market.marketType"
                                    @click="$router.push('/trade/TETHER/'+market.destinationCoin)">
                                    {{$coinLabel[market.destinationCoin]}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DropdownHover",
        props: ['route', 'name'],
        data() {
            return {
                tomanTable: [],
                tetherTable: [],
            }
        },
        methods: {
            async getMarkets() {
                const res = await this.$axios.get('/markets?isActive=true')
                this.tomanTable = res.content.filter(i => i.sourceCoin === 'TOMAN')
                this.tetherTable = res.content.filter(i => i.sourceCoin === 'TETHER')
            },
        },
        created() {
            this.getMarkets()
        }
    }
</script>

<style scoped>
    .drop_btn {
        cursor: pointer;
    }

    .drop_btn:hover {
        color: var(--main-color);
    }

    .drop_btn a {
        color: var(--font-dark);
    }

    .dropbox {
        padding-top: 19px;
        font-size: 14px;
        position: absolute;
        z-index: 15;
        display: none;
        right: 50%;
        transform: translate(50%, 0)
    }

    .dropbox1 {
        color: var(--font-light);
        background-color: var(--drop-background-light);
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
        display: flex;
        justify-content: space-between;
    }

    .contents {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .contents-name {
        width: 65px;
        display: flex;
        justify-content: space-between;
    }

    ul {
        list-style-type: none;
        font-size: 14px;
        width: max-content;
    }

    li {
        padding: 10px 12px;
        transition: 0.3s;
        position: relative;
    }

    li:hover {
        background-color: var(--hover-light);
    }

    li::after {
        content: '';
        position: absolute;
        margin-top: 31px;
        right: 0;
        background-color: var(--border-light);
        height: 2px;
        width: 100%;
        opacity: 0.5;
    }

    li:last-child::after {
        content: none;
    }

    .arrow {
        margin-right: 5px;
        transition: 0.25s;
        /*fill: var(--font-light);*/
        fill: currentColor;
    }

    .drop_btn:hover .arrow {
        fill: var(--main-color);
    }

    .dropbox-contents:first-child::after {
        content: '';
        position: absolute;
        margin-top: 29px;
        right: 0;
        background-color: var(--border-light);
        height: 2px;
        width: 100%;
        opacity: 0.5;
    }

    .dropbox-sub {
        padding-right: 4px;
        font-size: 14px;
        position: absolute;
        z-index: 5;
        display: none;
        right: 100%;
        top: -14px;
    }

    .dropbox-sub1 {
        color: var(--font-light);
        background-color: var(--drop-background-light);
        text-align: right;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        transition: 0.5s;
        z-index: 5;
    }

    .arrow-sub {
        margin-right: 10px;
        transition: 0.25s;
        transform: rotate(90deg);
        /*fill: var(--font-light);*/
        fill: currentColor;
    }

    .dropbox-contents:hover {
        background-color: var(--hover-light);
    }

    .dropbox-contents:hover .arrow-sub {
        transform: rotate(-90deg);
        /*fill: var(--font-light);*/
        fill: currentColor;
    }

    .dropbox-contents:hover .dropbox-sub {
        display: block;
    }

    .selected {
        color: var(--main-color);
        border-bottom: var(--main-color) solid 2px;
        cursor: default;
    }

    .main-dropbox:hover .dropbox {
        display: block;
    }

    .main-dropbox:hover .drop_btn {
        color: var(--main-color);
    }

    .main-dropbox:hover .arrow {
        transform: rotate(-180deg);
    }
</style>