<template>
    <div class="content">
        <div class="title" v-html="title"></div>
        <div class="value">{{value}}</div>
        <div class="unit">({{unit}})</div>
    </div>

</template>

<script>
    export default {
        name: "AirNow",
        props: {
            title: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            unit: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
            font-size: 40px;
            color: rgba(255,255,255,.5);
            sub {
                font-size: 20px;
            }
        }

        .value {
            margin-top: 6px;
            font-size: 40px;
            font-weight: bold;
            color: white;
        }

        .unit {
            margin-top: 6px;
            font-size: 26px;
            color: rgba(255,255,255,.5);
        }
    }
</style>