<template>
    <div class="forecast">
        <DailyForecastItem
                class="forecast-item"
                v-for="item in forecasts"
                :day-of-week="item.dayOfWeek"
                :date="item.date"
                :cond-code="item.condCode"
                :cond-txt="item.condTxt"
                :tmp-max="item.tmpMax"
                :tmp-min="item.tmpMin"/>
    </div>

</template>

<script>

    import DailyForecastItem from './DailyForecastItem.vue'

    export default {
        name: "DailyForecast",
        components: {DailyForecastItem},
        props: {
            forecasts: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped lang="scss">

    .forecast {
        display: flex;
        flex-direction: row;
        background: rgba(0, 0, 0, .26);
        border-radius: 16px;
        .forecast-item{
            flex: 1;
        }
    }
</style> 