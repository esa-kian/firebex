<template>
    <div class="main-dropbox">
        <div class="drop_btn">
            {{dropname}}
            <svg :style="{fill: [name.indexOf(route)>-1 ? 'var(--main-color)' : '' ]}" class="arrow" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="8px"
                 viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </svg>
        </div>
        <div class="dropbox" :style="{paddingTop: [name.indexOf(route)>-1? '23px' : '' ]}">
            <div class="dropbox1">
                <div v-for="(content,index) in contents"
                     :key="index"
                     class="dropbox-contents"
                     @click="Route(content.link)">
                    <div class="contents">{{content.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelpDropDownHover",
        props: ['route', 'contents', 'dropname', 'dropid', 'name'],
        methods: {
            Route(e) {
                this.$router.push(e)
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

    .drop_btn:hover {
        color: var(--main-color);
    }

    .dropbox {
        padding-top: 19px;
        font-size: 14px;
        position: absolute;
        z-index: 15;
        display: none;
        right: 50%;
        transform: translate(50%, 0);
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
        transition: 0.25s;
        cursor: pointer;
        position: relative;

    }

    .contents {
        width: max-content;
    }

    .dropbox-contents:hover {
        background-color: var(--hover-light);
    }

    .dropbox-contents::after {
        content: '';
        position: absolute;
        margin-top: 8px;
        right: 0;
        background-color: var(--border-light);
        height: 2px;
        width: 100%;
        opacity: 0.1;
    }

    .arrow {
        fill: currentColor;
        margin-right: 5px;
        transition: 0.25s;
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