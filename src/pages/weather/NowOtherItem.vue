<template>
    <div class="content">
        <img :src="getIcon">
        <div class="title">{{title}}</div>
        <div class="value">{{value}}</div>
    </div>
</template>

<script>
    import {nameOfImg} from "./Utils.js";

    export default {
        name: "NowOther",
        props: {
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            }
        },
        computed: {
            getIcon: function () {
                return nameOfImg(this.icon);
            }
        }
    }
</script>

<style scoped lang="scss">

    .content {
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        background: rgba(0, 0, 0, .26);

        justify-content: center;
        align-items: center;

        .title {
            font-size: 26px;
            color: rgba(255,255,255,.5);
            margin-top: 20px;
        }

        .value {
            font-size: 32px;
            color: white;
            margin-top: 10px;
        }

    }
</style>