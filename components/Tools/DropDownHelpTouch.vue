<template>
    <div class="main-dropbox">
        <div class="drop_btn" @click.prevent="dropshow">
            <svg :style="{fill: [name.indexOf(route)>-1 ? '#ffbf00' : '' ],transform: 'rotate(' + deg + 'deg)'}"
                 class="arrow" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="8px"
                 viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </svg>
            {{dropname}}
            <svg :style="{fill: [name.indexOf(route)>-1 ? '#ffbf00' : '' ],transform: 'rotate(-' + deg + 'deg)'}"
                 class="arrow" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="8px"
                 viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </svg>
        </div>
        <div v-show="show" class="dropbox1">
            <div v-for="(content,index) in contents"
                 :key="index"
                 class="dropbox-contents"
                 @click="Route(content.link)">
                <div class="contents">{{content.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelpDropDownTouch",
        props: ['route', 'contents', 'dropname', 'dropid', 'name'],
        data() {
            return {
                deg: 90,
                show: 0
            }
        },
        methods: {
            Route(e) {
                this.$router.push('/' + e)
            },
            dropshow() {
                if (!this.show) {
                    this.show = true
                    this.deg = 0
                } else {
                    this.show = false
                    this.deg = 90
                }
            }
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


    .dropbox1 {
        color: #ffffff;
        text-align: right;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        transition: 0.5s;
    }

    .dropbox-contents {
        padding: 8px 8px;
        padding-left: 10px;
        transition: 0.25s;
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .contents {
        width: max-content;
        border-bottom: solid #ffffff10 2px;
    }

    .arrow {
        fill: white;
        margin: 0 10px;
        transition: 0.25s;
    }


    .selected {
        color: #ffbf00;
        border-bottom: #ffbf00 solid 2px;
        cursor: default;
    }

    .btn-touch {
        color: #ffbf00;
    }

    .arrow-touch {
        transform: rotate(-180deg);
        fill: #ffbf00;
    }
</style>