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

    export default {
        name: "app",
        components: {WeatherNow, DailyForecast, AirNow},
        data() {
            return {
                nowCond: {
                    location: '西安',
                    tmp: '30',
                    condTxt: '多云',
                    condCode: '101',
                    aqi: '85',
                    qlty: '良'
                },
                nowOthers: [
                    {
                        icon: 'ic_weather_wind.png',
                        title: '东南风',
                        value: '1级'
                    },
                    {
                        icon: 'ic_weather_wind.png',
                        title: '东南风',
                        value: '1级'
                    }, {
                        icon: 'ic_weather_wind.png',
                        title: '东南风',
                        value: '1级'
                    }],
                forecasts: [
                    {
                        "condCode": "101",
                        "condTxt": "多云",
                        "date": "08/25",
                        "dayOfWeek": '星期一',
                        "tmpMax": '32',
                        "tmpMin": '23'
                    },
                    {
                        "condCode": "101",
                        "condTxt": "多云",
                        "date": "08/25",
                        "dayOfWeek": '星期二',
                        "tmpMax": '32',
                        "tmpMin": '23'
                    },
                    {
                        "condCode": "101",
                        "condTxt": "多云",
                        "date": "08/25",
                        "dayOfWeek": '星期三',
                        "tmpMax": '32',
                        "tmpMin": '23'
                    },
                    {
                        "condCode": "101",
                        "condTxt": "多云",
                        "date": "08/25",
                        "dayOfWeek": '星期四',
                        "tmpMax": '32',
                        "tmpMin": '23'
                    },
                    {
                        "condCode": "101",
                        "condTxt": "多云",
                        "date": "08/25",
                        "dayOfWeek": '星期五',
                        "tmpMax": '32',
                        "tmpMin": '23'
                    }, {
                        "condCode": "101",
                        "condTxt": "多云",
                        "date": "08/25",
                        "dayOfWeek": '星期六',
                        "tmpMax": '32',
                        "tmpMin": '23'
                    },
                    {
                        "condCode": "101",
                        "condTxt": "多云",
                        "date": "08/25",
                        "dayOfWeek": '星期七',
                        "tmpMax": '32',
                        "tmpMin": '23'
                    }
                ],
                airs: [
                    {
                        title: 'CO',
                        value: '63',
                        unit: 'ug/m³'
                    },
                    {
                        title: 'CO<sub>2</sub>',
                        value: '63',
                        unit: 'ug/m³'
                    },
                    {
                        title: 'PM<sub>10</sub>',
                        value: '102',
                        unit: 'ug/m³'
                    },
                    {
                        title: 'PM<sub>2.5</sub>',
                        value: '63',
                        unit: 'ug/m³'
                    }]
            }
        },


        mounted() {
            this.fetchData()
                .then(resp => {
                    console.log(resp);
                }).catch(error => {

            });

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