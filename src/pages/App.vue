<template>
    <div class="weather-content">
        <WeatherNow class="now-condition"
                    :location='nowCond.location'
                    :tmp='nowCond.tmp'
                    :cond-code='nowCond.condCode'
                    :cond-txt='nowCond.condTxt'
                    :aqi='nowCond.aqi'
                    :qlty='nowCond.qlty'
                    :others="nowOthers"/>

        <div class="forecast-air-box">
            <DailyForecast class="daily-forecast" :forecasts="forecasts"/>
            <AirNow class="air-now" :airs="airs"/>
        </div>
    </div>
</template>


<script>

    import WeatherNow from './weather/WeatherNow.vue';
    import DailyForecast from './weather/DailyForecast.vue';
    import AirNow from './weather/AirNow.vue';
    import {WeatherData} from './weather/MockApi';
    import {dayOfWeek} from './weather/Utils';
    import moment from 'moment';

    export default {
        name: "app",
        components: {WeatherNow, DailyForecast, AirNow},
        data() {
            return {
                nowCond: {},
                nowOthers: [],
                forecasts: [],
                airs: []
            }
        },


        mounted() {
            this.initData()

        },
        methods: {
            fetchData: function () {
                const options = {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Consumer-Custom-ID': 'roomis-k12-own'
                    }
                };
                return fetch('http://console.qa.roomis.com.cn/api/v2/weather', options)
                    .then(response => response.json())
            },

            today: function (date) {
                return moment(date).isSame(moment().format('YYYY-MM-DD'))
            },

            day: function () {
                let nowHour = moment().hour();
                return nowHour > 6 && nowHour < 18
            },

            initData: function () {

                let weather = WeatherData.payload.normalWeatherDto.HeWeather6[0];
                let air = WeatherData.payload.airDto.HeWeather6[0];
                this.nowCond = {
                    location: weather.basic.location,
                    tmp: weather.now.tmp,
                    condTxt: weather.now.cond_txt,
                    condCode: weather.now.cond_code,
                    aqi: air.air_now_city.aqi,
                    qlty: air.air_now_city.qlty
                };

                let uv = '';

                if (weather.daily_forecast) {
                    weather.daily_forecast.forEach((item) => {
                        let date = moment(item.date);
                        let dateFormat = date.format('MM/DD');
                        let isToDay = this.today(date);

                        console.log(date.isoWeekday());
                        let day = isToDay ? dayOfWeek[0] : dayOfWeek[date.isoWeekday() - 1];

                        if (isToDay) {
                            uv = item.uv_index
                        }
                        this.forecasts.push({
                            date: dateFormat,
                            dayOfWeek: day,
                            tmpMax: item.tmp_max,
                            tmpMin: item.tmp_min,
                            condCode: this.day ? item.cond_code_d : item.cond_code_n,
                            condTxt: this.day ? item.cond_txt_d : item.cond_txt_n
                        })
                    });
                }
                this.nowOthers.push({
                    icon: 'ic_weather_wind.png',
                    title: weather.now.wind_dir + '风',
                    value: weather.now.wind_sc + '级'
                });
                this.nowOthers.push({
                    icon: 'ic_weather_humidity.png',
                    title: '湿度',
                    value: weather.now.hum + '%'
                });
                this.nowOthers.push({
                    icon: 'ic_weather_small_sun.png',
                    title: 'UV',
                    value: uv
                });

                this.airs.push({
                    title: 'CO',
                    value: air.air_now_city.co,
                    unit: 'ug/m³'
                });
                this.airs.push({
                    title: 'SO<sub>2</sub>',
                    value: air.air_now_city.so2,
                    unit: 'ug/m³'
                });
                this.airs.push({
                    title: 'PM<sub>10</sub>',
                    value: air.air_now_city.pm10,
                    unit: 'ug/m³'
                });
                this.airs.push({
                    title: 'PM<sub>25</sub>',
                    value: air.air_now_city.pm25,
                    unit: 'ug/m³'
                })

            }
        }

    }
</script>

<style lang="scss" scoped>

    .weather-content {
        padding: 32px;
        display: flex;
        flex: 1;
        flex-direction: row;
        background: url('../assets/images/bg_fine.png') center no-repeat;


        .now-condition {
            flex: 2;
            display: flex;
            flex-direction: column;
        }

        .forecast-air-box {
            flex: 3;
            display: flex;
            flex-direction: column;

            .daily-forecast {
                flex: 5;
            }

            .air-now {
                flex: 2;
                margin-top: 32px;
            }
        }

    }
</style>