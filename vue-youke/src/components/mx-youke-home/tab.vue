<template>
    <div id="headed">

        <ul class="tab">
            <li>
                <!-- @click="jump(index)
                     index: 切换颜色   代表切换的路由文件
                     :class="{'active_color': index==0}
                     当index等于0的时候显示第一个，index：1 切换排球

                -->
                <div class="body_bottom" @click="jump(0)" :class="{'active_color': index==0}">篮球</div>
            </li>
            <li>
                <div class="body_bottom" @click="jump(1)" :class="{'active_color': index==1}">排球</div>
            </li>
            <li>
                <div class="body_bottom" @click="jump(2)" :class="{'active_color': index==2}">足球</div>
            </li>
        </ul>
        <div class="line"></div>
        <!-- 是否滑动
             boxNum：代表有几个路由组件
             marginLeft：偏移量
        -->
        <div :class="{shift: isMove}" :style="{width: boxNum * 360 + 'px', marginLeft: marginLeft + 'px'}"
             @touchstart="start($event)"
             @touchmove="move($event)"
             @touchend="end($event)"
        >
            <!-- 三个路由组件放置的地方 -->
            <introduce></introduce>
            <agenda></agenda>
            <member></member>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped>

</style>