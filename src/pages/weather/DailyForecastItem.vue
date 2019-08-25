<template>
    <div class="daily_forecast_item">
        <div class="week_date">
            <div class="day_of_weak">{{dayOfWeek}}</div>
            <div class="date">{{date}}</div>
        </div>
        <div class="cond">
            <img :src="condImg">
            <div class="cond-txt">{{condTxt}}</div>
        </div>
        <div class="tmp">
            <div class="tmp-max">{{tmpMax}}°</div>
            <div class="tmp-min">{{tmpMin}}°</div>
        </div>
    </div>
</template>

<script>
    import {weatherImg} from './Utils.js'

    export default {
        name: "DailyForecastItem",
        props: {
            dayOfWeek: {
                type: String,
                default: ''
            },
            date: {
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
            tmpMax: {
                type: String,
                default: ''
            },
            tmpMin: {
                type: String,
                default: ''
            }
        },
        computed: {
            condImg: function () {
                return weatherImg(this.condCode)
            }
        }
    }
</script>

<style scoped lang="scss">
    .daily_forecast_item {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        justify-content: center;
        align-items: center;

        .week_date {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .day_of_weak {
                font-size: 32px;
                color: white;
            }

            .date {
                padding: 6px 16px;
                margin-top: 20px;
                border-radius: 24px;
                background: rgba(0, 0, 0, .19);
                color: white;
                opacity: 0.5;
                font-size: 28px;
                font-weight: bold;
            }
        }

        .cond {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                width: 100px;
                height: 100px;
            }
            .cond-txt{
                font-size: 28px;
                color: white;
            }
        }

        .tmp {
            flex: 1;
            display: flex;
            flex-direction: column;
            font-size: 40px;
            justify-content: center;
            align-items: center;

            .tmp-max {
                color: white;
            }

            .tmp-min {
                margin-top: 20px;
                color: rgba(255, 255, 255, .5);
            }
        }

    }
</style>