<template>
    <div class="weather">

        <div class="now-city">
            <div class="now-weather-icon">
                <img :src="nowIcon">
            </div>

            <div class="tmp-box">
                <div class="temperature">{{tmp }}°</div>
                <div class="location">
                    <div class="cond-txt">{{condTxt}}</div>
                    <div class="city">
                        <div class="city-img"></div>
                        <span class="city-name">{{location}}</span>
                    </div>
                </div>
            </div>

            <div class="aqi-box" :class="aqiClass">
                <span>空气质量 {{qlty}}</span>
            </div>
        </div>
        <div class="now-other">
            <NowOtherItem
                    class="now-other-item"
                    v-for="item in others"
                    :icon="item.icon"
                    :title="item.title"
                    :value="item.value"/>
        </div>

    </div>

</template>

<script>
    import {weatherImg} from './Utils.js'
    import NowOtherItem from './NowOtherItem.vue'

    export default {
        name: "NowCondition",
        components: {NowOtherItem},
        props: {
            location: {
                type: String,
                default: ''
            },
            tmp: {
                type: String,
                default: ''
            },
            condCode: {
                type: String,
                default: ''
            },
            condTxt: {
                type: String,
                default: ''
            },
            aqi: {
                type: String,
                default: ''
            },
            qlty: {
                type: String,
                default: ''
            },
            others: {
                type: Array,
                default: []
            }


        },
        computed: {
            nowIcon: function () {
                return weatherImg(this.condCode)
            },
            aqiClass: function () {
                if (this.aqi >= 0 && this.aqi <= 50) {
                    return 'excellent';
                } else if (this.aqi >= 51 && this.aqi <= 100) {
                    return 'good';
                } else if (this.aqi >= 101 && this.aqi <= 150) {
                    return 'mild';
                } else if (this.aqi >= 151 && this.aqi <= 200) {
                    return 'moderate';
                } else if (this.aqi >= 201 && this.aqi <= 300) {
                    return 'severe';
                } else if (this.aqi > 300) {
                    return 'heavy';
                }

            }
        }

    }
</script>

<style scoped lang="scss">

    .weather {
        flex: 1;
        display: flex;
        flex-direction: column;

        .now-city {
            flex: 5;
            display: flex;
            flex-direction: column;

            .now-weather-icon {
                img {
                    height: 140px;
                    width: 140px;
                }
            }

            .tmp-box {
                display: flex;
                flex-direction: row;
                color: white;
                margin-top: 80px;

                .temperature {
                    font-size: 200px;
                    line-height: 181px;
                }

                .location {
                    margin-left: 15px;
                    margin-top: 30px;
                    font-size: 40px;
                    display: flex;
                    flex-direction: column;
                }

                .city {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-top: 30px;

                    .city-img {
                        height: 24px;
                        width: 25px;
                        background: url("../../assets/images/ic_weather_route.png") center no-repeat;
                        background-size: contain;
                    }

                    .city-name {
                        margin-left: 11px;
                    }
                }
            }

            .aqi-box {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 32px;
                width: 205px;
                height: 64px;

            }

            .excellent {
                background-color: #7ED321;
            }

            .good {
                background-color: #FFB000;
            }

            .mild {
                background-color: #966700;
            }

            .moderate {
                background-color: #961C00;
            }

            .severe {
                background-color: #541000;
            }

            .heavy {
                background-color: #280902;
            }
        }

        .now-other {
            flex: 2;
            display: flex;
            flex-direction: row;
            margin-top: 32px;

            .now-other-item {
                flex: 1;
                margin-right: 32px;
            }
        }
    }
</style>