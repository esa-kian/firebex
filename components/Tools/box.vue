<template>
    <div class="Auth-box">
        <form>
            <div>
                <label for="ali">abdasg</label>
                <input @focus="show=100" @blur="'show=0'" type="text" name="ali">
                <div id="ali" :style="{width : show + '%'}"></div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "box",
data(){
            return{
                show:0
            }
}
    }
</script>

<style scoped >

    #ali{
    content: '';
    position: relative;
    display: block;
    background-color: gray;
    width: 100%;
    height: 2px;
    transition: 0.5s;
    }
</style>