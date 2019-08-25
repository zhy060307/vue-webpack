<template>
    <div class="weather-content">
        <div class="content">
            <div content="now-box">
                <NowCondition
                        :location='nowCond.location'
                        :tmp='nowCond.tmp'
                        :cond-code='nowCond.condCode'
                        :cond-txt='nowCond.condTxt'
                        :aqi='nowCond.aqi'
                        :qlty='nowCond.qlty'/>


            </div>
        </div>

    </div>
</template>


<script>

    import NowCondition from './weather/NowCondition.vue'

    export default {
        name: "app",
        components: {NowCondition},
        data() {
            return {
                nowCond: {
                    location: '西安',
                    tmp: '30',
                    condTxt: '多云',
                    condCode: '101',
                    aqi: '85',
                    qlty: '良'
                }
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
        display: flex;
        flex: 1;
        flex-direction: row;
        background: url('../assets/images/bg_fine.png') center no-repeat;


        .content {

            display: flex;
            flex-direction: row;
            padding: 32px;

        }

    }
</style>