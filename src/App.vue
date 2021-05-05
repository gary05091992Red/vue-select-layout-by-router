<template>
    <div id="app">
        <loading v-if="isLoadingRes"></loading>
        <component :is="layout"></component>
    </div>
</template>

<script>
import loading from '@/components/loading.vue'
import { mapGetters } from "vuex";
import simpleLayout from '@/components/layout/simpleLayout.vue'
import mainLayout from '@/components/layout/mainLayout.vue'
export default {
    components: {
        simpleLayout,
        mainLayout,
        loading
    },
    computed: {
        layout() {
            return this.$route.meta.layout
        },
        ...mapGetters(['isLoadingRes'])
    },
    watch: {
        '$route'(to) {
            if(to.path.split('/')[1] !== 'Overview'){
                sessionStorage.removeItem('policyArr');
            }

            let backPart = document.getElementById('continer');
            if(backPart){
                 document.getElementById('continer').scrollTop = 0;
            }
            
        }
    },
    methods: {
    

    },
    mounted: async function() {
    },

};

</script>
<style lang="css" src="./scss/normalize.css"></style>  
<style lang="scss" src="@/scss/checkbox.scss">
</style>
<style lang="scss" src="@/scss/font.scss">
</style>
<style lang="scss">
#app {
    position: relative;
    // overflow: hidden;
    font-family: "微軟正黑體", "-apple-system", "BlinkMacSystemFont", "Segoe UI",
        "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif",
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
    color: #141414;
    // line-height: 1.5;
}
* {
    box-sizing: border-box;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.app-wrap {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
}

.languageBox {
    display: flex;
    align-items: center;
    position: absolute;
    top: 4px;
    right: 40px;
    cursor: pointer;
    span {
        cursor: pointer;
    }
    button {
        width: 80px;
        height: 30px;
        margin-left: 8px;
        vertical-align: -webkit-baseline-middle;
        cursor: pointer;
    }
}

ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.hideScroll{
    overflow: hidden;
}
</style>
