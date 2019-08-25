<template>
    <div class="air-now-content">
        <AirNowItem class="item"
                    v-for="item in airs"
                    :title="item.title"
                    :value="item.value"
                    :unit="item.unit"
        />
    </div>
</template>

<script>

    import AirNowItem from "./AirNowItem.vue"

    export default {
        name: "AirNow",
        components: {AirNowItem},
        props: {
            airs: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped lang="scss">
    .air-now-content{
        flex: 1;
        display: flex;
        flex-direction: row;

        border-radius: 20px;
        background: rgba(0, 0, 0, .26);
        .item{
            flex: 1;

        }
    }
</style>