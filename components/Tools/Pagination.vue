<template>
    <div class="main-pagination row no-gutters justify-content-center">
        <div class="arrow" v-show="page != n">
            <svg @click="()=>this.$router.push({ name: 'PostIndex', params: { id : (Number(page)+1) }})" height="11px"
                 version="1.1" id="Capa_1" fill="var(--font-dark)"
                 xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px" viewBox="0 0 443.52 443.52"
                 style="enable-background:new 0 0 443.52 443.52;transform: rotate(180deg)" xml:space="preserve">
                <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                L143.492,221.863z"/>
            </svg>
        </div>
        <a class="etc-n" v-show="nums[nums.length-1] < n"
           @click="()=>this.$router.push({ name: 'PostIndex', params: { id : n} })">{{n}}</a>
        <a class="etc" v-show="nums[nums.length-1] < n">...</a>
        <div class="main">
            <div class="number" v-for="(num,index) in nums" :key="index">
                <a :style="{color:[(num==page)?'var(--btn-color1)':'']}"
                   @click="()=>$router.push({ name: 'PostIndex', params: { id : num} })">
                    {{num}}
                </a>
            </div>
        </div>
        <a class="etc" v-show="nums[0] > 1">...</a>
        <a class="etc-n" v-show="nums[0] > 1"
           @click="()=>this.$router.push({ name: 'PostIndex', params: { id : 1} })">1</a>
        <div class="arrow" v-show="page != 1">
            <svg @click="()=>this.$router.push({ name: 'PostIndex', params: { id : page-1} })" height="11px"
                 version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px" viewBox="0 0 443.52 443.52" fill="var(--font-dark)"
                 style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">
                <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                L143.492,221.863z"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            n: {
                type: Number,
                default: 1
            },
            page: {
                default: 1
            },
        },
        data() {
            return {
                nums: '',
            }
        },
        watch: {
            $route(to) {
                this.pages(to.params.id)
            }
        },
        created() {
            this.pages(this.page)
        },
        methods: {
            pages(e) {
                // var e = this.page;
                if (e < 4) {
                    this.number(0)
                } else if (e > (this.n - 3)) {
                    if (this.n <= 5) {
                        this.number(0)
                    } else {
                        this.number(this.n - 5)
                    }
                } else {
                    this.number(e - 3)
                }
                // if (e < 4) {
                //     for (let i = 0; i < 5; i++) {
                //         a[i] = i + 1;
                //         if (i + 1 >= this.n) {
                //             break;
                //         }
                //     }
                // } else if(e > (this.n-3)){
                //     for (let i = 0; i < 5; i++) {
                //         console.log(i)
                //         a[i] = this.n - (4-i+1)
                //     }
                //     this.num = a
                // }else{
                //     for (let i = 0; i < 5; i++) {
                //         a[i] = e-2 + i;
                //     }
                // }

            },
            number(e) {
                var a = [0];
                for (let i = 0; i < 5; i++) {
                    a[i] = e + i + 1;
                    if (e + i + 1 >= this.n) {
                        break;
                    }
                }
                this.nums = a
            }
        }
    }
</script>

<style scoped>
    .main-pagination {
        font-family: VistaDev,sans-serif;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .main {
        display: inline-flex;
        direction: ltr;
    }

    .number {
        margin: 5px;
        cursor: pointer;
    }
    .number a{
        color: var(--font-dark);
    }

    .number a:hover {
        color: ;
    }

    .etc {
        margin: -3px 10px 0 10px;
        cursor: pointer;
        color: var(--font-dark);
    }

    .etc-n {
        cursor: pointer;
        color: var(--font-dark);
    }

    .etc-n:hover {
        color: var(--btn-color1);
    }

    .arrow {
        margin: 0 10px
    }

    .arrow svg:hover {
        fill: var(--btn-color1);
        cursor: pointer;
    }

</style>