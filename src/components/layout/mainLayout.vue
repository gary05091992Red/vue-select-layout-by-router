<template>
    <div id="dashboard">
        <div class="app-wrap" ref="appWrap">
            <navbar></navbar>
            <div class="frame">
                <div class="slider-bar" :class="menuOpenRes?'slider-bar--active':''">
                    <menubar></menubar>
                </div>
                <div class="sliderMask" :class="menuOpenRes?'sliderMask--active':''"></div>
                <div class="continer" id="continer" :class="menuOpenRes?'continer--active':''">
                    <div class="wrap layout__wrap" ref="layout">
                        <router-view />
                    </div>
                    <div class="backStopPlace" ref="backStopPlace">
                        <div class="backToTop" ref="backItem"></div>
                        <div
                            id="backToTop"
                            class="backToTop"
                            :class="[showBackToTop?'backToTop--active':'' , scrollToFooter?'backToTop--footer':'']"
                            @click="backToTop"
                        ></div>
                    </div>
                    <PAIfooter></PAIfooter>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import navbar from "@/components/navbar.vue"
import menubar from "@/components/menubar.vue"
import PAIfooter from '@/components/Footer.vue'
export default {
    components: {
        navbar,
        menubar,
        PAIfooter
    },
    data() {
        return {
            scrollTop: 0,
            showBackToTop: false,
            scrollToFooter: false,
            backItem: 0
        }
    },
    computed: {

        ...mapGetters(["menuOpenRes"])
    },
    methods: {
        backToTop: function() {
            let backPart = document.getElementById('continer');
            if (backPart) {
                document.getElementById('continer').scrollTo({ top: 0, behavior: "smooth" });
            }
        },
        scrollToTop: function() {
            let scrollPart = document.getElementById('continer');
            let scrollTop =
                scrollPart.pageYOffset ||
                scrollPart.scrollTop;
         
            this.scrollTop = scrollTop;
            if (this.scrollTop > 200) {
                this.showBackToTop = true
            } else {
                this.showBackToTop = false
            }
            let backItem = this.$refs['backItem'].offsetTop;
            this.backItem = backItem;
            let backPosition = this.$refs['backStopPlace'].offsetTop;
            if (backPosition < this.backItem + scrollTop - 50) {
                this.scrollToFooter = true
            }
            else {
                this.scrollToFooter = false
            }

        },
    },

    mounted() {
        let backPart = document.getElementById('continer');
        backPart.addEventListener("scroll", this.scrollToTop);

    },
    destroyed() {

    }

};

</script>

<style lang="scss" src="@/scss/RWDlayout.scss">
</style>
<style lang="scss">
.testSt {
    display: block;
    width: 30px;
    height: 30px;
    background-color: #f00;
    position: sticky;
    top: 100%;
    right: 0;
}
#backToTop {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background-image: url("../../assets/img/iconNormal/circleArrow.svg");
}
.backToTop {
    opacity: 0;
    // transition: 0.5s;
    position: fixed;
    right: 20px;
    bottom: 10%;
    z-index: 10;
}
.backStopPlace {
    position: relative;
}
.backToTop--footer {
    position: absolute;
    right: 20px;
    bottom: -20px;
    // margin-top: 20px;;
}
.backToTop--active {
    opacity: 1;
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
.frame {
    display: flex;
    height: calc(100% - 60px);
    position: absolute;
    left: 0px;
    right: 0px;
    .sliderMask {
        width: 100vw;
        height: 100vh;
        position: absolute;
        transition: 0.5s;
        pointer-events: none;
        z-index: 1;
    }
    .sliderMask--active {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.9);
        position: absolute;
        z-index: 9;
    }
    .slider-bar {
        width: 100%;
        height: 100%;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.09);
        position: absolute;
        left: -100%;
        transition: 0.5s;
        z-index: 10;
    }
    .slider-bar--active {
        width: 100%;
        left: 0;
    }
    .continer {
        width: 100%;
        overflow: auto;
        transition: 0.5s;
        .wrap {
            min-height: 600px;
            box-sizing: border-box;
            display: flex;
        }
    }
    .continer--active {
        width: 100%;
    }
}
@media screen and (min-width: 768px) {
    .frame {
        .slider-bar {
            width: 100%;
            max-width: 280px;
        }
        .slider-bar--active {
            width: 100%;
            max-width: 280px;
            left: 0;
        }
    }
}
@media screen and (min-width: 1280px) {
    .frame {
        display: flex;
        height: calc(100% - 72px);
        position: absolute;
        left: 0px;
        right: 0px;
        .sliderMask {
            display: none;
        }
        .slider-bar {
            width: 280px;
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.09);
            position: relative;
            left: 0%;
            transition: 0.5s;
        }
        .slider-bar--active {
            width: 280px;
            left: 0;
        }
        .continer {
            width: calc(100% - 280px);
            overflow: auto;
            transition: 0.5s;
            .wrap {
                box-sizing: border-box;
                width: 100%;
                display: flex;
            }
        }
        .continer--active {
            width: calc(100% - 280px);
        }
    }
    .backToTop {
        opacity: 0;
        // transition: 0.5s;
        position: fixed;
        right: 36px;
        bottom: 10%;
        z-index: 10;
    }
    .backToTop--footer {
        position: absolute;
        right: 20px;
        bottom: -20px;
        // margin-top: 20px;;
    }
}
</style>
